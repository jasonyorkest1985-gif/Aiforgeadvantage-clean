import React, { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      setMessages([...newMessages, data]);
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-96 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden font-sans">
      <div className="bg-black text-white p-4">
        <h3 className="text-lg font-bold">AI Forge Strategist</h3>
        <p className="text-xs opacity-70">DFW Contractor Profit Audit</p>
      </div>
      
      <div className="h-96 p-4 overflow-y-auto space-y-4">
        {messages.length === 0 && (
          <p className="text-gray-500 text-center italic mt-10">
            "One missed lead costs you $2k. Ready to stop the leak?"
          </p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${
              msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && <p className="text-xs text-gray-400">Strategist is typing...</p>}
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t border-gray-100 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded px-3 py-2 outline-none focus:border-black"
        />
        <button 
          disabled={isLoading}
          className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-800 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};