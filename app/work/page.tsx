import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import CaseStudy from "@/components/CaseStudy";
import { dataWork, edtechOps, dataToolkitNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Data analysis and reporting work — SQL audits, dashboards, customer segmentation and data-quality checks — each told as the problem, what I built, and what the number changed.",
};

/** The analytics-focused programme study, pulled from the EdTech operations set. */
const featuredAnalytics = edtechOps.filter(
  (item) => item.id === "edtech-programme-analytics",
);

export default function WorkPage() {
  return (
    <>
      {/* ── Compact page hero (matches home). */}
      <section className="border-b border-ink/5 bg-gradient-to-br from-signature/[0.07] via-background to-amber/[0.08]">
        <div className="container-content py-6 sm:py-8">
          <Reveal>
            <p className="kicker text-amber">Selected work</p>
            <h1 className="mt-3 max-w-3xl font-serif text-h1 font-light leading-[1.08] text-signature">
              Real projects, and what each number changed.
            </h1>
            <p className="mt-4 max-w-2xl text-body text-ink/75">
              Each one told the same simple way: the problem, what I built, and
              the result. Open any card to read the full story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Featured: the reporting-automation study, cool tint. */}
      {featuredAnalytics.length > 0 ? (
        <section className="border-b border-signature/10 bg-signature/[0.04] py-6 sm:py-8">
          <div className="container-content">
            <Reveal>
              <h2 className="font-serif text-h2 font-light text-signature">Featured work</h2>
              <span className="mt-2.5 block h-px w-11 bg-amber" aria-hidden />
            </Reveal>
            <div className="mt-6 space-y-5">
              {featuredAnalytics.map((item) => (
                <FeaturedCaseStudy key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── Projects: the problem → built → result cards. */}
      <section className="py-6 sm:py-8">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-h2 font-light text-signature">Analysis &amp; reporting</h2>
            <span className="mt-2.5 block h-px w-11 bg-amber" aria-hidden />
          </Reveal>
          <div className="mt-6 space-y-4">
            {dataWork.map((item, i) => (
              <CaseStudy key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Toolkit, warm amber tint, tight. */}
      <section className="border-t border-amber/15 bg-amber/[0.06] py-6 sm:py-8">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-h2 font-light text-signature">The toolkit</h2>
            <span className="mt-2.5 block h-px w-11 bg-amber" aria-hidden />
            <p className="mt-4 max-w-2xl text-body text-ink/75">{dataToolkitNote}</p>
          </Reveal>
        </div>
        <Reveal className="mt-8">
          <LogoMarquee />
        </Reveal>
      </section>
    </>
  );
}
