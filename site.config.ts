import type { FocusConfig } from "@/lib/focus";

/**
 * Operations portfolio — focus configuration.
 *
 * This is the ONLY file that makes this build the Operations site. The shared
 * design system, components and content library are identical to the Data
 * portfolio; the `key` below tells shared pages to surface the operations
 * slice (systems, automation, coordination), and the strings set the brand
 * voice for this focus.
 */
export const focus: FocusConfig = {
  key: "operations",
  byline: "Operations · Systems · Automation",
  oneLine:
    "I take ownership of the day-to-day work and improve the processes that keep it moving.",
  mailtoSubject: "Operations support enquiry",
  nav: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
  ],
  footer: {
    heading: "Let’s build scalable operations.",
    blurb:
      "Workflow automation, operational systems, coordination and execution visibility — for teams that need to move fast without breaking things.",
  },
  otherPortfolio: process.env.NEXT_PUBLIC_OTHER_PORTFOLIO_URL
    ? {
        label: "Data & analytics portfolio",
        href: process.env.NEXT_PUBLIC_OTHER_PORTFOLIO_URL,
      }
    : null,
};
