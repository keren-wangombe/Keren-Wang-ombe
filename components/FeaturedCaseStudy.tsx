import type { FeaturedStudy } from "@/lib/content";

/**
 * A featured case study, told in four sections — the situation, the recurring
 * work I handled, what I improved, and what changed. Reuses the Work-page card
 * language (soft card, amber left rule, kicker labels, process map), but is
 * always expanded: these are the lead stories, not a scannable list.
 *
 * "What I handled" is deliberately given equal weight to the system built — it
 * names the tracking, coordination, records and follow-up done by hand, so the
 * story never jumps from the problem straight to the tooling.
 */
export default function FeaturedCaseStudy({ item }: { item: FeaturedStudy }) {
  return (
    <article
      id={item.id}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-ink/10 border-l-4 border-l-amber-bright bg-paper"
    >
      {/* ── Header: badge, title, tools, and the process map. */}
      <div className="grid items-center gap-6 p-6 sm:p-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
        <div>
          <p className="kicker text-amber">{item.badge}</p>
          {item.metric ? (
            <div className="mt-4">
              <p className="font-serif text-h1 font-light leading-none text-signature">{item.metric}</p>
              <p className="mt-1.5 text-small text-ink/60">{item.metricLabel}</p>
            </div>
          ) : null}
          <h3 className="mt-4 font-serif text-h2 font-light leading-snug text-ink">{item.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-ink/15 px-3 py-1 text-[0.72rem] font-medium text-ink/70"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-ink/10 bg-signature/[0.04] p-3 sm:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt={`${item.title} — process map`} className="w-full rounded-lg" />
        </div>
      </div>

      {/* ── The four-section story, in order. */}
      <div className="grid gap-8 border-t border-ink/10 p-6 pt-7 sm:p-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <Section label="The situation" body={item.situation} />
          <Section label="What I handled" body={item.handled} />
        </div>

        <div className="space-y-6">
          <Section label="What I improved" body={item.improved} />
          <Section label="What changed" body={item.changed} />

          {/* Funnel/scale figures as inline evidence — never a headline metric. */}
          {item.figures?.length ? (
            <ul className="flex flex-wrap gap-2 border-t border-ink/10 pt-5">
              {item.figures.map((figure) => (
                <li
                  key={figure}
                  className="rounded-full bg-signature/[0.06] px-3 py-1 text-[0.72rem] font-medium text-signature"
                >
                  {figure}
                </li>
              ))}
            </ul>
          ) : null}

          {item.links?.length ? (
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-5">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet inline-flex items-center gap-2 text-small font-medium"
                >
                  {link.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Section({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="kicker !text-ink/50">{label}</p>
      <p className="mt-2.5 text-body text-ink/80">{body}</p>
    </div>
  );
}
