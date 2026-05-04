'use client';

import React, { useState, useRef, useEffect, useId } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING: Message = {
  role: 'assistant',
  content: "Hey — quick question: between wasted Google clicks and missed calls, where do you think you're bleeding more leads this month?",
};

export const ChatBox = () => {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    bottomRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    const userMessage: Message = { role: 'user', content: trimmed };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const msg =
          typeof (data as { error?: unknown }).error === 'string'
            ? (data as { error: string }).error
            : 'Assistant unavailable — try again shortly.';
        setError(msg);
        return;
      }
      if (data && typeof (data as { content?: unknown }).content === 'string') {
        setMessages([
          ...newMessages,
          { role: 'assistant', content: (data as { content: string }).content },
        ]);
      } else {
        throw new Error('Bad response');
      }
    } catch {
      setError('Connection issue — please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-haspopup="dialog"
        aria-label={isOpen ? 'Close chat with AI Forge Strategist' : 'Open chat with AI Forge Strategist'}
        className="fixed z-50 w-14 h-14 rounded-full bg-[#22d3ee] hover:bg-[#67e8f9] text-black shadow-lg shadow-[#22d3ee]/25 flex items-center justify-center transition-all duration-200 bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] right-[max(1.5rem,env(safe-area-inset-right,0px))]"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${panelId}-title`}
          className="fixed z-50 w-96 max-w-[calc(100vw-2rem)] bg-[#071225] border border-[#143252] rounded-2xl shadow-2xl overflow-hidden flex flex-col bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] right-[max(1.5rem,env(safe-area-inset-right,0px))]"
          style={{ height: 'min(520px, calc(100dvh - 8rem))' }}
        >
          <div className="bg-[#071225] border-b border-[#143252] px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#22d3ee]/15 border border-[#22d3ee]/35 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 id={`${panelId}-title`} className="text-sm font-bold text-white">
                AI FORGE STRATEGIST
              </h3>
              <p className="text-xs text-[#22d3ee] flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] inline-block motion-safe:animate-pulse"
                  aria-hidden
                />
                Online now
              </p>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#22d3ee] text-black font-medium rounded-br-sm'
                    : 'bg-[#0f2847] text-zinc-100 border border-[#1e4976] rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#0f2847] border border-[#1e4976] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            {error && <p className="text-xs text-red-400 text-center py-1">{error}</p>}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-[#143252] p-3">
            <div className="flex gap-2 items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 bg-[#050f1a] border border-[#1e4976] text-white placeholder-zinc-500 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#22d3ee] transition-colors disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading}
                className="w-10 h-10 rounded-xl bg-[#22d3ee] hover:bg-[#67e8f9] disabled:opacity-40 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-center text-xs text-zinc-600 mt-2">AI Powered • Instant Reply • Appointment Booked</p>
          </div>
        </div>
      )}
    </>
  );
};