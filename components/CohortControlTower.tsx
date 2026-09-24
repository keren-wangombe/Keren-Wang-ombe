"use client";

import { useMemo, useState } from "react";

type Programme = {
  id: string;
  name: string;
  stage: string;
  lead: string;
  participants: number;
  readiness: number;
  risks: number;
  nextMilestone: string;
  milestoneDate: string;
  journey: [number, number, number, number];
};

type Risk = {
  programmeId: string;
  level: "Critical" | "Watch";
  issue: string;
  owner: string;
  due: string;
  nextAction: string;
  decision?: string;
};

const programmes: Programme[] = [
  { id: "creator", name: "Creator Growth Lab", stage: "Live delivery", lead: "Maya", participants: 186, readiness: 92, risks: 2, nextMilestone: "Midpoint review", milestoneDate: "12 Sep", journey: [240, 218, 196, 186] },
  { id: "city", name: "City Innovation Cohort", stage: "Onboarding", lead: "Noah", participants: 120, readiness: 78, risks: 4, nextMilestone: "Welcome session", milestoneDate: "5 Sep", journey: [180, 156, 132, 120] },
  { id: "talent", name: "Global Talent Fellowship", stage: "Live delivery", lead: "Amina", participants: 246, readiness: 88, risks: 3, nextMilestone: "Mentor matching", milestoneDate: "9 Sep", journey: [310, 288, 261, 246] },
  { id: "academy", name: "Partner Academy", stage: "Launch readiness", lead: "Daniel", participants: 160, readiness: 84, risks: 2, nextMilestone: "Partner sign-off", milestoneDate: "4 Sep", journey: [214, 196, 174, 160] },
];

const risks: Risk[] = [
  { programmeId: "city", level: "Critical", issue: "Facilitator coverage is incomplete for two live sessions", owner: "Delivery lead", due: "3 Sep", nextAction: "Confirm backup facilitators", decision: "Approve temporary facilitator budget" },
  { programmeId: "academy", level: "Critical", issue: "Partner sign-off is blocked by an unresolved data-sharing question", owner: "Partnerships", due: "3 Sep", nextAction: "Close legal clarification", decision: "Confirm launch date if sign-off moves" },
  { programmeId: "talent", level: "Watch", issue: "Mentor matches are behind the weekly target", owner: "Community ops", due: "5 Sep", nextAction: "Run segmented mentor follow-up" },
  { programmeId: "city", level: "Watch", issue: "18 accepted participants have not completed onboarding", owner: "Participant ops", due: "4 Sep", nextAction: "Send stage-specific reminders" },
  { programmeId: "creator", level: "Watch", issue: "Attendance declined in the second workshop", owner: "Programme lead", due: "6 Sep", nextAction: "Review attendance reasons and adjust reminders" },
  { programmeId: "talent", level: "Watch", issue: "Three regional handoffs lack a confirmed owner", owner: "Operations", due: "4 Sep", nextAction: "Assign owner and publish handoff notes" },
];

const journeyLabels = ["Accepted", "Started", "Engaged", "Active now"];
const tabs = ["Portfolio overview", "Risks & decisions", "Participant journey"] as const;
type TabName = (typeof tabs)[number];

