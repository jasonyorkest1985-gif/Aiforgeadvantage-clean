export type StrategistChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

function normalizeMessages(raw: unknown): StrategistChatMessage[] | null {
  if (!Array.isArray(raw)) return null;
  const out: StrategistChatMessage[] = [];
  for (const m of raw) {
    if (!m || typeof m !== 'object') return null;
    const role = (m as { role?: unknown }).role;
    const content = (m as { content?: unknown }).content;
    if (role !== 'user' && role !== 'assistant') return null;
    if (typeof content !== 'string' || !content.trim()) return null;
    out.push({ role, content });
  }
  return out;
}

export function parseStrategistMessages(body: unknown): StrategistChatMessage[] | null {
  if (!body || typeof body !== 'object') return null;
  const parsed = normalizeMessages((body as { messages?: unknown }).messages);
  if (!parsed || parsed.length === 0) return null;
  return parsed;
}
