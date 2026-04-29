import React from 'react';
import { ChatBox } from './components/ChatBox';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Hero Section */}
      <nav className="p-6 border-b border-slate-800">
        <span className="text-xl font-bold tracking-tighter">AI FORGE <span className="text-blue-500">ADVANTAGE</span></span>
      </nav>

      <main className="max-w-4xl mx-auto pt-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Stop Losing <span className="text-blue-500">DFW Leads</span> to Voicemail.
        </h1>
        <p className="text-xl text-slate-400 mb-10">
          We build elite AI infrastructure for contractors. Secure your $497 Profit Leak Audit below.
        </p>
        
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 inline-block">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-bold mb-2">Current Status</p>
          <p className="text-2xl font-mono">SYSTEM READY: STRATEGIST ONLINE</p>
        </div>
      </main>

      {/* The AI Strategist Chat Box */}
      <ChatBox />
    </div>
  );
}

export default App;