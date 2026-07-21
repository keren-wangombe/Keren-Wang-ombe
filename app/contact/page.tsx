import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { contactEmail, resumeFile, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — open to Programme Operations, BizOps, and Founders Associate roles.",
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
            {/* Open-to-work signal — the portfolio's whole point. */}
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1.5 text-small font-medium text-amber">
              <span className="h-2 w-2 rounded-full bg-amber-bright" aria-hidden />
              Open to new roles
            </span>
            <h2 className="mt-6 font-serif text-h2 font-light text-ink">Currently looking for</h2>
            <p className="mt-4 max-w-prose text-body text-ink">
              Programme Operations, Business Operations (BizOps), and Founders
              Associate roles where I can build the systems and reporting that keep
              delivery on track. A line about the team and the problem is the most
              helpful start.
            </p>
            <div className="mt-8 space-y-3 text-body">
              <p>
                <span className="kicker mr-3 text-ink/50">Email</span>
                <a href={`mailto:${contactEmail}`} className="link-quiet">
                  {contactEmail}
                </a>
              </p>
              <p>
                <span className="kicker mr-3 text-ink/50">LinkedIn</span>
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="link-quiet">
                  keren-wangombe
                </a>
              </p>
              <p>
                <span className="kicker mr-3 text-ink/50">Resume</span>
                <a href={resumeFile} target="_blank" rel="noreferrer" className="link-quiet">
                  View my resume (PDF)
                </a>
              </p>
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
