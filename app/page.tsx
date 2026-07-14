import type { Metadata } from "next";
import type { ReactNode } from "react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import EmailCapture from "@/components/EmailCapture";
import { brand } from "@/lib/site";
import { organisations, services, outcomes, type Service } from "@/lib/content";

export const metadata: Metadata = {
  title: "Operations that scale",
  description:
    "Programme operations and analytics: automation, tracking, and reporting systems built around the operational decision inside every workflow, not just the tooling.",
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
      {/* ── HERO — light split: copy left, systems illustration right. */}
      <section className="border-b border-ink/5 bg-background">
        <div className="container-content grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div className="animate-fade-up">
            <p className="kicker text-amber">Programme Operations · Nairobi, Kenya</p>
            <h1 className="mt-6 font-serif text-h1 font-light leading-[1.08] text-ink">
              I build systems that bring{" "}
              <span className="text-amber">clarity</span> to complexity.
            </h1>
            <p className="mt-7 max-w-xl text-body text-ink/70">{brand.oneLine}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href="/contact" variant="accent">
                Let&rsquo;s work together
              </Button>
              <a
                href="/work"
                className="link-amber inline-flex items-center gap-2 text-small font-medium text-signature"
              >
                View my work
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
          <Reveal className="order-first lg:order-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/illustrations/hero-systems.svg"
              alt="An operations dashboard: kanban board, key metrics, and a delivery trend chart"
              className="w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* ── TRUSTED BY — navy band with organisations. */}
      <section className="bg-signature">
        <div className="container-content py-10 sm:py-12">
          <p className="kicker text-center text-paper/55">Trusted by founders &amp; teams</p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {organisations.map((org) => (
              <li key={org} className="font-serif text-lg font-medium text-paper/90">
                {org}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT I DO — four-column grid. */}
      <section className="container-content py-16 sm:py-24">
        <Reveal>
          <p className="kicker text-blue-lift">What I do</p>
          <h2 className="mt-4 max-w-2xl font-serif text-h2 font-light leading-snug text-ink">
            Turning operational chaos into scalable systems.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="div" key={s.title} delay={i * 100} className="flex h-full flex-col bg-paper p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber/10 text-amber">
                {serviceIcon[s.icon]}
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-3 text-small text-ink/70">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── IMPACT — navy band with the headline metrics. */}
      <section className="bg-signature">
        <div className="container-content py-16 sm:py-20">
          <Reveal>
            <p className="kicker text-amber">Impact</p>
            <h2 className="mt-5 max-w-xl font-serif text-h1 font-light text-paper">
              Results measured, not claimed.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <Reveal as="div" key={o.metricLabel} delay={i * 100}>
                <p
                  className={`font-serif text-display font-light leading-none ${
                    i === 0 ? "text-amber" : "text-paper"
                  }`}
                >
                  {o.metric}
                </p>
                <p className="mt-3 text-small text-paper/65">{o.metricLabel}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK A CALL — navy band, what to expect + CTA. */}
      <section className="bg-signature">
        <div className="container-content grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="kicker text-amber">Book a call</p>
            <h2 className="mt-5 max-w-xl font-serif text-h1 font-light text-paper">
              Ready to talk about your operations?
            </h2>
            <p className="mt-6 max-w-lg text-body text-paper/70">
              A short call to understand where things are breaking down and
              whether I&rsquo;m the right person to help fix them.
            </p>
            <div className="mt-9">
              <Button href="/contact" variant="accent">
                Book a call
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="space-y-8">
            <div className="flex gap-4">
              <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-amber" aria-hidden />
              <div>
                <h3 className="font-serif text-lg font-medium text-paper">
                  30-minute discovery call
                </h3>
                <p className="mt-2 text-small text-paper/65">
                  We align on the role, your stage, and what success looks like.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-amber" aria-hidden />
              <div>
                <h3 className="font-serif text-lg font-medium text-paper">
                  No preparation needed
                </h3>
                <p className="mt-2 text-small text-paper/65">
                  Just show up and be open, I&rsquo;ll ask the right questions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-amber" aria-hidden />
              <div>
                <h3 className="font-serif text-lg font-medium text-paper">
                  You&rsquo;ll know by the end
                </h3>
                <p className="mt-2 text-small text-paper/65">
                  Whether I&rsquo;m the right fit and what the next step looks like.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CLOSE — quiet CTA + email capture. */}
      <section className="container-content py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="max-w-xl font-serif text-h1 font-light text-ink">
              Looking for someone who builds the systems, not just runs them?
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="accent">
                Get in touch
              </Button>
              <Button href="/work" variant="ghost">
                See the work
              </Button>
            </div>
          </Reveal>
          <Reveal className="lg:pt-2">
            <EmailCapture />
          </Reveal>
        </div>
      </section>
    </>
  );
}
