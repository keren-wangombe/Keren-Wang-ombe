"use client";

import { useState } from "react";
import { contactEmail, resumeFile, social } from "@/lib/site";

/**
 * Contact card, matching the reference site's footer: a midnight glow panel
 * with an Email Me toggle (revealing the address with a copy button), a
 * Resume download, and a LinkedIn icon button.
 */
export default function ContactCard() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="footer-glow relative overflow-hidden rounded-2xl px-8 py-10 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full border border-white/5"
      />
      <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="mb-1 font-serif text-2xl font-normal italic !text-white md:text-3xl">
            Let&rsquo;s build scalable operations.
          </h2>
          <p className="max-w-xs text-xs leading-relaxed text-white/45">
            Workflow optimisation, operational systems, KPI reporting, and execution visibility — for
            teams that need to move fast without breaking things.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setShowEmail(!showEmail)}
              className="flex items-center gap-2 rounded-xl bg-amber-bright px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-widest text-white transition-all hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {showEmail ? "Close" : "Email Me"}
            </button>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-widest text-white/70 transition-all hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/40 transition-all hover:border-white/40 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {showEmail && (
            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <div>
                <p className="mb-0.5 text-[8px] font-extrabold uppercase tracking-widest text-teal">Direct</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-xs font-bold underline decoration-dotted underline-offset-4 transition-colors hover:text-teal"
                >
                  {contactEmail}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="ml-auto shrink-0 rounded-lg bg-white/10 p-2 transition-all hover:bg-white/20"
              >
                {copied ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-green-400" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 opacity-60" aria-hidden>
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
