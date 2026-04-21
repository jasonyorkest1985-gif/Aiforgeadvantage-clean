"use client";

import { Bolt, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const CALENDLY_URL =
  "https://calendly.com/ai-advantage-freelance-consulting/30min";
const PHONE_NUMBER = "(325) 389-1081";
const CONTACT_EMAIL = "Ai.advantage.freelance.consulting@gmail.com";

const INTRO_QUESTION =
  "Welcome to AI Forge Advantage. I'm your Forge Sidekick. What's your name?";
const CONTACT_INTERRUPT_REGEX =
  /(phone|number|contact|call|text|reach|email)/i;

export function ForgeBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
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

    if (!name) {
      setName(userMessage);
    }

    if (CONTACT_INTERRUPT_REGEX.test(userMessage)) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `You can reach us directly at ${PHONE_NUMBER} or ${CONTACT_EMAIL}. If you want, I can also get you straight to the strategy audit booking: ${CALENDLY_URL}`,
        },
      ]);
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
              className="min-h-11 rounded-lg border border-[#FF4D00]/55 px-4 py-2 text-base font-semibold text-[#FF4D00] transition hover:bg-[#FF4D00]/12 hover:text-white"
            >
              Close
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
                className="min-h-11 rounded-lg bg-[#FF4D00] px-4 py-3 text-black [box-shadow:0_0_15px_rgba(255,77,0,0.6)] transition hover:bg-[#ff6a2e] sm:[box-shadow:0_0_20px_rgba(255,77,0,0.7)] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[#FF4D00]/65 bg-black/85 px-4 py-2 text-sm font-bold tracking-wide text-[#FF4D00] [text-shadow:0_0_14px_rgba(255,77,0,0.82)]">
            FORGE YOUR AI HERE
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="cinematic-hover forge-pulse group flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#FF4D00] text-black shadow-[0_0_20px_rgba(255,77,0,0.5)] hover:scale-105"
            aria-label="Open ForgeBot"
          >
            <Bolt size={24} />
            <span className="text-base font-bold leading-none">Chat</span>
          </button>
        </div>
      )}
    </div>
  );
}

