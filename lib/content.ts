/**
 * Content scaffolding for Keren Wang'ombe's portfolio.
 *
 * This is a clear SEAM for later integration: case studies, resources, and
 * metrics can move to a CMS / Supabase / R2. The UI reads from these typed
 * shapes, swap the source, keep the components. Every metric here is drawn
 * from real programme-operations and analytics work.
 */

export type Level = "Newcomer" | "Practitioner" | "Architect";

export type Outcome = {
  metric: string;
  metricLabel: string;
  title: string;
  body: string;
  hero?: boolean;
};

/** Outcome-led, headline-first. Metric is the protagonist. (Feeds /speaking.) */
export const outcomes: Outcome[] = [
  {
    metric: "50%",
    metricLabel: "manual work removed",
    title: "Cut manual tracking work in half with one automation.",
    body: "A Google Apps Script and Gmail pipeline replaced hours of manual NDA tracking, freeing 15+ hours every week and removing the errors that come with copy-paste. The saving was a systems decision, not extra effort.",
    hero: true,
  },
  {
    metric: "98%",
    metricLabel: "data accuracy",
    title: "Held 98% data accuracy across 12 countries.",
    body: "A self-updating health tracker pulled scattered programme data into one weekly source of truth, monitoring progress at 98% accuracy without a person touching a spreadsheet.",
  },
  {
    metric: "86%",
    metricLabel: "programme completion rate",
    title: "Reported a programme from 2,032 registrations to 900 completions.",
    body: "Executive reporting tracked a programme's full funnel to an 86% completion rate and 81% CSAT, so leadership decisions rested on numbers, not anecdotes.",
  },
  {
    metric: "3,000+",
    metricLabel: "participants supported",
    title: "Coordinated operations behind 3,000+ participants.",
    body: "Automation, tracking, and reporting infrastructure spanning 8+ countries, the operational backbone that let programmes scale without the coordination overhead scaling with them.",
  },
];

export type TierItem = {
  title: string;
  body: string;
  metric?: string;
  metricLabel?: string;
  /** Big-number FlipCard, full width. */
  hero?: boolean;
  /** Full-width FlipTile (a lead item without a single headline metric). */
  feature?: boolean;
};

export type Tier = {
  kicker: string;
  name: string;
  tagline: string;
  items: TierItem[];
  capabilities: string;
  /** Subtle parallax backdrop in /public/backgrounds, swap for a real image. */
  backdrop: string;
};

/** /work, outcome-led, systems-first. Two tiers, every metric defensible. */
export const tiers: Tier[] = [
  {
    kicker: "Tier 1",
    name: "Systems built for operations",
    tagline: "The operational backbone. Automation, tracking, and coordination that turn chaos into repeatable execution.",
    items: [
      {
        hero: true,
        metric: "50%",
        metricLabel: "manual work removed",
        title: "Automated NDA tracking end to end.",
        body: "A Google Apps Script and Gmail pipeline cut manual tracking work by 50% and saved 15+ hours weekly, replacing a fragile copy-paste process with a system that runs itself.",
      },
      {
        metric: "88%",
        metricLabel: "onboarding completion",
        title: "Built a cross-functional onboarding operations system.",
        body: "A firm scaling from 85 to 200 staff had no standard onboarding. A six-tool system automated intake, created ClickUp tasks, coordinated IT provisioning, and escalated overdue cases, 250+ workflows at 88% completion and 91% SLA compliance.",
      },
      {
        title: "Designed a programme delivery operations system.",
        body: "A 12-week programme run through email threads became a structured Asana system: 24 tasks across 5 phases, 9 mapped dependencies, and automated escalation of blocked work directly to leadership.",
      },
      {
        title: "Built a self-updating learner health tracker.",
        body: "A weekly tracker monitoring learner progress at 98% data accuracy across 12 countries, one source of truth replacing scattered, manually-reconciled spreadsheets.",
      },
      {
        title: "Replaced a manual intake process with an automation pipeline.",
        body: "A four-step Zapier pipeline connecting Google Forms, filtering logic, Sheets, and Gmail eliminated 45 minutes of daily manual processing and sent onboarding communication within seconds of registration.",
      },
    ],
    capabilities:
      "Workflow automation (Zapier · Make · Apps Script) · Notion & Airtable systems design · SOP design & documentation · ClickUp & Asana delivery operations · CA screening & funnel tracking · cross-border programme coordination.",
    backdrop: "/backgrounds/tier-systems.svg",
  },
  {
    kicker: "Tier 2",
    name: "Analytics that drives decisions",
    tagline: "Because the number should change what happens next. Reporting and analysis built around operational decisions, not vanity metrics.",
    items: [
      {
        feature: true,
        title: "Turned raw operational data into decisions leaders act on.",
        body: "Executive reporting for Cybersecurity Cohort 11, 2,032 registrations to 900 graduates at 86% graduation and 81% CSAT, plus live dashboards and scorecards that surface where delivery is slipping while there's still time to act.",
      },
      {
        title: "Audited support operations with SQL and Power BI.",
        body: "15 SQL queries surfaced that 25% of tickets breached the 14-day SLA, with multi-agent handoffs as the primary bottleneck; an executive Power BI dashboard made it visible to leadership.",
      },
      {
        title: "Built an e-commerce operational analytics system in Excel.",
        body: "Segmentation and category analysis over 12 months of data found the top 5% of customers driving $1,118+ in lifetime value, and Electronics as a high-margin category at just 6% of sales, a clear growth lever.",
      },
      {
        title: "Ran a full SQL data-integrity audit.",
        body: "The Maji Ndogo audit used JOINs, CTEs, and window functions to reconcile field surveys against auditor reports, flagging employees with above-average reporting inconsistencies for investigation.",
      },
      {
        title: "Analysed retail sales for inventory and targeting.",
        body: "MySQL with CTEs and window functions identified the 18–29 segment as the primary buyers and clear seasonal demand peaks, directly informing procurement and campaign planning.",
      },
    ],
    capabilities:
      "SQL & MySQL (CTEs, window functions) · Power BI & Looker Studio dashboards · Excel modelling & KPI frameworks · customer & SLA analysis · operational auditing & data cleaning · executive reporting & data storytelling.",
    backdrop: "/backgrounds/tier-people.svg",
  },
];

/** Closing line for /work. */
export const workClose =
  "These systems started as operational problems. If you have one, let's talk.";

/* ── Case studies ──────────────────────────────────────────────────────
   The skimmable Problem → Built → Result format hiring managers expect:
   context, the intervention, then measured outcomes, with tools and any
   walkthrough/write-up links. Grouped in the same two tiers as before. */

export type CaseStudyItem = {
  /** Anchor id, so the home Featured Work can deep-link to this exact card. */
  id: string;
  badge: string;
  title: string;
  /** Headline number, the protagonist of the card. */
  metric?: string;
  metricLabel?: string;
  /** Process-map diagram in /public/projects (swap for a real screenshot). */
  image: string;
  chart?: CardDashboard;
  problem: string;
  built: string;
  results: string[];
  tools: string[];
  links?: { label: string; href: string }[];
};

export type CaseStudyTier = {
  kicker: string;
  /** Short label for the Work-page mini tabs. */
  tab: string;
  name: string;
  tagline: string;
  capabilities: string;
  backdrop: string;
  items: CaseStudyItem[];
};

