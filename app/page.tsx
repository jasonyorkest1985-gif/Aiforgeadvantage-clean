import {
  CalendarClock,
  Check,
  MessageSquare,
  Radio,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { ChatBox } from "@/app/components/ChatBox";

const CALENDLY =
  "https://calendly.com/ai-advantage-freelance-consulting/30min";
const PHONE_DISPLAY = "(325) 389-1081";
const PHONE_TEL = "tel:3253891081";

const stats = [
  { value: "5%", label: "Avg. lift in booked calls post-audit" },
  { value: "24/7", label: "AI coverage when your team is off" },
  { value: "30%+", label: "Faster lead response vs. manual" },
  { value: "500+", label: "Conversations handled for operators" },
];

const tools = [
  {
    icon: Radio,
    title: "LEAD CAPTURE",
    body: "Web, SMS, and missed-call paths that never drop a hot lead.",
  },
  {
    icon: CalendarClock,
    title: "AUTO-SCHEDULING",
    body: "Calendly-ready flows so prospects book without the back-and-forth.",
  },
  {
    icon: MessageSquare,
    title: "INSTANT FOLLOW-UP",
    body: "First reply in seconds, handoff notes packaged for your CRM.",
  },
  {
    icon: ShieldCheck,
    title: "COMPLIANCE-FIRST",
    body: "Clear consent, opt-out, and logging built for real businesses.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Profit leak audit",
    body: "We map where calls, texts, and handoffs are bleeding revenue.",
  },
  {
    n: "02",
    title: "Stack design",
    body: "Pick the AI sidekick, site, and integrations that fit your crew.",
  },
  {
    n: "03",
    title: "Deploy & train",
    body: "Go live with monitoring, playbooks, and owner-visible metrics.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "Iterate on scripts, routing, and booking based on real outcomes.",
  },
];

const weDo = [
  "Missed-call and after-hours recovery",
  "Structured $497 Profit Leak Audit delivery",
  "Fort Worth–first consulting and support",
  "Hands-on implementation—not generic SaaS tips",
];

const weDont = [
  "One-size chatbots with no business context",
  "Discounting your positioning to “win” the deal",
  "Vanity dashboards with no pipeline impact",
  "Ghosting you after the invoice clears",
];

export default function Page() {
  return (
    <div className="hero-spotlight min-h-screen bg-[#071225] text-slate-100 selection:bg-[#22d3ee]/30 selection:text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-[#22d3ee]/15 bg-[#050a14]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-[#22d3ee]" aria-hidden />
            <span className="font-bold tracking-[0.2em] text-white">
              AI FORGE
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
            <a href="#tools" className="transition hover:text-[#22d3ee]">
              Tools
            </a>
            <a href="#process" className="transition hover:text-[#22d3ee]">
              Process
            </a>
            <a href="#pricing" className="transition hover:text-[#22d3ee]">
              Pricing
            </a>
            <a href={PHONE_TEL} className="transition hover:text-[#22d3ee]">
              {PHONE_DISPLAY}
            </a>
          </nav>
          <a
            href={CALENDLY}
            className="rounded-lg bg-[#22d3ee] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#071225] shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:bg-[#67e8f9] md:text-sm"
          >
            Book audit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pt-20">
        <h1 className="text-center text-4xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
          Forge your{" "}
          <span className="text-[#22d3ee] drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]">
            advantage.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-400 md:text-xl">
          AI infrastructure and automation for service businesses that can’t
          afford to lose another lead after hours.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CALENDLY}
            className="w-full rounded-lg bg-[#22d3ee] px-10 py-4 text-center text-sm font-black uppercase tracking-widest text-[#071225] shadow-[0_0_28px_rgba(34,211,238,0.4)] transition hover:bg-[#67e8f9] sm:w-auto"
          >
            Get started
          </a>
          <a
            href="#tools"
            className="w-full rounded-lg border-2 border-[#22d3ee]/60 bg-transparent px-10 py-4 text-center text-sm font-bold uppercase tracking-widest text-[#22d3ee] transition hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 sm:w-auto"
          >
            Learn more
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-mono text-3xl font-bold text-[#22d3ee] md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-slate-500 md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="border-t border-white/5 bg-[#050a14]/50 py-20"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            Tools that actually work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">
            Built for operators—not slide decks.
          </p>
          <ul className="mt-14 space-y-10">
            {tools.map((t) => (
              <li
                key={t.title}
                className="flex gap-5 border-b border-white/5 pb-10 last:border-0 md:gap-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#22d3ee]/15 text-[#22d3ee]">
                  <t.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-[#22d3ee]">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-slate-400">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Watch it close */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
              Watch it close a lead
            </h2>
            <p className="mt-4 text-slate-400">
              Your strategist qualifies, answers objections, and pushes to
              book—while you’re on the job site or asleep.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Captures name, email, and phone before wrap-up",
                "Explains the $497 Profit Leak Audit without discounting",
                "Routes to your Calendly for a real strategy session",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-slate-300">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#22d3ee]"
                    strokeWidth={2.5}
                  />
                  {line}
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#22d3ee] bg-[#22d3ee]/10 px-6 py-3 font-mono text-sm font-semibold text-[#22d3ee] transition hover:bg-[#22d3ee]/20"
            >
              <Zap className="h-4 w-4" />
              SEE THE TECH
            </a>
          </div>

          {/* Static chat mockup */}
          <div className="overflow-hidden rounded-2xl border border-[#22d3ee]/25 bg-[#050a14] shadow-[0_24px_80px_-20px_rgba(34,211,238,0.25)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0a1628] px-4 py-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                AI FORGE STRATEGIST
              </span>
              <span className="h-2 w-2 rounded-full bg-[#22d3ee] shadow-[0_0_10px_#22d3ee]" />
            </div>
            <div className="space-y-4 p-4">
              <div className="flex justify-start">
                <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-[#22d3ee] px-4 py-3 text-sm font-medium text-[#071225]">
                  Thanks for reaching out. What’s the biggest leak right
                  now—missed calls, slow text-back, or no-shows?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  Mostly calls after 5. We’re a small crew and I’m always on a
                  job.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-[#22d3ee] px-4 py-3 text-sm font-medium text-[#071225]">
                  That’s exactly what the $497 Profit Leak Audit maps. Can I get
                  your name, best email, and mobile so I can hold a slot?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.35em] text-[#22d3ee]">
            Our process
          </p>
          <h2 className="mt-3 text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            How we forge it
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.n} className="relative">
                <p className="font-mono text-5xl font-black text-[#22d3ee]/90 md:text-6xl">
                  {step.n}
                </p>
                <h3 className="mt-4 font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section className="border-t border-white/5 bg-[#050a14]/40 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            What we do — and what we don&apos;t
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[#22d3ee]/20 bg-[#071225]/80 p-8">
              <h3 className="font-bold uppercase tracking-wide text-[#22d3ee]">
                We do
              </h3>
              <ul className="mt-6 space-y-4">
                {weDo.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-300">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#22d3ee]"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700/50 bg-[#050a14]/60 p-8">
              <h3 className="font-bold uppercase tracking-wide text-slate-400">
                We don&apos;t
              </h3>
              <ul className="mt-6 space-y-4">
                {weDont.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-400">
                    <X
                      className="mt-0.5 h-5 w-5 shrink-0 text-slate-500"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            Built for small business
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-white/10 bg-[#050a14]/60 p-8">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-500">
                Starter
              </h3>
              <p className="mt-4 font-mono text-4xl font-bold text-white">
                $797
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Strategic site + capture-first layout.
              </p>
              <a
                href={CALENDLY}
                className="mt-auto pt-8 text-center text-sm font-bold uppercase tracking-wide text-[#22d3ee] underline-offset-4 hover:underline"
              >
                Discuss build
              </a>
            </div>
            <div className="relative flex flex-col rounded-2xl border-2 border-[#22d3ee] bg-[#071225] p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)] md:-mt-2 md:mb-2">
              <span className="absolute right-4 top-4 rounded bg-[#22d3ee]/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#22d3ee]">
                Core offer
              </span>
              <h3 className="font-mono text-sm uppercase tracking-wider text-[#22d3ee]">
                Profit leak audit
              </h3>
              <p className="mt-4 font-mono text-4xl font-bold text-white">
                $497
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Full diagnostic: calls, follow-up, handoff, and revenue left on
                the table.
              </p>
              <a
                href={CALENDLY}
                className="mt-8 rounded-lg bg-[#22d3ee] py-4 text-center text-sm font-black uppercase tracking-widest text-[#071225] transition hover:bg-[#67e8f9]"
              >
                Get the audit
              </a>
            </div>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-[#050a14]/60 p-8">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-500">
                AI sidekick
              </h3>
              <p className="mt-4 font-mono text-4xl font-bold text-white">
                Custom
              </p>
              <p className="mt-2 text-sm text-slate-500">
                24/7 bot + integrations tuned to your workflow.
              </p>
              <a
                href={CALENDLY}
                className="mt-auto pt-8 text-center text-sm font-bold uppercase tracking-wide text-[#22d3ee] underline-offset-4 hover:underline"
              >
                Scope project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local first */}
      <section className="relative overflow-hidden border-t border-white/5 py-24">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#071225] to-[#050a14]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2280%22%20height=%2280%22%3E%3Cpath%20fill=%22%2322d3ee%22%20fill-opacity=%22.03%22%20d=%22M0%200h80v80H0z%22/%3E%3C/svg%3E')] opacity-60" />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-white md:text-5xl">
            Local first.{" "}
            <span className="text-[#22d3ee]">Always.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Fort Worth and DFW operators get direct access—not a offshore
            ticket queue. Call{" "}
            <a href={PHONE_TEL} className="text-[#22d3ee] hover:underline">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-[#22d3ee]/20 bg-[#050a14] py-16">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            Pipeline recovery
          </p>
          <h2 className="mt-4 text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            Stop losing leads after hours.
          </h2>
          <a
            href={CALENDLY}
            className="mt-8 inline-block rounded-lg bg-[#22d3ee] px-10 py-4 text-sm font-black uppercase tracking-widest text-[#071225] shadow-[0_0_28px_rgba(34,211,238,0.35)] transition hover:bg-[#67e8f9]"
          >
            Get the audit
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040912] py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-5 md:flex-row md:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#22d3ee]" />
            <span className="font-bold tracking-[0.15em] text-white">
              AI FORGE
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <a href="#tools" className="hover:text-[#22d3ee]">
              Tools
            </a>
            <a href="#process" className="hover:text-[#22d3ee]">
              Process
            </a>
            <a href="#pricing" className="hover:text-[#22d3ee]">
              Pricing
            </a>
            <a href={PHONE_TEL} className="hover:text-[#22d3ee]">
              Call
            </a>
          </nav>
          <a
            href={CALENDLY}
            className="rounded-lg border border-[#22d3ee] px-5 py-2 text-xs font-bold uppercase tracking-wide text-[#22d3ee] transition hover:bg-[#22d3ee]/10"
          >
            Book your audit
          </a>
        </div>
        <p className="mt-10 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} AI Forge Advantage. All rights reserved.
        </p>
      </footer>

      <ChatBox />
    </div>
  );
}
