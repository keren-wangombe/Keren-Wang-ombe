import type { FocusConfig } from "@/lib/focus";

/**
 * Data portfolio — focus configuration.
 *
 * This is the ONLY file that sets this site's brand voice. `key` tells the
 * pages to surface the data slice of the content library; the strings below
 * set the plain-language identity used across the header, footer and meta.
 */
export const focus: FocusConfig = {
  key: "data",
  byline: "Data Analytics · Reporting · Insights",
  oneLine:
    "I analyse data, build clear reports and dashboards, and find the insights that help teams make better decisions.",
  mailtoSubject: "Data analysis enquiry",
  nav: [
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ],
  footer: {
    heading: "Let’s turn your data into clear next steps.",
    blurb:
      "I analyse data, build reports and dashboards, and find the insights that help teams make better decisions.",
  },
  footerTagline: "Data tells the story. Insights drive the action.",
  otherPortfolio: process.env.NEXT_PUBLIC_OTHER_PORTFOLIO_URL
    ? {
        label: "Operations portfolio",
        href: process.env.NEXT_PUBLIC_OTHER_PORTFOLIO_URL,
      }
    : null,
};