export const caseStudyTiers: CaseStudyTier[] = [
  {
    kicker: "Tier 1",
    tab: "Operations",
    name: "Systems built for operations",
    tagline:
      "The operational backbone. Automation, tracking, and coordination that turn chaos into repeatable execution.",
    capabilities:
      "Workflow automation (Zapier · Make · Apps Script) · Notion & Airtable systems design · SOP design & documentation · ClickUp & Asana delivery operations · CA screening & funnel tracking · cross-border programme coordination.",
    backdrop: "/backgrounds/tier-systems.svg",
    items: [
      {
        badge: "Self-directed portfolio project · Systems design & automation",
        title: "Cross-Functional Onboarding Operations System",
        id: "onboarding",
        image: "/projects/onboarding.svg",
        chart: {
          title: "Onboarding system",
          variant: "bars",
          kpis: [
            { value: "6", label: "tools connected" },
            { value: "4", label: "workflow stages" },
            { value: "1", label: "shared view" },
          ],
          bars: [0.5, 0.65, 0.6, 0.8, 0.75, 0.9],
          donut: 0.75,
          accent: "amber",
        },
        problem:
          "Project origin: Self-directed portfolio demonstration built to show how I approach a realistic onboarding-operations problem. It was not a paid client engagement. The scenario involved fragmented intake, delayed IT provisioning and no shared view of onboarding progress.",
        built:
          "A six-tool onboarding operations system that automated intake, created ClickUp workflow tasks automatically, coordinated IT provisioning, and escalated overdue cases — built without engineering support, and redesigned mid-build onto a Google Sheets + ClickUp architecture after Excel sync failures.",
        results: [
          "Demonstrates how intake, task creation, IT provisioning and overdue-case escalation can work as one system",
          "Shows how a shared tracker can make ownership and onboarding status visible across teams",
          "Includes documented workflows and a redesign decision made after an Excel-sync limitation emerged",
        ],
        tools: ["Google Forms", "Google Sheets", "Make.com", "ClickUp", "Notion", "Excel", "Workflow automation", "SOP design & documentation"],
        links: [
          {
            label: "Watch the system walkthrough",
            href: "https://drive.google.com/file/d/1BdwGkAENe13RBxbTmclQdkVu7CKWe-QY/view?usp=drive_link",
          },
          {
            label: "Read the full case study",
            href: "https://www.notion.so/Cross-Functional-Onboarding-Operations-System-3641bb37c5e18072a112eccfd94b92cd",
          },
        ],
      },
      {
        badge: "Self-directed portfolio project · Notion CRM & operations",
        title: "Operational Command Center",
        id: "command-center",
        image: "/projects/command-center.svg",
        chart: {
          title: "Ops command centre",
          variant: "kanban",
          kpis: [
            { value: "3", label: "coaches" },
            { value: "25", label: "clients" },
            { value: "1", label: "hub" },
          ],
          accent: "blue",
        },
        problem:
          "Project origin: Self-directed portfolio demonstration built to show how I would organise a realistic coaching-operations scenario. It was not a paid client engagement. The scenario uses three coaches and 25 active clients to test a shared operating system.",
        built:
          "A centralised Notion-based Operations Command Center unifying client management, onboarding workflows, operational documentation, reporting, and content coordination into one connected system any coach could use without being briefed.",
        results: [
          "Demonstrates filtered CRM views by coach, onboarding stage and upcoming session",
          "Shows how structured session templates can support consistent documentation",
          "Includes three sample SOPs covering onboarding, no-show management and offboarding",
          "Connects an operations calendar, client records and workflow tracking in one demonstration hub",
        ],
        tools: ["Notion", "CRM Design", "SOP Documentation", "Workflow Design", "Operational Reporting", "Notion & Airtable systems design"],
        links: [
          {
            label: "Open the operations hub",
            href: "https://paper-belt-9a3.notion.site/The-Shift-Collective-Operations-Hub-3361bb37c5e180f68291d8917dbc2eed?pvs=143",
          },
        ],
      },
      {
        badge: "Self-directed portfolio project · Asana programme operations",
        title: "Programme Delivery Operations System",
        id: "delivery",
        image: "/projects/delivery.svg",
        chart: {
          title: "Delivery board",
          variant: "kanban",
          kpis: [
            { value: "5", label: "phases" },
            { value: "24", label: "tasks" },
            { value: "9", label: "links" },
          ],
          accent: "amber",
        },
        problem:
          "Project origin: Self-directed portfolio demonstration built to show how I structure a realistic 12-week programme. It was not a paid client engagement. The scenario starts with work spread across email and shared documents, without dependency tracking or a clear escalation path.",
        built:
          "A structured Asana delivery system covering the full programme lifecycle: 24 tasks across 5 phases with 9 mapped dependencies, custom fields for live status, and automated escalation that routes blocked work straight to leadership.",
        results: [
          "Demonstrates 24 tasks across five phases with nine mapped dependencies",
          "Shows how blocked work can be routed through an automated escalation path",
          "Connects goals, milestones and delivery tracking in one sample leadership view",
        ],
        tools: ["Asana", "Dependency Mapping", "Process Automation", "KPI Tracking", "ClickUp & Asana delivery operations", "Cross-border programme coordination"],
        links: [{ label: "Watch the walkthrough", href: "https://youtu.be/8v5r37T_dDo" }],
      },
      {
        badge: "Self-directed portfolio project · Zapier workflow automation",
        title: "Operational Workflow Automation Pipeline",
        id: "pipeline",
        image: "/projects/pipeline.svg",
        chart: {
          title: "Automation pipeline",
          variant: "bars",
          kpis: [
            { value: "4", label: "automated steps" },
            { value: "4", label: "steps" },
            { value: "1", label: "connected flow" },
          ],
          bars: [0.9, 0.7, 0.5, 0.35, 0.3, 0.25],
          donut: 0.5,
          accent: "blue",
        },
        problem:
          "Project origin: Self-directed portfolio demonstration built to show how I automate a realistic course-registration workflow. It was not a paid client engagement. The scenario begins with registrations copied into spreadsheets and welcome emails sent individually.",
        built:
          "A four-step Zapier pipeline — Google Form → filtering logic → Sheets record → personalised Gmail welcome — replacing the manual process end to end, with a filter so only qualified registrations reach the database.",
        results: [
          "Demonstrates a four-step flow from form submission to a filtered record and personalised welcome email",
          "Shows how consistent onboarding communication can be triggered automatically",
          "Uses filtering logic so only qualifying registrations enter the sample database",
        ],
        tools: ["Zapier", "Google Forms", "Google Sheets", "Gmail", "Workflow automation", "CA screening & funnel tracking"],
      },
    ],
  },
  {
    kicker: "Tier 2",
    tab: "Analytics",
    name: "Analytics that drives decisions",
    tagline:
      "Because the number should change what happens next. Reporting and analysis built around operational decisions, not vanity metrics.",
    capabilities:
      "SQL & MySQL (CTEs, window functions) · Power BI & Looker Studio dashboards · Excel modelling & KPI frameworks · customer & SLA analysis · operational auditing & data cleaning · executive reporting & data storytelling.",
    backdrop: "/backgrounds/tier-people.svg",
    items: [
      {
        badge: "Excel · Operational Analytics",
        title: "E-Commerce Operational Analytics System",
        metric: "$1,118+",
        metricLabel: "lifetime value, top 5% of customers",
        id: "ecommerce",
        image: "/projects/ecommerce.svg",
        problem:
          "A growing e-commerce business had 12+ months of transaction data but no operational visibility into customer behaviour, product performance, or regional trends — inventory and marketing decisions were made without an analytics layer.",
        built:
          "An end-to-end Excel analytics system that turned raw sales data into reporting dashboards, customer segmentation, and performance insights supporting inventory planning, marketing optimisation, and revenue decisions.",
        results: [
          "Top 5% of customers identified at $1,118+ lifetime value each",
          "Electronics flagged as high-margin but underperforming at only 6% of sales — a clear growth lever",
          "Two regions found driving 60%+ of revenue with minimal marketing spend",
          "Low-performing SKUs (<2% of revenue) flagged for rationalisation",
        ],
        tools: ["Microsoft Excel", "Dashboard Design", "Customer Segmentation", "KPI Reporting", "Excel modelling & KPI frameworks", "Data storytelling"],
        links: [
          {
            label: "Read the write-up on Medium",
            href: "https://medium.com/@nyamburawangombe/how-i-built-a-sales-customer-insights-dashboard-for-a-small-e-commerce-business-using-excel-1d95ecfa71b1",
          },
        ],
      },
      {
        badge: "SQL · Power BI",
        title: "Customer Support Operations Analytics",
        metric: "25%",
        metricLabel: "of tickets found breaching SLA",
        id: "support",
        image: "/projects/support.svg",
        problem:
          "A support operations team lacked visibility into SLA breaches, escalation patterns, agent workload distribution, and operational bottlenecks — making it hard for leadership to improve response efficiency.",
        built:
          "An end-to-end SQL operational audit — 15 queries across ticket ageing, ownership, escalation frequency, and response times — feeding an executive Power BI dashboard for operational health and delivery performance.",
        results: [
          "25% of tickets exceeding the 14-day SLA, with multi-agent handoffs the primary bottleneck",
          "2–3x variation in resolution times from uneven workload distribution",
          "Interactive Power BI executive dashboard centralising SLA tracking, KPIs, and escalation analysis",
        ],
        tools: ["SQL", "Power BI", "SLA Analysis", "Executive Dashboards", "Power BI & Looker Studio dashboards", "Customer & SLA analysis"],
        links: [{ label: "View the repo on GitHub", href: "https://github.com/Kerenyambura/operationalbottlenecks" }],
      },
      {
        badge: "SQL · MySQL",
        title: "Retail Sales Operational Analytics",
        id: "retail",
        image: "/projects/retail.svg",
        problem:
          "A retail business had customer, product, and seasonal sales data but no framework to understand purchasing behaviour, category performance, or operational demand patterns.",
        built:
          "A structured SQL analytics system using CTEs, subqueries, and window functions to segment customers, rank categories by revenue, and surface seasonal demand for inventory and targeting.",
        results: [
          "Electronics identified as the highest revenue-generating category",
          "18–29 age segment revealed as the primary purchasing demographic",
          "Seasonal demand spikes surfaced to support inventory forecasting and procurement planning",
        ],
        tools: ["MySQL", "SQL Analytics", "CTEs", "Window Functions", "SQL & MySQL (CTEs, window functions)", "Executive reporting"],
        links: [
          { label: "Read the write-up on Medium", href: "https://medium.com/@nyamburawangombe/retail-sales-analysis-54a805993053" },
        ],
      },
      {
        badge: "SQL · Data Audit",
        title: "Maji Ndogo Operational Data Audit",
        id: "maji",
        image: "/projects/maji.svg",
        problem:
          "A national water authority managing thousands of water sources had inconsistent survey data, reporting discrepancies, and suspected integrity issues across field operations.",
        built:
          "A full SQL data audit — JOINs, chained CTEs, and window functions — to inspect, clean, validate, and reconcile survey records against auditor reports, isolating systematic rather than accidental reporting errors.",
        results: [
          "Discrepancies surfaced between field surveys and independent auditor assessments",
          "Employees with above-average reporting inconsistencies flagged for investigation",
          "Raw survey records transformed into analysis-ready datasets for infrastructure planning",
        ],
        tools: ["SQL", "Data Cleaning", "CTEs", "Operational Auditing", "Operational auditing & data cleaning", "Data storytelling"],
        links: [
          { label: "View the SQL on GitHub", href: "https://github.com/Kerenyambura/SQL/blob/main/project_part_3.sql" },
        ],
      },
    ],
  },
];

