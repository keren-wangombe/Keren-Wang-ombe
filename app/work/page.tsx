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
  tools: string[];
  proof?: string[];
  link?: { label: string; href: string; external?: boolean };
};

const workCases: WorkCase[] = [
  {
    id: "programme-support",
    area: "Programme delivery",
    leadMetric: "3,000+",
    title: "Programme support for more than 3,000 learners.",
    summary:
      "I was responsible for communication, platform readiness, tracking and reporting for a technical programme with more than 3,000 learners.",
    problem:
      "A programme at this scale depends on many connected pieces. Learners need the right information and access. Support teams need clear ownership. Delivery teams need to see activity, risks and unresolved issues before they affect the learner experience.",
    ownership:
      "I mapped the launch plan, owners, dependencies and dates across programme, product and support teams. I prepared community spaces and moderator access, built the learner communication journey, monitored launch blockers and maintained the tracker used to follow activity and support needs.",
    system:
      "I set up the communication schedule, an extra broadcast channel for urgent updates, clear escalation routes, regular learner-support sessions and one reporting view for activity and feedback.",
    outcome:
      "The programme launched with stable support spaces, clear ownership and a shared view of learner activity. The results below belong to the wider programme; my contribution was the operational structure, communication and reporting that supported delivery.",
    tools: ["HubSpot", "Circle", "Google Sheets", "WhatsApp"],
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
    title: "One reporting process across three programmes.",
    summary:
      "I led the design of automated trackers across three programmes. Manual tracking dropped by more than half.",
    problem:
      "Teams were updating the same information manually in several places. The work took time, produced uneven snapshots and made it harder to notice changes in learner activity early enough to respond.",
    ownership:
      "I worked with programme teams and technical partners to define the decisions the reports needed to support. I mapped the repeated steps, agreed the measures needed for onboarding and weekly reviews, and translated those needs into one shared tracker structure.",
    system:
      "I designed automated Google Sheets trackers, documented how the workflow worked and helped the teams use the new reporting process. Updates followed the same structure across all three programmes.",
    outcome:
      "Manual tracking fell by more than 50%. Teams received more consistent information, saw engagement changes earlier and spent less time maintaining spreadsheets.",
    tools: ["Google Sheets", "Google Apps Script"],
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
    title: "Project coordination for partner outreach and events.",
    summary:
      "A client hired me as their PMO support. I organised the work in Asana, coordinated recurring events and kept partner outreach moving.",
    problem:
      "The work involved project tasks, partner research, outreach, event preparation, meetings and follow-up happening at the same time. The client needed one person to keep the structure current and make sure the next action did not disappear across messages and documents.",
    ownership:
      "I organised activities, owners and deadlines in Asana; researched potential partners; maintained records for 93 organisations; prepared outreach materials; updated a trilingual webinar calendar; scheduled Zoom sessions; and followed up on open actions.",
    system:
      "I connected the project plan, partner database, event calendar, meeting schedule and communication templates so each cycle started from current information instead of being rebuilt from scratch.",
    outcome:
      "The client had one working view of what was planned, what had been sent, what was scheduled and what still needed attention. The public review confirms the quality of the engagement while the organisation remains private.",
    tools: ["Asana", "Google Sheets", "Zoom", "Gmail"],
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
    title: "A shared playbook for three programme teams.",
    summary:
      "I helped bring programme knowledge into one shared playbook, a Notion hub and short task walkthroughs.",
    problem:
      "Three teams held important delivery knowledge in different documents and in people’s heads. New team members needed repeated explanations, and each programme gathered feedback differently.",
    ownership:
      "I documented recurring roles and workflows, maintained the central Notion hub, recorded task walkthroughs, led structured retrospectives and designed common onboarding and end-of-programme surveys.",
    system:
      "I co-created one delivery playbook, organised the supporting resources and helped teams adopt a shared evaluation process. The playbook showed what to do, who owned it and where to find the material needed to complete the task.",
    outcome:
      "Information became easier to find, repeated clarification reduced and new team members could deliver work more consistently. Teams also gained one way to compare feedback and carry lessons into the next cycle.",
    tools: ["Notion", "Loom", "Google Forms"],
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
    title: "An onboarding tracker for 317 people.",
    summary:
      "I managed the onboarding process and set up the tracker and reminders the team needed to follow each person’s next step.",
    problem:
      "People moved through interest, selection, document signing, an online classroom and platform activation. Without one view, incomplete steps could sit unnoticed and follow-up depended on someone remembering whom to chase.",
    ownership:
      "I maintained the central tracker, monitored each stage, managed the document-signing and email sequence, followed up with people who had gone quiet and kept the online classroom current.",
    system:
      "I documented the full pipeline and added automated Gmail reminders for incomplete actions. I also created guides and walkthroughs so the process could be run consistently by other team members.",
    outcome:
      "The team could see how many people were at every stage and who needed help. The tracker also exposed a post-onboarding engagement drop that had not been measured before, which informed changes to participant support.",
    tools: ["Google Sheets", "Google Apps Script", "Gmail", "Google Classroom"],
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
    title: "A weekly view of programme progress and risk.",
    summary:
      "This self-directed project shows the weekly view I would use to manage several programmes in one place.",
    problem:
      "Programme information often lives across project boards, spreadsheets, messages and participant records. A leader can see plenty of data and still struggle to answer: what is off track, who owns it and what needs a decision this week?",
    ownership:
      "I designed the information structure, the readiness checks, the milestone view, the participant-risk view and the action list. The demonstration uses fictional data so the complete decision process can be shown without exposing private programme records.",
    system:
      "The view connects four programmes, delivery milestones, participant risk, owners and weekly priorities. It separates a signal from the action it should trigger.",
    outcome:
      "The demonstration shows how a team can move from several disconnected updates to one weekly view of what is ready, what is slipping and what needs intervention.",
    tools: ["Next.js", "TypeScript"],
    proof: ["4 programmes", "712 participants", "11 risks", "1 weekly decision view"],
    link: { label: "Open the interactive project ↗", href: "/work/cohort-delivery-control-tower" },
  },
  {
    id: "new-team-onboarding",
    area: "Workflow design",
    leadMetric: "6 tools",
    title: "A six-tool onboarding workflow.",
    summary:
      "This self-directed project connects six everyday tools into one onboarding workflow.",
    problem:
      "The project starts with intake in one place, IT requests in another and no shared view of who has completed each step. Delays become visible only after someone asks for an update.",
    ownership:
      "I mapped the process, designed the data flow, connected form intake to task creation and built the shared status view. When an Excel connection failed, I redesigned the workflow around Google Sheets and ClickUp.",
    system:
      "The demonstration links intake, automatic task creation, IT provisioning, overdue-case escalation and documentation across six tools and four stages.",
    outcome:
      "It shows how ownership, progress and overdue work can be visible without chasing several people for an update. All figures describe the demonstration, not a client result.",
    tools: ["Google Forms", "Google Sheets", "Make.com", "ClickUp", "Notion", "Excel"],
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
    title: "A Notion hub for clients, sessions and follow-up.",
    summary:
      "This self-directed Notion project shows how a small coaching team could manage client work in one place.",
    problem:
      "The project team needs to track clients, onboarding, sessions, notes, deadlines and follow-up without keeping a separate list for every coach.",
    ownership:
      "I designed the records, linked the databases, created filtered views for each coach and wrote reusable procedures for onboarding, missed sessions and offboarding.",
    system:
      "The hub connects 25 fictional client records, three coach views, session templates, an operations calendar and three core procedures.",
    outcome:
      "It demonstrates how a small service team can see each client’s stage, next session and open action in one place. The people and records are fictional.",
    tools: ["Notion"],
    proof: ["25 client records", "3 coach views", "3 reusable procedures", "1 connected operations hub"],
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
    title: "A 12-week programme plan in Asana.",
    summary:
      "This self-directed Asana project shows how I would organise work, dependencies and escalation over 12 weeks.",
    problem:
      "The project begins in email threads and shared documents. Tasks have no clear dependency path, blocked work has no escalation route and leadership cannot see the true delivery status.",
    ownership:
      "I broke the programme into phases, mapped the work and dependencies, created status fields and designed the escalation rules and reporting view.",
    system:
      "The Asana plan contains 24 tasks across five phases, nine mapped dependencies and automated escalation for blocked work.",
    outcome:
      "The demonstration shows how sequencing can be handled by the system, how blocked work can reach the right person and how milestones can feed one leadership update.",
    tools: ["Asana"],
    proof: ["12-week plan", "24 tasks", "5 phases", "9 mapped dependencies"],
    link: { label: "Watch the walkthrough ↗", href: "https://youtu.be/8v5r37T_dDo", external: true },
  },
  {
    id: "welcome-flow",
    area: "Simple automation",
    leadMetric: "4 steps",
    title: "A four-step registration and welcome email flow.",
    summary:
      "This self-directed automation removes the need to copy registrations and send welcome emails one by one.",
    problem:
      "The process requires someone to copy each form response into a spreadsheet, decide whether it qualifies and send the right welcome email manually.",
    ownership:
      "I mapped the decisions, built the form-to-record flow, added the qualifying rule and wrote the personalised email step.",
    system:
      "A four-step Zapier workflow connects a Google Form, filtering logic, a Google Sheets record and a Gmail welcome message.",
    outcome:
      "The demonstration shows how a registration can move from submission to a clean record and a consistent welcome message without repeated copy-and-paste work.",
    tools: ["Zapier", "Google Forms", "Google Sheets", "Gmail"],
    proof: ["4 connected steps", "1 qualifying rule", "Automatic record creation", "Personalised welcome email"],
  },
  {
    id: "customer-value",
    area: "Operational analysis",
    leadMetric: "$1,118",
    title: "An Excel analysis of customer and product performance.",
    summary:
      "I used a simulated e-commerce dataset to analyse customers, products and sales in Excel.",
    problem:
      "The dataset contained more than a year of transactions but no clear view of customer value, product performance or regional patterns.",
    ownership:
      "I cleaned and joined the data, checked revenue calculations, grouped customers by purchase behaviour and built pivot tables and charts for the main business questions.",
    system:
      "The workbook connects clean sales records, customer segments, product views, regional performance and a simple dashboard.",
    outcome:
      "The project identified the highest-value customer, weak categories and regional differences. These are findings from simulated data, not results from a live business.",
    tools: ["Microsoft Excel"],
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
    title: "A SQL and Power BI analysis of support delays.",
    summary:
      "I used a support-ticket dataset to look at ticket age, ownership, delays and escalation.",
    problem:
      "The support team in the project could not clearly see which tickets were outside the service limit, where handoffs slowed the work or whether workload was evenly shared.",
    ownership:
      "I wrote 15 SQL queries covering ticket age, ownership, escalation and response time, then built an executive dashboard around the questions a support lead would need to answer.",
    system:
      "The analysis connects the ticket audit to a dashboard showing service-limit breaches, handoffs, workload and escalation patterns.",
    outcome:
      "The analysis found that 25% of tickets exceeded the 14-day limit and that multi-agent handoffs were the main delay. These are findings from the project dataset.",
    tools: ["SQL", "Power BI"],
    proof: ["15 SQL queries", "25% outside the 14-day limit", "Handoffs identified as the main delay", "1 Power BI view"],
    link: { label: "View the project ↗", href: "https://github.com/Kerenyambura/operationalbottlenecks", external: true },
  },
  {
    id: "retail-patterns",
    area: "Demand analysis",
    title: "A SQL analysis of retail sales patterns.",
    summary:
      "I used a retail-sales dataset to look at customer groups, categories and seasonal demand.",
    problem:
      "The dataset had customer, product and sales records but no simple way to see which groups bought most, which categories produced revenue or when demand changed.",
    ownership:
      "I used common table expressions, subqueries and window functions to group customers, rank categories and compare purchasing patterns over time.",
    system:
      "The analysis creates a repeatable route from raw records to customer segments, category rankings and seasonal demand views.",
    outcome:
      "The project identified electronics as the highest-revenue category and people aged 18–29 as the main purchasing group. These are findings from the project dataset.",
    tools: ["MySQL"],
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
    title: "Maintaining 99% accuracy across cohort dashboards.",
    summary:
      "I maintained programme dashboards at 99% data accuracy across recurring programme reviews.",
    problem:
      "Programme decisions depend on current, trusted records. Missing or inconsistent information makes it harder to identify people who need support and weakens every report built on top of it.",
    ownership:
      "I checked cohort records, corrected inconsistencies, maintained KPI views and combined survey findings with activity data for recurring programme reviews.",
    system:
      "I used a consistent quality-checking and reporting process so the same measures could be reviewed across cohorts and changes could be followed over time.",
    outcome:
      "The dashboards maintained 99% accuracy, giving teams a reliable view for learner follow-up, cohort comparison and programme reporting.",
    tools: ["Google Sheets"],
    proof: ["99% dashboard accuracy", "6 cohorts supported", "Recurring KPI reviews", "Survey and activity data combined"],
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="portfolio-page-hero">
        <Reveal className="portfolio-wrap">
          <p className="portfolio-eyebrow">Work</p>
          <h1>Here’s what I’ve worked on.</h1>
          <p>
            I’ve explained what needed to be done, what I was responsible for and what changed.
            I do not name clients or employers.
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
                  <div className="portfolio-point"><b>What was happening</b><p>{item.problem}</p></div>
                  <div className="portfolio-point"><b>What I did</b><p>{item.ownership}</p></div>
                  <div className="portfolio-point"><b>What I set up</b><p>{item.system}</p></div>
                  <div className="portfolio-point"><b>What changed</b><p>{item.outcome}</p></div>
                </div>
                <div className="portfolio-work-tools" aria-label={`Tools used for ${item.title}`}>
                  <b>Tools used</b>
                  <div>{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
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
            <h2>Do you have work that keeps getting stuck?</h2>
            <p>Send me a note and tell me what is happening.</p>
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
