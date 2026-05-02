import {
  BarChart3,
  Bot,
  Check,
  Globe,
  Link2,
  MessageSquare,
  Search,
  Share2,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { ChatBox } from "@/app/components/ChatBox";

const CALENDLY =
  "https://calendly.com/ai-advantage-freelance-consulting/30min";
const PHONE_DISPLAY = "(325) 389-1081";
const PHONE_TEL = "tel:3253891081";

/** Cyan primary + orange accent (reference layout) */
const CYAN = "#22d3ee";
const ORANGE = "#f97316";

const stats = [
  { value: "55+", label: "Systems shipped for operators" },
  { value: "24/7", label: "AI coverage when you’re off the clock" },
  { value: "90%+", label: "Faster first response vs. voicemail" },
  { value: "500+", label: "Leads touched across campaigns" },
];

const tools = [
  {
    icon: Bot,
    title: "AI CHAT AGENTS",
    body: "Strategist-grade bots that qualify, explain the audit, and book—without sounding robotic.",
  },
  {
    icon: MessageSquare,
    title: "SMS AUTOMATION",
    body: "Missed-call text-back, drip reminders, and two-way threads that stay compliant.",
  },
  {
    icon: Link2,
    title: "CRM INTEGRATION",
    body: "Handoffs into the tools you already run—tags, notes, and owner-visible outcomes.",
  },
  {
    icon: Target,
    title: "LEAD GENERATION",
    body: "Capture-first pages, clear CTAs, and structured follow-up so spend turns into booked calls.",
  },
  {
    icon: Search,
    title: "SEO OPTIMIZATION",
    body: "Technical hygiene, local signals, and content patterns built for service-area dominance.",
  },
  {
    icon: BarChart3,
    title: "ANALYTICS",
    body: "Pipeline metrics you can act on—not vanity charts that hide the leak.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Strategy",
    body: "We map revenue leaks, channels, and the fastest path to booked conversations.",
  },
  {
    n: "02",
    title: "Development",
    body: "Sites, agents, and automations engineered to your workflow—not a template dump.",
  },
  {
    n: "03",
    title: "Testing",
    body: "Script QA, edge cases, and handoff drills before your market sees a single message.",
  },
  {
    n: "04",
    title: "Deployment",
    body: "Go-live with monitoring, playbooks, and iteration tied to real outcomes.",
  },
];

const weBuild = [
  "AI chatbots for websites, Facebook & Instagram",
  "Automated SMS + email follow-up for leads",
  "Review reply automation (Google & Facebook)",
  "Simple, fast, conversion-focused websites",
  "Booking flows, intake forms, small dashboards",
  "AI setup and hands-on training for owners & staff",
];

const weWontPromise = [
  "Fully custom mobile apps from scratch",
  "Enterprise-grade software platforms",
  "Mission-critical systems we can't personally support",
  "Multi-month custom engineering projects",
  "Anything we can't troubleshoot and fix ourselves",
];

const testimonials = [
  {
    quote:
      "We stopped bleeding after-hours leads the first week. The strategist bot books while we’re on site.",
    who: "Service owner · DFW",
  },
  {
    quote:
      "Finally someone who ships—SMS, site, and CRM notes land where our team actually works.",
    who: "Ops lead · Fort Worth",
  },
  {
    quote:
      "The audit made the leak obvious. The build fixed it. No fluff.",
    who: "Contractor · Mid-Cities",
  },
];

export default function Page() {
  return (
    <div className="hero-spotlight min-h-screen bg-black text-slate-100 selection:bg-cyan-500/25 selection:text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="h-7 w-7 shrink-0" style={{ color: CYAN }} />
            <span className="text-sm font-black uppercase leading-tight tracking-wide text-white md:text-base">
              AI Forge
              <br className="md:hidden" />
              <span className="text-white md:ml-1"> Advantage</span>
            </span>
          </a>
          <nav className="order-3 flex w-full flex-wrap justify-center gap-6 text-sm font-medium text-slate-400 md:order-none md:flex-1 md:justify-center md:gap-8">
            <a href="#" className="transition hover:text-cyan-400">
              Home
            </a>
            <a href="#tools" className="transition hover:text-cyan-400">
              Services
            </a>
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={PHONE_TEL}
              className="hidden text-sm text-slate-400 hover:text-cyan-400 sm:inline"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={CALENDLY}
              className="rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wide text-black shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:brightness-110"
              style={{ backgroundColor: CYAN }}
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pt-16">
        <h1 className="text-center text-4xl font-black uppercase leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[4.25rem]">
          Forge your{" "}
          <span
            className="drop-shadow-[0_0_28px_rgba(34,211,238,0.4)]"
            style={{ color: CYAN }}
          >
            advantage.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-400 md:text-xl">
          Fort Worth AI automation for small business—chat agents, SMS, and
          sites that turn traffic into booked revenue.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CALENDLY}
            className="w-full rounded-lg px-10 py-4 text-center text-sm font-black uppercase tracking-widest text-black shadow-[0_0_32px_rgba(34,211,238,0.45)] transition hover:brightness-110 sm:w-auto"
            style={{ backgroundColor: CYAN }}
          >
            Get started
          </a>
          <a
            href="#tools"
            className="w-full rounded-lg border-2 border-cyan-400/50 bg-transparent px-10 py-4 text-center text-sm font-bold uppercase tracking-widest text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-400/10 sm:w-auto"
          >
            Learn more
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-mono text-3xl font-black md:text-4xl"
                style={{ color: CYAN }}
              >
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
      <section id="tools" className="border-t border-white/5 bg-[#050508] py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            Tools that actually work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">
            Everything wired to one outcome: more qualified conversations on
            your calendar.
          </p>
          <ul className="mt-14 space-y-10">
            {tools.map((t) => (
              <li
                key={t.title}
                className="flex gap-5 border-b border-white/5 pb-10 last:border-0 md:gap-8"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15"
                  style={{ color: CYAN }}
                >
                  <t.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <h3
                    className="font-bold uppercase tracking-wide"
                    style={{ color: CYAN }}
                  >
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
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
              Watch it close a lead
            </h2>
            <p className="mt-4 text-slate-400">
              Lead asks a question. The AI assistant answers, qualifies, and
              moves toward booking—while you stay on the job.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Labels: Lead vs AI Assistant for clarity in every thread",
                "Captures context before pushing to Calendly",
                "Built for mobile: thumb-friendly, fast, no clutter",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-slate-300">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
                    strokeWidth={2.5}
                  />
                  {line}
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-mono text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/20"
            >
              <Zap className="h-4 w-4" />
              SEE THE TECH
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#0a0f18] shadow-[0_24px_80px_-20px_rgba(34,211,238,0.2)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0d1624] px-4 py-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                AI FORGE STRATEGIST
              </span>
              <span
                className="h-2 w-2 rounded-full shadow-[0_0_10px_currentColor]"
                style={{ backgroundColor: CYAN, color: CYAN }}
              />
            </div>
            <div className="space-y-4 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                AI Assistant
              </p>
              <div className="flex justify-start">
                <div
                  className="max-w-[90%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-medium text-black"
                  style={{ backgroundColor: CYAN }}
                >
                  Hey—what made you reach out today? Calls after hours, slow
                  text-backs, or something else?
                </div>
              </div>
              <p className="text-right text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Lead
              </p>
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  Mostly calls after 5. Small crew, always on a job.
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                AI Assistant
              </p>
              <div className="flex justify-start">
                <div
                  className="max-w-[90%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-medium text-black"
                  style={{ backgroundColor: CYAN }}
                >
                  Got it. I can walk you through the $497 Profit Leak Audit and
                  hold a strategy slot—what’s your name and best number?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p
            className="text-center font-mono text-xs font-black uppercase tracking-[0.35em]"
            style={{ color: ORANGE }}
          >
            Our process
          </p>
          <h2 className="mt-3 text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            How we forge it
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.n}>
                <p
                  className="font-mono text-5xl font-black md:text-6xl"
                  style={{ color: ORANGE }}
                >
                  {step.n}
                </p>
                <h3 className="mt-4 font-bold uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section className="border-t border-white/5 bg-[#050508] py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            What we do — and what we don&apos;t
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-400">
            Small-business automation is only worth it if it actually works.
            Here&apos;s what we&apos;ll take on confidently — and where
            we&apos;ll tell you straight that it&apos;s not our lane.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-cyan-500/25 bg-[#0a0f18] p-8">
              <h3 className="font-black uppercase tracking-wide text-cyan-400">
                We build
              </h3>
              <ul className="mt-6 space-y-4">
                {weBuild.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-300">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0a0f18]/80 p-8">
              <h3 className="font-black uppercase tracking-wide text-slate-400">
                We won&apos;t promise
              </h3>
              <ul className="mt-6 space-y-4">
                {weWontPromise.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-400">
                    <span
                      className="mt-0.5 shrink-0 font-mono text-lg leading-none"
                      style={{ color: ORANGE }}
                      aria-hidden
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
            If you need something in that lane, we&apos;ll tell you straight and
            point you toward someone who does it well.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            What clients say
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.who}
                className="rounded-2xl border border-white/10 bg-[#0a0f18] p-6"
              >
                <p className="text-sm leading-relaxed text-slate-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer
                  className="mt-4 font-mono text-xs font-bold uppercase tracking-wider"
                  style={{ color: ORANGE }}
                >
                  {t.who}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 bg-[#050508] py-16">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-xl font-black uppercase tracking-wide text-white md:text-2xl">
            Built in Fort Worth. Shipped like enterprise.
          </h2>
          <p className="mt-4 text-slate-400">
            AI Forge Advantage helps DFW operators install AI chat agents, SMS
            automation, and conversion-focused sites without the agency runaround.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-center text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            Built for small business
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0a0f18] p-8">
              <h3 className="font-mono text-sm font-black uppercase tracking-wider text-slate-500">
                Starter
              </h3>
              <p className="mt-4 font-mono text-3xl font-bold text-white">
                From $797
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-400">
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-cyan-400" /> Strategic
                  site + capture layout
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-cyan-400" /> Core SEO
                  hygiene
                </li>
              </ul>
              <a
                href={CALENDLY}
                className="mt-8 block rounded-lg border border-white/20 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                Contact sales
              </a>
            </div>
            <div className="relative flex flex-col rounded-2xl border-2 border-cyan-400 bg-[#050810] p-8 shadow-[0_0_48px_rgba(34,211,238,0.18)] md:-mt-3 md:mb-3">
              <span
                className="absolute right-4 top-4 rounded px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider text-black"
                style={{ backgroundColor: CYAN }}
              >
                Most popular
              </span>
              <h3 className="font-mono text-sm font-black uppercase tracking-wider text-cyan-400">
                Pro
              </h3>
              <p className="mt-4 font-mono text-3xl font-bold text-white">
                $497 audit + build
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-cyan-400" /> Profit
                  Leak Audit
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-cyan-400" /> AI chat
                  agent (strategist)
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-cyan-400" /> SMS +
                  booking handoff
                </li>
              </ul>
              <a
                href={CALENDLY}
                className="mt-8 block rounded-lg py-4 text-center text-sm font-black uppercase tracking-widest text-black transition hover:brightness-110"
                style={{ backgroundColor: CYAN }}
              >
                Get started
              </a>
            </div>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0a0f18] p-8">
              <h3 className="font-mono text-sm font-black uppercase tracking-wider text-slate-500">
                Enterprise
              </h3>
              <p className="mt-4 font-mono text-3xl font-bold text-white">
                Custom
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-400">
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-cyan-400" /> Multi-location
                  &amp; routing
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-cyan-400" /> CRM + data
                  integrations
                </li>
              </ul>
              <a
                href={CALENDLY}
                className="mt-8 block rounded-lg border border-white/20 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                Book discovery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local first — dusk city mood (CSS only) */}
      <section className="relative overflow-hidden border-t border-white/5 py-28">
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0a1525] to-black"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.95) 100%),
              radial-gradient(ellipse 120% 60% at 50% 100%, rgba(34,211,238,0.12), transparent),
              linear-gradient(105deg, #1e1b4b 0%, transparent 45%, #0c4a6e 100%)`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-white md:text-5xl">
            Local first.{" "}
            <span style={{ color: CYAN }}>Always.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            DFW operators deserve direct access. Call{" "}
            <a href={PHONE_TEL} className="text-cyan-400 hover:underline">
              {PHONE_DISPLAY}
            </a>{" "}
            or book online—we answer like neighbors, not a ticket queue.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        id="contact"
        className="border-t border-cyan-500/20 bg-[#050508] py-16"
      >
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
            Stop losing leads after hours.
          </h2>
          <p className="mt-3 text-slate-500">
            Same-day triage for serious operators. No pressure—just a clear
            plan.
          </p>
          <a
            href={CALENDLY}
            className="mt-8 inline-block rounded-lg px-10 py-4 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_28px_rgba(34,211,238,0.35)] transition hover:brightness-110"
            style={{ backgroundColor: CYAN }}
          >
            Get started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3 md:px-8">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <span className="font-black uppercase tracking-wide text-white">
                AI Forge Advantage
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              AI automation and lead systems for small businesses that can’t
              afford another missed call.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
              Navigate
            </p>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
              <a href="#" className="hover:text-cyan-400">
                Home
              </a>
              <a href="#tools" className="hover:text-cyan-400">
                Services
              </a>
              <a href="#about" className="hover:text-cyan-400">
                About
              </a>
              <a href="#contact" className="hover:text-cyan-400">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
              Newsletter
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Drop your email—we’ll send one note when we ship new playbooks
              (no spam).
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/50"
                autoComplete="email"
              />
              <a
                href={CALENDLY}
                className="shrink-0 rounded-lg px-4 py-2.5 text-center text-sm font-bold text-black"
                style={{ backgroundColor: CYAN }}
              >
                Subscribe
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-slate-500 transition hover:text-cyan-400"
                aria-label="Social link (replace href with your profile)"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-500 transition hover:text-cyan-400"
                aria-label="Website or directory (replace href)"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} AI Forge Advantage. Fort Worth, TX.
        </p>
      </footer>

      <ChatBox />
    </div>
  );
}
