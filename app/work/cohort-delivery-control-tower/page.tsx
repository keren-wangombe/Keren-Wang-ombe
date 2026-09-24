import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import CohortControlTower from "@/components/CohortControlTower";
import { contactMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cohort Delivery Control Tower",
  description:
    "A self-directed programme-operations demonstration showing portfolio readiness, participant risk, milestones and decision support using synthetic data.",
};

const buildElements = [
  {
    title: "Portfolio readiness",
    body: "A cross-programme view of launch checks, milestones, owners and the items most likely to affect delivery.",
  },
  {
    title: "Risk and decision queue",
    body: "Operational risks are separated from leadership decisions, with owners and due dates attached to both.",
  },
  {
    title: "Participant journey",
    body: "Onboarding and engagement stages make drop-off visible early enough for targeted intervention.",
  },
  {
    title: "Weekly operating brief",
    body: "A concise summary translates the tracker into priorities, decisions and next actions for a distributed team.",
  },
];

export default function CohortDeliveryControlTowerPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-signature text-paper">
        <div className="container-content py-8 sm:py-10">
          <Link href="/work" className="text-small text-paper/70 transition hover:text-paper">
            ← Back to selected work
          </Link>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="kicker !text-amber-bright">Self-directed portfolio demonstration · Synthetic data</p>
              <h1 className="mt-3 max-w-3xl font-serif text-h1 font-light leading-[1.06] text-paper">
                Cohort Delivery Control Tower
              </h1>
              <p className="mt-4 max-w-2xl text-body text-paper/75">
                One operating view for distributed programme teams to see launch readiness, participant risk,
                milestones, ownership and the decisions that need attention this week.
              </p>
            </div>
            <div className="rounded-2xl border border-paper/15 bg-paper/[0.08] p-5">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-amber-bright">The operating question</p>
              <p className="mt-3 font-serif text-xl font-light leading-snug text-paper">
                Where is delivery most likely to slip, who owns the next move, and what should leadership decide now?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CohortControlTower />

      <section className="border-y border-amber/15 bg-amber/[0.06] py-8 sm:py-10">
        <div className="container-content grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="kicker text-amber">Why I built it</p>
            <h2 className="mt-3 font-serif text-h2 font-light text-signature">
              A portfolio tracker is only useful if it changes what the team does next.
            </h2>
            <p className="mt-4 text-body text-ink/75">
              Programme information often lives across project boards, spreadsheets, messages and participant
              platforms. This demonstration brings the operational signals together without pretending that every
              detail belongs in one tool.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {buildElements.map((item) => (
              <article key={item.title} className="rounded-2xl border border-ink/10 bg-paper p-5 shadow-sm">
                <h3 className="font-serif text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-small leading-relaxed text-ink/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="container-content grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="kicker text-amber">What this demonstrates</p>
            <h2 className="mt-3 font-serif text-h2 font-light text-signature">The operating judgement behind the dashboard</h2>
            <ul className="mt-5 space-y-3 text-body text-ink/75">
              {[
                "Defining the few readiness signals that deserve weekly attention",
                "Separating delivery risk, participant intervention and leadership decisions",
                "Making ownership and deadlines visible across programme handoffs",
                "Turning operational data into a short, usable management brief",
                "Designing a repeatable structure that can flex across different cohort models",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-bright" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl border border-signature/15 bg-signature/[0.05] p-6 sm:p-7">
            <p className="kicker text-amber">Evidence boundary</p>
            <h2 className="mt-3 font-serif text-xl font-medium text-signature">Built to show my thinking, not to imitate a client result.</h2>
            <p className="mt-3 text-body text-ink/75">
              Every programme name, participant record, risk and metric on this page is synthetic. The workflow is
              informed by the kinds of delivery, onboarding, reporting and cross-functional coordination I have
              handled professionally, but this system was not commissioned by the organisations I may share it with.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={contactMailto} variant="primary">Discuss a programme system</Button>
              <Button href="/work" variant="ghost">See verified work</Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
