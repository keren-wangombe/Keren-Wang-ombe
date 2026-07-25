import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import CaseStudy from "@/components/CaseStudy";
import LogoMarquee from "@/components/LogoMarquee";
import TierBackdrop from "@/components/TierBackdrop";
import { caseStudyTiers, toolkitNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Operations & analytics that scale",
  description:
    "Operations and analytics case studies in a problem → build → result format: automation that removes manual load, tracking held to measured accuracy, and reporting that changes decisions.",
};

export default function WorkPage() {
  return (
    <>
      <PageBanner
        kicker="What I build"
        title="Systems for the operation, not just the task."
        intro={
          <p>
            I build the operational backbone: automation that removes manual
            load, tracking held to measured accuracy, and analytics that turns
            raw data into decisions. Each case study below is mapped end to end,
            then told the same way — the problem, what I built, and the measured
            result.
          </p>
        }
      />

      {/* ── Tiers of case studies, each told Problem → Built → Result, led by a
          process-map diagram. A subtle parallax backdrop fades in per tier. */}
      {caseStudyTiers.map((tier, ti) => (
        <section
          key={tier.kicker}
          className={`relative isolate overflow-hidden py-12 sm:py-20 ${
            ti % 2 === 0
              ? "border-b border-signature/10 bg-signature/[0.05]"
              : "border-b border-amber/15 bg-amber/[0.07]"
          }`}
        >
          <TierBackdrop src={tier.backdrop} align={ti % 2 === 0 ? "right" : "left"} />
          <div className="container-content">
            <Reveal>
              <h2 className="font-serif text-h1 font-light text-signature">{tier.name}</h2>
              <p className="mt-3 max-w-2xl text-body text-ink">{tier.tagline}</p>

              {/* Capabilities folded into the section header (not a standalone block). */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="kicker mr-1 text-blue-lift">Also in the kit</span>
                {tier.capabilities
                  .split("·")
                  .map((c) => c.trim().replace(/\.$/, ""))
                  .filter(Boolean)
                  .map((cap) => (
                    <span
                      key={cap}
                      className="inline-block rounded-full bg-signature px-3.5 py-1.5 text-small text-paper transition-colors duration-300 ease-calm hover:bg-blue-lift"
                    >
                      {cap}
                    </span>
                  ))}
              </div>
            </Reveal>

            <div className="mt-8 space-y-6">
              {tier.items.map((item, i) => (
                <CaseStudy key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── The toolkit, note + a continuously rolling logo marquee, on a
          soft navy tint so the band reads as its own section. */}
      <section className="bg-signature/[0.04] py-12 sm:py-16">
        <div className="container-content">
          <Reveal>
            <p className="kicker text-amber">The toolkit</p>
            <p className="mt-5 max-w-2xl text-body text-ink">{toolkitNote}</p>
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <LogoMarquee />
        </Reveal>
      </section>
    </>
  );
}
