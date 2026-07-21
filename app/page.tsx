import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  aboutSkillGroups,
  professionalSummary,
  whatIDo,
  type SkillGroup,
} from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Operations and analytics professional designing the systems that help teams execute at scale.",
};

/** Line icons for the skill-group cards, keyed to SkillGroup.icon. */
const groupIcon: Record<SkillGroup["icon"], ReactNode> = {
  settings: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M19 9l-5 5-4-4-3 3" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

/** Lane icons for the What I Do pair. */
const laneIcon: Record<string, ReactNode> = {
  Operations: groupIcon.settings,
  Analytics: groupIcon.chart,
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14">
      {/* ── Professional summary. */}
      <div className="mb-10 rounded-3xl border border-slate-100 bg-white p-8 md:p-10">
        <p className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.3em] text-slate-400">
          Professional Summary
        </p>
        <p className="text-sm leading-relaxed text-slate-500">{professionalSummary}</p>
      </div>

      {/* ── What I Do, the two lanes. */}
      <div className="mb-10">
        <p className="divider-label mb-8">What I Do</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {whatIDo.map((item) => (
            <div key={item.lane} className="card-hover rounded-2xl border border-slate-100 bg-white p-7">
              <div
                className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: `${item.color}15`, color: item.color }}
              >
                {laneIcon[item.lane]}
              </div>
              <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.2em]" style={{ color: item.color }}>
                {item.lane}
              </p>
              <p className="mb-5 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="tool-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills, six categorised chip cards. */}
      <div className="mb-8">
        <p className="divider-label mb-8">Skills</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {aboutSkillGroups.map((group) => (
          <div key={group.cat} className="rounded-2xl border border-slate-100 bg-white p-6">
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ background: `${group.color}12`, color: group.color }}
              >
                {groupIcon[group.icon]}
              </div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.18em]" style={{ color: group.color }}>
                {group.cat}
              </p>
            </div>
            <p className="mb-4 text-xs italic leading-relaxed text-slate-400">{group.line}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip" style={{ fontSize: "11px", padding: "5px 11px" }}>
                  <span className="skill-chip-dot" style={{ background: `${group.color}50` }} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
