import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contactMailto, heroPortrait, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Operations, Systems & Reporting",
  description:
    "Keren Wang'ombe helps teams turn plans into work that gets done through practical operations, follow-up and process improvement.",
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
            <h1>I help teams turn plans into work that gets done.</h1>
            <p className="portfolio-lede">
              I’m Keren Wang’ombe. I keep track of what needs to happen, follow up when something is stuck
              and make sure the team has the information it needs. I also improve the process so the next round is easier to run.
            </p>
            <Link className="portfolio-hero-link" href="/work">See my work →</Link>
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

      <section id="work-preview" className="portfolio-section">
        <div className="portfolio-wrap">
          <Reveal className="portfolio-section-head">
            <div>
              <h2>A few examples of my work.</h2>
            </div>
            <p>The projects are different, but the job was similar each time: understand what was getting in the way, set up a clearer process and keep the follow-up moving.</p>
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
                <h3>Programme support for more than 3,000 learners.</h3>
                <p>I managed communication, support spaces, tracking and reporting across programmes serving thousands of learners.</p>
                <Link className="portfolio-text-link" href="/work#programme-support">See the full project ↗</Link>
              </div>
            </Reveal>

            <Reveal as="article" className="portfolio-case-preview">
              <div className="portfolio-case-visual">
                <strong className="portfolio-big-proof">50%+</strong>
                <span className="portfolio-visual-label">less manual tracking</span>
                <div className="portfolio-before-after" aria-label="How the reporting process changed">
                  <div><b>Before</b><span>Repeated updates in several places</span></div>
                  <div><b>After</b><span>One shared reporting workflow</span></div>
                </div>
              </div>
              <div className="portfolio-case-copy">
                <p className="portfolio-eyebrow">Process improvement</p>
                <h3>Cutting manual tracking by more than 50%.</h3>
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
                <p className="portfolio-eyebrow">Project coordination</p>
                <h3>Coordinating partner outreach and events.</h3>
                <p>I organised the work in Asana, maintained partner records, coordinated recurring events and kept communication and follow-up moving.</p>
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
              <h2>I usually help when:</h2>
            </div>
            <p>The work is moving, but the team is spending too much time looking for information, repeating updates or chasing the next step.</p>
          </div>
          <div className="portfolio-help-grid">
            {help.map(([number, title, body]) => (
              <article className="portfolio-help-card" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="about" className="portfolio-section">
        <Reveal className="portfolio-wrap portfolio-about-surface">
          <div className="portfolio-about-copy">
            <p className="portfolio-eyebrow">About</p>
            <h2>I started in data analysis. The work led me to operations.</h2>
            <p>My background is in environmental planning, mapping and data analysis. I was used to looking at numbers and asking what they were showing.</p>
            <p>Over time, I became just as interested in the work behind the numbers. Where was information getting lost? Why was someone stuck? What did the team need to do next? That is what led me into operations.</p>
            <p>For the last three years, I have worked on programme delivery, onboarding, reporting, project coordination and process improvement. I enjoy work that needs both careful follow-up and a better way of doing things.</p>
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
              <h2>A few words from people I have worked with.</h2>
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
            <h2>Do you have work that keeps getting stuck?</h2>
            <p>Send me a note and tell me what is happening.</p>
          </div>
          <div className="portfolio-contact-cards" aria-label="Contact Keren">
            <a className="portfolio-contact-card" href={contactMailto}>Email</a>
            <a className="portfolio-contact-card" href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="portfolio-contact-card" href={social.upwork} target="_blank" rel="noreferrer">Upwork</a>
            <a className="portfolio-contact-card" href="https://www.fiverr.com/keren_wangombe" target="_blank" rel="noreferrer">Fiverr</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
