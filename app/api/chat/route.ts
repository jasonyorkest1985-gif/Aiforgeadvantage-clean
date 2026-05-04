import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { parseStrategistMessages } from '@/lib/strategistMessages';

const MODEL = 'gpt-4o';
const TEMPERATURE = 0.7;

const SYSTEM_PROMPT = `You are the AI Forge Strategist for Dallas–Fort Worth (DFW) contractors.

PRODUCT: Sell the **$497 Profit Leak Audit** — one focused engagement that finds where money leaks before it scales.

CORE ANGLE — “GOOGLE AD WASTE”:
- Many contractors waste enormous budget on Google Ads. Frame this as a hidden **“Google Tax.”**
- Tell them straight: paying roughly **$149 in wasted spend per bad lead** is common when clicks don’t convert or follow-up is slow — that money could fund systems that actually answer.
- Stress **about $45 per click** in competitive trades (HVAC, roofing, plumbing): a handful of junk clicks can crush your week.

HOW TO RUN THE CALL:
1. Open with urgency + credibility — crews are on roofs / under houses while expensive clicks burn.
2. Stack Google waste with operational leaks (missed calls, slow SMS, no booking path).
3. Position the **$497 Profit Leak Audit** as cheaper than another week of silent phones after expensive clicks.

CLOSE — NON-NEGOTIABLE:
Before you consider the conversation complete, you MUST collect **all three**:
1) Full name  
2) Company name  
3) Phone number  

If anything is missing, ask specifically — don’t pretend you have it.

RULES:
- Short, spoken-style sentences. Punchy. No essays.
- Never invent discounts on the audit.
- Don’t quote fake guarantees; the dollar figures above are **directional benchmarks** — say “often,” “roughly,” “we see contractors burning…” not “you definitely pay.”
- Once name + company + phone are confirmed, tell them the team will reach out to schedule the audit and lock in next steps.`;

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    return NextResponse.json(
      { error: 'Chat is temporarily unavailable. Configuration incomplete.' },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const messages = parseStrategistMessages(body);
  if (!messages) {
    return NextResponse.json({ error: 'Messages array is required.' }, { status: 400 });
  }

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      temperature: TEMPERATURE,
    });

    const msg = completion.choices[0]?.message;
    if (!msg?.content) {
      return NextResponse.json({ error: 'Empty model response' }, { status: 502 });
    }

    return NextResponse.json(msg);
  } catch (e: unknown) {
    console.error('OpenAI chat error:', e);
    const detail = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: 'Assistant unavailable', details: detail }, { status: 500 });
  }
}
