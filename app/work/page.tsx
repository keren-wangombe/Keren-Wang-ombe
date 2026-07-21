import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CaseStudy from "@/components/CaseStudy";
import LogoMarquee from "@/components/LogoMarquee";
import DiagramGallery from "@/components/DiagramGallery";
import TierBackdrop from "@/components/TierBackdrop";
import { caseStudyTiers, diagrams, toolkitNote, workClose } from "@/lib/content";
import { pageBanners } from "@/lib/site";

export const metadata: Metadata = {
  title: "Operations & analytics that scale",
  description:
    "Operations and analytics case studies in a problem → build → result format: automation that removes manual load, tracking held to measured accuracy, and reporting that changes decisions.",
};

export default function WorkPage() {
  return (
    <>
      <PageBanner
        image={pageBanners.work}
        kicker="What I build"
        title="Systems for the operation, not just the task."
        intro={
          <p>
            I build the operational backbone: automation that removes manual
            load, tracking held to measured accuracy, and analytics that turns
            raw data into decisions. Every case study below is told the same
            way — the problem, what I built, and the measured result.
          </p>
        }
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#architecture">See the systems</Button>
          <Button href="/advisory" variant="accent">
            Work with me
          </Button>
        </div>
      </PageBanner>

      {/* ── Tiers of case studies, each told Problem → Built → Result.
          A subtle parallax backdrop fades in per tier to underline its message. */}
      {caseStudyTiers.map((tier, ti) => (
        <section key={tier.kicker} className="relative isolate overflow-hidden py-12 sm:py-20">
          <TierBackdrop src={tier.backdrop} align={ti % 2 === 0 ? "right" : "left"} />
          <div className="container-content">
            <Reveal>
              <p className="kicker text-blue-lift">{tier.kicker}</p>
              <h2 className="mt-4 font-serif text-h1 font-light text-signature">{tier.name}</h2>
              <p className="mt-3 max-w-2xl text-body text-ink">{tier.tagline}</p>
            </Reveal>

            <div className="mt-10 space-y-8">
              {tier.items.map((item, i) => (
                <CaseStudy key={item.title} item={item} index={i} />
              ))}
            </div>

            {/* Capabilities, a chip cloud; each pill fades up in sequence. */}
            <div className="mt-12">
              <Reveal>
                <p className="kicker text-blue-lift">Also in the kit</p>
              </Reveal>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {tier.capabilities
                  .split("·")
                  .map((c) => c.trim().replace(/\.$/, ""))
                  .filter(Boolean)
                  .map((cap, i) => (
                    <Reveal as="li" key={cap} delay={i * 90}>
                      <span className="inline-block rounded-full bg-signature px-4 py-2 text-small text-paper transition-colors duration-300 ease-calm hover:bg-blue-lift">
                        {cap}
                      </span>
                    </Reveal>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* ── Architecture diagrams, a dark Signature band so the work pops off
          the Paper. An in-place gallery; click any one to view it larger. */}
      <section id="architecture" className="scroll-mt-20 bg-ink py-16 sm:py-24">
        <div className="container-content">
          <Reveal>
            <p className="kicker text-amber">Selected systems</p>
            <h2 className="mt-5 max-w-2xl font-serif text-h1 font-light text-paper">
              The systems behind the operational decisions.
            </h2>
            <p className="mt-4 max-w-prose text-body text-paper/70">
              A rolling look at how the work is wired, real operational systems,
              mapped end to end. They switch on their own; click any one to view
              it larger.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <div className="rounded-3xl border border-amber/30 bg-paper p-4 shadow-2xl shadow-ink/40 sm:p-6">
              <DiagramGallery diagrams={diagrams} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The toolkit, note + a continuously rolling logo marquee. */}
      <section className="py-12 sm:py-16">
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

      {/* ── Close CTA → Advisory / Contact. */}
      <section className="container-content py-16 sm:py-24">
        <Reveal>
          <div className="rounded-3xl border border-ink/10 bg-paper p-10 text-center sm:p-16">
            <h2 className="mx-auto max-w-2xl font-serif text-h1 font-light text-signature">
              {workClose}
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/advisory">Explore advisory</Button>
              <Button href="/contact" variant="ghost">
                Get in touch
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
