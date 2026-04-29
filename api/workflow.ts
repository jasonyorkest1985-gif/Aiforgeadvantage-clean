import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// This defines the "Tool" the AI uses to close the deal
const tools = [{
  type: 'function' as const,
  function: {
    name: 'save_lead_and_trigger_audit',
    description: 'Saves the contractor details and spins up the Profit Leak Audit workflow.',
    parameters: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Full name of the contractor' },
        email: { type: 'string', description: 'Professional email address' },
        phone: { type: 'string', description: 'Direct mobile number' },
        primaryLeak: { type: 'string', description: 'The main way they are losing money (e.g., missed calls)' }
      },
      required: ['name', 'email', 'phone']
    }
  }
}];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are the AI Forge Strategist. Your goal is to sell the $497 Profit Leak Audit to contractors. 
          
          PHASE 1: Ask: "How many calls did your crew miss last week?" 
          PHASE 2: Explain: "One missed HVAC/Roofing lead is worth $2,000+. Your $497 audit pays for itself in 15 minutes."
          PHASE 3: CLOSE: Use the 'save_lead_and_trigger_audit' tool as soon as they provide contact info.
          
          BEHAVIOR: No discounts. If they hesitate, remind them that 'Done is better than perfect' and the audit starts the automation immediately.`
        },
        { role: "user", content: message }
      ],
      tools: tools,
      tool_choice: "auto", // The AI decides when it has enough info to "save" the lead
      temperature: 0.4 // Lower temperature = more professional/direct sales focus
    });

    return res.status(200).json(response.choices[0].message);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}