import { cache } from "react";
import { isSupabaseConfigured, supabase } from "./supabase";

/**
 * Content library model.
 *
 * One table powers everything: `entries`. A `type` discriminates the three
 * content models; filtering by `type`, `topic`, `level`, and `published`
 * drives every view. A second table, `interactions`, carries comments and
 * reactions for the realtime layer (see supabase/migrations).
 *
 * Everything here works with or without Supabase: when it isn't configured,
 * the seed data below is served so the library is fully browsable offline.
 */

export type EntryType = "course_qa" | "case_study" | "user_question" | "article";
export type Level = "newcomer" | "practitioner" | "executive";

export type Entry = {
  id: string;
  slug: string;
  type: EntryType;
  title: string;
  body: string; // long-form Markdown
  summary: string;
  topic: string; // e.g. cloud, cybersecurity, ai-era
  level: Level | string;
  asker: string | null; // attribution for user_question; null otherwise
  published: boolean;
  created_at: string;
  updated_at: string;
  /** Internal editorial note (e.g. provenance); never rendered in the UI. */
  source_note?: string | null;
};

export type Interaction = {
  id: string;
  entry_id: string;
  kind: "comment" | "reaction";
  body: string | null;
  author: string | null;
  approved: boolean;
  created_at: string;
};

export const entryTypeMeta: Record<
  EntryType,
  { label: string; blurb: string }
> = {
  course_qa: {
    label: "Playbooks",
    blurb: "How I think about operational problems, diagnosing, automating, and building the source of truth, distilled into reusable playbooks.",
  },
  case_study: {
    label: "Case Studies",
    blurb: "How real systems were reasoned about, the decision and the outcome, not just the tool.",
  },
  user_question: {
    label: "Community Questions",
    blurb: "Questions people send in, answered in the open. New ones appear here live once reviewed.",
  },
  article: {
    label: "Articles",
    blurb: "Longer pieces on operations, automation, analytics, and the judgment behind building systems that last.",
  },
};

export const levelLabels: Record<string, string> = {
  newcomer: "Newcomer",
  practitioner: "Practitioner",
  executive: "Executive",
};

/** Display labels for topics. */
export const topicLabels: Record<string, string> = {
  operations: "Operations",
  analytics: "Analytics",
  automation: "Automation",
  reporting: "Reporting",
};

