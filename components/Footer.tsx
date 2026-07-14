import Link from "next/link";
import { brand, nav, social } from "@/lib/site";
import EmailCapture from "./EmailCapture";
import InquiryForm from "./InquiryForm";

/**
 * Footer: the anchor weight of the page. Deep Signature Blue with Paper text.
 * Carries the contact form (the former /contact page, now anchored here as
 * #contact), the social-feed area, a persistent email capture, and the
 * Tier-1 byline.
 */
export default function Footer() {
  return (
    <footer className="mt-32 bg-signature text-paper print:hidden">
      {/* Contact, the former /contact page content, anchored for site-wide CTAs. */}
      <div id="contact" className="container-content scroll-mt-20 border-b border-paper/10 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="font-serif text-h2 font-light text-paper">Let&rsquo;s talk.</h2>
            <p className="mt-5 max-w-prose text-body text-paper/70">
              General questions, advisory and consulting inquiries, or just a
              hello, it all arrives in the same place, and I read it
              personally.
            </p>
          </div>
          <InquiryForm
            tone="dark"
            submitLabel="Send message"
            subject="New contact message, kerenwangombe.com"
            fields={[
              { name: "name", label: "Your name", required: true, placeholder: "Jane Doe" },
              { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
              { name: "topic", label: "Topic", placeholder: "General · Advisory · Consulting · Speaking" },
              { name: "message", label: "Your message", type: "textarea", required: true, placeholder: "How can I help?" },
            ]}
          />
        </div>
      </div>

      <div className="container-content grid gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Email capture + byline */}
        <div>
          <EmailCapture
            tone="dark"
            label="Stay close to the work."
            hint="The newest case study, a new write-up, the occasional note, quietly, when there's something worth your time."
          />
          <p className="kicker mt-12 text-paper/55">{brand.byline}</p>
        </div>

        {/* Social + sitemap */}
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="kicker text-paper/55">Elsewhere</h2>
            <ul className="mt-5 space-y-3 text-body">
              <li>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet !text-paper"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet !text-paper"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={social.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet !text-paper"
                >
                  Medium
                </a>
              </li>
            </ul>
            <p className="mt-5 text-small text-paper/45">
              Case studies, write-ups, and the systems behind the work.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="kicker text-paper/55">Explore</h2>
            <ul className="mt-5 space-y-3 text-body">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-amber !text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-content flex flex-col gap-2 py-6 text-small text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="link-amber !text-paper/70">
              Privacy
            </Link>
            <Link href="/terms" className="link-amber !text-paper/70">
              Terms
            </Link>
            <Link href="/cookies" className="link-amber !text-paper/70">
              Cookies
            </Link>
            <p>{brand.oneLine}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
