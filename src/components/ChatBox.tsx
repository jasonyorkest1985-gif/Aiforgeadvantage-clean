import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content: "Hey! I am here to help. Tell me about your business - what is your biggest challenge right now?",
};

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async () => {
    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await response.json();
      if (data?.content) {
        setMessages([...newMessages, { role: "assistant", content: data.content }]);
      } else {
        throw new Error("Bad response");
      }
    } catch {
      setError("Connection issue - please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg flex items-center justify-center transition-all"
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
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{ height: "520px" }}>
          <div className="bg-slate-900 border-b border-slate-700 px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Forge Advantage AI</h3>
              <p className="text-xs text-cyan-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                Online now
              </p>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-slate-700 text-slate-100 rounded-br-sm"
                    : "bg-cyan-500 text-slate-900 font-medium rounded-bl-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                  {[0,150,300].map((d) => (
                    <span key={d} className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            )}
            {error && <p className="text-xs text-red-400 text-center py-1">{error}</p>}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-slate-700 p-3">
            <div className="flex gap-2 items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 bg-slate-800 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-center text-xs text-slate-600 mt-2">AI Powered • Instant Reply • Appointment Booked</p>
          </div>
        </div>
      )}
    </>
  );
};
