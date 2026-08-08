import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import CaseStudy from "@/components/CaseStudy";
import { dataWork, edtechOps, dataToolkitNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Analytics and reporting work — SQL audits, executive dashboards, customer segmentation and data-integrity audits — each told as the problem, what I built, and the decision the number changed.",
};

/** The analytics-focused programme study, pulled from the EdTech operations set. */
const featuredAnalytics = edtechOps.filter(
  (item) => item.id === "edtech-programme-analytics",
);

export default function WorkPage() {
  return (
    <>
      <PageBanner
        kicker="Selected work"
        title="The analysis, and the decision each number changed."
        intro={
          <p>
            SQL audits, executive dashboards, customer segmentation and
            data-integrity work — each told the same way: the problem, what I
            built, and what the number changed. A featured reporting system
            first, then the rest of the analysis below.
          </p>
        }
      />

      {/* ── Featured analytics: the reporting-automation programme study, told
          in the four-section narrative format. */}
      {featuredAnalytics.length > 0 ? (
        <section className="relative isolate overflow-hidden bg-signature/[0.05] py-10 sm:py-14">
          <div className="container-content">
            <Reveal>
              <p className="kicker text-amber">Featured work</p>
              <h2 className="mt-2 font-serif text-h1 font-light text-signature">
                Reporting built to be trusted.
              </h2>
              <p className="mt-3 max-w-2xl text-body text-ink">
                The situation, the analysis I owned, what I built, and the
                decisions it changed.
              </p>
            </Reveal>
            <div className="mt-8 space-y-6">
              {featuredAnalytics.map((item) => (
                <FeaturedCaseStudy key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── Analytics projects: SQL, Power BI, Excel — the problem → built →
          result cards. Expand any for the full write-up. */}
      <section className="py-10 sm:py-14">
        <div className="container-content">
          <Reveal>
            <p className="kicker text-blue-lift">Analytics &amp; reporting</p>
            <h2 className="mt-2 font-serif text-h2 font-light text-ink">
              SQL, dashboards, and the decisions behind them.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {dataWork.map((item, i) => (
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
            <p className="mt-5 max-w-2xl text-body text-ink">{dataToolkitNote}</p>
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <LogoMarquee />
        </Reveal>
      </section>
    </>
  );
}
