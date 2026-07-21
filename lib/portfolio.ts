/**
 * Portfolio content, ported from the reference site
 * (keren-wangombe.github.io/Keren-Portfolio-Website).
 *
 * Two domains — Operations (ember) and Operational Analytics (midnight) —
 * each with expandable project cards, plus deep case studies (some with the
 * actual SQL) that render inside a project's drawer.
 */

export const OPS_COLOR = "#F0684C";
export const DATA_COLOR = "#1E2D40";
export const TEAL = "#1A8B8B";

/* ── About / landing ──────────────────────────────────────────────────── */

export type Lane = {
  lane: string;
  color: string;
  desc: string;
  tags: string[];
};

export const whatIDo: Lane[] = [
  {
    lane: "Operations",
    color: OPS_COLOR,
    desc: "I design and build the operational systems, workflows, and governance frameworks that allow organisations to deliver at scale — consistently, reliably, and without burning out the team. From client onboarding infrastructure to delivery tracking systems and workflow automation, I build the operational backbone that makes execution repeatable.",
    tags: ["Operational Workflows", "SOP Design", "KPI Reporting", "Execution Tracking", "Onboarding Systems", "Workflow Automation"],
  },
  {
    lane: "Analytics",
    color: TEAL,
    desc: "I use data to surface where operations are breaking down and give leadership the visibility to act — dashboards, SQL analysis, and KPI frameworks built around operational decisions, not vanity metrics. I turn raw operational data into reporting that actually changes what teams do next.",
    tags: ["SQL", "Power BI", "Dashboard Design", "KPI Frameworks", "Operational Reporting", "Excel"],
  },
];

export type SkillGroup = {
  cat: string;
  color: string;
  icon: "settings" | "users" | "chart" | "zap" | "globe" | "message";
  line: string;
  skills: string[];
};

/** Landing "Skills" grid — six categorised cards of chips. */
export const aboutSkillGroups: SkillGroup[] = [
  {
    cat: "Operations",
    icon: "settings",
    color: OPS_COLOR,
    line: "I design the systems and processes that keep complex operations running reliably at scale.",
    skills: ["Programme Management", "SOP Design", "Milestone Planning", "Risk Mitigation", "System Design", "Process Mapping", "Programme Evaluation", "Health Tracking Frameworks", "Evaluation Frameworks", "Onboarding Design"],
  },
  {
    cat: "Stakeholder Management",
    icon: "users",
    color: TEAL,
    line: "I coordinate across teams and levels — translating operational complexity into clear communication.",
    skills: ["Executive Reporting", "Cross-functional Coordination", "OKR & KPI Tracking", "Stakeholder Communication", "Facilitation", "Partner Management", "Escalation Management", "Cross-border Coordination"],
  },
  {
    cat: "Data & Reporting",
    icon: "chart",
    color: DATA_COLOR,
    line: "I turn operational data into dashboards and decisions for teams and leadership.",
    skills: ["Google Sheets", "Excel", "Power BI", "SQL", "Data Storytelling", "KPI Framework Design", "Survey Design & Analysis", "A/B Testing", "Segmentation Analysis", "Dashboard Design"],
  },
  {
    cat: "Workflow Automation & Tools",
    icon: "zap",
    color: OPS_COLOR,
    line: "I connect tools and eliminate manual handoffs so teams focus on higher-value work.",
    skills: ["Zapier", "Make", "Airtable", "Notion", "Asana", "ClickUp", "Monday.com", "Jira"],
  },
  {
    cat: "Community Management",
    icon: "globe",
    color: TEAL,
    line: "I build the structures that turn groups into engaged, high-retention participants.",
    skills: ["Community Strategy", "Onboarding Design", "Virtual Event Management", "Engagement Programming", "Member Retention", "Ambassador Programmes"],
  },
  {
    cat: "Communication & Design",
    icon: "message",
    color: DATA_COLOR,
    line: "I produce the materials that make programmes feel professional and consistent.",
    skills: ["Canva", "Content Planning", "Newsletter Management", "Facilitation Guides", "Report Writing", "Presentation Design"],
  },
];

