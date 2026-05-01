"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const CALENDLY_URL =
  "https://calendly.com/ai-advantage-freelance-consulting/30min";

export function ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userContent = input.trim();
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userContent },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const ct = res.headers.get("content-type") ?? "";
      if (!ct.includes("application/json")) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: `Strategist unavailable. Book your free audit: ${CALENDLY_URL}`,
          },
        ]);
        return;
      }

      const data = (await res.json()) as {
        role?: string;
        content?: string | null;
        error?: string;
        message?: string;
      };

      const errText = data.error ?? data.message;
      if (!res.ok || errText) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content:
              errText ??
              "Something went wrong. Try again or book a call.",
          },
        ]);
        return;
      }

      const text =
        typeof data.content === "string"
          ? data.content
          : data.content == null
            ? ""
            : String(data.content);

      if (!text.trim()) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: `No reply text. Try again or book: ${CALENDLY_URL}`,
          },
        ]);
        return;
      }

      setMessages([
        ...newMessages,
        { role: "assistant", content: text },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Strategist connection lost. Check your internet and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 overflow-hidden rounded-2xl border border-[#22d3ee]/20 bg-[#071225] shadow-2xl shadow-[#22d3ee]/10 md:w-96">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0a1628] px-4 py-3">
        <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
          AI FORGE STRATEGIST
        </h3>
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#22d3ee] shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
      </div>

      <div
        ref={scrollRef}
        className="h-80 space-y-4 overflow-y-auto bg-[#050a14]/80 p-4"
      >
        {messages.length === 0 && (
          <p className="mt-10 text-center text-xs italic text-slate-500">
            Ask how the $497 Profit Leak Audit stops the bleeding.
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                m.role === "assistant"
                  ? "rounded-tl-sm bg-[#22d3ee] font-medium text-[#071225]"
                  : "rounded-tr-sm border border-white/10 bg-white/5 text-slate-200"
              }`}
            >
              {m.content ||
                (loading && m.role === "assistant" ? "…" : "")}
            </div>
          </div>
        ))}
        {loading && messages[messages.length - 1]?.role !== "assistant" && (
          <p className="animate-pulse text-xs text-slate-500">
            Strategist is analyzing...
          </p>
        )}
      </div>

      <div className="flex gap-2 border-t border-[#22d3ee]/15 bg-[#071225] p-3">
        <input
          className="flex-1 rounded-lg border border-transparent bg-white/5 p-2 text-sm text-white outline-none focus:border-[#22d3ee]/50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              void handleSend();
            }
          }}
          placeholder="Ask a question..."
        />
        <button
          type="button"
          onClick={() => void handleSend()}
          disabled={loading || !input.trim()}
          className="rounded-lg bg-[#22d3ee] px-4 py-2 text-sm font-bold text-[#071225] hover:bg-[#67e8f9] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
