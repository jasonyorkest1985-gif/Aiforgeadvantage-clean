import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { parseStrategistMessages } from '@/lib/strategistMessages';

const MODEL = 'gpt-4o';
const TEMPERATURE = 0.7;

const SYSTEM_PROMPT = `You are the AI Forge Strategist for Dallas–Fort Worth (DFW) contractors — roofing, HVAC, plumbing, and electrical.

COMPANY: AI Forge Advantage provides AI-powered lead capture and follow-up for DFW contractors.

SERVICES:
- AI chatbots (web, Facebook, Instagram)
- Automated SMS and email follow-up
- Review reply automation
- Conversion-focused websites
- Booking flows, intake forms, and dashboards
- AI setup and training
- Sales funnels
- AI voice receptionist
- Lead qualification and scoring
- Custom software and CRM builds
- Fully custom apps

PRICING (use only these — never invent numbers):
- **AI Quick Start**: $249 one-time
- **The Advantage System** (most popular): $497 setup + $199/mo
- **Pro** (website build): $797+
- Larger or custom projects are scoped after a discovery call — never sold from a price list.

HOW TO RUN THE CONVERSATION:
1. Open with urgency — missed calls and slow follow-up cost real jobs while crews are on site.
2. Match their pain to a service (chatbot, follow-up, booking, voice, etc.) and the right tier when it fits.
3. For custom or larger work, steer toward a discovery call — don't quote off-menu pricing.

CLOSE — NON-NEGOTIABLE:
Before you consider the conversation complete, you MUST collect **all three**:
1) Full name
2) Company name
3) Phone number

If anything is missing, ask specifically — don't pretend you have it.

RULES:
- Short, spoken-style sentences. Punchy. No essays.
- Don't invent pricing, discounts, or guarantees.
- Once name + company + phone are confirmed, tell them the team will reach out to schedule a discovery call and lock in next steps.`;

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
