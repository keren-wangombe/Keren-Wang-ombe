"use client";

import { useState } from "react";
import CaseStudy from "@/components/CaseStudy";
import Doodle from "@/components/Doodle";
import Reveal from "@/components/Reveal";
import type { CaseStudyTier } from "@/lib/content";

/**
 * Work-page mini tabs. Work still leads to one page; these sub-tabs switch
 * between the Operations and Analytics case studies so a visitor can jump
 * straight to Analytics instead of scrolling past every Operations project.
 */
export default function WorkTabs({ tiers }: { tiers: CaseStudyTier[] }) {
  const [active, setActive] = useState(0);
  const tier = tiers[active];
  const isOps = active === 0;

  return (
    <>
      {/* ── Sticky mini-tab bar, right under the header. */}
      <div className="sticky top-[4rem] z-30 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <div className="container-content flex items-center gap-2 py-3">
          <span className="mr-1 hidden text-small font-medium text-ink/40 sm:inline">Browse</span>
          {tiers.map((t, i) => (
            <button
              key={t.tab}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`rounded-full px-5 py-2 text-small font-medium transition-all duration-300 ease-calm ${
                active === i
                  ? "bg-signature text-paper shadow-sm"
                  : "text-ink/60 hover:bg-ink/[0.04] hover:text-ink"
              }`}
            >
              {t.tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Active tier: header, projects, capabilities. Tinted + doodled. */}
      <section
        className={`relative isolate overflow-hidden py-10 sm:py-14 ${
          isOps ? "bg-signature/[0.05]" : "bg-amber/[0.06]"
        }`}
      >
        {/* Background doodles filling the white space. */}
        <Doodle
          name={isOps ? "flow" : "bars"}
          className={`absolute -right-8 top-24 h-56 w-56 rotate-6 ${isOps ? "text-signature/[0.07]" : "text-amber/[0.10]"}`}
        />
        <Doodle
          name={isOps ? "nodes" : "orbit"}
          className={`absolute -left-10 bottom-16 h-52 w-52 -rotate-6 ${isOps ? "text-signature/[0.06]" : "text-amber/[0.08]"}`}
        />

        <div className="container-content relative">
          <Reveal key={`head-${active}`}>
            <p className="kicker text-amber">{isOps ? "Operations" : "Analytics"}</p>
            <h2 className="mt-2 font-serif text-h1 font-light text-signature">{tier.name}</h2>
            <p className="mt-3 max-w-2xl text-body text-ink">{tier.tagline}</p>
          </Reveal>

          {/* key on active so the cards remount (collapsed) when switching tabs. */}
          <div key={`items-${active}`} className="mt-8 space-y-6">
            {tier.items.map((item, i) => (
              <CaseStudy key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
