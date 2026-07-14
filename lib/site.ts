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

/** About-page portrait (drop a web-optimized 4:5 JPEG over this path). */
export const aboutPortrait = "/portraits/keren.svg";

export type NavItem = {
  href: string;
  label: string;
  /** Optional dropdown children (one level of nesting supported). */
  children?: NavItem[];
};

/** NAV order is intentional, a "systems-first ascent." Do not reorder casually. */
export const nav: NavItem[] = [
  { href: "/work", label: "Work" },
  { href: "/start-here", label: "Approach" },
  {
    href: "/resources",
    label: "Resources",
    children: [
      { href: "/resources/case-studies", label: "Case Studies" },
      { href: "/resources/interview-prep", label: "Playbooks" },
      { href: "/resources/articles", label: "Articles" },
      { href: "/resources/downloads", label: "Downloads" },
      { href: "/resources#community", label: "Community Questions" },
    ],
  },
  { href: "/about", label: "About" },
];

/** Primary contact email, shown for general inquiries and booking. */
export const contactEmail = "kerenwangombe@gmail.com";

/** Google Calendar scheduling link for the persistent "Book a call" CTA. */
export const bookACallHref = "https://calendar.app.google/xstDM46qtLnhNT8K6";

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
