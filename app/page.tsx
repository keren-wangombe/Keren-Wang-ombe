import type { Metadata } from "next";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { contactEmail, contactMailto, heroPortrait, resumeFile, social } from "@/lib/site";
import {
  homeHero,
  heroToolGroups,
  homeStats,
  whatIDo,
  featuredCards,
  viewAllWorkLabel,
  approachHeading,
  approachSteps,
  aboutStrip,
  type IconKey,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Data analysis, reports & dashboards",
  description: homeHero.intro,
};

/** Simple line icons keyed to content IconKey. */
const icon: Record<IconKey, ReactNode> = {
  chart: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <path d="M4 3v18h16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15v-3M12 15V8M16 15v-5" strokeLinecap="round" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" strokeLinecap="round" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6M17 14.4a5.5 5.5 0 0 1 3.5 4.6" strokeLinecap="round" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" strokeLinecap="round" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" strokeLinecap="round" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  ),
  explore: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <path d="M4 19 9 12l4 3 7-9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="13" cy="15" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  query: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" strokeLinecap="round" />
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <path d="M9 18h6M10 21h4" strokeLinecap="round" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  coordinate: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" />
      <path d="M8 7.5 10.5 16M16 7.5 13.5 16" strokeLinecap="round" />
    </svg>
  ),
  onboard: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <path d="M4 6h16v12H4z" /><path d="m8 12 2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" strokeLinecap="round" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO: copy left, portrait + "Tools I use" card right. */}
      <section className="border-b border-ink/5 bg-gradient-to-br from-signature/[0.06] via-background to-amber/[0.07]">
        <div className="container-content grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-14">
          <div className="animate-fade-up">
            <p className="kicker text-amber">{homeHero.kicker}</p>
            <h1 className="mt-4 font-serif text-h1 font-light leading-[1.08] text-signature">
              {homeHero.title}
            </h1>
            <p className="mt-5 max-w-xl text-body text-ink/75">{homeHero.intro}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href={homeHero.primaryCta.href} variant="primary">
                {homeHero.primaryCta.label} →
              </Button>
              <a
                href={resumeFile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-ink/20 px-5 py-3 text-small font-medium text-ink transition-colors duration-300 ease-calm hover:border-signature hover:text-signature"
              >
                Download résumé
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          <Reveal className="relative order-first lg:order-none">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-ink/10 shadow-xl shadow-ink/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={heroPortrait} alt="Keren Wang'ombe" className="aspect-[4/5] w-full object-cover" />
            </div>
            {/* Tools I use — small floating card. */}
            <div className="mx-auto mt-4 max-w-md rounded-2xl border border-ink/10 bg-paper/95 p-4 shadow-lg shadow-ink/10 lg:absolute lg:-bottom-6 lg:-right-4 lg:mt-0 lg:w-56 lg:max-w-none">
              <p className="kicker text-ink/45">Tools I use</p>
              <div className="mt-3 space-y-3">
                {heroToolGroups.map((g) => (
                  <div key={g.group}>
                    <p className="text-[0.7rem] font-medium uppercase tracking-wide text-ink/50">{g.group}</p>
                    <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1.5">
                      {g.items.map((t) => (
                        <span key={t.name} className="inline-flex items-center gap-1.5 text-small text-ink/80">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={t.logo} alt="" className="h-4 w-4 object-contain" />
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STAT STRIP */}
      <section className="py-10 sm:py-12">
        <div className="container-content">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {homeStats.map((s, i) => (
              <Reveal as="div" key={s.sub} delay={i * 80} className="flex h-full flex-col gap-2 bg-paper p-6">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-signature/10 text-signature">{icon[s.icon]}</span>
                <p className="mt-1 font-serif text-h2 font-light leading-none text-signature">{s.value}</p>
                <p className="text-small text-ink/75">{s.label}</p>
                <p className="mt-auto pt-1 text-[0.75rem] uppercase tracking-wide text-ink/45">{s.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I DO */}
      <section className="border-y border-ink/5 bg-signature/[0.03] py-11 sm:py-14">
        <div className="container-content">
          <Reveal className="text-center">
            <h2 className="font-serif text-h2 font-light text-signature">What I do</h2>
            <span className="mx-auto mt-3 block h-px w-12 bg-amber" aria-hidden />
          </Reveal>
          <div className="mt-9 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-5">
            {whatIDo.map((w, i) => (
              <Reveal as="div" key={w.title} delay={i * 80} className="text-center sm:text-left">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-amber/10 text-amber sm:mx-0">{icon[w.icon]}</span>
                <h3 className="mt-4 font-serif text-lg font-medium text-ink">{w.title}</h3>
                <p className="mt-2 text-small text-ink/70">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK */}
      <section className="py-11 sm:py-14">
        <div className="container-content">
          <Reveal className="text-center">
            <h2 className="font-serif text-h2 font-light text-signature">Featured work</h2>
            <span className="mx-auto mt-3 block h-px w-12 bg-amber" aria-hidden />
          </Reveal>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {featuredCards.map((c, i) => (
              <Reveal as="div" key={c.title} delay={i * 100} className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-sm">
                <div className="border-b border-ink/10 bg-signature/[0.04]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt="" className="aspect-[16/10] w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-medium text-ink">{c.title}</h3>
                  <p className="mt-2 text-small text-ink/70">{c.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-md bg-signature/[0.06] px-2.5 py-1 text-[0.75rem] font-medium text-signature">{t}</span>
                    ))}
                  </div>
                  <a href={c.href} className="link-amber mt-5 inline-flex items-center gap-1.5 text-small font-medium text-signature">
                    View case study →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-9 text-center">
            <Button href="/work" variant="primary">
              {viewAllWorkLabel} →
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ── MY APPROACH */}
      <section className="border-y border-ink/5 bg-signature/[0.03] py-11 sm:py-14">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-h2 font-light text-signature">{approachHeading}</h2>
            <span className="mt-3 block h-px w-12 bg-amber" aria-hidden />
          </Reveal>
          <ol className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {approachSteps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80}>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-amber/40 font-serif text-lg text-amber">{s.n}</span>
                <h3 className="mt-4 font-serif text-lg font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-small text-ink/70">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── HI, I'M KEREN strip */}
      <section className="py-12 sm:py-16">
        <div className="container-content grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="flex items-center gap-6">
            <div className="w-32 shrink-0 overflow-hidden rounded-2xl border border-ink/10 shadow-md shadow-ink/10 sm:w-40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={heroPortrait} alt="Keren Wang'ombe" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-h2 font-light text-signature">{aboutStrip.greeting}</h2>
              <p className="mt-3 max-w-sm text-small text-ink/75">{aboutStrip.bio}</p>
            </div>
          </Reveal>

          <Reveal className="lg:border-l lg:border-ink/10 lg:pl-16">
            <h3 className="font-serif text-xl font-light leading-snug text-ink">{aboutStrip.ctaHeading}</h3>
            <p className="mt-3 text-small text-ink/70">{aboutStrip.ctaSub}</p>
            <div className="mt-6">
              <Button href={contactMailto} variant="primary">Let&rsquo;s connect</Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-small text-ink/70">
              <a href={`mailto:${contactEmail}`} className="link-amber inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {contactEmail}
              </a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" className="link-amber inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
