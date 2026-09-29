import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contactEmail, resumeFile, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "The online resume of Keren Wang'ombe, Programme Operations Specialist.",
};

const proof = [
  ["3+ years", "supporting remote-first and distributed teams"],
  ["50%", "less manual operational work"],
  ["98%", "operational reporting accuracy"],
  ["80%+", "learner satisfaction supported by improved workflows"],
] as const;

const skills = [
  "Operations Coordination", "Workflow Optimization", "Process Improvement", "Cross-functional Collaboration",
  "Operational Systems", "Workflow Automation", "Operational Reporting", "SOP Development", "Process Documentation",
  "Stakeholder Communication", "Escalation Management", "Remote-first Operations", "Process Standardization",
  "Data Tracking & Reporting", "Team Coordination", "Digital Content Management", "Learning Resource Coordination",
  "Virtual Learning Environment Support", "Microsoft 365 Administration", "Quality Assurance", "Administrative Support",
  "Onboarding Operations", "Timeline & Workflow Management", "Documentation & Reporting", "Accessibility Awareness",
  "AI-Assisted Operations",
] as const;

const tools = [
  "Microsoft 365", "Google Workspace", "Google Drive", "Notion", "Slack", "Asana", "ClickUp", "Airtable",
  "Jira", "Canva", "Zapier", "Make.com", "ChatGPT", "Claude", "Zoom", "Loom", "Power BI", "SQL", "Python",
] as const;

const alxBullets = [
  "Maintained 98% accuracy across operational records, content trackers and programme documentation across 12 countries by standardising workflows and quality-checking processes.",
  "Coordinated digital content and communications calendars across multiple concurrent cohort launches, managing production schedules, reviewing materials before publication and ensuring timely delivery to learners.",
  "Reviewed programme materials, workflows and supporting resources before launch to identify gaps, inconsistencies and quality issues, ensuring readiness before rollout.",
  "Created and maintained 10+ SOPs, escalation guides and operational reference documents that improved onboarding consistency and reduced knowledge gaps across distributed teams.",
  "Supported online programme delivery for cohorts of 3,000+ learners by coordinating logistics, managing learner communications, tracking progress and escalating issues proactively.",
  "Managed cross-functional coordination across Product, Data, Engineering and Support teams to ensure digital resources and learning content were accurate and available for each programme cycle.",
  "Reduced manual operational work by 50%, saving 15+ hours weekly by streamlining coordination, tracking and workflow processes through no-code automation and process optimisation.",
  "Designed onboarding materials and digital guides that supported smooth programme entry and contributed to 80%+ learner satisfaction scores.",
  "Used ChatGPT and Claude to speed up documentation, communication drafting and operational research tasks.",
] as const;

const freelanceBullets = [
  "Built and structured a client’s project management operations in Asana for a pan-African advocacy programme covering 54 countries across Francophone, Anglophone and Lusophone regions.",
  "Researched, validated and organised a database of 93 nonprofit organisations across 35 African countries, cross-referencing multiple source lists before inclusion.",
  "Designed and scheduled a 26-session trilingual webinar calendar spanning a six-month programme cycle.",
  "Sent outreach communications to support partner engagement and the launch of a new advocacy network.",
] as const;

const communityRoles = [
  {
    title: "Community Secretary",
    organisation: "OpenStreetMap Kenya",
    context: "Humanitarian open-mapping community partnered with government agencies and NGOs",
    date: "2020 - Present",
    bullets: [
      "Maintained community documentation, meeting records and reporting materials that improved knowledge sharing and visibility across partner and stakeholder initiatives.",
      "Created onboarding resources and reference guides that helped new contributors navigate community processes and become active participants more quickly.",
      "Coordinated communications and administrative activities across community members, supporting the smooth execution of ongoing mapping and outreach initiatives.",
    ],
  },
  {
    title: "Project Coordinator",
    organisation: "Tanzania Development Trust",
    context: "Community education and health NGO operating across East Africa",
    date: "2023 - 2024",
    bullets: [
      "Coordinated project logistics, stakeholder communications and activity tracking across distributed volunteer teams supporting education and health initiatives.",
      "Maintained project documentation and progress reporting that improved visibility into deliverables, timelines and ongoing activities.",
      "Supported onboarding and coordination of volunteers by providing guidance, resources and operational support throughout project delivery.",
    ],
  },
  {
    title: "Slack Community Manager",
    organisation: "African Women in GIS",
    context: "Pan-African professional community for women in geospatial and mapping careers",
    date: "2020 - 2022",
    bullets: [
      "Supported onboarding and engagement for members across a distributed professional community by maintaining communication channels, community resources and support documentation.",
      "Responded to member questions and directed enquiries to appropriate resources, helping create a positive and supportive community experience.",
      "Maintained community guidelines, resource libraries and operational processes that improved consistency and knowledge sharing across the network.",
    ],
  },
] as const;

