import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { contactEmail, resumeFile, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — email, LinkedIn, resume, or a quick message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        tone="cool"
        title="Let's connect."
        intro={
          <p>
            Hiring, collaborating, or just curious about the work — it all reaches
            me here, and I read every message personally.
          </p>
        }
      />

      <section className="container-content py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-serif text-h2 font-light text-ink">The direct lines</h2>
            <p className="mt-4 max-w-prose text-body text-ink/70">
              The fastest way to reach me — pick whichever suits you.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${contactEmail}`}
                className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-4 transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:border-amber/40 hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/10 text-amber">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/45">Email</span>
                  <span className="block truncate text-body font-semibold text-signature">{contactEmail}</span>
                </span>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-4 transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:border-amber/40 hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/10 text-amber">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/45">LinkedIn</span>
                  <span className="block truncate text-body font-semibold text-signature">keren-wangombe</span>
                </span>
              </a>
              <a
                href={resumeFile}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-4 transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:border-amber/40 hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/10 text-amber">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/45">Resume</span>
                  <span className="block truncate text-body font-semibold text-signature">View my resume (PDF)</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <InquiryForm
              submitLabel="Send message"
              subject="New message, kerenwangombe.com"
              fields={[
                { name: "name", label: "Your name", required: true, placeholder: "Jane Doe" },
                { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
                { name: "topic", label: "About", placeholder: "A role · A collaboration · A question" },
                { name: "message", label: "Your message", type: "textarea", required: true, placeholder: "Say hello, or tell me about the role…" },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
