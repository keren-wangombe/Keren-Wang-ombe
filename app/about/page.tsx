import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { bioCloseText, bioRoles, bioStory } from "@/lib/content";
import { aboutPortrait } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "An operations professional who coordinates programmes and builds the simple systems that keep the work moving.",
};

/** Key facts to bold in the bio so the important bits catch the eye. */
const HIGHLIGHTS = [
  "thousands of learners across twelve countries",
  "data quality is a discipline",
  "86% completion rate",
  "81% learner satisfaction",
  "98% data accuracy",
  "1,046 learners",
  "more than 15 hours",
  "50%",
];

function highlight(text: string) {
  const escaped = HIGHLIGHTS.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "g");
  return text.split(re).map((part, i) =>
    HIGHLIGHTS.includes(part) ? (
      <strong key={i} className="font-semibold text-signature">{part}</strong>
    ) : (
      part
    ),
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── Compact hero: copy + portrait (matches home). */}
      <section className="relative isolate overflow-hidden border-b border-ink/5 bg-gradient-to-br from-signature/[0.07] via-background to-amber/[0.08]">
        <div className="container-content grid items-center gap-8 py-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <Reveal>
            <p className="kicker text-amber">About</p>
            <h1 className="mt-3 font-serif text-h1 font-light leading-[1.08] text-signature">
              I make everyday operations easier to run.
            </h1>
            <p className="mt-4 max-w-xl text-body text-ink/75">
              I coordinate programmes and build the simple systems behind them, so
              teams stay organised, leaders can see what&rsquo;s happening, and the
              people they serve get a better experience.
            </p>
          </Reveal>
          <Reveal className="relative order-first lg:order-none">
            <div aria-hidden className="absolute -right-2 -top-3 hidden h-full w-full rounded-3xl bg-amber/15 lg:block lg:translate-x-3 lg:translate-y-3" />
            <div className="relative mx-auto max-w-[15rem] overflow-hidden rounded-3xl border border-ink/10 shadow-xl shadow-ink/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={aboutPortrait} alt="Keren Wang'ombe" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The story. */}
      <section className="py-6 sm:py-8">
        <div className="container-content">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14">
              <div>
                <span className="block h-px w-11 bg-amber" aria-hidden />
                <h2 className="mt-4 font-serif text-h2 font-light text-signature">
                  How I work
                </h2>
              </div>
              <div className="space-y-3.5">
                {bioStory.map((para, i) => (
                  <p key={i} className="text-body text-ink/80">{highlight(para)}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Roles + close line, navy tint. */}
      <section className="border-y border-signature/10 bg-signature/[0.05]">
        <div className="container-content py-6 text-center">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-serif text-h1 font-light leading-none text-signature">
              {bioRoles.map((role, i) => (
                <span key={role} className="inline-flex items-center gap-x-5">
                  {i > 0 ? <span className="text-amber" aria-hidden>·</span> : null}
                  {role}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-body text-ink/80">{bioCloseText}</p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA, warm amber wash. */}
      <section className="border-t border-amber/20 bg-amber/[0.08]">
        <div className="container-content py-6 sm:py-8">
          <Reveal className="text-center">
            <h2 className="mx-auto max-w-2xl font-serif text-h2 font-light text-ink">
              If any of this sounds like what you need, let&rsquo;s connect.
            </h2>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button href="/work" variant="primary">See my work</Button>
              <Button href="/contact" variant="ghost">Get in touch</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
