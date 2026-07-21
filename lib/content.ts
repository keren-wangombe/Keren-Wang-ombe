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
    metricLabel: "data accuracy, 12 countries",
    title: "Held 98% data accuracy across 12 countries.",
    body: "A self-updating learner health tracker pulled scattered cohort data into one weekly source of truth, monitoring progress at 98% accuracy without a person touching a spreadsheet.",
  },
  {
    metric: "86%",
    metricLabel: "cohort graduation rate",
    title: "Reported a cohort from 2,032 registrations to 900 graduates.",
    body: "Executive reporting for Cybersecurity Cohort 11, tracking the full funnel to an 86% graduation rate and 81% CSAT, so leadership decisions rested on numbers, not anecdotes.",
  },
  {
    metric: "3,000+",
    metricLabel: "learners supported",
    title: "Coordinated operations behind 3,000+ learners.",
    body: "Automation, tracking, and reporting infrastructure spanning 8+ African countries, the operational backbone that let programmes scale without the coordination overhead scaling with them.",
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

/** Trusted-by band on the home page (organisations Keren has worked with). */
export const organisations: string[] = [
  "ALX Africa",
  "OpenStreetMap Kenya",
  "HOT",
  "Tanzania Development Trust",
  "African Women in GIS",
];

export type Service = {
  /** Icon key resolved in the home "What I Do" grid. */
  icon: "process" | "team" | "systems" | "reporting";
  title: string;
  body: string;
};

/** The home "What I Do" four-column grid. */
export const services: Service[] = [
  {
    icon: "process",
    title: "Process Design",
    body: "Mapping messy workflows and rebuilding them as clear, repeatable SOPs that don't depend on anyone's memory.",
  },
  {
    icon: "team",
    title: "Team Operations",
    body: "Coordinating facilitators, ambassadors, and delivery across cohorts and borders, in sync and on time.",
  },
  {
    icon: "systems",
    title: "Systems & Tools",
    body: "Automating intake, tracking, and reporting with Zapier, Make, Apps Script, Notion, and Asana.",
  },
  {
    icon: "reporting",
    title: "Reporting & Insights",
    body: "Turning operational data into dashboards and decisions with SQL, Excel, and Power BI.",
  },
];

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
    body: "I turn scattered cohort data into a single self-updating source of truth, held to 98% accuracy across 12 countries, so status is something you read, not something you chase.",
  },
  {
    title: "Coordination across programmes and borders.",
    body: "I run the SOPs, funnels, and escalation logic that keep facilitators, operations, and leadership in sync, across cohorts, ambassadors, and multiple African markets at once.",
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
    src: "/diagrams/health-tracker.svg",
    title: "Learner Health Tracker",
    caption:
      "Scattered cohort inputs reconciled into one self-updating weekly tracker, monitoring progress at 98% accuracy across 12 countries.",
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
    question: "Operations or analytics, which is it?",
    answer:
      "Both, and they share one question: how do we make this run better? I build the automation and tracking that keep delivery on track, and the reporting layer that shows where it isn't. The Work page has examples of each.",
  },
  {
    question: "Do you work with teams as well as founders?",
    answer:
      "Yes. Advisory is focused on helping founders and programme teams build the operational backbone and the reporting to steer by. Start with an inquiry and we'll find the right shape.",
  },
  {
    question: "Which tools do you actually build in?",
    answer:
      "Notion, Airtable, Asana, and ClickUp for systems and delivery; Zapier, Make, and Apps Script for automation; SQL, Excel, and Power BI for analytics. The tool follows the problem, not the other way around.",
  },
];

export type BioLength = {
  label: string;
  text: string;
};

export const bios: BioLength[] = [
  {
    label: "Short (embed)",
    text: "Programme operations and analytics, I build the automation, tracking, and reporting systems that turn operational chaos into scale across African learner programmes.",
  },
  {
    label: "Medium",
    text: "I'm a programme operations professional turning messy cohort data, manual workflows, and scattered pipelines into automated systems that scale. Over three years at ALX Africa I've built the automation, tracking, and reporting infrastructure behind learner programmes across the continent, with an analytics practice in SQL, Excel, and Power BI, and a GIS and open-mapping background underneath it.",
  },
  {
    label: "Press (long)",
    text: "Keren Wang'ombe is a Programme Operations Associate at ALX Africa, where she builds the automation, tracking, and reporting systems behind learner programmes reaching thousands of people across 8+ African countries. Her work turns operational complexity into repeatable execution: a self-updating health tracker holding 98% data accuracy across 12 countries, automation that cut manual tracking work by 50% and saved 15+ hours a week, and executive reporting that carried Cybersecurity Cohort 11 from 2,032 registrations to 900 graduates at an 86% graduation rate. Alongside operations she keeps a hands-on analytics practice, SQL, Excel, and Power BI, used to surface SLA breaches, segment customers, and audit data integrity, and a GIS and open-mapping background that shows up wherever data meets geography. She works at the seam of operations and analytics, two disciplines that share one question: how do we make this run better?",
  },
];

/** Long-form bio for /about, paragraph by paragraph (author's own copy). */
export const bioStory: string[] = [
  "I'm a programme operations professional, and for three years at ALX Africa I've built the automation, tracking, and reporting infrastructure behind learner programmes across the continent. My work turns messy cohort data, manual workflows, and scattered pipelines into systems that scale, the kind of operational backbone that lets a programme grow without its coordination overhead growing with it.",
  "The through-line is simple: I don't run the process by hand if it can be a system. A Google Apps Script pipeline cut manual NDA tracking by 50% and saved 15+ hours a week. A self-updating tracker held learner data to 98% accuracy across 12 countries. Executive reporting carried a cybersecurity cohort from 2,032 registrations to 900 graduates at 86% graduation and 81% CSAT, because the numbers were measured, not claimed.",
  "Underneath operations sits an analytics practice I keep hands-on, SQL, Excel, and Power BI, used to surface SLA breaches, segment customers, and audit data integrity. And underneath that, a GIS and open-mapping background with ALX, OpenStreetMap Kenya, HOT, and African Women in GIS, which is where I first learned that data quality is an operational discipline, not an afterthought. Operations and analytics are two halves of the same question: how do we make this run better?",
];

/** A warm, human aside for /about. */
export const bioPersonal =
  "Off the clock, you'll find me deep in an open-mapping project, filling in the parts of the map that data forgot, or chasing a systems idea worth building on.";

/** The closing for /about, three roles set apart from the statement. */
export const bioRoles = ["Builder", "Operator", "Analyst"];
export const bioCloseText =
  "I build the systems that turn operational chaos into scale, and the reporting that keeps them honest.";
