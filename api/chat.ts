import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

// Initialize OpenAI with your secret key from Vercel Environment Variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are the AI Forge Strategist for DFW contractors. 
          
          PRICING SYSTEM: You sell a single, high-impact product: The $497 Profit Leak Audit. 
          
          CLOSING STRATEGY:
          1. Identify the 'Leak': Ask about missed calls or slow lead follow-up.
          2. Introduce the Fix: Explain how automation stops the bleeding.
          3. The Close: Secure the contractor's Name, Email, and Phone Number. 
          
          BEHAVIOR: Be direct and professional. Do not offer discounts. If they hesitate on the $497 price, explain that one saved lead pays for the audit 10x over. Once you have their contact info, tell them you are spinning up their custom workflow. Keep responses concise—contractors are busy and on job sites.`
        },
        ...messages, // This includes the conversation history
      ],
      temperature: 0.7,
    });

    // 2. Return the AI's message to your frontend
    return res.status(200).json(response.choices[0].message);

  } catch (error: any) {
    console.error("OpenAI Chat Error:", error);
    return res.status(500).json({ 
      error: "Internal Server Error", 
      details: error.message 
    });
  }
}