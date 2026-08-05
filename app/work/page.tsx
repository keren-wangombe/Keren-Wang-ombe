import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import CaseStudy from "@/components/CaseStudy";
import FeaturedCase from "@/components/FeaturedCase";
import Button from "@/components/Button";
import { caseStudyTiers, featuredWork, toolkitNote } from "@/lib/content";
import { contactMailto, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "The work I've owned",
  description:
    "Case studies in a plain format: the situation, the recurring work I handled, the process I improved, and what changed — onboarding, coordination, records and reporting, with the systems that made them more reliable.",
};

/** Additional projects, flattened out of the old discipline tiers into one
    secondary list beneath the three featured cases. */
const additionalWork = caseStudyTiers.flatMap((tier) => tier.items);

export default function WorkPage() {
  return (
    <>
      <PageBanner
        kicker="Selected Work"
        title={
          <>
            The work I&rsquo;ve owned&mdash;and how I made it more reliable.
          </>
        }
        intro={
          <p>
            These projects show how I manage onboarding, coordination,
            follow-ups, records and reporting, then improve the processes behind
            the work. Each example starts with what needed to be handled&mdash;not
            only the tool or system that was built.
          </p>
        }
      />

      {/* ── FEATURED WORK — the three lead cases, told in full. */}
      <section className="bg-signature/[0.04] py-10 sm:py-14">
        <div className="container-content">
          <Reveal>
            <p className="kicker text-amber">Featured work</p>
            <h2 className="mt-2 max-w-2xl font-serif text-h1 font-light text-signature">
              Three processes I owned end to end.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6 sm:space-y-8">
            {featuredWork.map((item, i) => (
              <Reveal as="div" key={item.id} delay={i * 80}>
                <FeaturedCase item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL WORK — the remaining projects, kept secondary. The
          collapsible cards stay compact so the featured cases lead. */}
      <section className="py-10 sm:py-14">
        <div className="container-content">
          <Reveal>
            <p className="kicker text-blue-lift">Additional work</p>
            <h2 className="mt-2 max-w-2xl font-serif text-h2 font-light text-ink">
              More operations and analytics projects.
            </h2>
            <p className="mt-3 max-w-2xl text-body text-ink/70">
              Open any card for the problem, what I built and the result.
            </p>
          </Reveal>
          <div className="mt-8 space-y-5">
            {additionalWork.map((item, i) => (
              <CaseStudy key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── The toolkit, kept secondary: the tools behind the work. */}
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

      {/* ── CLOSE — same positioning as the homepage. */}
      <section className="relative isolate overflow-hidden border-y border-amber/25 bg-amber/10">
        <div className="container-content py-14 sm:py-20 text-center">
          <Reveal>
            <p className="kicker text-amber">Work with me</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-h1 font-light leading-[1.12] text-signature">
              Need someone who can own the work and improve the way it runs?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-body text-ink/70">
              Tell me what needs tracking, following up, coordinating or making
              easier to manage.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={contactMailto}>Email me</Button>
              <Button href={social.linkedin} target="_blank" rel="noreferrer" variant="ghost">
                Connect on LinkedIn
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
