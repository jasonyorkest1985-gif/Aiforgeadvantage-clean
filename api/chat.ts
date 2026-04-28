import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export default async function handler(req, res) {
  try {
    const { message } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-4o", 
      messages: [
        { 
          role: "system", 
          content: "You are the AI Forge Strategist. Your goal is to help DFW contractors stop losing money on missed leads. Be direct, professional, and secure a name/phone for the $497 audit." 
        },
        { role: "user", content: message }
      ],
    });
    res.status(200).json(response.choices[0].message);
  } catch (error) {
    res.status(500).json({ error: "Connection leak detected." });
  }
}