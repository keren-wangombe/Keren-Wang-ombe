import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import WorkTabs from "@/components/WorkTabs";
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
            raw data into decisions. Each case study is mapped end to end, then
            told the same way — the problem, what I built, and the measured
            result. Switch between Operations and Analytics below.
          </p>
        }
      />

      {/* Mini tabs: Operations / Analytics, both under Work. */}
      <WorkTabs tiers={caseStudyTiers} />

      {/* ── The toolkit, note + a continuously rolling logo marquee. */}
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
