import type { FeaturedCase as FeaturedCaseData } from "@/lib/content";

/**
 * A featured case study, told in four visible beats — The situation, What I
 * handled, What I improved, What changed — so the recurring work I owned is
 * explicit before the system behind it. Always expanded (these are the lead
 * cases), text-first, tools kept last. Reuses the site's card language: the
 * amber left rule, serif headings, kicker labels, existing palette only.
 */
export default function FeaturedCase({ item }: { item: FeaturedCaseData }) {
  return (
    <article
      id={item.id}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-ink/10 border-l-4 border-l-amber-bright bg-paper p-6 shadow-sm shadow-ink/5 sm:p-8"
    >
      <p className="kicker text-amber">{item.label}</p>
      <h3 className="mt-3 max-w-3xl font-serif text-h2 font-light leading-snug text-ink">
        {item.title}
      </h3>
      <p className="mt-4 max-w-3xl text-body text-ink/70">{item.lead}</p>

      <div className="mt-8 grid gap-8 border-t border-ink/10 pt-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: the problem, then the recurring work I personally owned. */}
        <div className="space-y-6">
          <Section label="The situation" body={item.situation} />
          <Section label="What I handled" body={item.handled} />
        </div>

        {/* Right: the process improvement, then the verified change. */}
        <div className="space-y-6">
          <Section label="What I improved" body={item.improved} />
          <div>
            <p className="kicker !text-ink/50">What changed</p>
            <p className="mt-2.5 text-body text-ink/80">{item.changed}</p>
            {item.figures?.length ? (
              <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                {item.figures.map((f) => (
                  <li key={f.label} className="flex items-baseline gap-4 py-2.5">
                    <span className="w-16 shrink-0 font-serif text-xl font-light leading-none text-signature">
                      {f.value}
                    </span>
                    <span className="text-small text-ink/70">{f.label}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      {item.tools?.length ? (
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ink/10 pt-6">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/40">
            Tools
          </span>
          <ul className="flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-ink/15 px-3 py-1 text-[0.72rem] font-medium text-ink/70"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

function Section({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="kicker !text-ink/50">{label}</p>
      <p className="mt-2.5 text-body text-ink/80">{body}</p>
    </div>
  );
}