export default function ResumePage() {
  return (
    <div className="portfolio-resume-page">
      <section className="portfolio-resume-hero">
        <Reveal className="portfolio-wrap portfolio-resume-hero-grid">
          <div>
            <p className="portfolio-eyebrow">Resume</p>
            <h1>Keren Wang&apos;ombe</h1>
            <p className="portfolio-resume-role">Programme Operations Specialist</p>
            <p className="portfolio-resume-intro">
              Operations Specialist with 3+ years of experience supporting remote-first and distributed teams, with a focus on workflow automation, operational systems and cross-functional coordination. Experienced in improving operational processes, building scalable workflows and improving execution consistency across fast-moving operations. Proficient in Zapier, Notion and Jira. Key achievements include reducing manual operational work by 50% (saving 15+ hours weekly), maintaining 98% operational reporting accuracy across multi-country operations and improving workflows that contributed to 80% CSAT across distributed teams.
            </p>
            <div className="portfolio-resume-actions">
              <a className="portfolio-resume-download" href={resumeFile} download="Keren-Wangombe-Resume.pdf">Download PDF</a>
            </div>
          </div>
          <div className="portfolio-resume-meta" aria-label="Contact details">
            <span>Nairobi, Kenya · EAT / UTC+3</span>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href="tel:+254796275459">+254 796 275 459</a>
            <Link href="/">Portfolio</Link>
            <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </Reveal>
      </section>

      <section className="portfolio-resume-proof">
        <Reveal className="portfolio-wrap portfolio-resume-proof-grid">
          {proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </Reveal>
      </section>

      <section className="portfolio-resume-content">
        <div className="portfolio-wrap portfolio-resume-layout">
          <div className="portfolio-resume-main">
            <Reveal as="section" className="portfolio-resume-section" aria-labelledby="experience-heading">
              <p className="portfolio-eyebrow">Professional experience</p>
              <h2 id="experience-heading">Programme and operations work</h2>

              <article className="portfolio-resume-job portfolio-resume-job-first">
                <div className="portfolio-resume-job-head">
                  <div>
                    <h3>Program Operations Associate</h3>
                    <p>ALX Africa · Remote</p>
                    <p>Remote-first workforce-development platform supporting distributed operations across 60+ countries</p>
                  </div>
                  <span>September 2023 - Present</span>
                </div>
                <p className="portfolio-resume-progression">Started as Program Delivery Intern · Promoted to Analyst, June 2024 · Promoted to Associate, March 2026</p>
                <ul>{alxBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>

              <article className="portfolio-resume-job">
                <div className="portfolio-resume-job-head">
                  <div><h3>Freelance PMO &amp; Operations Consultant</h3><p>Independent client engagement via Fiverr · Remote</p></div>
                  <span>June 2026 - Present</span>
                </div>
                <ul>{freelanceBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            </Reveal>

            <Reveal as="section" className="portfolio-resume-section" aria-labelledby="community-heading">
              <p className="portfolio-eyebrow">Volunteering &amp; community leadership</p>
              <h2 id="community-heading">Coordination, documentation and onboarding</h2>
              <div className="portfolio-resume-community-list">
                {communityRoles.map((role) => (
                  <article className="portfolio-resume-job" key={role.title}>
                    <div className="portfolio-resume-job-head">
                      <div><h3>{role.title}</h3><p>{role.organisation}</p><p>{role.context}</p></div>
                      <span>{role.date}</span>
                    </div>
                    <ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="portfolio-resume-side" aria-label="Skills, software and education">
            <Reveal as="section" className="portfolio-resume-side-card">
              <p className="portfolio-eyebrow">Skills</p>
              <div className="portfolio-resume-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </Reveal>
            <Reveal as="section" className="portfolio-resume-side-card">
              <p className="portfolio-eyebrow">Software &amp; apps</p>
              <div className="portfolio-resume-tags portfolio-resume-tags-light">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </Reveal>
            <Reveal as="section" className="portfolio-resume-side-card">
              <p className="portfolio-eyebrow">Education &amp; certifications</p>
              <div className="portfolio-resume-education">
                <div><strong>Bachelor of Environmental Planning &amp; Management</strong><span>Kenyatta University, Nairobi · 2019</span></div>
                <div><strong>Product Management Masterclass</strong><span>Young Techiez · 2026</span></div>
                <div><strong>Data Analysis Nanodegree</strong><span>Udacity · 2023</span></div>
                <div><strong>Data Analysis Certification</strong><span>ALX Africa · 2024</span></div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}
