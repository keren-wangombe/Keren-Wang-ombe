import Reveal from "@/components/Reveal";
import { linkedinEmbedUrl, social } from "@/lib/site";

/**
 * "Latest on LinkedIn" — embeds a specific post when `linkedinEmbedUrl` is set
 * (paste the src from LinkedIn's "Embed this post"), otherwise shows a
 * follow-on-LinkedIn call to action. Either way it adds a live, human CTA and
 * breaks up the text on the page.
 */
export default function LinkedInFeed() {
  return (
    <section className="border-y border-signature/10 bg-signature/[0.05]">
      <div className="container-content py-16 sm:py-24">
        <Reveal>
          <p className="kicker text-blue-lift">Latest on LinkedIn</p>
          <h2 className="mt-4 max-w-2xl font-serif text-h2 font-light leading-snug text-ink">
            Where I think out loud about operations & analytics.
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          {linkedinEmbedUrl ? (
            <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-lg shadow-ink/5">
              <iframe
                src={linkedinEmbedUrl}
                title="Latest LinkedIn post"
                className="h-[560px] w-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="mx-auto flex max-w-xl flex-col items-center gap-6 rounded-2xl border border-ink/10 bg-paper p-10 text-center shadow-lg shadow-ink/5 sm:flex-row sm:text-left">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-signature text-paper">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-body text-ink">
                  I share operations breakdowns, automation ideas, and the systems behind
                  the work on LinkedIn.
                </p>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-amber mt-4 inline-flex items-center gap-2 text-small font-medium text-signature"
                >
                  Follow along on LinkedIn
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
