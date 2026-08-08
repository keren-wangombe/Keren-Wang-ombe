import type { FocusConfig } from "@/lib/focus";

/**
 * Data portfolio — focus configuration.
 *
 * This is the ONLY file that makes this build the Data site. The shared design
 * system, components and content library are identical to the Operations
 * portfolio; the `key` below tells shared pages to surface the data slice
 * (analytics, reporting, SQL/BI), and the strings set the brand voice for this
 * focus.
 */
export const focus: FocusConfig = {
  key: "data",
  byline: "Data · Analytics · Insight",
  oneLine:
    "I turn raw operational data into reporting and analysis that changes what happens next.",
  mailtoSubject: "Data & analytics enquiry",
  nav: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
  ],
  otherPortfolio: process.env.NEXT_PUBLIC_OTHER_PORTFOLIO_URL
    ? {
        label: "Operations portfolio",
        href: process.env.NEXT_PUBLIC_OTHER_PORTFOLIO_URL,
      }
    : null,
};
