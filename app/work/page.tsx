import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import CaseStudy from "@/components/CaseStudy";
import { featuredWork, edtechOps, operationsWork, toolkitNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "The work I take ownership of — onboarding, coordination, tracking and reporting — told the same simple way: the situation, what I did, what I improved, and what changed.",
};

export default function WorkPage() {
  return (
    <>
      {/* ── Compact page hero (matches home). */}
      <section className="border-b border-ink/5 bg-gradient-to-br from-signature/[0.07] via-background to-amber/[0.08]">
        <div className="container-content py-6 sm:py-8">
          <Reveal>
            <p className="kicker text-amber">Selected work</p>
            <h1 className="mt-3 max-w-3xl font-serif text-h1 font-light leading-[1.08] text-signature">
              The work I own, and the systems that keep it reliable.
            </h1>
            <p className="mt-4 max-w-2xl text-body text-ink/75">
              Onboarding, coordination, tracking and reporting — and the simple
              systems I build behind them. Open any card to read the full story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Featured work: narrative studies, cool tint. */}
      <section className="border-b border-signature/10 bg-signature/[0.04] py-6 sm:py-8">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-h2 font-light text-signature">Featured work</h2>
            <span className="mt-2.5 block h-px w-11 bg-amber" aria-hidden />
            <p className="mt-4 max-w-2xl text-body text-ink/75">
              Each one the same way — the situation, the work I handled, what I
              improved, and what changed.
            </p>
          </Reveal>
          <div className="mt-6 space-y-5">
            {featuredWork.map((item) => (
              <FeaturedCaseStudy key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Programme operations: warm amber tint. */}
      <section className="border-b border-amber/15 bg-amber/[0.06] py-6 sm:py-8">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-h2 font-light text-signature">Programme operations</h2>
            <span className="mt-2.5 block h-px w-11 bg-amber" aria-hidden />
            <p className="mt-4 max-w-2xl text-body text-ink/75">
              Owning complex programme delivery, building the systems behind it,
              and measuring what improves.
            </p>
          </Reveal>
          <div className="mt-6 space-y-5">
            {edtechOps.map((item) => (
              <FeaturedCaseStudy key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── More work: the problem → built → result cards, paper. */}
      <section className="py-6 sm:py-8">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-h2 font-light text-signature">More work</h2>
            <span className="mt-2.5 block h-px w-11 bg-amber" aria-hidden />
          </Reveal>
          <div className="mt-6 space-y-4">
            {operationsWork.map((item, i) => (
              <CaseStudy key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Toolkit, cool tint, tight. */}
      <section className="border-t border-signature/10 bg-signature/[0.04] py-6 sm:py-8">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-h2 font-light text-signature">The toolkit</h2>
            <span className="mt-2.5 block h-px w-11 bg-amber" aria-hidden />
            <p className="mt-4 max-w-2xl text-body text-ink/75">{toolkitNote}</p>
          </Reveal>
        </div>
        <Reveal className="mt-8">
          <LogoMarquee />
        </Reveal>
      </section>
    </>
  );
}