/* ── Featured work ─────────────────────────────────────────────────────
   Three featured case studies told in one structure: the situation, the
   recurring work I personally handled, what I improved, and what changed.
   "What I handled" is mandatory — it names the tracking, coordination,
   records and follow-up I own, so the story doesn't jump from problem
   straight to the system built. */

export type FeaturedStudy = {
  id: string;
  badge: string;
  title: string;
  /** Process-map diagram in /public/projects (placeholder art, reused). */
  image: string;
  chart?: CardDashboard;
  /** Optional headline metric, shown in large type and always paired with a label. */
  metric?: string;
  metricLabel?: string;
  /** The four narrative sections, in order. */
  situation: string;
  handled: string;
  improved: string;
  changed: string;
  /** Funnel/scale/result figures shown as inline evidence chips. */
  figures?: string[];
  tools: string[];
  links?: { label: string; href: string }[];
};

export const featuredWork: FeaturedStudy[] = [
  {
    id: "edtech-onboarding",
    badge: "Professional experience · EdTech programme onboarding",
    title: "Managing a 317-person onboarding pipeline across six stages",
    image: "/projects/onboarding.svg",
    chart: {
      title: "Onboarding funnel",
      variant: "funnel",
      kpis: [
        { value: "317", label: "interested" },
        { value: "141", label: "documents signed" },
        { value: "47", label: "active" },
      ],
      bars: [1, 0.72, 0.44, 0.28],
      accent: "amber",
    },
    situation:
      "At an EdTech organisation, a single intake of interested people had to move through a multi-stage onboarding — interest, selection, a document-signing workflow, an online classroom, and activation on the digital learning platform. At every stage people stalled, went quiet or missed a step, and without one view of where each person stood it was easy to lose track of who still needed chasing.",
    handled:
      "I owned the pipeline day to day. I maintained a central, cross-functional tracker covering every person and every stage, monitored progress, and spotted where someone had gone quiet or left a step incomplete. I tracked the document-signing workflow, chased the outstanding actions, and followed up with the people who hadn't moved — coordinating each person through the process rather than waiting for them to surface.",
    improved:
      "So follow-up no longer depended on me remembering, I built a Google Apps Script and Gmail automation that sent reminder follow-ups on incomplete actions. Documenting the stages and automating the routine chasing meant the recurring reminders stopped relying on someone manually working down a list.",
    changed:
      "The tracker gave visibility across the full funnel — at any moment it was clear how many people sat at each stage and who still needed a nudge, so nothing stalled silently between steps. The tracker also exposed post-onboarding engagement drop-off that had not previously been measured, informing changes to how participants were supported and engaged in the online community.",
    figures: [
      "317 interested",
      "176 selected and sent a signing request",
      "141 documents signed",
      "88 joined the online classroom",
      "47 active on the digital learning platform",
    ],
    tools: ["Google Sheets", "Google Apps Script", "Gmail", "Google Classroom", "Document-signing workflow", "Community operations"],
  },
  {
    id: "pan-african",
    badge: "Paid Fiverr project · Client anonymised",
    title: "Coordinating outreach and events for a mission-led organisation",
    image: "/projects/command-center.svg",
    chart: {
      title: "Anonymised outreach system",
      variant: "bars",
      kpis: [
        { value: "1", label: "partner database" },
        { value: "1", label: "event calendar" },
        { value: "1", label: "follow-up flow" },
      ],
      bars: [0.4, 0.6, 0.55, 0.75, 0.7, 0.9],
      donut: 0.7,
      accent: "amber",
    },
    situation:
      "A paid Fiverr client needed a clearer way to coordinate partner research, outreach, recurring events and follow-up. Identifying details and exact scope have been generalised to protect client confidentiality.",
    handled:
      "I researched potential partner organisations, organised the outreach records, maintained the event schedule, prepared communication materials and tracked follow-up actions.",
    improved:
      "I brought the moving parts into a repeatable system: one partner database, one event calendar and a clear follow-up workflow, so each outreach cycle could start from current records.",
    changed:
      "The client received an organised system for managing research, scheduling and follow-up. Exact figures, locations and programme details are intentionally withheld.",
    tools: ["Records database", "Multilingual scheduling", "Outreach coordination", "Follow-up tracking"],
    links: [{ label: "Read the anonymised case study", href: "/work/pan-african-outreach" }],
  },
  {
    // Featured case study three: the strongest existing repo project showing
    // recurring ownership (coordination, tracking, reporting), rewritten into
    // the four-heading structure using only content already in the repo.
    id: "delivery",
    badge: "Self-directed portfolio project · Asana programme operations",
    title: "Coordinating a 12-week programme across five delivery phases",
    image: "/projects/delivery.svg",
    situation:
      "This self-directed portfolio demonstration explores a realistic 12-week programme that starts in email threads and shared documents, without dependency tracking, escalation paths or a clear delivery view. It was not a paid client engagement.",
    handled:
      "I mapped how I would coordinate the programme through delivery: tracking tasks across each phase, managing sequencing, flagging blocked work and creating a clear leadership view.",
    improved:
      "I moved the whole programme into a structured Asana system: 24 tasks across 5 phases with 9 mapped dependencies, custom fields for live status, and automated escalation that routes blocked work straight to leadership.",
    changed:
      "The demonstration shows how sequencing can be system-led, how blocked work can trigger an escalation and how goals, milestones and delivery tracking can connect in one reporting view.",
    tools: ["Asana", "Dependency Mapping", "Process Automation", "KPI Tracking"],
    links: [{ label: "Watch the walkthrough", href: "https://youtu.be/8v5r37T_dDo" }],
  },
  // NOTE(evidence-pending): A Notion staff-onboarding case study will eventually
  // sit here as a fourth featured study. It is intentionally omitted for now —
  // there is no verified feedback or impact figure for it yet, and we do not
  // publish an unevidenced impact claim. Add it once real results exist.
];

