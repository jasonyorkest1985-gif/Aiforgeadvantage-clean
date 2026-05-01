import React from 'react';
import { ChatBox } from "@/components/ChatBox";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF4D00]">
      {/* MASSIVE HEADER */}
      <header className="h-40 flex items-center justify-between px-12 border-b border-white/10">
        <h1 className="text-5xl font-black tracking-tighter text-[#FF4D00] drop-shadow-[0_0_15px_rgba(255,77,0,0.5)]">
          AI FORGE ADVANTAGE
        </h1>
        <a href="tel:3253891081" className="text-2xl font-bold border-2 border-[#FF4D00] px-8 py-3 rounded-full hover:bg-[#FF4D00] transition-all">
          (325) 389-1081
        </a>
      </header>

      {/* CINEMATIC HERO */}
      <main className="flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <h2 className="text-8xl md:text-[10rem] font-black leading-none tracking-tighter mb-8">
          FORGE YOUR <br /> <span className="text-[#FF4D00]">COMPETITIVE EDGE</span>
        </h2>
        <p className="text-3xl text-gray-400 max-w-4xl mb-12">
          Elite AI infrastructure and automation for service businesses. Stop losing revenue to missed calls.
        </p>
        
        <div className="flex gap-6">
          <a href="https://calendly.com/ai-advantage-freelance-consulting/30min" className="bg-[#FF4D00] text-black text-3xl font-black px-16 py-8 rounded-2xl shadow-[0_0_40px_rgba(255,77,0,0.4)] hover:scale-105 transition-transform">
            BOOK STRATEGY AUDIT
          </a>
        </div>
      </main>

      {/* PRICING PREVIEW */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-12 pb-40">
        <div className="border border-white/10 p-12 rounded-3xl bg-white/5">
          <h3 className="text-4xl font-bold mb-4 text-[#FF4D00]">AI Sidekicks</h3>
          <p className="text-5xl font-black mb-6">$497</p>
          <p className="text-xl text-gray-400">24/7 lead conversion bots that work while you sleep.</p>
        </div>
        <div className="border border-white/10 p-12 rounded-3xl bg-white/5">
          <h3 className="text-4xl font-bold mb-4 text-[#FF4D00]">Strategic Websites</h3>
          <p className="text-5xl font-black mb-6">$797</p>
          <p className="text-xl text-gray-400">High-speed, lead-capture machines built for elite brands.</p>
        </div>
      </section>
      <ChatBox />
    </div>
  );
}