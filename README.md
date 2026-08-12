# Keren Wang'ombe — Data & Analytics Portfolio

**Data · Analytics · Insight** — turning raw operational data into reporting and
analysis that changes what happens next. A calm, premium, substantive
personal-brand site built with Next.js (App Router), TypeScript, and Tailwind CSS.

> This branch (`main`) is the **Data / Analytics** portfolio. Its sibling, the
> **Operations** portfolio, lives on the `operations` branch. The two are
> maintained as separate branches (and deploy as separate sites); they share the
> same visual design but are independent codebases.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deploying to Vercel

This branch (`main`) deploys as its own Vercel project:

1. **New Project → Import** this repository.
2. Keep the **Production Branch** as `main` (Vercel's default).
3. Framework preset **Next.js** (auto-detected); leave build/output defaults.
4. **Deploy**, then attach a domain/subdomain (e.g. `data.yourdomain.com`).

Deploy the `operations` branch as a **second** Vercel project (set that
project's Production Branch to `operations`) for the Operations portfolio.

Optional cross-link: set `NEXT_PUBLIC_OTHER_PORTFOLIO_URL` to the Operations
site's URL and this site's footer will link to it.

## Structure

```
app/            App Router pages (home, work, about, contact, faq, legal, …)
  fonts.ts      Playfair Display + Inter via next/font
  globals.css   Tokens-in-CSS, reveal + reduced-motion rules
components/      Header, Footer, cards, forms, motion primitives
lib/
  content.ts    All portfolio content (the integration seam)
  site.ts       Shared brand constants; reads site.config.ts
  focus.ts      FocusConfig type
site.config.ts  This site's focus: byline, nav, footer voice, enquiry subject
tailwind.config.ts   The 7-core color system + type scale
```

## Design system

- **Color** — the 7-core system in `tailwind.config.ts` (Ink, Signature navy,
  Blue-lift, Paper, Amber, Amber-bright, Border). Reference colors semantically
  (`bg-signature`, `text-amber`, `bg-background`).
- **Type** — Playfair Display for headlines, Inter for body/UI.
- **Motion** — slow eased scroll reveals; `prefers-reduced-motion` honored.

## Integration seams (intentionally not wired)

- **Form submissions** — `InquiryForm` / `EmailCapture` validate but do not POST;
  wire the `TODO(integration)` handlers to your provider.
- **FAQ** — `dataFaqs` in `lib/content.ts` is a seed; back it with a CMS/Supabase.

All content lives in `lib/content.ts` — swap the source, keep the components.