/* ── EdTech programme operations ───────────────────────────────────────
   A distinct section between Featured work and Additional work. Reuses the
   FeaturedStudy shape + FeaturedCaseStudy component. Three projects, each
   proving a different strength: owning defined workstreams in high-volume
   delivery; replacing manual work with a measurable data/automation system;
   and aligning teams around shared operating standards. All language is
   sector-level (EdTech / digital learning) — no employer or internal names. */
export const edtechOps: FeaturedStudy[] = [
  {
    id: "edtech-technical-programme",
    badge: "Professional experience · EdTech programme delivery",
    title: "Owning key operations for a 3,174-learner programme launch",
    image: "/projects/edtech-technical-programme.svg",
    chart: {
      title: "Launch funnel",
      variant: "funnel",
      kpis: [
        { value: "3,174", label: "learners" },
        { value: "90%", label: "CSAT" },
        { value: "54%", label: "open rate" },
      ],
      bars: [1, 0.82, 0.64, 0.46],
      accent: "amber",
    },
    metric: "3,174",
    metricLabel: "learners supported through launch and delivery",
    situation:
      "An EdTech organisation was preparing to launch a new technical-skills cohort for 3,174 learners. The launch depended on several connected workstreams: platform readiness, learner communications, support ownership, activity tracking and early-risk reporting. Without one coordinated operating rhythm, issues in any one of these areas could disrupt the learner experience at scale.",
    handled:
      "I owned the learner communications, community-platform readiness, tracking and reporting workstreams from launch preparation into day-to-day delivery. I mapped tasks, owners, dependencies and timelines across programme, product and support teams; prepared community spaces and moderator access; built and scheduled the learner communication journey in HubSpot; and maintained the operational tracker used to identify engagement risks and support needs.",
    improved:
      "I turned the work into a repeatable operating system: a reusable communication framework, a complementary WhatsApp broadcast channel, documented engagement and retention rhythms, clear escalation paths, and reporting that combined onboarding feedback with learner-activity data.",
    changed:
      "The programme launched with stable community spaces, defined support ownership and a shared view of learner activity. Pre-onboarding emails achieved a 54% open rate and onboarding emails achieved 49%. The onboarding experience recorded 90% CSAT. Weekly learner-support sessions recorded 80% CSAT, and 91% of respondents said the sessions improved their understanding of the content and expectations.",
    figures: [
      "3,174 learners",
      "54% pre-onboarding email open rate",
      "90% onboarding CSAT",
      "91% reported improved understanding",
    ],
    tools: [
      "HubSpot",
      "Google Sheets",
      "Online community platform",
      "WhatsApp",
      "Learner communications",
      "Cross-functional delivery",
      "Programme reporting",
    ],
  },
  {
    id: "edtech-programme-analytics",
    badge: "Professional experience · EdTech analytics & automation",
    title: "Replacing manual learner tracking with one automated reporting system",
    image: "/projects/edtech-programme-analytics.svg",
    chart: {
      title: "Reporting automation",
      variant: "bars",
      kpis: [
        { value: "3", label: "programmes" },
        { value: "50%+", label: "less manual work" },
        { value: "1", label: "shared workflow" },
      ],
      bars: [0.9, 0.72, 0.58, 0.44, 0.34, 0.28],
      donut: 0.5,
      accent: "blue",
    },
    metric: "50%+",
    metricLabel: "manual tracking effort removed",
    situation:
      "Three digital learning programmes relied on teams manually updating recurring engagement and performance reports. The process consumed delivery time, produced inconsistent snapshots and made it harder to spot changes in learner behaviour early enough to act.",
    handled:
      "I led the operational design of the new tracking workflow. I defined the reporting requirements and decision points with technical mentors and programme teams, mapped the recurring manual steps, established the metrics needed for onboarding and weekly delivery reviews, and translated those needs into a shared tracker structure.",
    improved:
      "I designed and implemented automated Google Sheets trackers across the three programmes in collaboration with technical mentors. The system standardised recurring updates, reduced manual handling and surfaced engagement patterns in a format teams could use during weekly planning.",
    changed:
      "The system reduced manual tracking effort by more than 50%. Reporting became more timely and consistent, allowing teams to identify engagement changes earlier and redirect time from spreadsheet maintenance to targeted outreach, learner support and programme improvement.",
    figures: [
      "3 programmes connected",
      "50%+ less manual tracking",
      "Earlier visibility into engagement risks",
      "1 repeatable reporting workflow",
    ],
    tools: [
      "Google Sheets",
      "Google Apps Script",
      "Data automation",
      "KPI tracking",
      "Learner segmentation",
      "Operational reporting",
    ],
  },
  {
    id: "edtech-operations-playbook",
    badge: "Professional experience · EdTech operating systems",
    title: "Aligning three programme teams around one operating framework",
    image: "/projects/edtech-operations-playbook.svg",
    chart: {
      title: "Teams aligned",
      variant: "kanban",
      kpis: [
        { value: "3", label: "teams" },
        { value: "1", label: "playbook" },
        { value: "2", label: "feedback points" },
      ],
      accent: "amber",
    },
    metric: "3",
    metricLabel: "programme teams aligned",
    situation:
      "Three digital learning teams were operating with distributed programme knowledge, different feedback methods and no single reference for recurring delivery practices. This increased clarification work and made it difficult to compare learner feedback or carry operational learning from one programme into another.",
    handled:
      "I owned the evaluation and feedback workstream and coordinated inputs from programme and operations teams. I documented recurring roles and workflows, maintained the central Notion resource hub, facilitated structured retrospectives, and designed shared onboarding and end-of-programme surveys.",
    improved:
      "I created the programme-evaluation framework, led the standardisation of learner feedback tools and co-created the cross-programme operations playbook. I also coordinated transition training and organised the supporting resources so teams could repeat important processes without relying on institutional memory.",
    changed:
      "The three teams gained one shared reference for programme delivery and one consistent approach to onboarding and end-of-programme feedback. Information became easier to find, clarification requests reduced, and teams could compare feedback and carry lessons into future delivery cycles more consistently.",
    figures: [
      "3 programme teams aligned",
      "1 shared operations playbook",
      "2 learner-feedback points standardised",
      "1 central knowledge hub",
    ],
    tools: [
      "Notion",
      "Programme playbooks",
      "Survey design",
      "Evaluation frameworks",
      "SOP documentation",
      "Workshop facilitation",
    ],
  },
];

