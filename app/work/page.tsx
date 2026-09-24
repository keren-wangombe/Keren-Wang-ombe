import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contactMailto, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Operations, systems, reporting and analysis work by Keren Wang'ombe.",
};

type Project = {
  number: string;
  title: string;
  body: string;
  href?: string;
  label?: string;
  external?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Helping new team members find what they need",
    body: "I co-created a delivery playbook, maintained a Notion hub and recorded task walkthroughs. Information became easier to find and repeated clarification reduced.",
  },
  {
    number: "02",
    title: "Showing where people got stuck during onboarding",
    body: "I built one view of a 317-person ambassador pipeline, from first interest through signed agreements, classroom joins and activation.",
  },
  {
    number: "03",
    title: "One view of programme progress",
    body: "An interactive demonstration using sample data for four programmes, 712 participants and 11 risks.",
    href: "/work/cohort-delivery-control-tower",
    label: "View project ↗",
  },
  {
    number: "04",
    title: "New team member onboarding system",
    body: "A demonstration connecting six tools across four workflow stages and one shared view.",
    href: "https://www.notion.so/Cross-Functional-Onboarding-Operations-System-3641bb37c5e18072a112eccfd94b92cd",
    label: "Read case study ↗",
    external: true,
  },
  {
    number: "05",
    title: "One place to manage coaching clients",
    body: "A demonstration hub using three coaches and 25 sample client records to make follow-up visible.",
    href: "https://paper-belt-9a3.notion.site/The-Shift-Collective-Operations-Hub-3361bb37c5e180f68291d8917dbc2eed?pvs=143",
    label: "Open project ↗",
    external: true,
  },
  {
    number: "06",
    title: "12-week delivery plan",
    body: "A demonstration with 24 tasks, five phases and nine mapped dependencies.",
    href: "https://youtu.be/8v5r37T_dDo",
    label: "Watch walkthrough ↗",
    external: true,
  },
  {
    number: "07",
    title: "Registration and welcome flow",
    body: "A four-step demonstration from form submission through filtering, record creation and a welcome email.",
  },
  {
    number: "08",
    title: "Finding the highest-value customers",
    body: "The top customer had a lifetime value of $1,118 in the simulated project dataset.",
    href: "https://medium.com/@nyamburawangombe/how-i-built-a-sales-customer-insights-dashboard-for-a-small-e-commerce-business-using-excel-1d95ecfa71b1",
    label: "Read analysis ↗",
    external: true,
  },
  {
    number: "09",
    title: "Finding why customer support was slow",
    body: "25% of sample tickets passed a 14-day service limit. Handoffs were the main delay found.",
    href: "https://github.com/Kerenyambura/operationalbottlenecks",
    label: "View project ↗",
    external: true,
  },
  {
    number: "10",
    title: "Finding what customers were buying",
    body: "The analysis found the highest-revenue category and the main buying age group in the project dataset.",
    href: "https://medium.com/@nyamburawangombe/retail-sales-analysis-54a805993053",
    label: "Read analysis ↗",
    external: true,
  },
  {
    number: "11",
    title: "Checking field survey records",
    body: "I compared survey and auditor records, then flagged unusual differences for investigation.",
    href: "https://github.com/Kerenyambura/SQL/blob/main/project_part_3.sql",
    label: "View SQL ↗",
    external: true,
  },
  {
    number: "12",
    title: "Maintaining accurate cohort dashboards",
    body: "I maintained programme dashboards at 99% data accuracy so progress and follow-up could be based on reliable information.",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="portfolio-page-hero">
        <Reveal className="portfolio-wrap">
          <p className="portfolio-eyebrow">Work</p>
          <h1>Clearer systems for work with many moving parts.</h1>
          <p>These projects show how I organise information, make progress visible and reduce work that teams should not have to repeat by hand.</p>
        </Reveal>
      </section>

      <section className="portfolio-work-featured" aria-label="Featured work">
        <div className="portfolio-wrap">
          <Reveal as="article" className="portfolio-work-case" id="programme-support">
            <div className="portfolio-work-case-lead">
              <p className="portfolio-eyebrow">Large programme support</p>
              <span className="portfolio-big-proof">3,000+</span>
              <h2>Helping people start clearly and keeping progress visible.</h2>
              <p>I supported communication, community spaces, tracking and reporting across programmes with thousands of learners.</p>
            </div>
            <div className="portfolio-work-case-body">
              <div className="portfolio-three-points">
                <div className="portfolio-point"><b>The problem</b><p>A large programme can quickly become confusing when messages, access, support and progress are handled in different places.</p></div>
                <div className="portfolio-point"><b>My work</b><p>I prepared support spaces, managed learner communication, clarified ownership and kept activity and risks visible.</p></div>
                <div className="portfolio-point"><b>What changed</b><p>Teams had stable spaces, clearer next steps and a shared view of learner activity and programme results.</p></div>
              </div>
              <div className="portfolio-result-cells" aria-label="Selected programme results">
                <div><strong>3,000+</strong><span>people supported across programmes</span></div>
                <div><strong>1,046</strong><span>learners in one analysed programme cycle</span></div>
                <div><strong>900</strong><span>graduates in that cycle</span></div>
                <div><strong>90%</strong><span>onboarding satisfaction in a large launch</span></div>
              </div>
              <p className="portfolio-note">The 1,046 learners are included within the wider 3,000+ figure. Graduation and satisfaction figures are programme results produced by the wider team.</p>
            </div>
          </Reveal>

          <Reveal as="article" className="portfolio-work-case" id="tracking-system">
            <div className="portfolio-work-case-lead">
              <p className="portfolio-eyebrow">Process improvement</p>
              <span className="portfolio-big-proof">50%+</span>
              <h2>Replacing repeated updates with one clearer system.</h2>
              <p>Teams were spending too much time updating records by hand and checking whether the information could be trusted.</p>
            </div>
            <div className="portfolio-work-case-body">
              <div className="portfolio-three-points">
                <div className="portfolio-point"><b>The problem</b><p>Three programmes relied on repeated manual updates. Status checks were slow and follow-up was harder.</p></div>
                <div className="portfolio-point"><b>My work</b><p>I designed automated Google Sheets trackers with technical partners, documented the process and helped teams use it.</p></div>
                <div className="portfolio-point"><b>What changed</b><p>Manual tracking fell by more than half. Teams could see status, owners and next actions in one place.</p></div>
              </div>
              <div className="portfolio-reduction-bars portfolio-light-bars" aria-label="Manual work before and after">
                <div className="portfolio-bar-row"><span>Before</span><div className="portfolio-bar portfolio-before" /></div>
                <div className="portfolio-bar-row"><span>After</span><div className="portfolio-bar portfolio-after" /></div>
              </div>
            </div>
          </Reveal>

          <Reveal as="article" className="portfolio-work-case" id="partner-outreach">
            <div className="portfolio-work-case-lead">
              <p className="portfolio-eyebrow">Partner outreach</p>
              <h2>Keeping research, messages and follow-up in one place.</h2>
              <p>A project to bring scattered partner information and follow-up into one repeatable process.</p>
            </div>
            <div className="portfolio-work-case-body">
              <div className="portfolio-three-points">
                <div className="portfolio-point"><b>The problem</b><p>Potential partners, events, messages and open actions needed a reliable home.</p></div>
                <div className="portfolio-point"><b>My work</b><p>I researched organisations, organised outreach records, maintained an event calendar and prepared communication materials.</p></div>
                <div className="portfolio-point"><b>What changed</b><p>Research, responsibilities and open actions could be followed through one repeatable system.</p></div>
              </div>
              <div className="portfolio-flow-line" aria-label="Partner outreach workflow">
                <span>Research</span><span>Record</span><span>Contact</span><span>Follow up</span>
              </div>
              <a className="portfolio-section-link" href="https://www.fiverr.com/keren_wangombe/manage-your-program-operations-and-coordinate-workflows" target="_blank" rel="noreferrer">See the public client review ↗</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="portfolio-library" aria-labelledby="more-work">
        <div className="portfolio-wrap">
          <Reveal className="portfolio-section-head">
            <div>
              <p className="portfolio-eyebrow">More work</p>
              <h2 id="more-work">Systems, analysis and coordination.</h2>
            </div>
            <p>Some examples come from delivered work and others are demonstrations built with sample data. Where sample data is used, it is stated clearly.</p>
          </Reveal>
          <div className="portfolio-project-grid">
            {projects.map((project) => (
              <Reveal as="article" className="portfolio-project" key={project.number}>
                <span className="portfolio-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                {project.href ? project.external ? (
                  <a className="portfolio-text-link" href={project.href} target="_blank" rel="noreferrer">{project.label}</a>
                ) : (
                  <Link className="portfolio-text-link" href={project.href}>{project.label}</Link>
                ) : null}
              </Reveal>
            ))}
          </div>
          <Reveal className="portfolio-data-band">
            <p>For deeper dashboard and analysis projects, visit the specialist data portfolio.</p>
            <a className="portfolio-text-link" href="https://kerenwangombe-data.vercel.app/" target="_blank" rel="noreferrer">View data portfolio ↗</a>
          </Reveal>
        </div>
      </section>

      <section className="portfolio-contact">
        <Reveal className="portfolio-wrap portfolio-contact-surface">
          <div>
            <p className="portfolio-eyebrow">Contact</p>
            <h2>Have work that needs a clearer way to run?</h2>
            <p>Tell me where the work is getting stuck.</p>
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
