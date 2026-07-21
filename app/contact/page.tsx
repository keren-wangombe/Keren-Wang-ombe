import type { Metadata } from "next";
import ContactCard from "@/components/ContactCard";
import { contactEmail, resumeFile, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, LinkedIn, and resume — the direct lines.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14">
      <ContactCard />

      {/* ── The details, plainly listed for anyone who prefers text to buttons. */}
      <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-8 md:p-10">
        <p className="mb-6 text-[9px] font-extrabold uppercase tracking-[0.3em] text-slate-400">The Details</p>
        <div className="space-y-4 text-sm">
          <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="w-20 shrink-0 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
              Email
            </span>
            <a href={`mailto:${contactEmail}`} className="font-bold text-signature transition-colors hover:text-teal">
              {contactEmail}
            </a>
          </p>
          <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="w-20 shrink-0 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
              LinkedIn
            </span>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-signature transition-colors hover:text-teal"
            >
              linkedin.com/in/keren-wangombe
            </a>
          </p>
          <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="w-20 shrink-0 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
              Resume
            </span>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-signature transition-colors hover:text-teal"
            >
              View my resume (PDF)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
