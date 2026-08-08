/**
 * Focus types shared by both portfolios.
 *
 * Each site ships a `site.config.ts` at its root that satisfies `FocusConfig`.
 * The shared `site.ts` reads it (via the `@/site.config` alias) to decide the
 * byline, one-liner, nav, enquiry subject and — crucially — the `key`, which
 * pages use to pull the Operations- or Data-focused slice of shared content.
 */

export type FocusKey = "operations" | "data";

export type NavItem = {
  href: string;
  label: string;
  /** Optional dropdown children (one level of nesting supported). */
  children?: NavItem[];
};

export type FocusConfig = {
  /** Which portfolio this build is. Drives focused content selection. */
  key: FocusKey;
  /** Header/meta byline, e.g. "Operations · Systems · Automation". */
  byline: string;
  /** The hero/meta one-liner for this focus. */
  oneLine: string;
  /** Subject line pre-filled on every "Email me" mailto for this focus. */
  mailtoSubject: string;
  /** Primary navigation for this portfolio. */
  nav: NavItem[];
  /**
   * Link to the sibling portfolio (the other focus). Left as `null` until the
   * other site is deployed; set the href to its URL (or wire the
   * NEXT_PUBLIC_OTHER_PORTFOLIO_URL env var) to surface a cross-link.
   */
  otherPortfolio: { label: string; href: string } | null;
};
