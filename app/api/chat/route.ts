import OpenAI from "openai";

const CALENDLY_URL =
  "https://calendly.com/ai-advantage-freelance-consulting/30min";
const PHONE_NUMBER = "(325) 389-1081";
const CONTACT_EMAIL = "Ai.advantage.freelance.consulting@gmail.com";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];
    const name = typeof body?.name === "string" && body.name ? body.name : "there";

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      stream: true,
      temperature: 0.5,
      messages: [
        {
          role: "system",
          content: `You are the Forge Sidekick, a Calm Architect.
Do not follow a list of questions. Use natural conversation with reactive intelligence: answer the user's current question first, then guide qualification.

If a user asks for a phone number or contact info at ANY time, immediately provide:
- ${PHONE_NUMBER}
- ${CONTACT_EMAIL}
Then pivot back into the conversation.

Qualify leads using BANT naturally:
- Need: what workflow is broken?
- Authority: who can approve this decision?
- Budget: what investment range are they comfortable with?
- Timeline: how soon do they need this solved?

The goal of every conversation is to lead toward the Strategy Audit:
${CALENDLY_URL}

Keep tone professional, direct, and elite. Address the user by name (${name}) when appropriate.`,
        },
        ...messages,
      ],
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of completion) {
          const token = chunk.choices[0]?.delta?.content ?? "";
          if (token) {
            controller.enqueue(encoder.encode(token));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch {
    return new Response(
      "I can help with that. The best next step is your free strategy audit: https://calendly.com/ai-advantage-freelance-consulting/30min",
      { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }
}

