"use client";

import { Bolt, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const CALENDLY_URL =
  "https://calendly.com/ai-advantage-freelance-consulting/30min";

const INTRO_QUESTION =
  "Welcome to AI Forge Advantage. I'm your Forge Sidekick. What's your name?";

const FOLLOWUP_PROMPT = (name: string) =>
  `Good to meet you, ${name}. What part of your business is currently costing you the most time or money — missed calls, slow follow-ups, or something else?`;

const BOOKING_PROMPT =
  "That's exactly what we build solutions for. The best next step is a free 30-minute AI Strategy Audit. Here's the link to grab a time: https://calendly.com/ai-advantage-freelance-consulting/30min";

export function ForgeBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INTRO_QUESTION },
  ]);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const userMessage = input.trim();

    if (!userMessage || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    if (step === 1) {
      setName(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: FOLLOWUP_PROMPT(userMessage) }]);
      setStep(2);
      return;
    }

    if (step === 2) {
      setMessages((prev) => [...prev, { role: "assistant", content: BOOKING_PROMPT }]);
      setStep(3);
      return;
    }

    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Unable to contact ForgeBot");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let fullText = "";

      while (!done) {
        const { value, done: isDone } = await reader.read();
        done = isDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          fullText += chunk;
          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = { role: "assistant", content: fullText };
            return next;
          });
        }
      }
    } catch {
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          role: "assistant",
          content: `I can help with that. The fastest way to get a precise plan is to book your free strategy audit: ${CALENDLY_URL}`,
        };
        return next;
      });
    } finally {
      setStep(4);
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="h-[min(86vh,560px)] w-[min(95vw,420px)] overflow-hidden rounded-2xl border border-[#00A3FF]/35 bg-gradient-to-b from-[#0A0F1E] to-[#101010] shadow-[0_20px_70px_-30px_rgba(0,163,255,0.52)] sm:h-[min(88vh,560px)] sm:shadow-[0_26px_90px_-32px_rgba(0,163,255,0.65)]">
          <div className="flex items-center justify-between border-b border-[#00A3FF]/25 bg-black/45 px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4D00] text-black [box-shadow:0_0_15px_rgba(255,77,0,0.68)] sm:[box-shadow:0_0_20px_rgba(255,77,0,0.8)]">
                <Bolt size={18} />
              </div>
              <div>
                <p className="text-xl font-bold text-white">Forge Sidekick</p>
                <p className="text-base text-white/70">Calm Architect</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1 text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          <div className="h-[calc(100%-152px)] space-y-3 overflow-y-auto px-5 py-5 text-base">
            {messages.map((message, idx) => (
              <div
                key={`${message.role}-${idx}`}
                className={`rounded-xl px-3 py-2 ${
                  message.role === "assistant"
                    ? "bg-white/7 text-white/92"
                    : "ml-10 bg-[#FF4D00] text-black [box-shadow:0_0_12px_rgba(255,77,0,0.5)] sm:[box-shadow:0_0_18px_rgba(255,77,0,0.6)]"
                }`}
              >
                {message.content || (isLoading ? "Thinking..." : "")}
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="border-t border-[#00A3FF]/25 p-4">
            <div className="flex items-center gap-2 rounded-xl border border-[#00A3FF]/30 bg-black/45 p-2.5">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Forge Sidekick..."
                className="w-full bg-transparent px-2 text-base text-white outline-none placeholder:text-white/45"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="rounded-lg bg-[#FF4D00] p-3 text-black [box-shadow:0_0_15px_rgba(255,77,0,0.6)] transition hover:bg-[#ff6a2e] sm:[box-shadow:0_0_20px_rgba(255,77,0,0.7)] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="cinematic-hover forge-pulse group flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#FF4D00] text-black shadow-[0_0_32px_-8px_rgba(255,77,0,0.9)] hover:scale-105 sm:shadow-[0_0_44px_-4px_rgba(255,77,0,1)]"
          aria-label="Open ForgeBot"
        >
          <MessageCircle size={30} className="group-hover:scale-95" />
        </button>
      )}
    </div>
  );
}

