import { serve } from "@upstash/workflow/nextjs";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const { POST } = serve(async (context) => {
  const requestPayload = context.requestPayload as {
    email: string;
    customerName: string;
    details: string;
  };

  // Step 1: Analyze the lead with AI
  const analysis = await context.run("analyze-lead", async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant for AI Forge Advantage. Analyze this lead and summarize how we can help their service business.",
        },
        {
          role: "user",
          content: `Customer: ${requestPayload.customerName}\nDetails: ${requestPayload.details}`,
        },
      ],
    });
    return response.choices[0].message.content;
  });

  // Step 2: Finalize lead processing
  await context.run("process-lead", async () => {
    console.log(`Lead processed for: ${requestPayload.email}`);
    return { success: true, analysis };
  });
});