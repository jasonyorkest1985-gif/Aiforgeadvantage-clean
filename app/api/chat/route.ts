import { NextResponse, type NextRequest } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";
export const maxDuration = 60;

const CALENDLY_URL =
  "https://calendly.com/ai-advantage-freelance-consulting/30min";
const PHONE = "(325) 389-1081";
const EMAIL = "Ai.advantage.freelance.consulting@gmail.com";

/** Loaded from `.env.local` in dev and Vercel env in production (OPENAI_API_KEY). */
const SYSTEM_PROMPT = `You are the AI Forge Strategist—a technical, direct advisor for AI Forge Advantage.

Primary offer: the $497 Profit Leak Audit. Frame it as a structured diagnostic: missed calls, slow follow-up, broken lead handoff, and revenue left on the table. Be professional and precise; do not offer discounts.

If the user asks for phone, email, or how to reach the team, give:
- ${PHONE}
- ${EMAIL}

Qualify briefly: what workflow is leaking revenue, who decides budget, and how soon they need relief. Before the conversation ends, aim to collect Name, Email, and Phone Number when natural.

Drive toward booking the free strategy session at ${CALENDLY_URL} after the audit value is clear.

Tone: calm, dashboard-clear, no hype—like a senior solutions architect.`;

/** Strip whitespace and optional wrapping quotes from env paste mistakes. */
function normalizeOpenAiKey(raw: string | undefined): string | undefined {
  if (raw == null) return undefined;
  let k = raw.trim();
  if (
    (k.startsWith('"') && k.endsWith('"')) ||
    (k.startsWith("'") && k.endsWith("'"))
  ) {
    k = k.slice(1, -1).trim();
  }
  return k.length > 0 ? k : undefined;
}

function isUserOrAssistantMessage(
  m: unknown,
): m is { role: "user" | "assistant"; content: string } {
  if (m === null || typeof m !== "object") return false;
  if (!("role" in m) || !("content" in m)) return false;
  const role = (m as { role: unknown }).role;
  const content = (m as { content: unknown }).content;
  return (
    (role === "user" || role === "assistant") && typeof content === "string"
  );
}

/**
 * GET: quick check that this deployment sees `OPENAI_API_KEY` (value is never returned).
 * Open `https://your-domain/api/chat` in a browser after deploy to debug env issues.
 */
export async function GET() {
  const apiKey = normalizeOpenAiKey(process.env.OPENAI_API_KEY);
  return NextResponse.json({
    openaiKeyConfigured: Boolean(apiKey),
    vercelEnv: process.env.VERCEL_ENV ?? null,
    nodeEnv: process.env.NODE_ENV,
    hint: apiKey
      ? "Key is present on the server. If chat still fails with 401, rotate the key at platform.openai.com and update Vercel."
      : "Server does not see OPENAI_API_KEY. In Vercel → Settings → Environment Variables, set OPENAI_API_KEY for Production (and Preview if you use preview URLs), Save, then Redeploy.",
  });
}

export async function POST(req: NextRequest) {
  const apiKey = normalizeOpenAiKey(process.env.OPENAI_API_KEY);
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Missing OPENAI_API_KEY. Add it to .env.local for local dev, or Vercel → Environment Variables for deploys.",
      },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const rawMessages =
    body &&
    typeof body === "object" &&
    "messages" in body &&
    Array.isArray((body as { messages: unknown }).messages)
      ? (body as { messages: unknown[] }).messages
      : [];

  const messages = rawMessages.filter(isUserOrAssistantMessage);

  const openai = new OpenAI({ apiKey });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.7,
    });

    const msg = response.choices[0]?.message;
    if (!msg) {
      return NextResponse.json(
        { error: "No assistant message in completion" },
        { status: 502 },
      );
    }

    return NextResponse.json(msg);
  } catch (err: unknown) {
    let message = err instanceof Error ? err.message : "OpenAI request failed";
    if (/401|incorrect api key|invalid_api_key/i.test(message)) {
      message = `${message} Create a new secret key at platform.openai.com, paste it into Vercel → OPENAI_API_KEY (no quotes) and .env.local, then redeploy.`;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
