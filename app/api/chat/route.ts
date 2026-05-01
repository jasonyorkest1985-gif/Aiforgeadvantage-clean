import OpenAI from "openai";

const CALENDLY_URL = "https://calendly.com/ai-advantage-freelance-consulting/30min";
const PHONE_NUMBER = "(325) 389-1081";
const CONTACT_EMAIL = "Ai.advantage.freelance.consulting@gmail.com";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = body?.messages || [];
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      stream: true,
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: `You are the Forge Sidekick, a Calm Architect for AI Forge Advantage.
You do not follow rigid scripts. Answer the user's immediate question first, then guide the conversation.

Primary offer: the $497 Profit Leak Audit. Position this audit as the fastest way to identify missed revenue from missed calls, slow follow-ups, and broken lead handoff.

If a user asks for phone, number, contact info, or email at any time, immediately provide:
- ${PHONE_NUMBER}
- ${CONTACT_EMAIL}

Then continue qualification naturally:
- Need: what workflow is costing them money?
- Authority: are they the owner/decision-maker?
- Timeline: how quickly do they want this fixed?

Final objective: book the Free 30-Minute AI Strategy Audit at ${CALENDLY_URL}.
Tone: professional, elite, direct.`,
        },
        ...messages,
      ],
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of completion) {
          const token = chunk.choices[0]?.delta?.content ?? "";
          if (token) controller.enqueue(encoder.encode(token));
        }
        controller.close();
      },
    });

    return new Response(stream, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  } catch {
    return new Response(`Contact us at ${PHONE_NUMBER} or book here: ${CALENDLY_URL}`, { status: 200 });
  }
}