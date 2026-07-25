"use client";

import { useState } from "react";
import type { CaseStudyItem } from "@/lib/content";

/**
 * A collapsible case-study card. Collapsed, it shows only the summary on the
 * left (badge, metric, title, tools) and the animated process map on the
 * right — compact, so the list stays scannable. Expanding the dropdown reveals
 * the full Problem → Built → Result story and any links. Existing palette only.
 */
export default function CaseStudy({ item }: { item: CaseStudyItem; index?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      id={item.id}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-ink/10 border-l-4 border-l-amber-bright bg-paper transition-shadow duration-300 ease-calm hover:shadow-xl hover:shadow-ink/10"
    >
      {/* ── Always visible: summary (left) + process map (right). Whole row toggles. */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="block w-full text-left"
      >
        <div
          className={`gap-6 p-6 sm:p-7 ${
            open ? "" : "grid items-center lg:grid-cols-[0.82fr_1.18fr] lg:gap-8"
          }`}
        >
          {/* Left: badge, metric, title, tools, toggle. */}
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
              {item.tools.slice(0, 6).map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-ink/15 px-3 py-1 text-[0.72rem] font-medium text-ink/70"
                >
                  {tool}
                </li>
              ))}
            </ul>
            <span className="mt-5 inline-flex items-center gap-2 text-small font-medium text-signature">
              {open ? "Hide case study" : "View case study"}
              <svg
                viewBox="0 0 24 24"
                className={`h-4 w-4 fill-none stroke-amber transition-transform duration-300 ease-calm ${open ? "rotate-180" : ""}`}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>

          {/* The animated process map — sits beside the summary when collapsed,
              and expands to full width (larger) once the card is opened. */}
          <div className={`rounded-xl border border-ink/10 bg-signature/[0.04] p-3 sm:p-4 ${open ? "mt-6" : ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={`${item.title} — process map`}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </button>

      {/* ── Dropdown: the full story, revealed on expand. */}
      {open ? (
        <div className="grid gap-8 border-t border-ink/10 p-6 pt-7 sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div>
              <p className="kicker !text-ink/50">The problem</p>
              <p className="mt-2.5 text-body text-ink/80">{item.problem}</p>
            </div>
            <div>
              <p className="kicker !text-ink/50">What I built</p>
              <p className="mt-2.5 text-body text-ink/80">{item.built}</p>
            </div>
          </div>

          <div className="space-y-6">
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
      ) : null}
    </article>
  );
}
