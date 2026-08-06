import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import CaseStudy from "@/components/CaseStudy";
import { featuredWork, additionalWork, toolkitNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "The work I take ownership of — onboarding, coordination, tracking and reporting — told the same way each time: the situation, the work I handled, what I improved, and what changed.",
};

export default function WorkPage() {
  return (
    <>
      <PageBanner
        kicker="Selected work"
        title="The work I own, and the systems that keep it reliable."
        intro={
          <p>
            The work I take ownership of — onboarding, follow-ups, coordination,
            tracking and reporting — and the systems I build behind it so fewer
            things get missed. Featured work first, told the same way each time,
            then the rest of the projects below.
          </p>
        }
      />

      {/* ── Featured work: three studies, each told in four sections. */}
      <section className="relative isolate overflow-hidden bg-signature/[0.05] py-10 sm:py-14">
        <div className="container-content">
          <Reveal>
            <p className="kicker text-amber">Featured work</p>
            <h2 className="mt-2 font-serif text-h1 font-light text-signature">
              Told end to end.
            </h2>
            <p className="mt-3 max-w-2xl text-body text-ink">
              Each one the same way — the situation, the recurring work I
              handled, what I improved, and what changed.
            </p>
          </Reveal>
          <div className="mt-8 space-y-6">
            {featuredWork.map((item) => (
              <FeaturedCaseStudy key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional work: every remaining project, content intact. Kept in
          the existing case-study cards so nothing is lost — expand any for the
          full problem → build → result. */}
      <section className="py-10 sm:py-14">
        <div className="container-content">
          <Reveal>
            <p className="kicker text-blue-lift">Additional work</p>
            <h2 className="mt-2 font-serif text-h2 font-light text-ink">
              The rest of the projects.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {additionalWork.map((item, i) => (
              <CaseStudy key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

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