/**
 * Additional work — every remaining project, content intact, moved out of the
 * old Operations/Analytics tab split into one lower grid. Derived from
 * caseStudyTiers (single source of truth for each project's body) with the
 * abstract titles simplified to the business problem. `delivery` is excluded
 * because it is promoted into featuredWork above.
 */
const additionalTitleOverrides: Record<string, string> = {
  onboarding: "Designing a scalable new-hire onboarding operations system",
  "command-center": "Designing one clear view of clients, deadlines and risks",
  pipeline: "Designing a four-step registration automation",
  ecommerce: "Turning a year of sales data into inventory and marketing decisions",
  support: "Finding where support tickets breach SLA",
  retail: "Reading retail sales for who buys and when",
  maji: "Auditing national water-survey data for reporting integrity",
};

const withOverriddenTitle = (item: CaseStudyItem): CaseStudyItem => ({
  ...item,
  title: additionalTitleOverrides[item.id] ?? item.title,
});

export const additionalWork: CaseStudyItem[] = caseStudyTiers
  .flatMap((tier) => tier.items)
  .filter((item) => item.id !== "delivery")
  .map(withOverriddenTitle);

/**
 * Focus-split of the case studies, so each portfolio shows only its own work.
 * Operations = Tier 1 (systems, automation, coordination); Data = Tier 2
 * (analytics, reporting, SQL/BI). `delivery` is excluded from the operations
 * list because it is promoted into `featuredWork` above.
 */
export const operationsWork: CaseStudyItem[] = caseStudyTiers[0].items
  .map(withOverriddenTitle);

export const dataWork: CaseStudyItem[] = caseStudyTiers[1].items.map(
  withOverriddenTitle,
);

/** The three case studies surfaced on the home page. `href` deep-links to the
    matching card on the Work page (the id anchors on caseStudyTiers items). */
export const featuredCaseStudies: {
  metric: string;
  metricLabel: string;
  title: string;
  blurb: string;
  href: string;
}[] = [
  {
    metric: "88%",
    metricLabel: "onboarding completion",
    title: "Cross-Functional Onboarding System",
    blurb: "Six tools, 250+ workflows, 91% SLA compliance — built for a firm scaling from 85 to 200 staff.",
    href: "/work#onboarding",
  },
  {
    metric: "$1,118+",
    metricLabel: "lifetime value, top 5%",
    title: "E-Commerce Analytics System",
    blurb: "An Excel analytics system that segmented customers and surfaced a high-margin category hiding at 6% of sales.",
    href: "/work#ecommerce",
  },
  {
    metric: "25%",
    metricLabel: "of tickets breaching SLA",
    title: "Customer Support Analytics",
    blurb: "A 15-query SQL audit and Power BI dashboard that pinpointed multi-agent handoffs as the primary bottleneck.",
    href: "/work#support",
  },
];

/** The delivery process, shown on the home page as a four-step strip. */
export const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Diagnose",
    body: "Map the workflow as it actually runs — where time goes, where errors enter, and which handoffs break.",
  },
  {
    step: "02",
    title: "Design",
    body: "Shape the system around the operational decision: the SOP, the tracker, the escalation path.",
  },
  {
    step: "03",
    title: "Automate",
    body: "Remove the manual load with the right tool for the seam — Zapier, Make, Apps Script, or native automations.",
  },
  {
    step: "04",
    title: "Report",
    body: "Put a measured number on the outcome and a dashboard in front of the people who steer by it.",
  },
];

/** Sectors / communities worked across (kept generic — no employer names). */
export const organisations: string[] = [
  "Operational programmes",
  "Open-mapping communities",
  "GIS & humanitarian mapping",
];

export type Service = {
  /** Icon key resolved in the home "What I Do" grid. */
  icon: "process" | "team" | "systems" | "reporting";
  title: string;
  body: string;
};

/**
 * The home service categories, four-column grid. Ordered hands-on ownership
 * first, systems and automation last — the work I personally own before the
 * tools that make it reliable.
 */
export const services: Service[] = [
  {
    icon: "team",
    title: "Onboarding and follow-up",
    body: "I track each person through every stage, monitor incomplete steps, follow up with the people who go quiet and keep the records current.",
  },
  {
    icon: "process",
    title: "Day-to-day coordination",
    body: "I manage attendance, schedules, action items, documents and recurring work so important details don't quietly slip.",
  },
  {
    icon: "reporting",
    title: "Tracking and reporting",
    body: "I maintain current trackers, monitor progress and prepare clear updates without spending a full day pulling information from different places.",
  },
  {
    icon: "systems",
    title: "Systems and automation",
    body: "Once I understand how the work operates, I document and improve it using practical SOPs, trackers and automation so fewer steps depend on memory.",
  },
];

/**
 * Problem-recognition prompts, shown directly after the hero. Compact, no
 * icons — the reader should see their own week in these lines.
 */
export const problemPrompts = {
  heading: "Does this sound familiar?",
  items: [
    "You're re-reading a spreadsheet to work out who hasn't replied.",
    "Onboarding works, but only because someone remembers every step.",
    "Reporting takes hours because the information lives in four different places.",
  ],
} as const;

/**
 * Central positioning statement — the answer to "will she do the detailed
 * work herself, or just build systems?" Rendered in the existing visual
 * language after the service categories.
 */
export const positioning = {
  heading: "I run the work and improve the system behind it.",
  paragraphs: [
    "I'm comfortable in the detail: updating records, checking progress, following up, coordinating next steps and closing the actions that would otherwise sit unresolved.",
    "I also look for practical ways to reduce repetition and prevent errors — a clearer tracker, a documented process, a cleaner handoff, an automated reminder that no longer depends on me remembering.",
    "I see systems as what makes administrative work reliable, not as a way out of doing it.",
  ],
} as const;

export type Capability = {
  title: string;
  body: string;
};

/** Grouped capabilities, real, but better together than as separate cases. */
export const capabilities: Capability[] = [
  {
    title: "Automation, by design.",
    body: "I connect the tools teams already use, forms, sheets, Gmail, ClickUp, Asana, and remove the manual handoffs between them. The outcome isn't just saved hours; it's fewer errors, faster onboarding, and a process that behaves the same on its busiest day as its quietest.",
  },
  {
    title: "Analytics at the decision table.",
    body: "I build the reporting layer that shows leadership where delivery is breaking down while there's still time to change it, dashboards, SQL analysis, and KPI frameworks built around a decision, not a slide.",
  },
  {
    title: "Tracking and operational visibility.",
    body: "I turn scattered operational data into a single self-updating source of truth, held to 98% accuracy across 12 countries, so status is something you read, not something you chase.",
  },
  {
    title: "Coordination across programmes and borders.",
    body: "I run the SOPs, funnels, and escalation logic that keep facilitators, operations, and leadership in sync, across teams, ambassadors, and multiple markets at once.",
  },
];

/** Closing note for the toolkit section, which is rendered as a moving marquee. */
export const toolkitNote =
  "The systems, automation, and analytics tools behind the work: workflow automation, project and knowledge bases, spreadsheets and databases, dashboards and design. The tools are the easy part, the judgment about which to use, and why, is the work.";

export type Tool = {
  name: string;
  /** Official brand lockup (mark + name) in /public/logos. */
  logo: string;
};

