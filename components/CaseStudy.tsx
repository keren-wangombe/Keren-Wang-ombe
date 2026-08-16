"use client";

import { useEffect, useRef, useState } from "react";
import MiniDashboard from "@/components/MiniDashboard";
import type { CaseStudyItem } from "@/lib/content";

/**
 * A title-only case-study dropdown. Collapsed, only the title shows so the
 * projects are quick to scan; expanding reveals the process map and the full
 * Problem → Built → Result story with tools and any links.
 *
 * When the page is reached via an anchor (e.g. /work#support from a Featured
 * card), the matching card opens itself and scrolls into view, so the reader
 * lands straight on the case study instead of a row of collapsed titles.
 */
export default function CaseStudy({ item }: { item: CaseStudyItem; index?: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const openIfTargeted = () => {
      if (window.location.hash === `#${item.id}`) {
        setOpen(true);
        // Wait for the expanded content to lay out before scrolling to it.
        requestAnimationFrame(() =>
          ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
        );
      }
    };
    openIfTargeted();
    window.addEventListener("hashchange", openIfTargeted);
    return () => window.removeEventListener("hashchange", openIfTargeted);
  }, [item.id]);

  return (
    <article
      ref={ref}
      id={item.id}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-ink/10 border-l-4 border-l-amber-bright bg-paper transition-shadow duration-300 ease-calm hover:shadow-md hover:shadow-ink/5"
    >
      {/* ── Title row — the whole row toggles. */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
      >
        <h3 className="flex-1 font-serif text-lg font-medium leading-snug text-ink sm:text-xl">{item.title}</h3>
        {item.metric ? (
          <span className="hidden shrink-0 font-serif text-h2 font-light leading-none text-amber sm:block">{item.metric}</span>
        ) : null}
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 shrink-0 fill-none stroke-amber transition-transform duration-300 ease-calm ${open ? "rotate-180" : ""}`}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* ── Expanded: process map + Problem → Built → Result. */}
      {open ? (
        <div className="border-t border-ink/10 p-5 sm:p-6">
          <p className="kicker text-amber">{item.badge}</p>

          {item.chart ? (
            <div className="mt-4 max-w-lg overflow-hidden rounded-xl border border-ink/10 shadow-sm">
              <MiniDashboard {...item.chart} />
            </div>
          ) : null}

          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-5">
              <div>
                <p className="kicker !text-ink/50">The problem</p>
                <p className="mt-2 text-body text-ink/80">{item.problem}</p>
              </div>
              <div>
                <p className="kicker !text-ink/50">What I built</p>
                <p className="mt-2 text-body text-ink/80">{item.built}</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="kicker !text-ink/50">The result</p>
                <ul className="mt-2 space-y-2.5">
                  {item.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-body text-ink/80">
                      <svg viewBox="0 0 24 24" className="mt-1.5 h-4 w-4 shrink-0 fill-none stroke-amber" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <li key={tool} className="rounded-full border border-ink/15 px-3 py-1 text-[0.72rem] font-medium text-ink/70">
                {tool}
              </li>
            ))}
          </ul>

          {item.links?.length ? (
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-5">
              {item.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="link-amber inline-flex items-center gap-2 text-small font-semibold text-signature">
                  {link.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
