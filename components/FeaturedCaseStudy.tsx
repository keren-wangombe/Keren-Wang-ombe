"use client";

import { useState } from "react";
import type { FeaturedStudy } from "@/lib/content";

/**
 * A featured case study, told in four sections — the situation, the recurring
 * work I handled, what I improved, and what changed. Rendered as a title-only
 * dropdown: collapsed, only the title shows so the list stays quick to scan;
 * expanding reveals the process map and the full story.
 */
export default function FeaturedCaseStudy({ item }: { item: FeaturedStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <article
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

      {/* ── Expanded: process map + the four-section story. */}
      {open ? (
        <div className="border-t border-ink/10 p-5 sm:p-6">
          <p className="kicker text-amber">{item.badge}</p>
          {item.metric ? (
            <div className="mt-3">
              <p className="font-serif text-h2 font-light leading-none text-signature">{item.metric}</p>
              <p className="mt-1.5 text-small text-ink/60">{item.metricLabel}</p>
            </div>
          ) : null}

          <div className="mt-5 rounded-xl border border-ink/10 bg-signature/[0.04] p-3 sm:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={`${item.title} — process map`} className="w-full rounded-lg" />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-5">
              <Section label="The situation" body={item.situation} />
              <Section label="What I handled" body={item.handled} />
            </div>
            <div className="space-y-5">
              <Section label="What I improved" body={item.improved} />
              <Section label="What changed" body={item.changed} />
            </div>
          </div>

          {item.figures?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-ink/10 pt-5">
              {item.figures.map((figure) => (
                <li key={figure} className="rounded-full bg-amber/[0.1] px-3 py-1 text-[0.72rem] font-medium text-amber">
                  {figure}
                </li>
              ))}
            </ul>
          ) : null}

          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <li key={tool} className="rounded-full border border-ink/15 px-3 py-1 text-[0.72rem] font-medium text-ink/70">
                {tool}
              </li>
            ))}
          </ul>

          {item.links?.length ? (
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-5">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="link-amber inline-flex items-center gap-2 text-small font-semibold text-signature"
                >
                  {link.label}
                  <span aria-hidden>→</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

function Section({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="kicker !text-ink/50">{label}</p>
      <p className="mt-2 text-body text-ink/80">{body}</p>
    </div>
  );
}
