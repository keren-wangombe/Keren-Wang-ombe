/**
 * Site-wide configuration: brand strings + navigation.
 *
 * This module is SHARED by both portfolios (Operations and Data). Everything
 * that is genuinely common — the person's name, contact addresses, socials,
 * banner/portrait paths — lives here as a single source of truth. The pieces
 * that differ between the two portfolios (byline, one-liner, nav, the enquiry
 * subject line, and which focus this build is) come from each site's own
 * `site.config.ts`, imported below via the `@/site.config` alias that each
 * site's tsconfig maps to its local file. Edit shared brand here once and it
 * changes on both sites; edit the focus in a site's `site.config.ts` and it
 * changes only that portfolio.
 */

import { focus } from "@/site.config";
import type { NavItem } from "@/lib/focus";

export type { NavItem };

export const brand = {
  name: "Keren Wang'ombe",
  byline: focus.byline,
  oneLine: focus.oneLine,
} as const;

/** Which portfolio this build is — used by pages to select focused content. */
export const focusKey = focus.key;

/** Optional link to the sibling portfolio (the other focus), if configured. */
export const otherPortfolio = focus.otherPortfolio;

/** Footer closing line + blurb, in this portfolio's voice. */
export const footerCta = focus.footer;

/** Slim footer tagline. */
export const footerTagline = focus.footerTagline;

/**
 * Per-page banner images. Each page opens on a full-bleed banner.
 * These are on-brand PLACEHOLDERS living in /public/banners, drop the real
 * artwork in over the matching file (keep the name, or update the path here
 * if the extension differs, e.g. "/banners/home.jpg").
 */
export const pageBanners = {
  home: "/banners/home.svg",
  work: "/banners/work.svg",
  resources: "/banners/resources.svg",
  speaking: "/banners/speaking.svg",
  advisory: "/banners/advisory.svg",
  about: "/banners/about.svg",
  learn: "/banners/learn.svg",
} as const;

/** Landing-page banner image. */
export const bannerSrc = pageBanners.home;

/** About-page portrait — reuses the hero photo for a consistent face. */
export const aboutPortrait = "/portraits/keren.jpg";

/**
 * Hero portrait — the photo a visitor sees first. Drop the real photo in as
 * /public/portraits/keren.jpg (portrait orientation) and this path picks it up.
 */
export const heroPortrait = "/portraits/keren.jpg";

/**
 * Intro video (Loom) embedded inline in the hero. PLACEHOLDER recording —
 * swap the ID (last URL segment) for the final one when it's ready.
 */
export const heroLoomEmbed =
  "https://www.loom.com/embed/3ec6ce881036464ca076c540fb1a0376";

/**
 * Latest LinkedIn post embedded on the home page. To enable: open your post
 * on LinkedIn → the ⋯ menu → "Embed this post", and paste the iframe's `src`
 * (looks like https://www.linkedin.com/embed/feed/update/urn:li:share:…) here.
 * Left empty, the home page shows a "Follow on LinkedIn" card instead.
 */
export const linkedinEmbedUrl = "";

/**
 * NAV is deliberately minimal. The KW monogram goes home; About and Work are
 * the tabs (Contact renders as the header CTA). Focus-specific because each
 * portfolio provides its own nav in site.config.
 */
export const nav: NavItem[] = focus.nav;

/** Primary contact email, shown for general inquiries and booking. */
export const contactEmail = "kerenwangombe@gmail.com";

/**
 * Prefilled mailto for enquiries. Every "Email me" action points here so a
 * reply lands pre-tagged with the portfolio's focus; the displayed address
 * stays {@link contactEmail}. The subject is set per-site in site.config.
 */
export const contactMailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
  focus.mailtoSubject,
)}`;

/** Resume, linked from /contact. Drop the real PDF over /public/resume.pdf. */
export const resumeFile = "/resume.pdf";

/** Contact email for privacy-specific requests (Privacy + Cookie policies). */
export const privacyEmail = "kerenwangombe@gmail.com";

/**
 * Destination the contact/inquiry forms submit to. The form UI validates and
 * reflects state but does not POST yet (see the TODO(integration) handlers);
 * wire this to a provider (FormSubmit, Supabase, email, CRM) at launch.
 */
export const formSubmitAlias = "kerenwangombe@gmail.com";

export const social = {
  linkedin: "https://www.linkedin.com/in/keren-wangombe/",
  github: "https://github.com/Kerenyambura",
  medium: "https://medium.com/@nyamburawangombe",
} as const;
