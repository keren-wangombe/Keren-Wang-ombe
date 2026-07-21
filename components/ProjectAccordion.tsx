"use client";

import { useState } from "react";
import { caseStudies, type Project } from "@/lib/portfolio";

/**
 * Expandable project card, matching the reference site: a compact header row
 * (colored dot, badge, title, chevron) that opens to summary, key outcomes,
 * tool tags, the deep case study (with SQL where present), and any
 * walkthrough embeds (YouTube, Notion, Google Drive).
 */
export default function ProjectAccordion({ project, color }: { project: Project; color: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
      <button type="button" onClick={() => setOpen(!open)} className="w-full text-left" aria-expanded={open}>
        <div className="flex items-center justify-between gap-4 px-6 py-5">
          <div className="flex min-w-0 items-center gap-4">
            <div className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />
            <div className="min-w-0">
              <p className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.2em]" style={{ color }}>
                {project.badge}
              </p>
              <h4 className="truncate text-base font-bold text-signature">{project.title}</h4>
            </div>
          </div>
          <div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all"
            style={{ borderColor: open ? color : "#e2e8f0", background: open ? color : "transparent" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180 text-white" : "text-slate-400"}`}
              aria-hidden
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </button>

      {open && (
        <div className="animate-fade-up border-t border-slate-100 px-6 pb-7 pt-5">
          <p className="about-quote mb-6 text-sm leading-relaxed text-slate-500">{project.summary}</p>

          <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.2em]" style={{ color }}>
            Key Outcomes
          </p>
          <ul className="mb-6 space-y-2">
            {project.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-sm text-slate-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color }} aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {o}
              </li>
            ))}
          </ul>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="tool-tag">
                {t}
              </span>
            ))}
          </div>

          {project.caseStudyKey && <CaseStudyBody studyKey={project.caseStudyKey} color={color} />}
          {project.driveUrl && (
            <LinkCard
              color={color}
              kicker="System Walkthrough"
              text="See how the full system runs — from intake form to ClickUp workflow automation"
              cta="Watch"
              href={project.driveUrl}
            />
          )}
          {project.youtubeId && <YouTubeEmbed youtubeId={project.youtubeId} color={color} title={project.title} />}
          {project.notionEmbed && project.notionUrl && (
            <NotionEmbed embedUrl={project.notionEmbed} notionUrl={project.notionUrl} color={color} />
          )}
          {project.notionCaseStudy && (
            <LinkCard
              color={color}
              kicker="Full Case Study"
              text="Architecture decisions, implementation challenges, and operational outcomes"
              cta="Read"
              href={project.notionCaseStudy}
            />
          )}
        </div>
      )}
    </div>
  );
}

/** The deep case-study body: sections, bullets, and SQL blocks with insights. */
function CaseStudyBody({ studyKey, color }: { studyKey: string; color: string }) {
  const study = caseStudies[studyKey];
  if (!study) return null;
  return (
    <div className="mt-6 border-t border-slate-100 pt-6">
      <p className="mb-6 text-sm italic leading-relaxed text-slate-600">{study.overview}</p>
      {study.sections.map((section) => (
        <div key={section.title}>
          <p className="cs-section-title">{section.title}</p>
          {section.content && <p className="mb-4 text-sm leading-relaxed text-slate-500">{section.content}</p>}
          {section.bullets && (
            <ul className="mb-4 space-y-2">
              {section.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {study.queries?.map((q) => (
        <div key={q.title} className="mb-4">
          <p className="cs-h3">{q.title}</p>
          <div className="sql-block">
            <code>{q.sql}</code>
          </div>
          <div className="insight-box">
            <span className="font-bold text-teal">Insight: </span>
            {q.insight}
          </div>
        </div>
      ))}
      {study.externalUrl && (
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-[10px] uppercase tracking-widest text-slate-300">{study.externalLabel}</span>
          <a
            href={study.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 transition-colors hover:text-slate-600"
          >
            <ExternalIcon />
            View original
          </a>
        </div>
      )}
    </div>
  );
}

/** A colored callout row with a solid CTA button (Drive walkthrough, Notion case study). */
function LinkCard({ color, kicker, text, cta, href }: { color: string; kicker: string; text: string; cta: string; href: string }) {
  return (
    <div
      className="mt-3 flex items-center justify-between gap-4 rounded-2xl border p-5"
      style={{ borderColor: `${color}25`, background: `${color}06` }}
    >
      <div className="min-w-0">
        <p className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.2em]" style={{ color }}>
          {kicker}
        </p>
        <p className="text-sm font-bold leading-snug text-slate-700">{text}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-widest text-white transition-all hover:opacity-80"
        style={{ background: color }}
      >
        <ExternalIcon />
        {cta}
      </a>
    </div>
  );
}

/** Click-to-play YouTube walkthrough with a framed header/footer strip. */
function YouTubeEmbed({ youtubeId, color, title }: { youtubeId: string; color: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border" style={{ borderColor: `${color}30` }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: `${color}10`, borderBottom: `1px solid ${color}20` }}>
        <div className="h-2 w-2 rounded-full" style={{ background: color }} />
        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em]" style={{ color }}>
          Project Walkthrough
        </span>
      </div>
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative block aspect-video w-full cursor-pointer overflow-hidden bg-[#0f1c2e]"
          aria-label="Play project walkthrough"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors group-hover:bg-black/20">
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-5 w-5" style={{ color }} aria-hidden>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
            Watch walkthrough
          </span>
        </button>
      ) : (
        <div className="relative aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Project walkthrough"
          />
        </div>
      )}
      <div className="flex items-center justify-between px-4 py-3" style={{ background: `${color}06` }}>
        <span className="text-[10px] text-slate-400">{title}</span>
        <a
          href={`https://youtu.be/${youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] font-bold transition-opacity hover:opacity-70"
          style={{ color }}
        >
          <ExternalIcon />
          Open in YouTube
        </a>
      </div>
    </div>
  );
}

/** Live Notion hub, previewable in place, with a link out. */
function NotionEmbed({ embedUrl, notionUrl, color }: { embedUrl: string; notionUrl: string; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border" style={{ borderColor: `${color}30` }}>
      <div className="flex items-center justify-between px-4 py-2.5" style={{ background: `${color}10`, borderBottom: `1px solid ${color}20` }}>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full" style={{ background: color }} />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.18em]" style={{ color }}>
            Live Notion Hub
          </span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest transition-all"
          style={{ background: open ? color : `${color}15`, color: open ? "white" : color }}
        >
          {open ? "Close preview" : "Preview hub"}
        </button>
      </div>
      {open && (
        <div className="bg-[#191919]">
          <iframe src={embedUrl} className="block h-[500px] w-full border-none" allowFullScreen title="Notion operations hub" />
        </div>
      )}
      <div className="flex items-center justify-between px-4 py-3" style={{ background: `${color}06` }}>
        <span className="text-[10px] text-slate-400">The Shift Collective · Notion · CRM &amp; Operations Hub</span>
        <a
          href={notionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] font-bold transition-opacity hover:opacity-70"
          style={{ color }}
        >
          <ExternalIcon />
          Open in Notion
        </a>
      </div>
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