/** The moving toolkit marquee, official brand marks set with the tool name. */
export const toolkit: Tool[] = [
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Airtable", logo: "/logos/airtable.svg" },
  { name: "Asana", logo: "/logos/asana.svg" },
  { name: "ClickUp", logo: "/logos/clickup.svg" },
  { name: "Google Sheets", logo: "/logos/google-sheets.svg" },
  { name: "Excel", logo: "/logos/excel.svg" },
  { name: "Zapier", logo: "/logos/zapier.svg" },
  { name: "Make", logo: "/logos/make.svg" },
  { name: "Power BI", logo: "/logos/power-bi.svg" },
  { name: "MySQL", logo: "/logos/sql.svg" },
  { name: "Looker Studio", logo: "/logos/looker.svg" },
  { name: "Canva", logo: "/logos/canva.svg" },
];

export type Diagram = {
  src: string;
  title: string;
  caption: string;
};

/**
 * Operational system maps, shown as an in-place gallery on /work.
 * Placeholders live in /public/diagrams; swap each for a real exported diagram
 * or screenshot (and add more entries here, the gallery handles any number).
 */
export const diagrams: Diagram[] = [
  {
    src: "/diagrams/onboarding-ops-system.svg",
    title: "Cross-Functional Onboarding System",
    caption:
      "Intake form into filtering, ClickUp task creation, IT provisioning, and automated escalation of overdue cases, 250+ workflows across Client Services, Operations, and Analytics.",
  },
  {
    src: "/diagrams/automation-pipeline.svg",
    title: "Workflow Automation Pipeline",
    caption:
      "A four-step Zapier pipeline, Google Form to filter to Sheets record to personalised welcome email, replacing 45 minutes of daily manual processing.",
  },
  {
    src: "/diagrams/delivery-operations.svg",
    title: "Programme Delivery Operations",
    caption:
      "An Asana system covering 5 phases and 24 tasks with 9 mapped dependencies; blocked work escalates to leadership while facilitator completions auto-confirm.",
  },
  {
    src: "/diagrams/analytics-dashboard.svg",
    title: "Operational Analytics Layer",
    caption:
      "SQL over ticket, sales, and survey data feeding Power BI and Excel dashboards, SLA breaches, segmentation, and seasonal demand surfaced for leadership.",
  },
];

export type ClassSession = {
  title: string;
  day: string;
  time: string;
  cadence: string;
  level: Level;
};

export const schedule: ClassSession[] = [
  {
    title: "Operations Diagnostic",
    day: "Mondays",
    time: "14:00 EAT",
    cadence: "Weekly",
    level: "Newcomer",
  },
  {
    title: "Automation Build Session",
    day: "Wednesdays",
    time: "16:00 EAT",
    cadence: "Weekly",
    level: "Practitioner",
  },
  {
    title: "Analytics & Reporting Office Hours",
    day: "Fridays",
    time: "15:00 EAT",
    cadence: "Fortnightly",
    level: "Architect",
  },
];

export type Episode = {
  title: string;
  guest: string;
  summary: string;
  published: string;
};

export const episodes: Episode[] = [
  {
    title: "Results measured, not claimed",
    guest: "Solo",
    summary:
      "Why an operations portfolio should lead with the number and the decision it changed, and how to build the tracking that makes that honest.",
    published: "2026-06-12",
  },
  {
    title: "Automating the work nobody should do by hand",
    guest: "on workflow automation",
    summary:
      "Reading a manual process for the seams, and the small automations, Apps Script, Zapier, Make, that quietly return whole days to a team.",
    published: "2026-05-29",
  },
  {
    title: "Operating across 12 countries without losing the thread",
    guest: "on programme operations",
    summary:
      "One source of truth, clear SOPs, and escalation logic, what it actually takes to keep distributed programmes in sync.",
    published: "2026-05-15",
  },
];

export type TalkTopic = {
  title: string;
  audience: string;
  body: string;
};

