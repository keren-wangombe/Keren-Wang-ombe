import Reveal from "@/components/Reveal";
import type { CaseStudyItem } from "@/lib/content";

/**
 * A skimmable case-study card: headline metric as the protagonist, then the
 * Problem → Built → Result story laid out flat (nothing hidden behind hovers),
 * with tools and any walkthrough/write-up links at the foot. Uses only the
 * existing token palette.
 */
export default function CaseStudy({ item, index }: { item: CaseStudyItem; index: number }) {
  return (
    <Reveal
      as="article"
      id={item.id}
      delay={index * 80}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-ink/10 border-l-4 border-l-amber-bright bg-paper transition-shadow duration-300 ease-calm hover:shadow-xl hover:shadow-ink/10"
    >
      {/* Process-map diagram — the visual proof, first thing on the card. */}
      <div className="border-b border-ink/10 bg-signature/[0.04] p-4 sm:p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={`${item.title} — process map`}
          width={820}
          height={300}
          className="mx-auto aspect-[41/15] w-full max-w-3xl rounded-xl"
        />
      </div>

      <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
        {/* ── Left rail: badge, metric, title, tools. */}
        <div>
          <p className="kicker text-amber">{item.badge}</p>
          {item.metric ? (
            <div className="mt-6">
              <p className="font-serif text-display font-light leading-none text-signature">{item.metric}</p>
              <p className="mt-2 text-small text-ink/60">{item.metricLabel}</p>
            </div>
          ) : null}
          <h3 className="mt-6 font-serif text-h2 font-light leading-snug text-ink">{item.title}</h3>
          <ul className="mt-6 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-ink/15 px-3 py-1 text-[0.75rem] font-medium text-ink/70"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right rail: the Problem → Built → Result story. */}
        <div className="space-y-7">
          <div>
            <p className="kicker !text-ink/50">The problem</p>
            <p className="mt-2.5 text-body text-ink/80">{item.problem}</p>
          </div>
          <div>
            <p className="kicker !text-ink/50">What I built</p>
            <p className="mt-2.5 text-body text-ink/80">{item.built}</p>
          </div>
          <div>
            <p className="kicker !text-ink/50">The result</p>
            <ul className="mt-2.5 space-y-2.5">
              {item.results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-body text-ink/80">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-1.5 h-4 w-4 shrink-0 fill-none stroke-amber"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {item.links?.length ? (
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-6">
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
    </Reveal>
  );
}
