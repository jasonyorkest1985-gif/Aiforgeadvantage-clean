import { useState } from "react";
import { Sparkles, Send, X } from "lucide-react";

export default function ForgeBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hey! I'm the AI Forge Strategist. Ready to automate your lead capture and plug the holes in your pipeline?" }]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: messages }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Strategist is recalibrating. Try again!" }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="bg-[#22d3ee] hover:bg-[#06b6d4] text-[#0a0a0b] p-4 rounded-full shadow-2xl transition-all hover:scale-110">
          <Sparkles size={28} />
        </button>
      ) : (
        <div className="bg-[#0f1a1c] border border-[#22d3ee]/20 w-80 h-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-[#0a0a0b] border-b border-[#22d3ee]/20 p-4 text-[#22d3ee] flex justify-between items-center text-sm font-bold">
            <span className="flex items-center gap-2"><Sparkles size={18} /> AI Strategist</span>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm text-white">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'bg-[#1e1e22] ml-auto' : 'bg-[#22d3ee] text-[#0a0a0b]'} p-3 rounded-lg max-w-[85%]`}>
                {m.content}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-[#22d3ee]/20 bg-[#0f0f11] flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Ask anything..." className="flex-1 bg-[#1a1a1e] text-white border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#22d3ee]/40" />
            <button onClick={sendMessage} className="bg-[#22d3ee] text-[#0a0a0b] p-2 rounded-lg hover:bg-[#06b6d4]"><Send size={18} /></button>
          </div>
        </div>
      )}
    </div>
  );
}