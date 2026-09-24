import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contactMailto, heroPortrait, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Operations, Systems & Reporting",
  description:
    "Keren Wang'ombe organises the people, tasks, information and follow-up behind complex work, then improves the process so it is easier to run.",
};

const proof = [
  ["3,000+", "People supported across programmes"],
  ["50%+", "Less manual tracking across three programmes"],
  ["99%", "Data accuracy across cohort dashboards"],
  ["6", "Cohorts supported through planning, tracking and reporting"],
] as const;

const help = [
  ["01", "Your team keeps asking, “Where is that?”", "I bring the documents, steps and owners into one place."],
  ["02", "A repeated task takes hours every week.", "I simplify the steps and set up useful reminders or automatic updates."],
  ["03", "You have data but no clear next step.", "I find the useful pattern and turn it into something people can act on."],
] as const;

const experience = [
  ["2023–2026", "Programme delivery", "Learner support, coordination, reporting and keeping large programmes moving."],
  ["2026–Present", "Programme Operations Associate", "Process improvement, shared systems and workstreams across teams."],
  ["2020–Present", "Open-mapping coordination", "Documentation, onboarding, partner updates and practical workshops."],
  ["Additional work", "Data and community projects", "Humanitarian mapping, education, health and geospatial communities."],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="portfolio-hero">
        <div className="portfolio-wrap portfolio-hero-grid">
          <div className="animate-fade-up">
            <p className="portfolio-eyebrow">Operations · Systems · Reporting</p>
            <h1>I make complex work easier to run.</h1>
            <p className="portfolio-lede">
              I’m Keren Wang’ombe. I organise the people, tasks, information and follow-up behind complex work.
              Then I improve the process so progress is easier to see and the work is easier to repeat.
            </p>
            <a className="portfolio-hero-link" href="#selected-work">See selected work ↓</a>
          </div>
          <Reveal className="portfolio-portrait-shell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="portfolio-portrait" src={heroPortrait} alt="Keren Wang'ombe" />
          </Reveal>
        </div>
      </section>

      <div className="portfolio-wrap portfolio-proof-wrap">
        <Reveal className="portfolio-proof-strip">
          <div className="portfolio-proof-grid">
            {proof.map(([value, label]) => (
              <div className="portfolio-proof" key={label}>
                <strong>{value}</strong><span>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <section id="selected-work" className="portfolio-section">
        <div className="portfolio-wrap">
          <Reveal className="portfolio-section-head">
            <div>
              <p className="portfolio-eyebrow">Selected work</p>
              <h2>Three examples of how I improve the way work runs.</h2>
            </div>
            <p>Each example starts with a real problem: too many moving parts, too much manual work or follow-up spread across different places.</p>
          </Reveal>

          <div className="portfolio-selected-grid">
            <Reveal as="article" className="portfolio-case-preview">
              <div className="portfolio-case-visual">
                <strong className="portfolio-big-proof">3,000+</strong>
                <span className="portfolio-visual-label">people supported across programmes</span>
                <div className="portfolio-steps" aria-label="Programme support process">
                  <span>Prepare</span><span>Inform</span><span>Support</span><span>Report</span>
                </div>
              </div>
              <div className="portfolio-case-copy">
                <p className="portfolio-eyebrow">Large programme support</p>
                <h3>Helping people start clearly and keeping progress visible.</h3>
                <p>I managed communication, support spaces, tracking and reporting across large programmes. This included analysing a 1,046-learner cycle within the wider 3,000+ people supported.</p>
                <Link className="portfolio-text-link" href="/work#programme-support">See the full project ↗</Link>
              </div>
            </Reveal>

            <Reveal as="article" className="portfolio-case-preview">
              <div className="portfolio-case-visual">
                <strong className="portfolio-big-proof">50%+</strong>
                <span className="portfolio-visual-label">less manual tracking</span>
                <div className="portfolio-reduction-bars" aria-label="Manual work before and after">
                  <div className="portfolio-bar-row"><span>Before</span><div className="portfolio-bar portfolio-before" /></div>
                  <div className="portfolio-bar-row"><span>After</span><div className="portfolio-bar portfolio-after" /></div>
                </div>
              </div>
              <div className="portfolio-case-copy">
                <p className="portfolio-eyebrow">Process improvement</p>
                <h3>Replacing repeated updates with one clearer system.</h3>
                <p>I helped design automated trackers across three programmes, documented the process and supported the teams using it.</p>
                <Link className="portfolio-text-link" href="/work#tracking-system">See the full project ↗</Link>
              </div>
            </Reveal>

            <Reveal as="article" className="portfolio-case-preview">
              <div className="portfolio-case-visual">
                <span className="portfolio-visual-label">One repeatable outreach process</span>
                <div className="portfolio-flow-line" aria-label="Partner outreach workflow">
                  <span>Research</span><span>Record</span><span>Contact</span><span>Follow up</span>
                </div>
              </div>
              <div className="portfolio-case-copy">
                <p className="portfolio-eyebrow">Partner outreach</p>
                <h3>Keeping research, messages and follow-up in one place.</h3>
                <p>I researched potential partners, organised the records, maintained an event calendar and created a repeatable system for communication and follow-up.</p>
                <Link className="portfolio-text-link" href="/work#partner-outreach">See the full project ↗</Link>
              </div>
            </Reveal>
          </div>
          <Link className="portfolio-section-link" href="/work">View all work →</Link>
        </div>
      </section>

      <section id="who" className="portfolio-section">
        <Reveal className="portfolio-wrap portfolio-who-surface">
          <div className="portfolio-section-head">
            <div>
              <p className="portfolio-eyebrow">Who I help</p>
              <h2>When the work is growing faster than the way you run it.</h2>
            </div>
            <p>I help teams turn scattered tasks, information and follow-up into a clear way of working that people can understand and use.</p>
          </div>
          <div className="portfolio-help-grid">
            {help.map(([number, title, body]) => (
              <article className="portfolio-help-card" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
          <div className="portfolio-plain-offer">
            <h3>Is a four-hour task taking time away from work that needs your judgement?</h3>
            <p>Show me how it works today. I can help make the steps clearer and easier to run.</p>
          </div>
        </Reveal>
      </section>

      <section id="about" className="portfolio-section">
        <Reveal className="portfolio-wrap portfolio-about-surface">
          <div className="portfolio-about-copy">
            <p className="portfolio-eyebrow">About</p>
            <h2>I followed the numbers into the work underneath them.</h2>
            <p>My background is in environmental planning, mapping and data analysis. It taught me to look for patterns and ask what the numbers are showing.</p>
            <p>I kept finding the same thing: good results depend on clear plans, useful information, visible risks and consistent follow-up. That is the work I now do.</p>
            <div className="portfolio-personal">Outside work, my ideal reset is my phone off, a notebook open and somewhere quiet in nature.</div>
          </div>
          <div className="portfolio-experience-grid" aria-label="Experience">
            {experience.map(([date, title, body]) => (
              <article className="portfolio-experience" key={title}>
                <span className="portfolio-date">{date}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="testimonials" className="portfolio-section">
        <Reveal className="portfolio-wrap portfolio-testimonials-surface">
          <div className="portfolio-section-head">
            <div>
              <p className="portfolio-eyebrow">What people say</p>
              <h2>Trusted to make the work clearer and stronger.</h2>
            </div>
            <p>Public recommendations from people who have worked with me. Each one links to the original source.</p>
          </div>
          <div className="portfolio-testimonial-grid">
            <article className="portfolio-testimonial">
              <blockquote>She simplifies complexity, strengthens processes with intention, and consistently drives meaningful results.</blockquote>
              <footer><a href={social.linkedin} target="_blank" rel="noreferrer">Jane Obel · LinkedIn ↗</a></footer>
            </article>
            <article className="portfolio-testimonial">
              <blockquote>Any organisation looking for an operations powerhouse who can drive customer-obsessed results while maintaining technical integrity would be fortunate to have her.</blockquote>
              <footer><a href={social.linkedin} target="_blank" rel="noreferrer">Dare Omotosho · LinkedIn ↗</a></footer>
            </article>
            <article className="portfolio-testimonial">
              <blockquote>It was a pleasure working with Keren… Would recommend her without hesitation.</blockquote>
              <footer><span className="portfolio-stars" aria-label="Five-star review">★★★★★</span><a href="https://www.fiverr.com/keren_wangombe/manage-your-program-operations-and-coordinate-workflows" target="_blank" rel="noreferrer">Client · Fiverr ↗</a></footer>
            </article>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="portfolio-contact">
        <Reveal className="portfolio-wrap portfolio-contact-surface">
          <div>
            <p className="portfolio-eyebrow">Contact</p>
            <h2>Need help making complex work easier to run?</h2>
            <p>Tell me what is getting stuck and what a better process should make possible.</p>
          </div>
          <div className="portfolio-contact-cards" aria-label="Contact Keren">
            <a className="portfolio-contact-card" href={contactMailto}>Email</a>
            <a className="portfolio-contact-card" href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="portfolio-contact-card" href={social.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="portfolio-contact-card" href="https://www.fiverr.com/keren_wangombe" target="_blank" rel="noreferrer">Fiverr</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