export const talkTopics: TalkTopic[] = [
  {
    title: "Turning operational chaos into scalable systems",
    audience: "Programme & operations teams",
    body: "A field account of replacing manual workflows with automation that scales, and the judgment about what to automate first.",
  },
  {
    title: "Analytics that changes what happens next",
    audience: "Leadership · Data & reporting tracks",
    body: "How operational reporting earns its keep, building the dashboard and the KPI framework around a decision instead of a vanity metric.",
  },
  {
    title: "Data where it meets geography",
    audience: "Open-mapping · Women in GIS",
    body: "On an open-mapping and GIS background, and what it teaches about data quality, community-built datasets, and mapping the underrepresented.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

/** FAQ is content-managed in production (editable without redeploy). Sample seed below. */
export const faqs: FaqItem[] = [
  {
    question: "What kind of work are you looking for?",
    answer:
      "Programme Operations, BizOps, and Founders Associate roles, plus operations and analytics advisory for founders and programme teams. If it involves turning a messy process into a system, it's the right conversation.",
  },
  {
    question: "What does “operations” mean in practice for you?",
    answer:
      "The recurring work that keeps delivery moving: onboarding and follow-ups, coordination, tracking and reporting — and the SOPs, trackers and automation I build behind it so fewer things depend on someone remembering every step. The Work page has examples.",
  },
  {
    question: "Do you work with teams as well as founders?",
    answer:
      "Yes. Advisory is focused on helping founders and programme teams build the operational backbone — the workflows, tracking and escalation that let delivery scale. Start with an inquiry and we'll find the right shape.",
  },
  {
    question: "Which tools do you actually build in?",
    answer:
      "Notion, Airtable, Asana, and ClickUp for systems and delivery; Zapier, Make, and Apps Script for automation; Google Sheets and Apps Script for tracking. The tool follows the problem, not the other way around.",
  },
];

/** FAQ for the Data portfolio (analytics-voiced). */
export const dataFaqs: FaqItem[] = [
  {
    question: "What kind of work are you looking for?",
    answer:
      "Data analyst, reporting/BI, and operations-analytics roles, plus analytics advisory for founders and programme teams. If it involves turning messy data into a number leadership can act on, it's the right conversation.",
  },
  {
    question: "Analytics or operations, which is it?",
    answer:
      "My focus here is analytics — SQL, dashboards, and reporting — but it's grounded in real operations, which is what keeps the reporting honest. Reliable decisions need reliable data, and reliable data starts with the process that captures it. The Work page has examples.",
  },
  {
    question: "Which tools do you actually build in?",
    answer:
      "SQL and MySQL (CTEs, window functions) for querying and auditing, Excel for modelling, and Power BI and Looker Studio for dashboards. The tool follows the question, not the other way around.",
  },
  {
    question: "Do you work with teams as well as founders?",
    answer:
      "Yes. Advisory is focused on helping founders and programme teams build the reporting layer and KPI framework to steer by. Start with an inquiry and we'll find the right shape.",
  },
];

export type BioLength = {
  label: string;
  text: string;
};

export const bios: BioLength[] = [
  {
    label: "Short (embed)",
    text: "Operations and analytics, I build the automation, tracking, and reporting systems that turn operational chaos into scale.",
  },
  {
    label: "Medium",
    text: "I'm an operations professional turning messy data, manual workflows, and scattered pipelines into automated systems that scale. Over three years I've built the automation, tracking, and reporting infrastructure behind programmes reaching thousands of participants, with an analytics practice in SQL, Excel, and Power BI, and a GIS and open-mapping background underneath it.",
  },
  {
    label: "Press (long)",
    text: "Keren Wang'ombe is an operations and analytics professional who builds the automation, tracking, and reporting systems behind programmes reaching thousands of participants across 8+ countries. Her work turns operational complexity into repeatable execution: a self-updating health tracker holding 98% data accuracy across 12 countries, automation that cut manual tracking work by 50% and saved 15+ hours a week, and executive reporting that carried a programme from 2,032 registrations to 900 completions at an 86% completion rate. Alongside operations she keeps a hands-on analytics practice, SQL, Excel, and Power BI, used to surface SLA breaches, segment customers, and audit data integrity, and a GIS and open-mapping background that shows up wherever data meets geography. She works at the seam of operations and analytics, two disciplines that share one question: how do we make this run better?",
  },
];

/** Long-form bio for /about, paragraph by paragraph (author's own copy). */
export const bioStory: string[] = [
  "When a recurring process depends on someone manually holding it together, I look for a way to turn it into a reliable system. That instinct shapes most of my work.",
  "For the past three years, I've built and maintained the automation, tracking and reporting systems behind high-volume workforce-development programmes—the operational backbone that helps delivery teams coordinate clearly as programmes grow.",
  "I led the operational design of automated trackers across three programmes, reducing manual tracking effort by more than 50%. I also maintained cohort dashboards at 99% data accuracy and owned communications, readiness, tracking and reporting workstreams for a 3,174-learner programme launch.",
  "Operations and analytics are closely connected in my work. Reliable decisions require reliable data, and reliable data begins with processes designed to capture it accurately. I work across both sides: building the workflows that keep information organised and creating reporting that turns it into useful decisions.",
  "My toolkit includes Google Apps Script, SQL, Excel, Power BI, and workflow automation platforms, but the tools are never the point. The value lies in building systems that teams trust, adopt, and continue using as they grow.",
  "My approach is also shaped by a background in GIS and open mapping, where I first learned that data quality is an operational discipline, not an afterthought.",
];

/** A warm, human aside for /about. */
export const bioPersonal =
  "Off the clock, you'll find me deep in an open-mapping project, filling in the parts of the map that data forgot, or chasing a systems idea worth building on.";

/** The closing for /about, three roles set apart from the statement. */
export const bioRoles = ["Builder", "Operator", "Analyst"];
export const bioCloseText =
  "I build the systems that turn operational chaos into scale, and the reporting that keeps them honest.";

/* ── Data portfolio: focused copy ──────────────────────────────────────
   The same person and the same defensible figures as above, told from the
   analytics side: reporting, SQL/BI, KPI frameworks, and the decisions the
   numbers change. Consumed only by the Data site (sites/data); the Operations
   site keeps the exports above. Kept here, beside their operations
   counterparts, so both portfolios draw from one content library. */

/** /data home — outcome-led analytics metrics, each drawn from a real project. */
export const dataOutcomes: Outcome[] = [
  {
    metric: "86%",
    metricLabel: "completion, reported end to end",
    title: "Reported a programme from 2,032 registrations to 900 graduates.",
    body: "Executive reporting tracked a cybersecurity cohort's full funnel to an 86% graduation rate and 81% CSAT, with live dashboards that surfaced where delivery was slipping while there was still time to act.",
    hero: true,
  },
  {
    metric: "25%",
    metricLabel: "of tickets found breaching SLA",
    title: "Found a quarter of support tickets breaching SLA.",
    body: "A 15-query SQL audit of ticket ageing, ownership and escalation exposed that 25% of tickets breached the 14-day SLA — multi-agent handoffs the primary bottleneck — and put it in an executive Power BI dashboard.",
  },
  {
    metric: "$1,118+",
    metricLabel: "lifetime value, top 5% of customers",
    title: "Segmented a year of sales into decisions.",
    body: "An Excel analytics system found the top 5% of customers driving $1,118+ in lifetime value and Electronics as a high-margin category hiding at 6% of sales — a clear growth lever for inventory and marketing.",
  },
  {
    metric: "98%",
    metricLabel: "data accuracy across 12 countries",
    title: "Held reporting to 98% accuracy across 12 countries.",
    body: "A self-updating tracker reconciled scattered programme data into one weekly source of truth at 98% accuracy — so leadership steered by a number they could trust, not four spreadsheets that disagreed.",
  },
];

/** /data home — the analytics service categories, four-column grid. */
export const dataServices: Service[] = [
  {
    icon: "reporting",
    title: "Executive reporting & dashboards",
    body: "I build the reporting layer that shows leadership where delivery is slipping while there's still time to act — Power BI, Looker Studio, and scorecards built around a decision.",
  },
  {
    icon: "systems",
    title: "SQL analysis & auditing",
    body: "I query operational data with CTEs and window functions to surface SLA breaches, customer segments, seasonal demand and data-integrity issues.",
  },
  {
    icon: "process",
    title: "KPI frameworks & modelling",
    body: "I turn a decision into the metrics that steer it — Excel models, funnels and KPI frameworks built around what should happen next, not a vanity slide.",
  },
  {
    icon: "team",
    title: "Data cleaning & storytelling",
    body: "I clean and reconcile messy data until it can be trusted, then make the number legible — a chart, a read, a clear recommendation a non-analyst can act on.",
  },
];

/** /data home — problem-recognition prompts in an analytics voice. */
export const dataProblemPrompts = {
  heading: "Does this sound familiar?",
  items: [
    "Leadership is steering on gut feel because the reporting lands too late to act on.",
    "The data lives in four systems, and nobody trusts the number when it finally arrives.",
    "You have dashboards, but none of them answers the question you actually have.",
  ],
} as const;

/** /data home — central positioning for the analytics practice. */
export const dataPositioning = {
  heading: "I build the number, and the decision it should change.",
  paragraphs: [
    "I start from the decision, not the dataset: what will change once we can see this clearly? Then I build the reporting that answers it.",
    "I'm comfortable in the query and the spreadsheet — SQL joins and window functions, Excel models, Power BI and Looker dashboards — cleaning and reconciling data until it can be trusted.",
    "A dashboard nobody reads is waste. I build the reporting layer around a real operational decision, and make it legible to the people who steer by it.",
  ],
} as const;

/** /data home — the analytics delivery process, four-step strip. */
export const dataProcessSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Define",
    body: "Start from the decision — what should change once this is visible — and name the metric that moves it.",
  },
  {
    step: "02",
    title: "Model",
    body: "Clean, join and reconcile the data until the number can be trusted end to end.",
  },
  {
    step: "03",
    title: "Analyse",
    body: "Query for the pattern — SLA breaches, segments, seasonality, integrity gaps — with SQL, Excel, and window functions.",
  },
  {
    step: "04",
    title: "Report",
    body: "Put it in front of the people who steer by it: a dashboard, a scorecard, a clear read they can act on.",
  },
];

/** /data about — the same story, told from the analytics side. */
export const dataBioStory: string[] = [
  "When leadership has to make a call, I want the number in front of them to be one they can trust. Building the reporting that makes that true is most of my work.",
  "For the past three years I've built the analytics and reporting layer behind programmes serving thousands of learners across twelve countries — the executive dashboards, funnels and trackers that show where delivery is working and where it isn't.",
  "Accurate reporting carried one cohort of 1,046 learners to an 86% completion rate at 81% learner satisfaction, and a self-updating tracker held 98% data accuracy across programme operations. A 15-query SQL audit exposed that 25% of support tickets were breaching SLA, and an Excel segmentation surfaced the top 5% of customers driving $1,118+ in lifetime value.",
  "My toolkit is SQL and MySQL (CTEs, window functions), Excel modelling, and Power BI and Looker Studio — but the tools are never the point. The value is a number a team trusts and a decision it actually changes.",
  "Analytics and operations are closely connected in my work: reliable decisions require reliable data, and reliable data begins with processes designed to capture it accurately. That operational instinct is what keeps my reporting honest.",
  "My approach is also shaped by a background in GIS and open mapping, where I first learned that data quality is a discipline, not an afterthought.",
];