export const professionalSummary =
  "I design operational systems that help teams execute at scale — streamlining workflows, improving delivery visibility, and using data to drive better operational decisions. With 3+ years building infrastructure across large-scale programmes, I have a track record of diagnosing execution friction and implementing solutions that stick. My work sits at the intersection of operations and analytics — two disciplines that share the same core question: how do we make this organisation run better?";

/* ── Case studies (render inside a project's drawer) ─────────────────── */

export type CaseStudySection = {
  title: string;
  content?: string;
  bullets?: string[];
};

export type CaseStudyQuery = {
  title: string;
  insight: string;
  sql: string;
};

export type CaseStudy = {
  overview: string;
  sections: CaseStudySection[];
  queries?: CaseStudyQuery[];
  externalLabel?: string;
  externalUrl?: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  ecommerce: {
    overview:
      "A small e-commerce business was sitting on months of sales data with no system to interpret it. The founder knew some products were underperforming and some customers were buying repeatedly — but had no visibility into which ones, why, or what to do about it. This project built an end-to-end analytics system in Excel to answer those questions.",
    sections: [
      {
        title: "The Problem",
        content:
          "The business had transaction records across 12 months covering products, customer IDs, regions, and sales amounts — but all sitting in a flat export with no analysis layer. Leadership decisions were being made on gut feel rather than data. Three specific questions needed answering: Who are our most valuable customers? Which product categories are underperforming relative to their potential? Where geographically should we focus our next growth effort?",
      },
      {
        title: "Approach",
        content:
          "Built a structured analytics framework in Excel covering three analytical lenses: customer segmentation using purchase frequency and lifetime value, product performance analysis by category and margin, and regional sales distribution. Used pivot tables, VLOOKUP, conditional formatting, and a dashboard layer to make the findings navigable by non-technical stakeholders.",
      },
      {
        title: "Key Findings",
        bullets: [
          "Top 5% of customers by purchase frequency generated over $1,118 in lifetime value each — significantly above the average basket",
          "Electronics represented only 6% of total sales despite being the highest-margin category — flagged as a major growth opportunity",
          "Two regions were generating 60%+ of revenue with minimal marketing investment — prime candidates for doubling down",
          "Bottom 20% of SKUs by revenue contributed less than 2% of total sales — candidates for rationalisation",
        ],
      },
      {
        title: "Recommendations Delivered",
        bullets: [
          "Launch a loyalty tier for the top 5% customer segment with early access and exclusive offers",
          "Increase Electronics inventory and run a targeted campaign — this category punches above its weight on margin",
          "Reallocate 30% of marketing budget from underperforming regions to the top two revenue regions",
          "Retire or bundle the bottom 20% of SKUs to reduce operational complexity",
        ],
      },
      {
        title: "Tools & Skills Demonstrated",
        content:
          "Microsoft Excel — pivot tables, VLOOKUP, dynamic charts, conditional formatting, dashboard design, KPI tracking framework, customer segmentation logic.",
      },
    ],
    externalLabel: "Originally published on Medium",
    externalUrl:
      "https://medium.com/@nyamburawangombe/how-i-built-a-sales-customer-insights-dashboard-for-a-small-e-commerce-business-using-excel-1d95ecfa71b1",
  },
  support: {
    overview:
      "A fictional support operations team was struggling with SLA breaches, uneven agent workloads, and no visibility into where the system was breaking down. This project conducted a full SQL audit of the support ticket database — 15 targeted queries designed to surface every major operational bottleneck.",
    sections: [
      {
        title: "The Problem",
        content:
          "The support team had ticket data but no analytical layer. Managers couldn't answer basic questions: which issue types breach SLA most? Which agents are overloaded? Are tickets bouncing between agents unnecessarily? This audit was built to answer all of those questions systematically using SQL.",
      },
      { title: "The Queries — With Insights" },
    ],
    queries: [
      {
        title: "1. Which ticket categories drive the highest SLA breach rates?",
        insight:
          "Identifies which issue categories (e.g. Billing, Account Access) are consistently breaching SLA and contributing to customer dissatisfaction.",
        sql: `SELECT
    category,
    COUNT(*) AS total_tickets,
    SUM(CASE
        WHEN resolved_at > created_at + INTERVAL 5 DAY
        THEN 1 ELSE 0 END) AS sla_breaches,
    ROUND(100.0 * SUM(CASE
        WHEN resolved_at > created_at + INTERVAL 5 DAY
        THEN 1 ELSE 0 END) / COUNT(*), 2) AS breach_rate_percent
FROM tickets
WHERE status = 'Closed'
GROUP BY category
ORDER BY breach_rate_percent DESC;`,
      },
      {
        title: "2. How does resolution time vary across teams, regions, and issue types?",
        insight: "Surfaces delays by region, team, and issue type to target training or workflow improvements.",
        sql: `SELECT
    a.team, a.region, t.category,
    ROUND(AVG(TIMESTAMPDIFF(HOUR, t.created_at, t.resolved_at)), 2) AS avg_resolution_hours,
    COUNT(*) AS ticket_count
FROM agents a
JOIN tickets t ON t.agent_id = a.agent_id
WHERE t.status = 'Closed' AND t.resolved_at IS NOT NULL
GROUP BY a.team, a.region, t.category
ORDER BY avg_resolution_hours DESC;`,
      },
      {
        title: "3. What percentage of tickets are unresolved beyond SLA thresholds?",
        insight: "Aged tickets beyond 14 days are red flags for backlogs and SLA non-compliance.",
        sql: `SELECT
    COUNT(*) AS total_open_tickets,
    SUM(CASE WHEN created_at < NOW() - INTERVAL 14 DAY THEN 1 ELSE 0 END) AS overdue_tickets,
    ROUND(100.0 * SUM(CASE
        WHEN created_at < NOW() - INTERVAL 14 DAY THEN 1 ELSE 0 END) / COUNT(*), 2) AS overdue_percent
FROM tickets
WHERE status IN ('Open', 'In Progress');`,
      },
      {
        title: "4. How many tickets are bouncing between multiple agents?",
        insight: "Flags poor ownership or collaboration breakdowns that waste time and slow resolution.",
        sql: `SELECT
    tu.ticket_id,
    COUNT(DISTINCT tu.updated_by) AS distinct_agents
FROM tickets t
JOIN ticket_updates tu ON t.ticket_id = tu.ticket_id
WHERE t.status = 'Closed'
GROUP BY tu.ticket_id
HAVING COUNT(DISTINCT tu.updated_by) > 1;`,
      },
      {
        title: "5. What is the average time to first response per agent?",
        insight: "Early response is critical. This reveals inconsistencies fixable with training or SOP changes.",
        sql: `WITH first_responses AS (
    SELECT t.ticket_id, t.agent_id,
        MIN(tu.timestamp) AS first_response_time, t.created_at
    FROM tickets t
    JOIN ticket_updates tu ON t.ticket_id = tu.ticket_id
    GROUP BY t.ticket_id, t.agent_id, t.created_at
)
SELECT a.name, a.team, a.region,
    ROUND(AVG(TIMESTAMPDIFF(MINUTE, fr.created_at, fr.first_response_time)), 2) AS avg_first_response_minutes
FROM first_responses fr
JOIN agents a ON fr.agent_id = a.agent_id
GROUP BY a.agent_id, a.name, a.team, a.region
ORDER BY avg_first_response_minutes DESC;`,
      },
      {
        title: "6. Which customers have submitted more than 3 tickets?",
        insight: "Identifies high-frequency users — useful for targeted feedback or account reviews.",
        sql: `SELECT c.customer_id, c.name, COUNT(t.ticket_id) AS ticket_count,
    c.region, c.subscription_plan
FROM tickets t
JOIN customers c ON t.customer_id = c.customer_id
GROUP BY c.customer_id, c.name, c.region, c.subscription_plan
HAVING COUNT(t.ticket_id) > 3
ORDER BY ticket_count DESC;`,
      },
    ],
    externalLabel: "View full repo on GitHub",
    externalUrl: "https://github.com/Kerenyambura/operationalbottlenecks",
  },
  retail: {
    overview:
      "Analysed a retail sales dataset using MySQL to uncover which customer segments, product categories, and seasons drive the most revenue — and what that means for inventory and targeting strategy.",
    sections: [
      {
        title: "The Problem",
        content:
          "A retail business had transaction data across customer demographics, product categories, and seasonal periods but no structured analysis. The goal was to use advanced SQL to answer three business questions: Who is buying? What are they buying? When are they buying most?",
      },
      {
        title: "Approach",
        content:
          "Used MySQL with CTEs, subqueries, window functions, and aggregations to segment customers by age group and gender, rank product categories by revenue, and identify seasonal demand patterns. All queries were written to be reusable and documented for non-technical stakeholders.",
      },
      {
        title: "Key Findings",
        bullets: [
          "Electronics was the top-performing category by total revenue — significantly ahead of other categories",
          "The 18–29 age group was the primary customer segment — driving purchasing decisions across all top categories",
          "Seasonal trends showed clear Q4 peaks — directly informing inventory planning for high-demand periods",
          "Female customers showed higher average basket values in Clothing; male customers drove Electronics volume",
        ],
      },
      {
        title: "SQL Techniques Used",
        bullets: [
          "CTEs (Common Table Expressions) for staging intermediate results cleanly",
          "Subqueries for filtering and conditional aggregations",
          "GROUP BY with HAVING for segment-level analysis",
          "DATE functions for seasonal trend extraction",
          "RANK() and ROW_NUMBER() window functions for category ranking",
        ],
      },
      {
        title: "Business Recommendations",
        bullets: [
          "Target the 18–29 segment with digital-first campaigns — highest volume, highest engagement",
          "Build Q4 inventory buffers of 20–30% for Electronics and Clothing based on seasonal trend data",
          "Run cross-sell campaigns pairing Electronics accessories with main Electronics purchases",
        ],
      },
    ],
    externalLabel: "Originally published on Medium",
    externalUrl: "https://medium.com/@nyamburawangombe/retail-sales-analysis-54a805993053",
  },
  maji: {
    overview:
      "A data integrity and analysis project for a hypothetical country called Maji Ndogo facing a water access crisis. Used SQL from basic to advanced to inspect raw survey data, identify reporting errors, flag suspicious employee behaviour, and generate insights to guide infrastructure investment.",
    sections: [
      {
        title: "The Problem",
        content:
          "Maji Ndogo's water authority had survey data on thousands of water sources across the country — but the data had quality issues, inconsistencies between auditor reports and employee reports, and suspected corruption in some survey entries. The goal was to use SQL to clean the data, identify the discrepancies, surface which employees had suspicious patterns, and produce analysis ready for leadership decisions.",
      },
      {
        title: "What the SQL Does",
        content:
          "The project uses a chain of CTEs to progressively build up the analysis — starting with raw discrepancy detection and culminating in identifying specific employees whose error rates exceed the average, suggesting systematic rather than accidental reporting issues.",
      },
    ],
    queries: [
      {
        title: "Checking auditor report vs employee report — finding discrepancies",
        insight:
          "Identifies all sites where the auditor's water quality score does not match the employee's reported score — the foundation of the entire integrity audit.",
        sql: `WITH incorrect_records AS (
    SELECT ar.location_id,
        ar.true_water_source_score AS auditor_score,
        wq.subjective_quality_score AS surveyor_score,
        v.record_id, ar.statements
    FROM md_water_services.visits v
    JOIN md_water_services.water_quality wq ON v.record_id = wq.record_id
    JOIN md_water_services.auditor_report ar ON v.location_id = ar.location_id
    WHERE ar.true_water_source_score != wq.subjective_quality_score
    AND v.visit_count = 1
)`,
      },
      {
        title: "Identifying which employees made the errors",
        insight:
          "Joins the discrepancy list to the employee table to find out which surveyors were responsible for the mismatched records.",
        sql: `employee_error AS (
    SELECT ar.location_id,
        ar.true_water_source_score AS auditor_score,
        wq.subjective_quality_score AS surveyor_score,
        v.record_id, e.employee_name
    FROM md_water_services.visits v
    JOIN md_water_services.employee e
        ON v.assigned_employee_id = e.assigned_employee_id
    JOIN md_water_services.auditor_report ar ON v.location_id = ar.location_id
    JOIN md_water_services.water_quality wq ON v.record_id = wq.record_id
    WHERE ar.true_water_source_score != wq.subjective_quality_score
    AND v.visit_count = 1
)`,
      },
      {
        title: "Flagging employees with above-average error rates",
        insight:
          "Calculates the average error count across all employees and flags those exceeding it — the suspect list for further investigation.",
        sql: `error_count AS (
    SELECT employee_name, COUNT(*) AS number_of_mistakes
    FROM employee_error
    GROUP BY employee_name
),
avg_error_count AS (
    SELECT AVG(number_of_mistakes) AS avg_error_count_per_empl
    FROM error_count
)
SELECT ec.employee_name, ec.number_of_mistakes
FROM error_count ec
JOIN avg_error_count ae
    ON ec.number_of_mistakes > ae.avg_error_count_per_empl;`,
      },
    ],
    externalLabel: "View full SQL on GitHub",
    externalUrl: "https://github.com/Kerenyambura/SQL/blob/main/project_part_3.sql",
  },
};

