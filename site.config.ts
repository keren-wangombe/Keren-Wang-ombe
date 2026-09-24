import type { FocusConfig } from "@/lib/focus";

/**
 * Operations portfolio — focus configuration.
 *
 * This is the ONLY file that sets this site's brand voice. `key` tells the
 * pages to surface the operations slice of the content library; the strings
 * below set the plain-language identity used across the header, footer and meta.
 */
export const focus: FocusConfig = {
  key: "operations",
  byline: "Operations · Systems · Reporting",
  oneLine:
    "I organise the people, tasks, information and follow-up behind complex work, then improve the process so it is easier to run.",
  mailtoSubject: "Operations support enquiry",
  nav: [
    { href: "/work", label: "Work" },
    { href: "/#about", label: "About" },
  ],
  footer: {
    heading: "Let’s make complex work easier to run.",
    blurb:
      "I organise the people, tasks, information and follow-up behind complex work, then improve the process so it is easier to run.",
  },
  footerTagline: "Operations · Systems · Reporting",
  otherPortfolio: {
    label: "Data & analytics portfolio",
    href:
      process.env.NEXT_PUBLIC_OTHER_PORTFOLIO_URL ??
      "https://kerenwangombe-data.vercel.app",
  },
};