/** /data about — three roles set apart from the closing statement. */
export const dataBioRoles = ["Analyst", "Builder", "Storyteller"];
export const dataBioCloseText =
  "I build the analysis that turns operational data into decisions, and the reporting that keeps them honest.";

/** /data work — analytics capability summary for the toolkit note. */
export const dataToolkitNote =
  "The analysis and reporting tools behind the work: SQL and MySQL for querying and auditing, Excel for modelling, Power BI and Looker Studio for dashboards, and the automation that keeps the data current. The tools are the easy part — the judgment about which number matters, and why, is the work.";

/* ── Home page (mockup layout) ─────────────────────────────────────────
   Plain-language content for the redesigned home page, written so someone
   who has never heard the term "operations" understands what they'd be
   hiring me to do. Navy/amber brand, same components on both portfolios. */

export type IconKey =
  | "chart" | "people" | "database" | "clock"
  | "search" | "explore" | "query" | "dashboard" | "bulb"
  | "coordinate" | "onboard" | "gear";

export type HeroToolGroup = { group: string; items: Tool[] };
export type StatItem = { value: string; label: string; sub: string; icon: IconKey };
export type WhatIDoItem = { icon: IconKey; title: string; body: string };
export type CardDashboard = {
  title: string;
  kpis: { value: string; label: string }[];
  variant?: "bars" | "line" | "grid" | "funnel" | "kanban";
  bars?: number[];
  donut?: number;
  accent?: "amber" | "blue";
};
export type FeaturedCard = {
  /** On-brand dashboard preview shown at the top of the card. */
  dashboard: CardDashboard;
  title: string;
  body: string;
  tags: string[];
  href: string;
};
export type ApproachStep = { n: string; title: string; body: string };

/** Browser-tab title for the home page (focus-specific). */
export const homeMetaTitle = "Programme operations, delivery systems & reporting";

/** Home hero — headline + plain intro + primary call to action. */
export const homeHero = {
  kicker: "Programme operations · Delivery systems · Reporting",
  title: "I run programme operations and build systems that help teams scale.",
  intro:
    "I coordinate programme delivery, improve onboarding and automate reporting for distributed teams. My work has supported 3,000+ learners across 12+ countries, with systems that make progress and delivery risks easier to see.",
  primaryCta: { label: "See my work", href: "/work" },
};

/** Heading for the "Tools I use" section. */
export const toolsHeading = "Tools I use";

/** Tools shown in the "Tools I use" section, grouped by what they're for.
    Logos here are the icon-only marks (/logos/icons); the wide mark+name
    lockups (/logos) are used by the LogoMarquee. */
export const heroToolGroups: HeroToolGroup[] = [
  {
    group: "Project & delivery",
    items: [
      { name: "Asana", logo: "/logos/icons/asana.svg" },
      { name: "ClickUp", logo: "/logos/icons/clickup.svg" },
      { name: "Notion", logo: "/logos/icons/notion.svg" },
    ],
  },
  {
    group: "Automation",
    items: [
      { name: "Zapier", logo: "/logos/icons/zapier.svg" },
      { name: "Make", logo: "/logos/icons/make.svg" },
      { name: "Airtable", logo: "/logos/icons/airtable.svg" },
    ],
  },
  {
    group: "Tracking & reporting",
    items: [
      { name: "Google Sheets", logo: "/logos/icons/google-sheets.svg" },
      { name: "Excel", logo: "/logos/icons/excel.svg" },
      { name: "Looker Studio", logo: "/logos/icons/looker.svg" },
    ],
  },
];

/** Home stat strip — four quick, plain proof points. */
export const homeStats: StatItem[] = [
  { value: "3,174", label: "learners supported through programme launch", sub: "One high-volume programme", icon: "people" },
  { value: "50%+", label: "less manual tracking effort", sub: "Across three programmes", icon: "gear" },
  { value: "99%", label: "data accuracy maintained in cohort dashboards", sub: "Professional programme reporting", icon: "chart" },
  { value: "317", label: "people tracked through a multi-stage pipeline", sub: "Professional programme operations", icon: "people" },
];

/** "What I do" — four plain descriptions of the work. */
export const whatIDo: WhatIDoItem[] = [
  { icon: "coordinate", title: "Programme delivery", body: "I coordinate workstreams, owners, dependencies and escalation so launches and live delivery stay on track." },
  { icon: "onboard", title: "Onboarding & participant operations", body: "I design the stages, communication and follow-up that move people from interest to active participation." },
  { icon: "dashboard", title: "Reporting & decision support", body: "I build accurate reporting that shows leaders what is changing, what is at risk and what needs a decision." },
  { icon: "gear", title: "Systems & process improvement", body: "I turn recurring work into practical trackers, SOPs and automations that distributed teams can rely on." },
];

/** Featured work cards — three, each with a dashboard preview and plain summary. */
export const featuredCards: FeaturedCard[] = [
  {
    dashboard: {
      title: "Synthetic portfolio view",
      variant: "kanban",
      kpis: [
        { value: "4", label: "programmes" },
        { value: "712", label: "participants" },
        { value: "11", label: "open risks" },
      ],
      accent: "amber",
    },
    title: "Cohort Delivery Control Tower",
    body: "Self-directed interactive demonstration: one decision view for readiness, milestones, participant risk, ownership and weekly delivery priorities.",
    tags: ["Self-directed", "Programme operations", "Decision support"],
    href: "/work/cohort-delivery-control-tower",
  },
  {
    dashboard: {
      title: "Programme launch",
      variant: "funnel",
      kpis: [
        { value: "3,174", label: "learners" },
        { value: "90%", label: "CSAT" },
        { value: "54%", label: "open rate" },
      ],
      accent: "blue",
    },
    title: "Owning key operations for a 3,174-learner programme launch",
    body: "Professional experience: owned communications, onboarding, platform readiness, tracking and reporting workstreams for a high-volume programme launch.",
    tags: ["Professional experience", "Delivery", "Reporting"],
    href: "/work#edtech-technical-programme",
  },
  {
    dashboard: {
      title: "Anonymised client system",
      variant: "bars",
      kpis: [
        { value: "1", label: "partner base" },
        { value: "1", label: "event calendar" },
        { value: "1", label: "follow-up flow" },
      ],
      accent: "amber",
    },
    title: "Coordinating outreach and events for a mission-led organisation",
    body: "Paid Fiverr engagement: organised partner research, outreach records, scheduling and follow-up while protecting client-identifying details.",
    tags: ["Paid Fiverr project", "Outreach", "Coordination"],
    href: "/work#pan-african",
  },
];

/** Label on the "see everything" button under the featured cards. */
export const viewAllWorkLabel = "View all operations work";

/** "My approach" — five simple steps. */
export const approachHeading = "My approach to operations";
export const approachSteps: ApproachStep[] = [
  { n: "1", title: "Understand", body: "Learn how the work really flows and where it gets stuck." },
  { n: "2", title: "Organise", body: "Put the tasks, owners and steps into one clear place." },
  { n: "3", title: "Improve", body: "Simplify the process and remove the manual, repetitive parts." },
  { n: "4", title: "Automate", body: "Use the right tools so routine steps happen on their own." },
  { n: "5", title: "Track", body: "Report progress clearly so nothing slips and leaders can see status." },
];

/** Home "Hi, I'm Keren" strip. */
export const aboutStrip = {
  greeting: "Hi, I'm Keren.",
  bio: "I'm a programme operations specialist who enjoys making complex delivery feel clear: the right owner, the right signal and the next action visible at the right time.",
  ctaHeading: "Need someone who can own delivery and strengthen the system behind it?",
  ctaSub: "Let's talk about your programme, operations role or short systems project.",
};