/* ── Projects ─────────────────────────────────────────────────────────── */

export type Project = {
  badge: string;
  title: string;
  summary: string;
  outcomes: string[];
  tools: string[];
  /** Deep case study rendered inside the drawer. */
  caseStudyKey?: string;
  /** Video walkthrough. */
  youtubeId?: string;
  /** Google Drive walkthrough link. */
  driveUrl?: string;
  /** Live Notion hub embed + link. */
  notionEmbed?: string;
  notionUrl?: string;
  /** External full case study. */
  notionCaseStudy?: string;
};

export type Domain = {
  key: "ops" | "ds";
  title: string;
  tagline: string;
  color: string;
  intro: string;
  metrics?: { val: string; label: string; desc: string }[];
  projects: Project[];
  skillGroups: { label: string; skills: string[] }[];
};

export const domains: Domain[] = [
  {
    key: "ops",
    title: "Operations",
    tagline: "Systems · Execution · Scale",
    color: OPS_COLOR,
    intro:
      "I design and build the operational infrastructure that enables organisations to deliver at scale — SOPs, workflow automation, coordination systems, and reporting frameworks that turn operational complexity into repeatable, measurable execution. The projects here demonstrate how I have diagnosed operational problems, designed systems that fit real constraints, and implemented changes that reduced manual work, improved visibility, and kept delivery on track.",
    projects: [
      {
        badge: "Systems Design · Workflow Automation · Operational Analytics",
        title: "Cross-Functional Onboarding Operations System",
        summary:
          "A consulting firm scaling from 85 to 200 employees had no standardised onboarding process — fragmented workflows, delayed provisioning, and no visibility into who was falling behind. Designed and implemented a six-tool onboarding operations system that automated intake, created ClickUp workflow tasks automatically, coordinated IT provisioning, and escalated overdue cases — without engineering support.",
        outcomes: [
          "88% onboarding completion rate · 91% SLA compliance",
          "24% reduction in delays · 38% reduction in manual HR coordination",
          "250+ workflows tracked across Client Services, Operations, and Analytics",
          "Redesigned mid-build after Excel sync failures — moved to Google Sheets + ClickUp architecture",
        ],
        tools: ["Google Forms", "Google Sheets", "Make.com", "ClickUp", "Notion", "Excel", "Workflow Automation", "SOP Design", "Operational Reporting", "Systems Design"],
        driveUrl: "https://drive.google.com/file/d/1BdwGkAENe13RBxbTmclQdkVu7CKWe-QY/view?usp=drive_link",
        notionCaseStudy:
          "https://www.notion.so/Cross-Functional-Onboarding-Operations-System-3641bb37c5e18072a112eccfd94b92cd",
      },
      {
        badge: "Systems Design · CRM",
        title: "Operational Command Center",
        summary:
          "A growing coaching organisation with 3 coaches and 25 active clients had no shared operational infrastructure — client records scattered, onboarding inconsistent between coaches, and zero visibility for leadership. My role was to design and implement a centralised Notion-based Operations Command Center that unified client management, onboarding workflows, operational documentation, reporting systems, and content coordination into one connected system that any coach could use without being briefed.",
        outcomes: [
          "Centralised CRM with filtered visibility by coach assignment, onboarding stage, and upcoming sessions — real-time oversight without manual status updates",
          "Standardised session documentation using structured templates, ensuring consistent client tracking across all coaches regardless of individual working style",
          "3 operational SOPs covering onboarding, no-show management, and offboarding — process consistency no longer depended on institutional memory",
          "Live operations calendar automatically tracking upcoming sessions, reducing manual scheduling coordination",
          "Unified content management, resource coordination, and workflow tracking into one system supporting scalable delivery",
        ],
        tools: ["Notion", "CRM Design", "SOP Documentation", "Workflow Design", "Operational Reporting", "Systems Design"],
        notionEmbed: "https://paper-belt-9a3.notion.site/ebd/3361bb37c5e180f68291d8917dbc2eed",
        notionUrl:
          "https://paper-belt-9a3.notion.site/The-Shift-Collective-Operations-Hub-3361bb37c5e180f68291d8917dbc2eed?pvs=143",
      },
      {
        badge: "Project Operations",
        title: "Programme Delivery Operations System",
        summary:
          "A 12-week programme was being coordinated through email threads and shared documents — no dependency tracking, no escalation logic, and no delivery visibility for leadership. My role was to design and implement a structured Asana-based delivery system that covered the full programme lifecycle, mapped every task dependency, and connected delivery status to leadership reporting so nothing could be missed and nothing could move forward out of sequence.",
        outcomes: [
          "24 operational tasks across 5 programme phases with 9 mapped dependencies — execution sequencing enforced by the system, not by memory",
          "4 custom fields enabling real-time visibility into delivery status, facilitator approval, task category, and group tracking",
          "Automated escalation routing blocked tasks directly to programme leadership while auto-confirming facilitator completions",
          "Programme goals, milestones, and delivery tracking connected into one centralised reporting view for leadership",
          "Coordination between facilitators, operational staff, and leadership improved through standardised workflows and centralised task governance",
        ],
        tools: ["Asana", "Workflow Design", "Dependency Mapping", "Process Automation", "Delivery Operations", "KPI Tracking", "Timeline Management"],
        youtubeId: "8v5r37T_dDo",
      },
      {
        badge: "Workflow Automation",
        title: "Operational Workflow Automation Pipeline",
        summary:
          "A course provider was manually processing every registration through spreadsheets and individual emails — 45 minutes of repetitive daily work, delayed onboarding communication, and inconsistent intake tracking. My role was to design and implement a Zapier automation pipeline that replaced the manual process end-to-end without requiring engineering support, and built in a filtering step so only qualified registrations entered the operational database.",
        outcomes: [
          "4-step automation pipeline connecting Google Forms, filtering logic, Google Sheets, and Gmail into one automated intake workflow",
          "45 minutes of daily manual processing eliminated — intake, filtering, database entry, and welcome communication all automated",
          "Personalised onboarding communication sent within seconds of registration — no manual trigger required",
          "Filtering logic preventing unqualified entries from reaching the database, reducing manual review and improving data quality",
          "Intake consistency improved — every registration handled identically regardless of volume or time of day",
        ],
        tools: ["Zapier", "Google Forms", "Google Sheets", "Gmail", "Workflow Automation", "Process Optimisation"],
      },
    ],
    skillGroups: [
      { label: "Delivery & Planning", skills: ["Programme Management", "SOP Design & Documentation", "Milestone Planning", "Risk Identification & Mitigation"] },
      { label: "Systems & Automation", skills: ["Workflow Automation (Zapier / Make)", "Notion & Airtable Systems Design", "Process Mapping", "Systems Design"] },
      { label: "Reporting & Stakeholders", skills: ["Executive Reporting", "Cross-functional Coordination", "OKR & KPI Tracking", "Stakeholder Communication"] },
    ],
  },
  {
    key: "ds",
    title: "Operational Analytics",
    tagline: "Data · Decisions · Action",
    color: DATA_COLOR,
    intro:
      "I use data to improve how operations run — not to describe what happened, but to identify what needs to change and give leadership the visibility to act. The distinction matters: operational analytics is not reporting for its own sake. It is building the data layer that surfaces where delivery is breaking down, where team capacity is being wasted, where SLA compliance is slipping, and what the operation should do differently next week. The projects here demonstrate that thinking applied across SQL, Excel, and Power BI.",
    metrics: [
      { val: "98%", label: "Data Accuracy", desc: "Across large multi-programme datasets" },
      { val: "80%", label: "CSAT Score", desc: "Reflecting programme quality tracked via data" },
      { val: "77", label: "NPS", desc: "Net Promoter Score across managed programmes" },
    ],
    projects: [
      {
        badge: "Excel · Operational Analytics",
        title: "E-Commerce Operational Analytics System",
        summary:
          "A growing e-commerce business had over 12 months of transaction data but no operational visibility into customer behaviour, product performance, or regional sales trends. Leadership decisions around inventory, marketing, and customer retention were being made without a structured analytics layer. Built an end-to-end operational analytics system in Excel that transformed raw sales data into actionable reporting dashboards, customer segmentation frameworks, and performance insights supporting inventory planning, marketing optimisation, and revenue decision making.",
        outcomes: [
          "Identified the top 5% of customers generating over $1,118 in lifetime value through customer segmentation and purchase frequency analysis",
          "Revealed Electronics as a high-margin but underperforming category contributing only 6% of sales — highlighting a major growth opportunity",
          "Built a centralised reporting dashboard enabling leadership to monitor sales performance, customer behaviour, and category trends in one view",
          "Delivered regional performance analysis identifying two high-revenue regions generating over 60% of revenue with minimal marketing investment",
          "Recommended SKU rationalisation strategies reducing operational complexity by identifying low-performing products contributing less than 2% of total revenue",
        ],
        tools: ["Microsoft Excel", "Dashboard Design", "KPI Reporting", "Customer Segmentation", "Operational Analytics", "Data Storytelling", "Business Reporting"],
        caseStudyKey: "ecommerce",
      },
      {
        badge: "SQL · Power BI",
        title: "Customer Support Operations Analytics",
        summary:
          "A support operations team lacked visibility into SLA breaches, ticket escalation patterns, agent workload distribution, and operational bottlenecks — making it difficult for leadership to improve response efficiency and support performance. Conducted an end-to-end SQL-based operational audit analysing ticket resolution workflows, SLA compliance, escalation trends, and agent performance. Built an executive Power BI dashboard providing centralised visibility into operational health, workflow inefficiencies, and support delivery performance.",
        outcomes: [
          "Identified 25% of support tickets exceeding the 14-day SLA threshold, with multi-agent handoffs emerging as the primary operational bottleneck",
          "Revealed uneven workload distribution causing 2–3x variation in average resolution times across agents and teams",
          "Built an interactive Power BI executive dashboard centralising SLA tracking, operational KPIs, escalation analysis, and workflow reporting",
          "Designed 15 advanced SQL queries analysing ticket ageing, ownership breakdowns, escalation frequency, and response time performance",
          "Delivered operational recommendations improving workload allocation, escalation workflows, and support process visibility",
        ],
        tools: ["SQL", "Power BI", "SLA Analysis", "Operational Analytics", "KPI Reporting", "Workflow Analysis", "Executive Dashboards"],
        caseStudyKey: "support",
      },
      {
        badge: "SQL · MySQL",
        title: "Retail Sales Operational Analytics",
        summary:
          "A retail business had customer, product, and seasonal sales data but lacked a centralised analytics framework to understand purchasing behaviour, category performance, and operational demand patterns. Built a structured SQL-based analytics system analysing customer demographics, sales performance, product trends, and seasonal purchasing behaviour to support inventory planning, targeting strategy, and operational forecasting.",
        outcomes: [
          "Identified Electronics as the highest revenue-generating category across all product groups",
          "Revealed the 18–29 age segment as the primary purchasing demographic driving overall sales performance",
          "Identified seasonal demand spikes supporting inventory forecasting and procurement planning for high-demand periods",
          "Used advanced SQL techniques including CTEs, subqueries, aggregations, and window functions to structure reusable operational reporting queries",
          "Delivered business recommendations supporting targeted campaigns, seasonal inventory planning, and category-level optimisation",
        ],
        tools: ["MySQL", "SQL Analytics", "CTEs", "Window Functions", "KPI Reporting", "Sales Analytics", "Operational Reporting"],
        caseStudyKey: "retail",
      },
      {
        badge: "SQL · Data Audit",
        title: "Maji Ndogo Operational Data Audit",
        summary:
          "A hypothetical national water authority managing thousands of water sources lacked reliable reporting systems due to inconsistent survey data, reporting discrepancies, and suspected operational integrity issues across field operations. Conducted a full SQL-based operational data audit to inspect, clean, validate, and analyse water access records while identifying reporting inconsistencies, employee-level anomalies, and infrastructure reporting gaps.",
        outcomes: [
          "Applied advanced SQL techniques including JOINs, CTEs, aggregations, and window functions across the full operational audit process",
          "Identified discrepancies between field survey reports and independent auditor assessments, surfacing operational data quality risks",
          "Flagged employees with above-average reporting inconsistencies for further operational investigation",
          "Built a structured SQL workflow transforming raw survey records into analysis-ready operational datasets",
          "Generated operational insights supporting infrastructure prioritisation and resource allocation planning",
        ],
        tools: ["SQL", "Data Cleaning", "Operational Auditing", "Data Validation", "CTEs", "Workflow Analysis", "Infrastructure Reporting"],
        caseStudyKey: "maji",
      },
    ],
    skillGroups: [
      { label: "Tools & Platforms", skills: ["Microsoft Excel", "Power BI", "SQL", "MySQL", "Google Sheets"] },
      { label: "Analysis & Methods", skills: ["Customer Segmentation", "SLA Analysis", "Data Cleaning", "KPI Framework Design", "Dashboard Design", "Operational Auditing"] },
      { label: "Reporting", skills: ["Executive Dashboards", "Operational Reporting", "Data Storytelling", "Business Recommendations", "Stakeholder Presentations"] },
    ],
  },
];
