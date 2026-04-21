import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe,
  PhoneOff,
  Workflow,
} from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/ai-advantage-freelance-consulting/30min";
const PHONE_NUMBER = "325-389-1081";
const PHONE_LINK = "tel:3253891081";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-24 pt-6 sm:px-6 md:px-10 lg:px-14">
      <header className="mb-12 flex h-32 items-center justify-between rounded-2xl border border-[#FF4D00]/45 border-b-[#FF4D00]/80 bg-gradient-to-r from-[#0A0F1E]/95 to-black px-5 py-8 sm:px-8 backdrop-blur [box-shadow:0_0_34px_-18px_rgba(255,77,0,0.95)]">
        <p className="text-5xl font-bold tracking-tight text-[#FF4D00] [text-shadow:0_0_30px_rgba(255,77,0,0.82)]">
          AI Forge Advantage
        </p>
        <nav className="hidden items-center gap-9 md:flex">
          {["Services", "How It Works", "Book Audit"].map((item) => (
            <a
              key={item}
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="text-lg text-white/85 transition hover:text-[#00A3FF] hover:[text-shadow:0_0_18px_rgba(0,163,255,0.7)]"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-spotlight reveal rounded-3xl border border-[#FF4D00]/45 bg-gradient-to-b from-[#0A0F1E]/80 to-black px-6 py-18 shadow-[0_0_42px_-18px_rgba(255,77,0,0.85)] sm:px-10 sm:py-22 md:px-12 lg:px-16 lg:py-24">
        <p className="mb-8 inline-flex items-center rounded-full border border-[#FF4D00]/70 bg-[#FF4D00]/12 px-5 py-2 text-xl font-semibold uppercase tracking-[0.24em] text-[#FF4D00] [text-shadow:0_0_16px_rgba(255,77,0,0.6)]">
          Elite Automation Consulting
        </p>
        <h1 className="max-w-5xl text-5xl font-bold leading-[0.96] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Forge Your Competitive Edge.
        </h1>
        <p className="mt-8 max-w-4xl text-xl leading-relaxed font-light text-white/85 sm:text-2xl">
          Elite AI infrastructure and automation consulting for serious business
          owners. Stop losing leads to missed calls.
        </p>
        <p className="mt-5 text-xl text-[#00A3FF] [text-shadow:0_0_12px_rgba(0,163,255,0.55)]">
          Call or Text:{" "}
          <a href={PHONE_LINK} className="font-semibold text-white">
            {PHONE_NUMBER}
          </a>
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="cinematic-hover forge-pulse mt-10 inline-flex items-center gap-3 rounded-xl border border-[#FF4D00] bg-[#FF4D00] px-6 py-3.5 text-lg font-semibold text-black [box-shadow:0_0_20px_rgba(255,77,0,0.65)] hover:-translate-y-0.5 hover:bg-[#ff6a2e] sm:mt-12 sm:px-8 sm:py-4 sm:[box-shadow:0_0_28px_rgba(255,77,0,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D00]"
        >
          Book a Free Strategy Audit <ArrowRight size={20} />
        </a>
      </section>

      <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-[#00A3FF]/45 to-transparent" />

      <section className="reveal reveal-delay-1 mt-12 sm:mt-14">
        <h2 className="text-7xl font-semibold tracking-tight text-white">
          Missed Calls Are Costing You More Than You Think.
        </h2>
        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-3">
          {[
            "60% of calls go unanswered",
            "Every missed call = lost revenue",
            "Your competitors are already automating",
          ].map((stat) => (
            <div
              key={stat}
              className="rounded-2xl border border-[#00A3FF]/35 bg-gradient-to-b from-[#0A0F1E]/50 to-black/40 p-7 [box-shadow:0_0_24px_-15px_rgba(0,163,255,0.75)] sm:p-8 sm:[box-shadow:0_0_30px_-14px_rgba(0,163,255,0.9)]"
            >
              <p className="text-xl uppercase tracking-[0.16em] text-[#FF4D00] [text-shadow:0_0_14px_rgba(255,77,0,0.7)]">
                Real Cost
              </p>
              <p className="mt-4 text-xl leading-relaxed font-medium text-white/95 sm:text-2xl">
                {stat}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-[#FF4D00]/45 to-transparent" />

      <section className="reveal reveal-delay-2 mt-12 sm:mt-14">
        <h2 className="text-7xl font-semibold tracking-tight text-white">
          Services Built For Immediate ROI
        </h2>
        <div className="mt-10 grid gap-6 sm:gap-7 lg:grid-cols-2">
          <article className="cinematic-hover rounded-2xl border border-[#FF4D00]/45 bg-gradient-to-b from-[#FF4D00]/14 to-black/55 p-8 [box-shadow:0_0_28px_-14px_rgba(255,77,0,0.82)] hover:-translate-y-1 hover:border-[#FF4D00]/80 sm:p-10 sm:[box-shadow:0_0_36px_-14px_rgba(255,77,0,0.95)]">
            <div className="mb-7 inline-flex rounded-lg border border-[#FF4D00]/40 p-3 text-[#FF4D00] [box-shadow:0_0_16px_rgba(255,77,0,0.45)]">
              <Bot size={24} />
            </div>
            <h3 className="text-7xl font-semibold leading-[0.95] text-white">AI Sidekick Bot</h3>
            <p className="mt-3 text-2xl text-[#FF4D00] [text-shadow:0_0_16px_rgba(255,77,0,0.7)]">
              Starting at $497
            </p>
            <p className="mt-6 text-xl leading-relaxed text-white/82">
              A 24/7 AI that answers leads, qualifies them, and books
              appointments while you sleep.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="cinematic-hover mt-9 inline-flex items-center gap-2 rounded-xl border border-[#FF4D00] bg-[#FF4D00] px-6 py-3 text-lg font-semibold text-black [box-shadow:0_0_26px_rgba(255,77,0,0.7)] hover:-translate-y-0.5 hover:bg-[#ff6a2e]"
            >
              Get Started <ArrowRight size={16} />
            </a>
          </article>

          <article className="cinematic-hover rounded-2xl border border-[#00A3FF]/45 bg-gradient-to-b from-[#0A0F1E]/60 to-black/55 p-8 [box-shadow:0_0_28px_-14px_rgba(0,163,255,0.82)] hover:-translate-y-1 hover:border-[#00A3FF]/80 sm:p-10 sm:[box-shadow:0_0_36px_-14px_rgba(0,163,255,0.95)]">
            <div className="mb-7 inline-flex rounded-lg border border-[#00A3FF]/45 p-3 text-[#00A3FF] [box-shadow:0_0_16px_rgba(0,163,255,0.45)]">
              <Globe size={24} />
            </div>
            <h3 className="text-7xl font-semibold leading-[0.95] text-white">Strategic Website</h3>
            <p className="mt-3 text-2xl text-[#00A3FF] [text-shadow:0_0_16px_rgba(0,163,255,0.7)]">
              Starting at $797
            </p>
            <p className="mt-6 text-xl leading-relaxed text-white/82">
              A fast, modern, lead-capture website built to build trust and
              convert visitors.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="cinematic-hover mt-9 inline-flex items-center gap-2 rounded-xl border border-[#FF4D00] bg-[#FF4D00] px-6 py-3 text-lg font-semibold text-black [box-shadow:0_0_26px_rgba(255,77,0,0.7)] hover:-translate-y-0.5 hover:bg-[#ff6a2e]"
            >
              Get Started <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-[#00A3FF]/45 to-transparent" />

      <section className="reveal reveal-delay-3 mt-12 sm:mt-14">
        <h2 className="text-7xl font-semibold tracking-tight text-white">
          How It Works
        </h2>
        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-3">
          {[
            {
              title: "We learn your business",
              icon: <PhoneOff size={18} />,
            },
            {
              title: "We build your AI infrastructure",
              icon: <Workflow size={18} />,
            },
            {
              title: "You close more deals on autopilot",
              icon: <CheckCircle2 size={18} />,
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[#00A3FF]/30 bg-gradient-to-b from-[#0A0F1E]/45 to-black/40 p-7 [box-shadow:0_0_24px_-18px_rgba(0,163,255,0.75)] sm:p-8 sm:[box-shadow:0_0_32px_-18px_rgba(0,163,255,0.85)]"
            >
              <p className="text-xl uppercase tracking-[0.2em] text-[#FF4D00] [text-shadow:0_0_12px_rgba(255,77,0,0.6)]">
                Step {index + 1}
              </p>
              <div className="mt-5 inline-flex rounded-lg border border-[#00A3FF]/35 p-3 text-[#00A3FF] [box-shadow:0_0_18px_rgba(0,163,255,0.38)]">
                {step.icon}
              </div>
              <h3 className="mt-5 text-7xl leading-[0.95] font-medium text-white">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="reveal reveal-delay-3 mt-24 rounded-2xl border border-[#FF4D00]/25 bg-gradient-to-r from-black/80 to-[#0A0F1E]/60 px-8 py-10">
        <p className="text-7xl font-semibold leading-[0.95] text-white">
          AI Forge Advantage — Your Unfair Advantage.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-xl text-white/72">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="mailto:Ai.advantage.freelance.consulting@gmail.com"
              className="transition hover:text-white"
            >
              Ai.advantage.freelance.consulting@gmail.com
            </a>
            <a href={PHONE_LINK} className="text-white transition hover:text-[#00A3FF]">
              {PHONE_NUMBER}
            </a>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="w-fit text-[#FF4D00] [text-shadow:0_0_14px_rgba(255,77,0,0.7)] transition hover:text-[#ff6a2e]"
          >
            {CALENDLY_URL}
          </a>
        </div>
      </footer>
    </main>
  );
}