/** Human label for a topic, with a sensible Title-Case fallback. */
export function topicLabel(topic: string): string {
  const key = (topic || "").toLowerCase();
  return (
    topicLabels[topic] ??
    topicLabels[key] ??
    key.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

const now = "2026-06-01T00:00:00.000Z";

/** Seed content, served when Supabase isn't configured. */
export const seedEntries: Entry[] = [
  {
    id: "seed-1",
    slug: "cutting-manual-tracking-work-in-half",
    type: "case_study",
    title: "Cutting manual tracking work in half with one automation",
    summary:
      "A fragile, copy-paste NDA tracking process, and the Apps Script pipeline that returned 15+ hours a week.",
    body: "## The situation\nNDA tracking ran on manual work: someone watching an inbox, updating a spreadsheet by hand, chasing what had and hadn't come back. It was slow, error-prone, and it didn't scale.\n\n## The decision\nTreat it as a system, not a chore. A Google Apps Script and Gmail pipeline watched for the right messages, updated the tracking sheet automatically, and flagged what was outstanding, no human in the loop for the repetitive part.\n\n## The outcome\nManual tracking work fell by 50% and the team got back 15+ hours every week, with the copy-paste errors gone too. The saving was a systems decision, not extra effort.",
    topic: "automation",
    level: "practitioner",
    asker: null,
    published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "seed-2",
    slug: "reporting-a-cohort-from-registration-to-graduation",
    type: "case_study",
    title: "Reporting a cohort from 2,032 registrations to graduation",
    summary:
      "Executive reporting for Cybersecurity Cohort 11, tracking the full funnel to an 86% graduation rate.",
    body: "## The situation\nLeadership needed to know how a cohort was really doing, not a headline, the whole funnel, from 2,032 registrations through to graduation, in numbers they could trust.\n\n## The build\nAn end-of-programme reporting layer tracked every stage of the funnel and the quality signals alongside it, so the story wasn't anecdotal.\n\n## The outcome\n900 graduates at an 86% graduation rate and 81% CSAT, reported cleanly enough that decisions rested on the data. Results measured, not claimed.",
    topic: "reporting",
    level: "executive",
    asker: null,
    published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "seed-3",
    slug: "support-operations-analytics-with-sql-and-power-bi",
    type: "case_study",
    title: "Support operations analytics with SQL and Power BI",
    summary:
      "A support team with no visibility into SLA breaches, and the 15-query audit that surfaced the bottleneck.",
    body: "## The problem\nA support operations team had ticket data but no analytical layer, no view of SLA breaches, escalation patterns, or how workload was distributed across agents.\n\n## The approach\n15 SQL queries analysed ticket ageing, ownership, escalation frequency, and response times; the findings landed in an executive Power BI dashboard.\n\n## The findings\n25% of tickets breached the 14-day SLA, with multi-agent handoffs the primary bottleneck, and workload so uneven it drove 2–3x variation in resolution time. The dashboard turned that from a hunch into something leadership could act on.",
    topic: "analytics",
    level: "practitioner",
    asker: null,
    published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "seed-4",
    slug: "e-commerce-operational-analytics-in-excel",
    type: "case_study",
    title: "E-commerce operational analytics in Excel",
    summary:
      "12 months of flat sales data turned into segmentation, category, and regional insight leadership could use.",
    body: "## The problem\nA growing e-commerce business had a year of transaction data and no analysis layer, inventory and marketing decisions were being made on gut feel.\n\n## The approach\nA structured Excel system, pivot tables, lookups, and a dashboard layer, covering customer segmentation, product performance, and regional distribution.\n\n## The findings\nThe top 5% of customers drove over $1,118 in lifetime value each; Electronics was the highest-margin category at just 6% of sales, a clear growth lever; and two regions generated 60%+ of revenue on minimal marketing spend.",
    topic: "analytics",
    level: "practitioner",
    asker: null,
    published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "seed-5",
    slug: "how-i-diagnose-an-operational-bottleneck",
    type: "course_qa",
    title: "How do you diagnose an operational bottleneck?",
    summary: "Start at the friction, not the tool.",
    body: "Follow the work, not the org chart. Where does a task wait? Where does someone re-key the same data? Where does status get chased instead of read?\n\n**The move:** map the process as it actually runs, then find the single handoff that costs the most, and remove *that* first. Most operational pain is a few bad seams, not a broken team.",
    topic: "operations",
    level: "practitioner",
    asker: null,
    published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "seed-6",
    slug: "when-to-automate-a-workflow-and-when-not-to",
    type: "course_qa",
    title: "When should you automate a workflow, and when not to?",
    summary: "Automate the repeatable and the error-prone, not the rare.",
    body: "Automate when a task is frequent, rule-based, and costly to get wrong, intake, tracking, notifications, reconciliation. Those are where Apps Script, Zapier, and Make pay for themselves in a week.\n\nDon't automate judgment, or a process you haven't yet standardised. Fix the SOP first; automating a broken process just makes the mess faster.",
    topic: "automation",
    level: "practitioner",
    asker: null,
    published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "seed-7",
    slug: "keeping-data-accurate-across-many-countries",
    type: "user_question",
    title: "How do you keep data accurate across many countries?",
    summary: "One source of truth, updated by the system, not by people.",
    body: "The trick isn't discipline, it's design. Scattered spreadsheets drift because every copy invites a different edit.\n\nBuild one self-updating tracker that pulls from the source and reconciles automatically, and hold it to a measured accuracy target. That's how a learner health tracker stayed at 98% accuracy across 12 countries, the system did the reconciling, not a person.",
    topic: "operations",
    level: "newcomer",
    asker: "asked by a programme lead",
    published: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "seed-8",
    slug: "what-should-i-automate-first",
    type: "user_question",
    title: "I'm drowning in manual work, what should I automate first?",
    summary: "The task you do most that a rule could do for you.",
    body: "Pick the one that's frequent *and* mechanical, the daily intake, the weekly report, the copy-paste tracking. That's where automation returns the most time for the least risk.\n\nStart small: one form, one filter, one email. A four-step pipeline once replaced 45 minutes of daily processing, and nobody missed the manual version.",
    topic: "automation",
    level: "newcomer",
    asker: "asked by a founder",
    published: true,
    created_at: now,
    updated_at: now,
  },
];

export const topics = Array.from(new Set(seedEntries.map((e) => e.topic)));
export const levels: Level[] = ["newcomer", "practitioner", "executive"];

/**
 * Fetch all published entries (newest first). Falls back to seed.
 * Wrapped in React cache() so one render pass hits Supabase at most once.
 */
export const getEntries = cache(async (): Promise<Entry[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from("entries")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });
    if (error) {
      console.error("[getEntries] Supabase read failed:", error.message);
    } else if (data) {
      if (data.length === 0) {
        console.warn(
          "[getEntries] Supabase returned 0 published entries. If the table " +
            "has published rows, the anon SELECT is likely blocked by RLS, " +
            "apply supabase/migrations/0003_entries_read_policy.sql.",
        );
      }
      return data as Entry[];
    }
  }
  return seedEntries.filter((e) => e.published);
});

/**
 * Fetch a single published entry by slug. Falls back to seed.
 * cache() dedupes the generateMetadata + page calls into one query.
 */
export const getEntry = cache(async (slug: string): Promise<Entry | null> => {
  if (isSupabaseConfigured && supabase) {
    const { data } = await supabase
      .from("entries")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    if (data) return data as Entry;
  }
  return seedEntries.find((e) => e.slug === slug && e.published) ?? null;
});
