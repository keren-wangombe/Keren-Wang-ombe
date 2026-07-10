# Keren Wang'ombe — Portfolio

**Operations · Systems · Analytics** — a calm, premium, substantive
personal-brand site built with Next.js (App Router), TypeScript, and Tailwind CSS.

> I turn operational chaos into scalable systems — messy cohort data, manual
> workflows, and scattered pipelines into automation that runs itself.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static where possible)
npm run start    # serve the production build
```

## Design system

The brand is enforced through the theme, not page-by-page styling.

### Color — the 7-core system (`tailwind.config.ts`)

| Token | Hex | Role |
| --- | --- | --- |
| Ink | `#111827` | Headline / text / contrast (and dark surfaces) |
| Signature (navy) | `#1B3A6B` | The brand heart — primary buttons, key headings, deep surfaces |
| Blue-lift | `#3D6491` | Links, hover / active / focus only |
| Paper | `#FAFAF8` | Default background — never pure white |
| Amber | `#B45309` | Warm accent for text / labels / rules — AA on paper |
| Amber-bright | `#D97706` | Warm accent for fills / icons / CTAs (dark text on top) |
| Border | `#E5E7EB` | Quiet hairlines |

Reference colors **semantically** (`bg-background`, `text-foreground`,
`bg-signature`, `text-link`, `text-amber`). Amber splits by use: `text-amber`
(`#B45309`) stays AA-legible on paper; `bg-amber-bright` (`#D97706`) carries
solid fills and icons with dark text on top. Section _temperature_ (cool /
balanced / warm) is dialed only by the amount of amber and light — the felt
colors never change.

### Typography

- **Playfair Display** (editorial serif) — all headlines/display, loaded via `next/font`.
- **Inter** — body, UI, labels, buttons.
- Tight scale (`display / h1 / h2 / body / small`), generous line-height,
  restrained weights. Emphasis comes from size and space, not bold-everything.

### Motion (`app/globals.css`, `components/Reveal.tsx`)

- Slow, eased scroll reveals (fire once) are the default motion.
- Hero headline does a single slow rise on load.
- Page transitions dissolve via `app/template.tsx`.
- `prefers-reduced-motion` is honored everywhere.

## Structure

```
app/
  layout.tsx          Root layout: fonts, header, footer, skip-link
  template.tsx        Page-transition dissolve
  globals.css         Tokens-in-CSS, reveal + reduced-motion rules
  page.tsx            / (home — balanced)
  work/               /work (executive)
  start-here/         /start-here (warm)
  resources/          /resources + /resources/[slug]
  live/               /live
  speaking/           /speaking (executive)
  advisory/           /advisory (executive)
  about/              /about (warmest)
  faq/                /faq
  contact/            /contact
components/           Header, Footer, Reveal, Button, forms, etc.
lib/
  site.ts             Nav order, byline, social handles
  content.ts          Sample content (the integration seam)
```

## Integration seams (intentionally not wired)

The UI is built; the data sources are left as clean seams:

- **Resource downloads** — `Resource.downloadUrl` in `lib/content.ts`
  (wire to R2 / object-store signed URLs).
- **Form submissions** — `EmailCapture` and `InquiryForm` validate and reflect
  state but do not POST; wire the marked `TODO(integration)` handlers to your
  provider (e.g. Supabase / email / CRM).
- **Social feeds** — the footer and home "latest" strip reserve space for a
  live YouTube fetch and cached X / LinkedIn embeds.
- **FAQ** — `faqs` is a seed; back it with a CMS/Supabase to edit without redeploy.

All content lives in `lib/content.ts` — swap the source, keep the components.
