import type { Metadata } from "next";
import LogoMarquee from "@/components/LogoMarquee";
import ProjectAccordion from "@/components/ProjectAccordion";
import { domains } from "@/lib/portfolio";
import { toolkitNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Operations and analytics projects: onboarding systems, delivery operations, workflow automation, and the SQL, Excel, and Power BI analysis behind operational decisions.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14">
      {domains.map((domain, di) => (
        <section key={domain.key} className={di > 0 ? "mt-16 border-t border-hairline pt-16" : ""}>
          {/* ── Domain intro. */}
          <div className="mb-10">
            <span
              className="inline-block rounded-full px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em]"
              style={{
                background: `${domain.color}18`,
                color: domain.color,
                border: `1px solid ${domain.color}30`,
              }}
            >
              {domain.tagline}
            </span>
            <h2 className="mb-4 mt-3 font-serif text-4xl font-normal italic tracking-tight text-signature md:text-6xl">
              {domain.title}
            </h2>
            <p className="about-quote text-sm leading-relaxed text-slate-500">{domain.intro}</p>
          </div>

          {/* ── Headline metrics (Analytics only). */}
          {domain.metrics && (
            <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {domain.metrics.map((m) => (
                <div key={m.label} className="card-hover rounded-2xl border border-slate-100 bg-white p-6 text-center">
                  <p className="font-serif text-4xl text-signature">{m.val}</p>
                  <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.18em]" style={{ color: domain.color }}>
                    {m.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{m.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── Featured projects, expandable cards. */}
          <p className="divider-label mb-8">Featured Projects</p>
          <div className="mb-12 grid grid-cols-1 gap-3">
            {domain.projects.map((proj) => (
              <ProjectAccordion key={proj.title} project={proj} color={domain.color} />
            ))}
          </div>

          {/* ── Core competencies. */}
          <p className="divider-label mb-8">Core Competencies</p>
          <div className="rounded-3xl border border-slate-100 bg-white p-8">
            <div className="space-y-8">
              {domain.skillGroups.map((group) => (
                <div key={group.label}>
                  <p
                    className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.2em]"
                    style={{ color: domain.color, opacity: 0.75 }}
                  >
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-chip">
                        <span className="skill-chip-dot" style={{ background: `${domain.color}60` }} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── The toolkit, note + rolling marquee of official tool logos. */}
      <section className="mt-16 border-t border-hairline pt-16">
        <p className="divider-label mb-8">The Toolkit</p>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-slate-500">{toolkitNote}</p>
        <LogoMarquee />
      </section>
    </div>
  );
}