export default function CohortControlTower() {
  const [activeTab, setActiveTab] = useState<TabName>("Portfolio overview");
  const [programmeFilter, setProgrammeFilter] = useState("all");
  const [riskFilter, setRiskFilter] = useState<"All" | "Critical" | "Watch">("All");

  const visibleProgrammes = useMemo(
    () => programmes.filter((programme) => programmeFilter === "all" || programme.id === programmeFilter),
    [programmeFilter],
  );

  const visibleRisks = useMemo(
    () => risks.filter((risk) => (programmeFilter === "all" || risk.programmeId === programmeFilter) && (riskFilter === "All" || risk.level === riskFilter)),
    [programmeFilter, riskFilter],
  );

  const totalParticipants = visibleProgrammes.reduce((sum, item) => sum + item.participants, 0);
  const averageReadiness = Math.round(visibleProgrammes.reduce((sum, item) => sum + item.readiness, 0) / visibleProgrammes.length);
  const openRiskCount = visibleProgrammes.reduce((sum, programme) => sum + programme.risks, 0);
  const decisions = visibleRisks.filter((risk) => risk.decision);

  return (
    <section className="bg-signature/[0.04] py-7 sm:py-9" aria-label="Interactive cohort delivery demonstration">
      <div className="container-content">
        <div className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-paper p-4 shadow-sm sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Control tower views">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-small font-semibold transition ${activeTab === tab ? "bg-signature text-paper" : "bg-signature/[0.06] text-signature hover:bg-signature/10"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 text-small font-medium text-ink/70">
            Programme
            <select
              value={programmeFilter}
              onChange={(event) => setProgrammeFilter(event.target.value)}
              className="rounded-lg border border-ink/15 bg-paper px-3 py-2 text-small text-ink focus:border-signature"
            >
              <option value="all">All programmes</option>
              {programmes.map((programme) => <option key={programme.id} value={programme.id}>{programme.name}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [String(visibleProgrammes.length), "programmes in view"],
            [totalParticipants.toLocaleString(), "active participants"],
            [`${averageReadiness}%`, "average readiness"],
            [String(openRiskCount), "open delivery risks"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-ink/10 bg-paper p-5 shadow-sm">
              <p className="font-serif text-h2 font-light text-signature">{value}</p>
              <p className="mt-1 text-small text-ink/65">{label}</p>
            </div>
          ))}
        </div>

        {activeTab === "Portfolio overview" ? (
          <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_320px]">
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-sm">
              <PanelHeading kicker="Portfolio readiness" title="Programmes requiring attention this week" note="Illustrative scenario · not client data" />
              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] text-left text-small">
                  <thead className="bg-signature/[0.04] text-ink/55">
                    <tr>{["Programme", "Stage", "Lead", "Participants", "Readiness", "Next milestone", "Risks"].map((heading) => <th key={heading} className="px-4 py-3 font-semibold">{heading}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10">
                    {visibleProgrammes.map((programme) => (
                      <tr key={programme.id} className="transition hover:bg-amber/[0.03]">
                        <td className="px-4 py-4 font-medium text-ink">{programme.name}</td>
                        <td className="px-4 py-4 text-ink/65">{programme.stage}</td>
                        <td className="px-4 py-4 text-ink/65">{programme.lead}</td>
                        <td className="px-4 py-4 text-ink/65">{programme.participants}</td>
                        <td className="px-4 py-4"><Readiness value={programme.readiness} /></td>
                        <td className="px-4 py-4 text-ink/65">{programme.nextMilestone} · {programme.milestoneDate}</td>
                        <td className="px-4 py-4"><RiskBadge count={programme.risks} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="rounded-2xl border border-signature/15 bg-signature p-5 text-paper shadow-sm">
              <p className="kicker !text-amber-bright">Weekly operating brief</p>
              <h2 className="mt-3 font-serif text-xl font-light text-paper">What the team should act on now</h2>
              <ol className="mt-5 space-y-4 text-small text-paper/75">
                <li><strong className="block text-paper">1. Protect the next launch.</strong> Close facilitator coverage and partner sign-off before adding new delivery work.</li>
                <li><strong className="block text-paper">2. Recover onboarding.</strong> Segment the 18 incomplete participants by missing step and send targeted reminders.</li>
                <li><strong className="block text-paper">3. Assign the handoffs.</strong> Give each regional transition one named owner and a published next action.</li>
              </ol>
              <div className="mt-6 rounded-xl border border-paper/15 bg-paper/[0.08] p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-amber-bright">Leadership decision</p>
                <p className="mt-2 text-small text-paper/80">Approve temporary facilitator cover and confirm whether the Partner Academy launch date can move.</p>
              </div>
            </aside>
          </div>
        ) : null}

        {activeTab === "Risks & decisions" ? (
          <div className="mt-4 overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-sm">
            <div className="border-b border-ink/10 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="kicker text-amber">Exception management</p><h2 className="mt-2 font-serif text-h2 font-light text-signature">Risks with an owner and a next move</h2></div>
                <div className="flex gap-2" aria-label="Filter risks">
                  {(["All", "Critical", "Watch"] as const).map((filter) => <button key={filter} type="button" onClick={() => setRiskFilter(filter)} className={`rounded-full px-3 py-1.5 text-small font-semibold ${riskFilter === filter ? "bg-amber text-paper" : "bg-amber/10 text-amber"}`}>{filter}</button>)}
                </div>
              </div>
            </div>
            <div className="grid gap-px bg-ink/10 md:grid-cols-2">
              {visibleRisks.map((risk) => {
                const programme = programmes.find((item) => item.id === risk.programmeId)!;
                return (
                  <article key={`${risk.programmeId}-${risk.issue}`} className="bg-paper p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`rounded-full px-2.5 py-1 text-[0.7rem] font-semibold ${risk.level === "Critical" ? "bg-red-100 text-red-700" : "bg-amber/10 text-amber"}`}>{risk.level}</span>
                      <span className="text-[0.72rem] text-ink/50">Due {risk.due}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-lg font-medium text-ink">{risk.issue}</h3>
                    <p className="mt-1 text-small text-ink/55">{programme.name}</p>
                    <dl className="mt-4 grid gap-3 text-small sm:grid-cols-2">
                      <div><dt className="text-ink/45">Owner</dt><dd className="font-medium text-ink/75">{risk.owner}</dd></div>
                      <div><dt className="text-ink/45">Next action</dt><dd className="font-medium text-ink/75">{risk.nextAction}</dd></div>
                    </dl>
                    {risk.decision ? <p className="mt-4 rounded-lg bg-signature/[0.06] p-3 text-small text-signature"><strong>Decision needed:</strong> {risk.decision}</p> : null}
                  </article>
                );
              })}
            </div>
            {visibleRisks.length === 0 ? <p className="p-8 text-center text-body text-ink/60">No risks match this filter.</p> : null}
            <p className="border-t border-ink/10 px-5 py-3 text-small text-ink/55">
              Showing {visibleRisks.length} priority item{visibleRisks.length === 1 ? "" : "s"} from {openRiskCount} open risks
              {decisions.length ? ` · ${decisions.length} require a leadership decision` : ""}.
            </p>
          </div>
        ) : null}

        {activeTab === "Participant journey" ? (
          <div className="mt-4 overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-sm">
            <PanelHeading kicker="Participant operations" title="Where people are dropping between stages" note="Synthetic participant records" />
            <div className="grid gap-px bg-ink/10 lg:grid-cols-2">
              {visibleProgrammes.map((programme) => (
                <article key={programme.id} className="bg-paper p-5">
                  <div className="flex items-center justify-between gap-3"><h3 className="font-serif text-lg font-medium text-ink">{programme.name}</h3><span className="text-small text-ink/50">{programme.lead}</span></div>
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {programme.journey.map((value, index) => {
                      const percentage = Math.round((value / programme.journey[0]) * 100);
                      return <div key={journeyLabels[index]} className="rounded-xl bg-signature/[0.05] p-3 text-center"><p className="font-serif text-xl text-signature">{value}</p><p className="mt-1 text-[0.67rem] leading-tight text-ink/55">{journeyLabels[index]}</p><p className="mt-2 text-[0.68rem] font-semibold text-amber">{percentage}%</p></div>;
                    })}
                  </div>
                  <p className="mt-4 text-small text-ink/65"><strong className="text-ink">Intervention:</strong> {programme.id === "city" ? "18 accepted participants need a stage-specific reminder before the welcome session." : "Monitor the largest stage-to-stage drop and assign one targeted follow-up action."}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PanelHeading({ kicker, title, note }: { kicker: string; title: string; note: string }) {
  return <div className="flex flex-col gap-2 border-b border-ink/10 p-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="kicker text-amber">{kicker}</p><h2 className="mt-2 font-serif text-h2 font-light text-signature">{title}</h2></div><p className="text-small text-ink/55">{note}</p></div>;
}

function Readiness({ value }: { value: number }) {
  return <div className="flex items-center gap-3"><div className="h-2 w-20 overflow-hidden rounded-full bg-ink/10"><div className={`h-full rounded-full ${value < 80 ? "bg-red-500" : "bg-amber-bright"}`} style={{ width: `${value}%` }} /></div><span className="font-medium text-signature">{value}%</span></div>;
}

function RiskBadge({ count }: { count: number }) {
  return <span className={`rounded-full px-2.5 py-1 font-semibold ${count >= 4 ? "bg-red-100 text-red-700" : "bg-amber/10 text-amber"}`}>{count}</span>;
}
