import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import InquiryForm from "@/components/InquiryForm";
import { pageBanners } from "@/lib/site";

export const metadata: Metadata = {
  title: "Operations & analytics advisory",
  description:
    "Operations and analytics advisory for founders and programme teams, building the automation, tracking, and reporting backbone that lets delivery scale.",
};

const outcomes = [
  {
    title: "Systems that outlast me",
    body: "Automation and SOPs your team can run without a briefing, and that behave the same on the busiest day as the quietest.",
  },
  {
    title: "Visibility that compounds",
    body: "Not a dependency on me, but a reporting layer that keeps showing leadership where delivery is slipping, long after I've gone.",
  },
  {
    title: "Effort sized to impact",
    body: "The one handoff, the one report, the one automation that returns the most time, fixed first, measured after.",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      <PageBanner
        image={pageBanners.advisory}
        kicker="Advisory"
        title="The operational backbone, built into the team."
        intro={
          <p>
            Good operations advisory doesn't just fix the workflow, it leaves
            your team with a system they can run and a report they can steer by.
            I help founders and programme teams remove the manual load, tighten
            the tracking, and build the reporting layer, so delivery scales
            without the coordination overhead scaling with it.
          </p>
        }
      >
        <Button href="#start">Start a conversation</Button>
      </PageBanner>

      {/* ── Outcomes language. */}
      <section className="container-content py-12 sm:py-16">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center font-serif text-h2 font-light text-signature">
            Operations and analytics advisory for teams that want the system,
            not just the fix.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
          {outcomes.map((o, i) => (
            <Reveal as="div" key={o.title} delay={i * 90} className="bg-paper p-8 sm:p-10">
              <h3 className="font-serif text-h2 font-light text-signature">{o.title}</h3>
              <p className="mt-4 text-body text-ink">{o.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Register-setting statement on a deep surface. */}
      <section className="container-content py-16 sm:py-24">
        <Reveal>
          <div className="rounded-3xl bg-ink p-10 text-paper sm:p-16">
            <p className="kicker text-amber">How I work</p>
            <p className="mt-6 max-w-3xl font-serif text-h1 font-light leading-tight text-paper">
              Engaged where the trade-offs are made, quietly, and with the people who
              have to own the call.
            </p>
            <p className="mt-8 max-w-2xl text-body text-paper/70">
              A small number of engagements at a time, sized to the decision rather than
              the calendar. Premium, deliberate, and accountable to outcomes.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Inquiry form. */}
      <section id="start" className="container-content scroll-mt-20 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-serif text-h1 font-light text-signature">
              Start a conversation.
            </h2>
            <p className="mt-6 max-w-prose text-body text-ink">
              A few lines on your situation and the outcome you're after is plenty. I
              read every inquiry personally.
            </p>
          </Reveal>
          <Reveal>
            <InquiryForm
              submitLabel="Send advisory inquiry"
              subject="New advisory inquiry, kerenwangombe.com"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
