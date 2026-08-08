import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CollectionCard from "@/components/CollectionCard";
import { entryTypeMeta } from "@/lib/library";
import { pageBanners } from "@/lib/site";

export const metadata: Metadata = {
  title: "How I work: the operating method",
  description:
    "The method behind the systems: diagnose the friction, standardise the process, automate what shouldn't be manual, track it honestly, and report the decision, not the noise.",
};

const method = [
  {
    step: "01",
    title: "Diagnose the friction",
    body: "Follow the work, not the org chart. Where does a task wait? Where does someone re-key the same data? The bottleneck is usually a seam, not a team.",
  },
  {
    step: "02",
    title: "Standardise before you automate",
    body: "An SOP first. Automating a process you haven't defined just makes the mess faster, so I get the steps clear and repeatable before wiring anything.",
  },
  {
    step: "03",
    title: "Automate the repeatable",
    body: "The frequent, rule-based, error-prone work, intake, tracking, notifications, reconciliation, moves to Apps Script, Zapier, or Make. Hours come back within a week.",
  },
  {
    step: "04",
    title: "Build one source of truth",
    body: "Scattered spreadsheets drift because every copy invites a different edit. I build a self-updating tracker and hold it to a measured accuracy target.",
  },
  {
    step: "05",
    title: "Report the decision, not the noise",
    body: "The step that earns its keep: reporting built around what leadership should do next, so the number changes what happens, not just what's on the slide.",
  },
];

const whyExplainers = [
  {
    title: "Why automation",
    body: "Because manual work doesn't just cost hours, it costs accuracy. Removing the handoff removes the error with it.",
  },
  {
    title: "Why tracking",
    body: "Because status you have to chase is status you don't really have. One source of truth turns chasing into reading.",
  },
  {
    title: "Why analytics",
    body: "Because the point of a number is to change a decision. Reporting built around a decision is the difference between insight and a dashboard nobody opens.",
  },
];

export default function StartHerePage() {
  return (
    <>
      <PageBanner
        image={pageBanners.learn}
        kicker="How I work"
        title="Diagnose. Standardise. Automate. Track. Report."
        intro={
          <p>
            Every system on this site was built the same way, not by working
            harder, but by treating the workflow as a system waiting to be built.
            This is the method underneath the case studies: how I turn
            operational chaos into something that runs itself.
          </p>
        }
      >
        <Button href="/work">See it applied</Button>
      </PageBanner>

      {/* ── The operating method, in order. */}
      <section className="container-content py-12 sm:py-16">
        <Reveal>
          <h2 className="font-serif text-h2 font-light text-ink">
            The operating method, in order
          </h2>
        </Reveal>
        <ol className="mt-10 space-y-4">
          {method.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 90}>
              <div className="flex gap-6 rounded-2xl border border-ink/10 bg-paper p-7 sm:gap-10 sm:p-9">
                <span className="font-serif text-h1 font-light leading-none text-amber">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-serif text-h2 font-light text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-body text-ink">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ── Straight into the library: three ways in. */}
      <section className="container-content py-16 sm:py-20">
        <Reveal>
          <h2 className="font-serif text-h2 font-light text-ink">See the method at work</h2>
          <p className="mt-3 max-w-prose text-body text-ink">
            Three ways in, no email wall. Take what's useful.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          <CollectionCard
            href="/resources/case-studies"
            kind="case_study"
            label={entryTypeMeta.case_study.label}
            blurb={entryTypeMeta.case_study.blurb}
          />
          <CollectionCard
            href="/resources/interview-prep"
            kind="course_qa"
            label={entryTypeMeta.course_qa.label}
            blurb={entryTypeMeta.course_qa.blurb}
          />
          <CollectionCard
            href="/resources/articles"
            kind="article"
            label={entryTypeMeta.article.label}
            blurb={entryTypeMeta.article.blurb}
          />
        </ul>
      </section>

      {/* ── Why explainers. */}
      <section className="container-content py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {whyExplainers.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <h3 className="font-serif text-h2 font-light text-signature">{w.title}</h3>
              <p className="mt-4 text-body text-ink">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── The through-line. */}
      <section className="container-content py-20 sm:py-28">
        <Reveal>
          <div className="rounded-3xl border border-amber/40 bg-paper p-10 sm:p-16">
            <p className="kicker text-amber">The through-line</p>
            <p className="mt-6 max-w-3xl font-serif text-h1 font-light leading-tight text-ink">
              I don't run the process by hand if it can be a system.
            </p>
            <p className="mt-6 max-w-2xl text-body text-ink">
              Heroics don't scale; systems do. The goal is never to work harder
              next month, it's to build the thing that makes next month quieter.
              Results measured, not claimed.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── CTA → the work. */}
      <section className="container-content py-16 sm:py-24">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-h1 font-light text-ink">
            See the method turned into systems.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body text-ink">
            Come for the outcomes. Stay for how they were built.
          </p>
          <div className="mt-10">
            <Button href="/work" variant="accent">
              Explore the work
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
