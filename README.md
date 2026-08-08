# Keren Wang'ombe — Portfolios

Two portfolio websites, one shared design system:

- **Operations** (`sites/operations`) — *Operations · Systems · Automation*.
  Running the day-to-day work and building the systems that keep it reliable.
- **Data** (`sites/data`) — *Data · Analytics · Insight*. Turning raw
  operational data into reporting and analysis that changes what happens next.

Same person, same brand, same components — each site tailors its home, work,
about and FAQ to its focus. Both are built with Next.js (App Router),
TypeScript, and Tailwind CSS.

## Repository layout

```
shared/                 The single source of truth shared by BOTH sites
  components/           React components (Header, Footer, cards, forms, …)
  lib/
    content.ts          All portfolio content — operations + data slices
    site.ts             Shared brand constants; reads each site's focus
    focus.ts            The FocusConfig type each site.config.ts satisfies
    …
  styles/globals.css    Tokens-in-CSS, reveal + reduced-motion rules
  tailwind-preset.ts    The 7-core color system + type scale (design system)
  tsconfig.base.json    Compiler options both sites extend

sites/
  operations/           The Operations portfolio (its own Next.js app)
    app/                Pages tailored to the operations focus
    public/             Static assets for this site
    site.config.ts      ← the ONLY file that makes this the Operations site
    next.config.mjs · tailwind.config.ts · postcss.config.mjs · tsconfig.json
  data/                 The Data portfolio (same shape, data focus)
    app/ · public/ · site.config.ts · …

package.json            Root scripts + shared dependencies (one node_modules)
```

### How the split works

- **Design system is shared.** Colors, type, motion and every component live in
  `shared/`. Edit a token in `shared/tailwind-preset.ts` or a component in
  `shared/components/` and it changes on both sites at once.
- **Content is shared, focus is selected.** `shared/lib/content.ts` holds both
  the operations and data content. Each site's pages import only their slice
  (e.g. `operationsWork` vs `dataWork`, `outcomes` vs `dataOutcomes`).
- **Identity comes from one file per site.** `sites/<name>/site.config.ts`
  declares the byline, one-liner, nav, enquiry subject, footer voice and the
  `key` (`operations` | `data`). `shared/lib/site.ts` reads it via the
  `@/site.config` alias, so brand strings flow from that single focus file.

## Getting started

```bash
npm install            # one install at the root serves both sites

npm run dev:ops        # Operations site → http://localhost:3000
npm run dev:data       # Data site       → http://localhost:3000

npm run build:ops      # production build of the Operations site
npm run build:data     # production build of the Data site
npm run build          # build both, one after the other
```

Each site builds from inside its own folder (`sites/<name>`) and imports the
`shared/` code above it — this mirrors how Vercel's *Root Directory* setting
works, so local and production behave the same.

## Deploying to Vercel — two projects, two URLs

Because the two sites live in one repository, create **two Vercel projects from
the same repo**, each pointed at a different folder. Each gets its own URL and
its own deployments.

For **each** project (do this twice — once for `sites/operations`, once for
`sites/data`):

1. **New Project → Import** this GitHub repository.
2. **Root Directory:** click *Edit* and choose the site's folder —
   `sites/operations` for one project, `sites/data` for the other.
3. **Include files outside the root directory:** turn this ON. Both sites
   import the repo-level `shared/` folder, which sits above the root directory.
4. **Framework Preset:** Next.js (auto-detected). Leave Build Command and
   Output Directory as the defaults.
5. **Deploy.**

Name the projects distinctly (e.g. `keren-operations` and `keren-data`) so the
two URLs are easy to tell apart, then attach a custom domain/subdomain to each
if you want (for example `operations.yourdomain.com` and
`data.yourdomain.com`).

### Cross-linking the two portfolios (optional)

Each site can show a link to the other in its footer. After both are deployed,
set an environment variable on each Vercel project:

- On the **Operations** project: `NEXT_PUBLIC_OTHER_PORTFOLIO_URL` = the Data
  site's URL.
- On the **Data** project: `NEXT_PUBLIC_OTHER_PORTFOLIO_URL` = the Operations
  site's URL.

Redeploy and each footer will surface a link to its sibling portfolio. Left
unset, no cross-link is shown.

## Design system

The brand is enforced through the shared theme, not page-by-page styling.

### Color — the 7-core system (`shared/tailwind-preset.ts`)

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
`bg-signature`, `text-link`, `text-amber`).

### Typography

- **Playfair Display** (editorial serif) — all headlines/display, via `next/font`.
- **Inter** — body, UI, labels, buttons.

### Motion (`shared/styles/globals.css`, `shared/components/Reveal.tsx`)

- Slow, eased scroll reveals (fire once) are the default motion.
- `prefers-reduced-motion` is honored everywhere.

## Integration seams (intentionally not wired)

The UI is built; the data sources are left as clean seams:

- **Resource downloads** — `Resource.downloadUrl` in `shared/lib/content.ts`.
- **Form submissions** — `EmailCapture` and `InquiryForm` validate and reflect
  state but do not POST; wire the marked `TODO(integration)` handlers.
- **FAQ** — `faqs` / `dataFaqs` are seeds; back them with a CMS/Supabase.

All content lives in `shared/lib/content.ts` — swap the source, keep the components.
