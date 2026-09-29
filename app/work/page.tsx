import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contactMailto, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Programme delivery, process improvement, project coordination and practical systems built by Keren Wang'ombe.",
};

type WorkCase = {
  id: string;
  area: string;
  leadMetric?: string;
  title: string;
  summary: string;
  problem: string;
  ownership: string;
  system: string;
  outcome: string;
  proof?: string[];
  link?: { label: string; href: string; external?: boolean };
};

const workCases: WorkCase[] = [
  {
    id: "programme-support",
    area: "Programme delivery",
    leadMetric: "3,000+",
    title: "Keeping a large programme clear from launch to follow-up.",
    summary:
      "I owned the communication, platform readiness, tracking and reporting work behind a technical programme launch serving more than 3,000 learners.",
    problem:
      "A programme at this scale depends on many connected pieces. Learners need the right information and access. Support teams need clear ownership. Delivery teams need to see activity, risks and unresolved issues before they affect the learner experience.",
    ownership:
      "I mapped the launch plan, owners, dependencies and dates across programme, product and support teams. I prepared community spaces and moderator access, built the learner communication journey, monitored launch blockers and maintained the tracker used to follow activity and support needs.",
    system:
      "I turned the work into a repeatable launch rhythm: planned communication, a second broadcast channel for urgent updates, clear escalation routes, regular learner-support sessions and reporting that brought activity data and feedback into one view.",
    outcome:
      "The programme launched with stable support spaces, clear ownership and a shared view of learner activity. The results below belong to the wider programme; my contribution was the operational structure, communication and reporting that supported delivery.",
    proof: [
      "3,000+ people supported across programmes",
      "90% onboarding satisfaction",
      "54% pre-onboarding email open rate",
      "91% said support improved their understanding",
    ],
  },
  {
    id: "tracking-system",
    area: "Process improvement",
    leadMetric: "50%+",
    title: "Replacing repeated updates with one clearer reporting system.",
    summary:
      "I led the operational design of automated trackers across three programmes and reduced manual tracking effort by more than half.",
    problem:
      "Teams were updating the same information by hand in several places. The work took time, produced uneven snapshots and made it harder to notice changes in learner activity early enough to respond.",
    ownership:
      "I worked with programme teams and technical partners to define the decisions the reports needed to support. I mapped the repeated steps, agreed the measures needed for onboarding and weekly reviews, and translated those needs into one shared tracker structure.",
    system:
      "I designed automated Google Sheets trackers, documented how the workflow worked and helped the teams use the new reporting process. Updates followed the same structure across all three programmes.",
    outcome:
      "Manual tracking fell by more than 50%. Teams received more consistent information, saw engagement changes earlier and spent less time maintaining spreadsheets.",
    proof: [
      "3 programmes connected",
      "50%+ less manual tracking",
      "1 shared reporting workflow",
      "Earlier visibility of engagement risks",
    ],
  },
  {
    id: "partner-outreach",
    area: "Project coordination",
    leadMetric: "93",
    title: "Running the systems behind a busy partnership and events programme.",
    summary:
      "A client hired me to provide PMO support: organise the work in Asana, coordinate recurring events and keep partner outreach moving.",
    problem:
      "The work involved project tasks, partner research, outreach, event preparation, meetings and follow-up happening at the same time. The client needed one person to keep the structure current and make sure the next action did not disappear across messages and documents.",
    ownership:
      "I organised activities, owners and deadlines in Asana; researched potential partners; maintained records for 93 organisations; prepared outreach materials; updated a trilingual webinar calendar; scheduled Zoom sessions; and followed up on open actions.",
    system:
      "I connected the project plan, partner database, event calendar, meeting schedule and communication templates so each cycle started from current information instead of being rebuilt from scratch.",
    outcome:
      "The client had one working view of what was planned, what had been sent, what was scheduled and what still needed attention. The public review confirms the quality of the engagement while the organisation remains private.",
    proof: [
      "93 organisations organised in one database",
      "3-language webinar calendar",
      "Asana plan with owners and deadlines",
      "5-star public client review",
    ],
    link: {
      label: "Read the public client review ↗",
      href: "https://www.fiverr.com/keren_wangombe/manage-your-program-operations-and-coordinate-workflows",
      external: true,
    },
  },
  {
    id: "team-playbook",
    area: "Knowledge and onboarding",
    leadMetric: "3 teams",
    title: "Helping new team members find answers and repeat the work.",
    summary:
      "I helped turn scattered programme knowledge into a shared playbook, Notion hub and practical task walkthroughs.",
    problem:
      "Three teams held important delivery knowledge in different documents and in people’s heads. New team members needed repeated explanations, and each programme gathered feedback differently.",
    ownership:
      "I documented recurring roles and workflows, maintained the central Notion hub, recorded task walkthroughs, led structured retrospectives and designed common onboarding and end-of-programme surveys.",
    system:
      "I co-created one delivery playbook, organised the supporting resources and helped teams adopt a shared evaluation process. The playbook showed what to do, who owned it and where to find the material needed to complete the task.",
    outcome:
      "Information became easier to find, repeated clarification reduced and new team members could deliver work more consistently. Teams also gained one way to compare feedback and carry lessons into the next cycle.",
    proof: [
      "3 programme teams aligned",
      "1 shared delivery playbook",
      "2 feedback points standardised",
      "1 central Notion knowledge hub",
    ],
  },
  {
    id: "onboarding-pipeline",
    area: "Onboarding and follow-up",
    leadMetric: "317",
    title: "Showing exactly where 317 people were getting stuck.",
    summary:
      "I managed a multi-stage onboarding pipeline and built the visibility and reminders needed to move each person to the next step.",
    problem:
      "People moved through interest, selection, document signing, an online classroom and platform activation. Without one view, incomplete steps could sit unnoticed and follow-up depended on someone remembering whom to chase.",
    ownership:
      "I maintained the central tracker, monitored each stage, managed the document-signing and email sequence, followed up with people who had gone quiet and kept the online classroom current.",
    system:
      "I documented the full pipeline and added automated Gmail reminders for incomplete actions. I also created guides and walkthroughs so the process could be run consistently by other team members.",
    outcome:
      "The team could see how many people were at every stage and who needed help. The tracker also exposed a post-onboarding engagement drop that had not been measured before, which informed changes to participant support.",
    proof: [
      "317 expressions of interest",
      "176 moved to document signing",
      "141 documents signed",
      "88 joined the online classroom",
    ],
  },
  {
    id: "cohort-control-tower",
    area: "Programme visibility",
    leadMetric: "1 view",
    title: "One view of programme readiness, progress and risk.",
    summary:
      "I built an interactive demonstration of the weekly operating view I would use to keep several programmes clear and actionable.",
    problem:
      "Programme information often lives across project boards, spreadsheets, messages and participant records. A leader can see plenty of data and still struggle to answer: what is off track, who owns it and what needs a decision this week?",
    ownership:
      "I designed the information structure, the readiness checks, the milestone view, the participant-risk view and the action list. The demonstration uses sample data so the complete decision process can be shown without exposing private programme records.",
    system:
      "The view connects four programmes, delivery milestones, participant risk, owners and weekly priorities. It separates a signal from the action it should trigger.",
    outcome:
      "The demonstration shows how a team can move from several disconnected updates to one weekly view of what is ready, what is slipping and what needs intervention.",
    proof: ["4 sample programmes", "712 sample participants", "11 sample risks", "1 weekly decision view"],
    link: { label: "Open the interactive project ↗", href: "/work/cohort-delivery-control-tower" },
  },
  {
    id: "new-team-onboarding",
    area: "Workflow design",
    leadMetric: "6 tools",
    title: "Connecting intake, tasks and IT setup for new starters.",
    summary:
      "A self-directed demonstration of how six everyday tools can work together as one onboarding process.",
    problem:
      "The sample scenario starts with intake in one place, IT requests in another and no shared view of who has completed each step. Delays become visible only after someone asks for an update.",
    ownership:
      "I mapped the process, designed the data flow, connected form intake to task creation and built the shared status view. When an Excel connection failed, I redesigned the workflow around Google Sheets and ClickUp.",
    system:
      "The demonstration links intake, automatic task creation, IT provisioning, overdue-case escalation and documentation across six tools and four stages.",
    outcome:
      "It shows how ownership, progress and overdue work can be visible without chasing several people for an update. All figures describe the demonstration, not a client result.",
    proof: ["6 tools connected", "4 workflow stages", "1 shared status view", "Overdue-case escalation"],
    link: {
      label: "Read the full case study ↗",
      href: "https://www.notion.so/Cross-Functional-Onboarding-Operations-System-3641bb37c5e18072a112eccfd94b92cd",
      external: true,
    },
  },
  {
    id: "coaching-hub",
    area: "Client operations",
    leadMetric: "1 hub",
    title: "One place to manage clients, sessions and follow-up.",
    summary:
      "A self-directed Notion system showing how a small coaching team could run client work from one connected hub.",
    problem:
      "The sample team needs to track clients, onboarding, sessions, notes, deadlines and follow-up without keeping a separate list for every coach.",
    ownership:
      "I designed the records, linked the databases, created filtered views for each coach and wrote reusable procedures for onboarding, missed sessions and offboarding.",
    system:
      "The hub connects 25 sample client records, three coach views, session templates, an operations calendar and three core procedures.",
    outcome:
      "It demonstrates how a small service team can see each client’s stage, next session and open action in one place. The people and records are sample data.",
    proof: ["25 sample clients", "3 coach views", "3 reusable procedures", "1 connected operations hub"],
    link: {
      label: "Open the Notion project ↗",
      href: "https://paper-belt-9a3.notion.site/The-Shift-Collective-Operations-Hub-3361bb37c5e180f68291d8917dbc2eed?pvs=143",
      external: true,
    },
  },
  {
    id: "delivery-plan",
    area: "Project planning",
    leadMetric: "12 weeks",
    title: "Turning a 12-week programme into a plan people can follow.",
    summary:
      "A self-directed Asana demonstration showing how work, dependencies and escalation can stay visible from planning to close-out.",
    problem:
      "The sample programme begins in email threads and shared documents. Tasks have no clear dependency path, blocked work has no escalation route and leadership cannot see the true delivery status.",
    ownership:
      "I broke the programme into phases, mapped the work and dependencies, created status fields and designed the escalation rules and reporting view.",
    system:
      "The Asana plan contains 24 tasks across five phases, nine mapped dependencies and automated escalation for blocked work.",
    outcome:
      "The demonstration shows how sequencing can be handled by the system, how blocked work can reach the right person and how milestones can feed one leadership update.",
    proof: ["12-week plan", "24 tasks", "5 phases", "9 mapped dependencies"],
    link: { label: "Watch the walkthrough ↗", href: "https://youtu.be/8v5r37T_dDo", external: true },
  },
  {
    id: "welcome-flow",
    area: "Simple automation",
    leadMetric: "4 steps",
    title: "Moving registration and welcome emails into one flow.",
    summary:
      "A self-directed demonstration that replaces copying registrations and sending welcome emails one by one.",
    problem:
      "The sample process requires someone to copy each form response into a spreadsheet, decide whether it qualifies and send the right welcome email manually.",
    ownership:
      "I mapped the decisions, built the form-to-record flow, added the qualifying rule and wrote the personalised email step.",
    system:
      "A four-step Zapier workflow connects a Google Form, filtering logic, a Google Sheets record and a Gmail welcome message.",
    outcome:
      "The demonstration shows how a registration can move from submission to a clean record and a consistent welcome message without repeated copy-and-paste work.",
    proof: ["4 connected steps", "1 qualifying rule", "Automatic record creation", "Personalised welcome email"],
  },
  {
    id: "customer-value",
    area: "Operational analysis",
    leadMetric: "$1,118",
    title: "Finding the customers and products that deserved attention.",
    summary:
      "A self-directed Excel analysis using a simulated e-commerce dataset to support customer, stock and marketing decisions.",
    problem:
      "The dataset contained more than a year of transactions but no clear view of customer value, product performance or regional patterns.",
    ownership:
      "I cleaned and joined the data, checked revenue calculations, grouped customers by purchase behaviour and built pivot tables and charts for the main business questions.",
    system:
      "The workbook connects clean sales records, customer segments, product views, regional performance and a simple dashboard.",
    outcome:
      "The project identified the highest-value customer, weak categories and regional differences. These are findings from simulated data, not results from a live business.",
    proof: ["$1,118 top customer value", "Customer segments", "Product performance view", "Regional sales view"],
    link: {
      label: "Read the analysis ↗",
      href: "https://medium.com/@nyamburawangombe/how-i-built-a-sales-customer-insights-dashboard-for-a-small-e-commerce-business-using-excel-1d95ecfa71b1",
      external: true,
    },
  },
  {
    id: "support-bottlenecks",
    area: "Process analysis",
    leadMetric: "25%",
    title: "Finding why customer-support work was taking too long.",
    summary:
      "A self-directed SQL and Power BI project that follows support tickets from age and ownership to delay and escalation.",
    problem:
      "The sample support team could not clearly see which tickets were outside the service limit, where handoffs slowed the work or whether workload was evenly shared.",
    ownership:
      "I wrote 15 SQL queries covering ticket age, ownership, escalation and response time, then built an executive dashboard around the questions a support lead would need to answer.",
    system:
      "The analysis connects the ticket audit to a dashboard showing service-limit breaches, handoffs, workload and escalation patterns.",
    outcome:
      "The sample analysis found that 25% of tickets exceeded the 14-day limit and that multi-agent handoffs were the main delay. These are findings from the project dataset.",
    proof: ["15 SQL queries", "25% outside the 14-day limit", "Handoffs identified as the main delay", "1 Power BI view"],
    link: { label: "View the project ↗", href: "https://github.com/Kerenyambura/operationalbottlenecks", external: true },
  },
  {
    id: "retail-patterns",
    area: "Demand analysis",
    title: "Showing what customers were buying and when.",
    summary:
      "A self-directed SQL project that turns retail sales records into useful customer, category and seasonal patterns.",
    problem:
      "The dataset had customer, product and sales records but no simple way to see which groups bought most, which categories produced revenue or when demand changed.",
    ownership:
      "I used common table expressions, subqueries and window functions to group customers, rank categories and compare purchasing patterns over time.",
    system:
      "The analysis creates a repeatable route from raw records to customer segments, category rankings and seasonal demand views.",
    outcome:
      "The project identified electronics as the highest-revenue category and people aged 18–29 as the main purchasing group. These are findings from the project dataset.",
    proof: ["Highest-revenue category identified", "Main age group identified", "Seasonal patterns compared", "SQL analysis documented"],
    link: {
      label: "Read the analysis ↗",
      href: "https://medium.com/@nyamburawangombe/retail-sales-analysis-54a805993053",
      external: true,
    },
  },
  {
    id: "dashboard-accuracy",
    area: "Reporting quality",
    leadMetric: "99%",
    title: "Keeping cohort dashboards accurate enough to guide action.",
    summary:
      "I maintained programme dashboards at 99% data accuracy and turned recurring checks into a reliable reporting rhythm.",
    problem:
      "Programme decisions depend on current, trusted records. Missing or inconsistent information makes it harder to identify people who need support and weakens every report built on top of it.",
    ownership:
      "I checked cohort records, corrected inconsistencies, maintained KPI views and combined survey findings with activity data for recurring programme reviews.",
    system:
      "I used a consistent quality-checking and reporting process so the same measures could be reviewed across cohorts and changes could be followed over time.",
    outcome:
      "The dashboards maintained 99% accuracy, giving teams a reliable view for learner follow-up, cohort comparison and programme reporting.",
    proof: ["99% dashboard accuracy", "6 cohorts supported", "Recurring KPI reviews", "Survey and activity data combined"],
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="portfolio-page-hero">
        <Reveal className="portfolio-wrap">
          <p className="portfolio-eyebrow">Work</p>
          <h1>The work behind clearer delivery.</h1>
          <p>
            Every project answers the same questions: what was difficult, what I owned, what I built and what changed.
            Client and employer names stay private. Demonstrations and sample data are stated clearly.
          </p>
        </Reveal>
      </section>

      <section className="portfolio-work-featured" aria-label="Work case studies">
        <div className="portfolio-wrap">
          {workCases.map((item) => (
            <Reveal as="article" className="portfolio-work-case" id={item.id} key={item.id}>
              <div className="portfolio-work-case-lead">
                <p className="portfolio-eyebrow">{item.area}</p>
                {item.leadMetric ? <span className="portfolio-big-proof">{item.leadMetric}</span> : null}
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </div>
              <div className="portfolio-work-case-body">
                <div className="portfolio-story-grid">
                  <div className="portfolio-point"><b>The need</b><p>{item.problem}</p></div>
                  <div className="portfolio-point"><b>What I owned</b><p>{item.ownership}</p></div>
                  <div className="portfolio-point"><b>What I built</b><p>{item.system}</p></div>
                  <div className="portfolio-point"><b>What changed</b><p>{item.outcome}</p></div>
                </div>
                {item.proof?.length ? (
                  <div className="portfolio-result-cells" aria-label={`${item.title} evidence`}>
                    {item.proof.map((proof) => {
                      const [value, ...label] = proof.split(" ");
                      const beginsWithFigure = /^[£$€]?\d/.test(value);

                      return beginsWithFigure ? (
                        <div key={proof}><strong>{value}</strong><span>{label.join(" ")}</span></div>
                      ) : (
                        <div className="portfolio-result-copy" key={proof}><span>{proof}</span></div>
                      );
                    })}
                  </div>
                ) : null}
                {item.link ? item.link.external ? (
                  <a className="portfolio-section-link" href={item.link.href} target="_blank" rel="noreferrer">{item.link.label}</a>
                ) : (
                  <Link className="portfolio-section-link" href={item.link.href}>{item.link.label}</Link>
                ) : null}
              </div>
            </Reveal>
          ))}

          <Reveal className="portfolio-data-band">
            <p>For deeper dashboard and analysis projects, visit the specialist data portfolio.</p>
            <a className="portfolio-text-link" href="https://kerenwangombe-data.vercel.app/" target="_blank" rel="noreferrer">View data portfolio ↗</a>
          </Reveal>
        </div>
      </section>

      <section className="portfolio-contact">
        <Reveal className="portfolio-wrap portfolio-contact-surface">
          <div>
            <p className="portfolio-eyebrow">Contact</p>
            <h2>Have work that needs a clearer way to run?</h2>
            <p>Tell me where the work is getting stuck.</p>
          </div>
          <div className="portfolio-contact-cards" aria-label="Contact Keren">
            <a className="portfolio-contact-card" href={contactMailto}>Email</a>
            <a className="portfolio-contact-card" href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="portfolio-contact-card" href={social.upwork} target="_blank" rel="noreferrer">Upwork</a>
            <a className="portfolio-contact-card" href="https://www.fiverr.com/keren_wangombe" target="_blank" rel="noreferrer">Fiverr</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
