import type { Metadata } from "next";
import type { ReactNode } from "react";
import Button from "@/components/Button";
import Doodle from "@/components/Doodle";
import HeroIntro from "@/components/HeroIntro";
import LinkedInFeed from "@/components/LinkedInFeed";
import Reveal from "@/components/Reveal";
import { contactMailto, social } from "@/lib/site";
import {
  processSteps,
  services,
  outcomes,
  problemPrompts,
  positioning,
  type Service,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Operations that scale",
  description:
    "I take ownership of onboarding, follow-ups, coordination, tracking and reporting — and improve the processes behind that work so fewer things are missed.",
};

/** Line icons for the What I Do grid, keyed to Service.icon. */
const serviceIcon: Record<Service["icon"], ReactNode> = {
  process: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="4" width="6" height="5" rx="1.2" />
      <rect x="15" y="15" width="6" height="5" rx="1.2" />
      <path d="M9 6.5h4a2 2 0 0 1 2 2v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" strokeLinecap="round" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6M17 14.4a5.5 5.5 0 0 1 3.5 4.6" strokeLinecap="round" />
    </svg>
  ),
  systems: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" strokeLinecap="round" />
    </svg>
  ),
  reporting: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <path d="M4 3v18h16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15v-3M12 15V8M16 15v-5" strokeLinecap="round" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO — light split: copy left, systems illustration right, on a
          soft navy-to-amber wash so the page opens with warmth, not white. */}
      <section className="border-b border-ink/5 bg-gradient-to-br from-signature/[0.07] via-background to-amber/[0.09]">
        <div className="container-content grid items-center gap-10 py-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
          <div className="animate-fade-up">
            <p className="kicker text-amber">Programme, Client &amp; Team Operations</p>
            <h1 className="mt-4 font-serif text-h1 font-light leading-[1.08] text-ink">
              I keep important work moving — and make sure{" "}
              <span className="text-amber">the details don&rsquo;t get lost.</span>
            </h1>
            <p className="mt-5 max-w-xl text-body text-ink/70">
              I take ownership of onboarding, follow-ups, coordination, tracking
              and reporting. At ALX I do this across cohorts of 1,000+ learners.
              I also improve the processes behind the work, so fewer things are
              missed and less depends on someone remembering every step.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="/work"
                className="link-amber inline-flex items-center gap-2 text-small font-medium text-signature"
              >
                See what I can own
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
          <Reveal className="order-first pb-4 lg:order-none">
            <HeroIntro />
          </Reveal>
        </div>
      </section>

      {/* ── PROBLEM RECOGNITION — the reader's own week, directly after the
          hero. Compact three-up, reusing the card-grid pattern; no icons. */}
      <section className="py-9 sm:py-11">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-h2 font-light leading-snug text-ink">
              {problemPrompts.heading}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {problemPrompts.items.map((line, i) => (
              <Reveal
                as="div"
                key={line}
                delay={i * 100}
                className="flex h-full items-start gap-3 bg-paper p-6"
              >
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber" />
                <p className="text-body text-ink/75">{line}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP — quick credibility signals on a solid navy band. */}
      <section className="bg-signature">
        <div className="container-content grid grid-cols-2 gap-x-6 gap-y-6 py-7 sm:grid-cols-4">
          {[
            { value: "3+", label: "years in operations" },
            { value: "3,000+", label: "participants supported" },
            { value: "8+", label: "countries coordinated" },
            { value: "15+ hrs", label: "saved weekly through automation" },
          ].map((stat, i) => (
            <Reveal as="div" key={stat.label} delay={i * 80}>
              <p className="font-serif text-h2 font-light leading-none text-amber">{stat.value}</p>
              <p className="mt-2 text-small text-paper/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── WHAT I DO — four-column grid. */}
      <section className="relative isolate overflow-hidden py-9 sm:py-11">
        <Doodle name="sparks" className="absolute right-6 top-2 hidden h-36 w-36 text-amber/[0.12] lg:block" />
        <div className="container-content">
        <Reveal>
          <p className="kicker text-blue-lift">What I do</p>
          <h2 className="mt-3 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-tight text-ink lg:whitespace-nowrap">
            The work I take ownership of.
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="div" key={s.title} delay={i * 100} className="flex h-full flex-col bg-paper p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber/10 text-amber">
                {serviceIcon[s.icon]}
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-small text-ink/70">{s.body}</p>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      {/* ── CENTRAL POSITIONING — the answer to "will she do the detailed work
          herself, or just build systems?" The most important addition; reuses
          the existing band + doodle language. */}
      <section className="relative isolate overflow-hidden border-y border-signature/10 bg-signature/[0.04]">
        <Doodle name="orbit" className="absolute right-6 top-8 hidden h-36 w-36 text-signature/[0.08] lg:block" />
        <div className="container-content py-12 sm:py-16">
          <Reveal>
            <h2 className="max-w-3xl font-serif text-h1 font-light leading-[1.12] text-signature">
              {positioning.heading}
            </h2>
          </Reveal>
          <div className="mt-6 max-w-2xl space-y-5">
            {positioning.paragraphs.map((para, i) => (
              <Reveal as="p" key={para} delay={i * 100} className="text-body text-ink/75">
                {para}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW I WORK — the four-step process on a warm amber-tinted band,
          alternating off the navy numbers bands around it. */}
      <section className="border-y border-amber/15 bg-amber/[0.07]">
        <div className="container-content py-9 sm:py-11">
          <Reveal>
            <p className="kicker text-amber">How I work</p>
            <h2 className="mt-3 max-w-2xl font-serif text-h2 font-light leading-snug text-ink">
              Here&rsquo;s how the work gets done.
            </h2>
          </Reveal>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 100} className="flex h-full flex-col bg-paper p-6">
                <p className="font-serif text-h2 font-light leading-none text-amber">{p.step}</p>
                <h3 className="mt-3 font-serif text-xl font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-small text-ink/70">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── IMPACT — navy band with the headline metrics. */}
      <section className="bg-signature">
        <div className="container-content py-8 sm:py-9">
          <Reveal>
            <p className="kicker text-amber">Impact</p>
            <h2 className="mt-2 max-w-xl font-serif text-h2 font-light text-paper">
              Results measured, not claimed.
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <Reveal as="div" key={o.metricLabel} delay={i * 100}>
                <p
                  className={`font-serif text-h1 font-light leading-none ${
                    i === 0 ? "text-amber" : "text-paper"
                  }`}
                >
                  {o.metric}
                </p>
                <p className="mt-2 text-small text-paper/65">{o.metricLabel}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKEDIN — a live post embed / follow CTA, breaks up the text. */}
      <LinkedInFeed />

      {/* ── FINAL CTA — the objection-answering close. Email + LinkedIn, and an
          availability note covering both fractional and full-time (one funnel). */}
      <section className="relative isolate overflow-hidden border-y border-amber/25 bg-amber/10">
        <Doodle name="flow" className="absolute left-6 top-8 hidden h-32 w-32 text-amber/[0.16] lg:block" />
        <Doodle name="orbit" className="absolute right-6 bottom-6 hidden h-32 w-32 text-amber/[0.14] lg:block" />
        <div className="container-content py-14 sm:py-20 text-center">
          <Reveal>
            <p className="kicker text-amber">The short version</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-h1 font-light leading-[1.12] text-signature">
              Need someone who can run the work and improve how it gets done?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-body text-ink/75">
              Tell me what&rsquo;s taking too long, slipping through the cracks or
              depending on you to remember.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={contactMailto} variant="accent">
                Email me
              </Button>
              <Button href={social.linkedin} variant="ghost" target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </Button>
            </div>
            <p className="mt-6 text-small text-ink/60">
              Available for fractional operations support and full-time operations roles.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
