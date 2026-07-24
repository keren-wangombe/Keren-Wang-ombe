"use client";

import { brand, contactEmail, resumeFile, social } from "@/lib/site";

/**
 * Footer, laid out like the reference site: a deep glow panel carrying the
 * closing line and the direct actions (Email Me → reveal + copy, Resume,
 * LinkedIn), then a slim byline strip with a back-to-top control. Rendered in
 * the site's own palette — Signature navy surfaces, Amber accents, Paper text.
 */
export default function Footer() {
  return (
    <footer className="print:hidden">
      {/* ── Full-bleed glow band: closing line + direct actions, end to end. */}
      <div
        className="relative overflow-hidden bg-signature text-paper"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 640px 360px at 15% 40%, rgba(217,119,6,0.16) 0%, transparent 60%), radial-gradient(ellipse 420px 260px at 92% 90%, rgba(250,250,248,0.06) 0%, transparent 55%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-paper/5"
        />
        <div className="container-content py-16 sm:py-20">
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-h2 font-light leading-tight text-paper">
                Let&rsquo;s build scalable operations.
              </h2>
              <p className="mt-3 max-w-md text-small text-paper/60">
                Workflow automation, operational systems, KPI reporting, and execution
                visibility — for teams that need to move fast without breaking things.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-bright px-5 py-2.5 text-small font-medium text-ink transition-all duration-300 ease-calm hover:brightness-95"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email me
                </a>
                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-paper/25 px-5 py-2.5 text-small font-medium text-paper/80 transition-all duration-300 ease-calm hover:bg-paper/5"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Resume
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-paper/20 text-paper/50 transition-all duration-300 ease-calm hover:border-paper/40 hover:text-paper"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Byline strip + back to top. */}
      <div className="border-t border-ink/10 bg-paper">
        <div className="container-content flex items-center justify-between gap-6 py-6">
          <p className="font-serif text-small italic text-signature">
            © {new Date().getFullYear()} {brand.name}
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}

/** Scroll-to-top control with a ringed arrow, matching the reference site. */
function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group inline-flex items-center gap-2 text-small font-medium text-ink/50 transition-colors duration-300 ease-calm hover:text-signature"
    >
      Top
      <span className="grid h-8 w-8 place-items-center rounded-full border border-ink/20 transition-colors duration-300 ease-calm group-hover:border-signature">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </span>
    </button>
  );
}
