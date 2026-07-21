import type { Metadata } from "next";
import type { ReactNode } from "react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { brand } from "@/lib/site";
import { featuredCaseStudies, processSteps, services, outcomes, type Service } from "@/lib/content";

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

      {/* ── TRUST STRIP — quick credibility signals right under the hero. */}
      <section className="border-b border-ink/5 bg-paper">
        <div className="container-content grid grid-cols-2 gap-x-6 gap-y-6 py-8 sm:grid-cols-4">
          {[
            { value: "3+", label: "years in programme operations" },
            { value: "3,000+", label: "learners supported" },
            { value: "8+", label: "African countries coordinated" },
            { value: "15+ hrs", label: "saved weekly through automation" },
          ].map((stat, i) => (
            <Reveal as="div" key={stat.label} delay={i * 80}>
              <p className="font-serif text-h2 font-light leading-none text-signature">{stat.value}</p>
              <p className="mt-2 text-small text-ink/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FEATURED WORK — the three strongest case studies, metric-first,
          so a visitor scanning for relevant experience finds it immediately. */}
      <section className="container-content py-16 sm:py-24">
        <Reveal>
          <p className="kicker text-blue-lift">Featured work</p>
          <h2 className="mt-4 max-w-2xl font-serif text-h2 font-light leading-snug text-ink">
            Case studies with the number up front.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredCaseStudies.map((cs, i) => (
            <Reveal
              as="div"
              key={cs.title}
              delay={i * 100}
              className="flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-8 transition-shadow duration-300 ease-calm hover:shadow-xl hover:shadow-ink/10"
            >
              <p className="font-serif text-display font-light leading-none text-amber">{cs.metric}</p>
              <p className="mt-2 text-small text-ink/60">{cs.metricLabel}</p>
              <h3 className="mt-6 font-serif text-xl font-medium text-ink">{cs.title}</h3>
              <p className="mt-3 flex-1 text-small text-ink/70">{cs.blurb}</p>
              <a
                href="/work"
                className="link-amber mt-6 inline-flex items-center gap-2 text-small font-medium text-signature"
              >
                Read the case study
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          ))}
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

      {/* ── HOW I WORK — the four-step process, a credibility signal in its
          own right: hiring managers look for evidence of a repeatable method. */}
      <section className="container-content pb-16 sm:pb-24">
        <Reveal>
          <p className="kicker text-blue-lift">How I work</p>
          <h2 className="mt-4 max-w-2xl font-serif text-h2 font-light leading-snug text-ink">
            The same method, every system.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 100} className="flex h-full flex-col bg-paper p-8">
              <p className="font-serif text-h2 font-light leading-none text-amber">{p.step}</p>
              <h3 className="mt-4 font-serif text-xl font-medium text-ink">{p.title}</h3>
              <p className="mt-3 text-small text-ink/70">{p.body}</p>
            </Reveal>
          ))}
        </ol>
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

      {/* ── CLOSE — quiet CTA. */}
      <section className="container-content py-20 sm:py-28">
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
      </section>
    </>
  );
}
