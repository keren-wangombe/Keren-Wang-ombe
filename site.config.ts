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
  byline: "Programme Operations · Systems · Process Improvement",
  oneLine:
    "I coordinate programmes, build simple systems and improve everyday workflows so teams stay organised and nothing important slips.",
  mailtoSubject: "Operations support enquiry",
  nav: [
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ],
  footer: {
    heading: "Let’s make your operations easier to run.",
    blurb:
      "I coordinate programmes, build simple systems and improve workflows so teams have clarity and leaders have visibility.",
  },
  footerTagline: "Built with purpose. Driven by impact.",
  otherPortfolio: process.env.NEXT_PUBLIC_OTHER_PORTFOLIO_URL
    ? {
        label: "Data & analytics portfolio",
        href: process.env.NEXT_PUBLIC_OTHER_PORTFOLIO_URL,
      }
    : null,
};
