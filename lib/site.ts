/**
 * Site-wide configuration: brand strings + navigation.
 * Kept in one place so nav order and byline never drift between header/footer.
 */

export const brand = {
  name: "Keren Wang'ombe",
  byline: "Operations · Systems · Analytics",
  oneLine:
    "I turn operational chaos into scalable systems, messy cohort data, manual workflows, and scattered pipelines into automation that runs itself.",
} as const;

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

export type NavItem = {
  href: string;
  label: string;
  /** Optional dropdown children (one level of nesting supported). */
  children?: NavItem[];
};

/**
 * NAV is deliberately minimal. The KW monogram goes home; About, Work, and
 * Contact (rendered as the header CTA) are the tabs.
 */
export const nav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
];

/** Primary contact email, shown for general inquiries and booking. */
export const contactEmail = "kerenwangombe@gmail.com";

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
