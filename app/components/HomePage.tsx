'use client';

import React from 'react';

const PHONE_DISPLAY = '(325) 389-1081';
const PHONE_TEL = 'tel:+13253891081';

function CheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={`shrink-0 text-[#22d3ee] ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#22d3ee]" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function LeadDemoPhone() {
  return (
    <div className="relative mx-auto max-w-[280px]">
      <div className="rounded-[2rem] border border-[#1e4976] bg-[#050f1a] p-3 shadow-2xl shadow-black/40">
        <div className="rounded-[1.5rem] bg-[#050f1a] overflow-hidden border border-[#143252]">
          <div className="px-4 py-3 border-b border-[#143252] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#22d3ee]" />
            <span className="text-xs text-zinc-400 font-medium">Forge AI • Live</span>
          </div>
          <div className="p-4 space-y-3 min-h-[280px]">
            <div className="flex justify-start">
              <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-zinc-800 border border-[#1e4976] px-3 py-2 text-xs text-zinc-200">
                Hi — need a quote for a roof inspection this week?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[88%] rounded-2xl rounded-br-md bg-[#22d3ee] px-3 py-2 text-xs text-black font-semibold">
                Absolutely. I can get you on the calendar — Tuesday 2pm or Thursday 9am work?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-zinc-800 border border-[#1e4976] px-3 py-2 text-xs text-zinc-200">
                Thursday 9am is perfect.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[88%] rounded-2xl rounded-br-md bg-[#22d3ee] px-3 py-2 text-xs text-black font-semibold">
                Booked. You&apos;ll get a confirmation text in 30 seconds.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#071225] text-white antialiased">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] rounded-lg bg-[#22d3ee] px-4 py-2 text-sm font-semibold text-black opacity-0 pointer-events-none -translate-y-3 transition focus:opacity-100 focus:pointer-events-auto focus:translate-y-0"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-[#0f2847]/80 bg-[#071225]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a
            href="#top"
            className="font-['Bebas_Neue',sans-serif] text-2xl tracking-wide text-white transition-colors hover:text-zinc-200 md:text-3xl"
          >
            AI FORGE <span className="text-[#22d3ee]">ADVANTAGE</span>
          </a>
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-400" aria-label="Primary">
            <a href="#tools" className="rounded-md hover:text-white transition-colors duration-200">
              Tools
            </a>
            <a href="#process" className="rounded-md hover:text-white transition-colors duration-200">
              Process
            </a>
            <a href="#pricing" className="rounded-md hover:text-white transition-colors duration-200">
              Pricing
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-lg bg-[#22d3ee] px-4 py-2 text-black font-semibold hover:bg-[#67e8f9] transition-colors duration-200"
            >
              Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(7,18,37,0.5) 0%, #071225 85%), url(https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=80&auto=format&fit=crop)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl leading-[0.95] tracking-wide text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl lg:text-8xl">
            FORGE YOUR <span className="text-[#22d3ee]">ADVANTAGE.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-200 md:text-xl leading-relaxed [text-shadow:0_1px_20px_rgba(0,0,0,0.5)]">
            AI-powered lead capture and follow-up built for DFW contractors. Stop losing jobs to voicemail — we answer
            every call, text, and form in seconds.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-[#22d3ee] px-8 py-3.5 text-base font-bold text-black hover:bg-[#67e8f9] transition-colors duration-200"
            >
              GET STARTED
            </a>
            <a
              href="#tools"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-colors duration-200"
            >
              LEARN MORE
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[#143252] pt-12 md:grid-cols-4">
            {[
              { stat: '55+', label: 'Systems deployed' },
              { stat: '24/7', label: 'Always-on coverage' },
              { stat: '90%+', label: 'Faster response' },
              { stat: '500+', label: 'Leads recovered' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-['Bebas_Neue',sans-serif] text-4xl text-[#22d3ee] md:text-5xl">{item.stat}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="border-t border-[#0f2847] bg-[#071225] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl tracking-wide text-[#22d3ee] md:text-5xl">
            TOOLS THAT ACTUALLY WORK
          </h2>
          <div className="mt-12 divide-y divide-[#143252] border-y border-[#143252]">
            {[
              {
                title: 'Instant AI receptionist',
                body: 'Answers missed calls, qualifies the lead, and books straight to your calendar — no extra hire.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
              },
              {
                title: 'SMS &amp; chat follow-up',
                body: 'Persistent, polite sequences that feel human — so estimates don’t go cold after the first touch.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                ),
              },
              {
                title: 'CRM &amp; job tools',
                body: 'Works with how you already run the business — routing, notes, and handoff to your crew.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                ),
              },
              {
                title: 'Local-first playbook',
                body: 'Messaging and offers tuned for Fort Worth &amp; DFW — not generic “national agency” fluff.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
              },
            ].map((f) => (
              <div key={f.title} className="flex gap-5 py-8 md:gap-8 md:py-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#22d3ee]/30 bg-[#22d3ee]/10">
                  <svg className="h-6 w-6 text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {f.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white md:text-xl" dangerouslySetInnerHTML={{ __html: f.title }} />
                  <p className="mt-2 text-zinc-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: f.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch it close */}
      <section className="border-t border-[#0f2847] bg-[#050f1a] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2 className="font-['Bebas_Neue',sans-serif] text-4xl tracking-wide text-white md:text-5xl">
              WATCH IT CLOSE A LEAD
            </h2>
            <ul className="mt-8 space-y-4 text-zinc-300">
              {[
                'Replies in seconds, 24/7 — even when you’re on a job site.',
                'Books real appointments, not “we’ll call you back.”',
                'Sounds like your brand — trained on how you actually talk.',
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <CheckIcon className="w-5 h-5 mt-0.5" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="mt-10 inline-flex rounded-lg bg-[#22d3ee] px-8 py-3.5 text-base font-bold text-black hover:bg-[#67e8f9] transition-colors duration-200"
            >
              GET STARTED
            </a>
          </div>
          <LeadDemoPhone />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-[#0f2847] bg-[#071225] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl tracking-wide text-[#22d3ee] md:text-5xl">HOW WE FORGE IT</h2>
          <div className="mt-14 space-y-12">
            {[
              {
                n: '01',
                title: 'Discovery &amp; profit leak audit',
                body: 'We map where leads die — missed calls, slow texts, no follow-up — and quantify the revenue left on the table.',
              },
              {
                n: '02',
                title: 'Build your AI front desk',
                body: 'Scripts, voice, and SMS flows tailored to your trade, service area, and calendar rules.',
              },
              {
                n: '03',
                title: 'Launch &amp; train your team',
                body: 'We go live with monitoring, tune responses from real conversations, and train your crew on handoffs.',
              },
              {
                n: '04',
                title: 'Optimize monthly',
                body: 'Reporting, A/B tweaks, and seasonal campaigns so the system keeps compounding.',
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                <span className="font-['Bebas_Neue',sans-serif] text-6xl leading-none text-[#22d3ee] sm:w-24 shrink-0">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl" dangerouslySetInnerHTML={{ __html: step.title }} />
                  <p className="mt-3 text-zinc-400 leading-relaxed max-w-2xl" dangerouslySetInnerHTML={{ __html: step.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest scope */}
      <section className="border-t border-[#0f2847] bg-[#050f1a] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#22d3ee] text-center md:text-left">
            Honest scope
          </p>
          <h2 className="mt-3 font-['Bebas_Neue',sans-serif] text-3xl tracking-wide text-white md:text-4xl text-center md:text-left">
            WHAT WE DO — AND WHAT WE DON&apos;T
          </h2>
          <p className="mt-6 max-w-3xl text-zinc-300 leading-relaxed md:text-left text-center md:text-left mx-auto md:mx-0">
            Small-business automation is only worth it if it actually works. Here&apos;s what we&apos;ll take on
            confidently — and where we&apos;ll tell you straight that it&apos;s not our lane.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#143252] bg-[#050f1a]/60 p-8">
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#22d3ee]">WE BUILD</h3>
              <ul className="mt-6 space-y-4 text-zinc-300">
                {[
                  'AI chatbots for websites, Facebook & Instagram',
                  'Automated SMS + email follow-up for leads',
                  'Review reply automation (Google & Facebook)',
                  'Simple, fast, conversion-focused websites',
                  'Booking flows, intake forms, small dashboards',
                  'AI setup and hands-on training for owners & staff',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckIcon />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#143252] bg-[#050f1a]/60 p-8">
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#22d3ee]">WE WON&apos;T PROMISE</h3>
              <ul className="mt-6 space-y-4 text-zinc-300">
                {[
                  'Fully custom mobile apps from scratch',
                  'Enterprise-grade software platforms',
                  'Mission-critical systems we can’t personally support',
                  'Multi-month custom engineering projects',
                  'Anything we can’t troubleshoot and fix ourselves',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1.5 h-px w-4 shrink-0 bg-[#22d3ee] self-start" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 max-w-3xl space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base mx-auto md:mx-0 text-center md:text-left">
            <p>
              If you need something in that lane, we&apos;ll tell you straight and point you toward someone who does
              it well.
            </p>
            <p>
              Larger or unusual projects get scoped and quoted after a discovery call — never sold from a price list.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-[#0f2847] bg-[#071225] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl tracking-wide text-[#22d3ee] md:text-5xl">WHAT CLIENTS SAY</h2>
          <div className="mt-12 divide-y divide-[#143252] border-y border-[#143252]">
            {[
              {
                quote:
                  'We stopped losing Saturday leads to voicemail. The AI books while I’m on the roof — game changer for our crew.',
                who: 'Marcus T. — Roofing, Fort Worth',
              },
              {
                quote:
                  'Feels like we hired a full-time office manager for a fraction of the cost. Homeowners actually get called back.',
                who: 'Elena R. — HVAC, Arlington',
              },
              {
                quote:
                  'Finally someone who gets contractors. No fluff dashboards — just more estimates on the calendar.',
                who: 'James K. — Plumbing, Dallas',
              },
            ].map((t) => (
              <div key={t.who} className="py-10">
                <Stars />
                <p className="mt-4 text-lg text-white leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-[#22d3ee]">{t.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-[#0f2847] bg-[#050f1a] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl tracking-wide text-white md:text-5xl">BUILT FOR SMALL BUSINESS</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl">Simple plans. Real outcomes. Scale up when your lead flow does.</p>
          <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-stretch">
            {[
              {
                name: 'AI QUICK START',
                price: '$249',
                period: 'ONE-TIME',
                features: [
                  'One focused session to get your first AI win. Great for testing the waters.',
                  '1 AI tool setup session (your pick)',
                  'Review reply automation OR starter chatbot',
                  '30-day email support',
                  'Simple setup guide & quick training',
                ],
                featured: false,
                cta: 'GET STARTED',
              },
              {
                name: 'THE ADVANTAGE SYSTEM',
                price: '$497 setup + $199/mo',
                period: '',
                features: [
                  'Our most popular package. Full lead capture and follow-up system, built and maintained.',
                  'AI chatbot on your website',
                  'Automated SMS & email follow-up',
                  'Appointment booking integration',
                  'Review reply automation',
                  'Monthly check-in + tweaks',
                  'Direct text/email support',
                ],
                featured: true,
                cta: 'BOOK A CALL',
              },
              {
                name: 'PRO',
                price: '$797+',
                period: 'website build',
                features: [
                  'Simple, fast-loading website built to convert. Add The Advantage System to make it work 24/7.',
                  'Custom small-business website',
                  'Lead capture forms',
                  'Mobile-first design',
                  'SEO foundation',
                  'Custom projects quoted after discovery',
                ],
                featured: false,
                cta: 'REQUEST A QUOTE',
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.featured
                    ? 'border-[#22d3ee] bg-[#050f1a]/85 shadow-lg shadow-[#22d3ee]/10 relative'
                    : 'border-[#143252] bg-[#050f1a]/50'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#22d3ee] px-4 py-1 text-xs font-bold text-black">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-white">{plan.name}</h3>
                <p className="mt-4 flex flex-col gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.period ? (
                    <span className="text-sm font-semibold tracking-wide text-[#22d3ee]">
                      {plan.period}
                    </span>
                  ) : null}
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-zinc-300 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckIcon className="w-4 h-4 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-10 inline-flex justify-center rounded-lg px-6 py-3.5 text-center text-sm font-bold transition-colors ${
                    plan.featured
                      ? 'bg-[#22d3ee] text-black hover:bg-[#67e8f9]'
                      : 'border-2 border-[#1e4976] text-white hover:bg-[#0f2847]'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local first */}
      <section
        className="relative border-t border-[#0f2847] py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.92), rgba(0,0,0,0.75)), url(https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl tracking-wide text-white md:text-6xl">
            LOCAL FIRST. <span className="text-[#22d3ee]">ALWAYS.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-zinc-200 leading-relaxed">
            We&apos;re built for Fort Worth, Arlington, and Dallas contractors — not a remote boiler room. Your neighbors,
            your vendors, your weather, your seasonality: that context is baked into every script we deploy.
          </p>
          <div className="mt-12 flex flex-wrap gap-10 text-zinc-300">
            {[
              { label: 'DFW-native', sub: 'On the ground' },
              { label: 'Trades focus', sub: 'HVAC, roof, plumbing' },
              { label: 'Real humans', sub: 'When AI hands off' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-white font-semibold">{item.label}</p>
                <p className="text-sm text-zinc-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="border-t border-[#0f2847] bg-[#082f33] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide text-white md:text-5xl">
            STOP LOSING LEADS <span className="text-[#22d3ee]">AFTER HOURS.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-zinc-200 leading-relaxed">
            Click below to book your free profit leak audit, or open the chat anytime to get started right now.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-[#22d3ee] px-8 py-3.5 text-base font-bold text-black hover:bg-[#67e8f9] transition-colors duration-200"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#0f2847] bg-[#071225] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <p className="font-['Bebas_Neue',sans-serif] text-2xl text-white">
                AI FORGE <span className="text-[#22d3ee]">ADVANTAGE</span>
              </p>
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                AI automation for small business — lead capture, follow-up, and booking without the chaos.
              </p>
              <a href={PHONE_TEL} className="mt-4 inline-block text-[#22d3ee] font-semibold hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Company</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><a href="#process" className="hover:text-[#22d3ee]">Process</a></li>
                <li><a href="#tools" className="hover:text-[#22d3ee]">Services</a></li>
                <li><a href="#cta" className="hover:text-[#22d3ee]">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Product</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><a href="#pricing" className="hover:text-[#22d3ee]">Pricing</a></li>
                <li><a href="#cta" className="hover:text-[#22d3ee]">Audit</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Connect</p>
              <div className="mt-4 flex gap-4 text-[#22d3ee]">
                <a href="#" className="hover:text-white" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="hover:text-white" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
              <a
                href="#cta"
                className="mt-6 inline-flex rounded-lg border border-[#22d3ee] px-5 py-2.5 text-sm font-bold text-[#22d3ee] hover:bg-[#22d3ee] hover:text-black transition-colors"
              >
                GET STARTED
              </a>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-4 border-t border-[#0f2847] pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} AI Forge Advantage. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#22d3ee]">Privacy</a>
              <a href="#" className="hover:text-[#22d3ee]">Terms</a>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
