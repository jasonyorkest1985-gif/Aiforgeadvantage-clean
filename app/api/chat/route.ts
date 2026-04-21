import OpenAI from "openai";

const CALENDLY_URL =
  "https://calendly.com/ai-advantage-freelance-consulting/30min";

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
          content: `You are Forge Sidekick for AI Forge Advantage.
Voice: calm, direct, professional, concise.
Always answer helpfully, then guide toward booking a free strategy audit.
Include this booking link naturally whenever useful: ${CALENDLY_URL}
If a user asks broad business questions, keep answers practical for small business owners.
Address the user by name (${name}) when appropriate.`,
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

