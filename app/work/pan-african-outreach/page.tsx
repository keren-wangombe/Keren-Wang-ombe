import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Pan-African outreach — case study",
  description:
    "How I built the organisation database, ran trilingual outreach and set up the operating rhythm for a US nonprofit founder growing autism awareness across Africa. Verified 5.0 client review.",
};

const FIVERR = "https://www.fiverr.com/keren_wangombe";

const stats = [
  { value: "EN · FR · PT", label: "Outreach & events run in three languages" },
  { value: "Pan-African", label: "Autism organisations mapped by country" },
  { value: "5.0 ★", label: "Client rating — recommended without hesitation" },
  { value: "End-to-end", label: "Research, outreach & delivery, fully remote" },
];

const deliverables = [
  {
    n: "01",
    title: "An organisation database",
    body: "A structured, searchable record of autism organisations across Africa — country, location and contact details — turning an unknown landscape into one dependable reference.",
  },
  {
    n: "02",
    title: "Personal outreach & a qualified relationship list",
    body: "I reached out to each organisation, introduced the founder's mission, and logged who was interested in partnering and who wasn't — so the founder inherited warm, qualified relationships, not just names on a spreadsheet.",
  },
  {
    n: "03",
    title: "A trilingual Zoom event calendar",
    body: "A week-by-week plan of Zoom sessions in English, French and Portuguese — what ran when, in which language, and who was hosting — ready for the founder to run.",
  },
  {
    n: "04",
    title: "An Asana coordination workspace",
    body: "Every lead and follow-up tracked by owner, so it was always clear what needed chasing and which community leads still had open tasks.",
  },
];

const capabilities = [
  { t: "Turning the unknown into structure", d: "Building a usable database from a landscape no one had mapped, so a founder could finally act." },
  { t: "Outreach & relationship-building", d: "Representing a mission credibly to strangers and converting cold contacts into warm, qualified relationships." },
  { t: "Multilingual coordination", d: "Designing outreach and events across English, French and Portuguese rather than defaulting to one." },
  { t: "Keeping delivery on track", d: "Running the whole engagement through Asana so leads, follow-ups and owners stayed visible." },
];

function SectionTitle({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <p className="kicker text-amber">{kicker}</p>
      <h2 className="mt-2 font-serif text-h2 font-light leading-snug text-signature">{children}</h2>
    </Reveal>
  );
}

export default function PanAfricanCaseStudy() {
  return (
    <>
      {/* ── Hero */}
      <section className="border-b border-ink/5 bg-gradient-to-br from-signature/[0.07] via-background to-amber/[0.08]">
        <div className="container-content py-9 sm:py-11">
          <Reveal>
            <Link href="/work" className="link-amber text-small text-ink/60">← All work</Link>
            <p className="kicker mt-5 text-amber">Case study · Operations &amp; outreach</p>
            <h1 className="mt-3 max-w-[24ch] font-serif text-h1 font-light leading-[1.08] text-signature">
              She wanted to reach autism organisations across Africa — so I built{" "}
              <span className="text-amber">the map and the relationships.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-body text-ink/75">
              A US-based founder was building autism awareness across Africa but had no view of
              which organisations existed, where they were, or how to reach them — and no prior
              experience operating on the continent. I built the ecosystem database, ran the
              outreach in three languages, and set up the operating rhythm to keep it all moving.
            </p>
          </Reveal>

          {/* stats row */}
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal as="div" key={s.label} delay={i * 70} className="bg-paper p-5">
                <p className="font-serif text-[clamp(1.4rem,2.6vw,2rem)] font-light leading-none text-signature">{s.value}</p>
                <p className="mt-2 text-small text-ink/60">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The problem */}
      <section className="py-9 sm:py-11">
        <div className="container-content max-w-3xl">
          <SectionTitle kicker="The problem">A founder starting from zero.</SectionTitle>
          <p className="mt-4 text-body text-signature">
            The founder had a clear mission — grow autism awareness across Africa by working
            directly with organisations already doing the work — but no way to act on it.
          </p>
          <p className="mt-4 text-body text-ink/80">
            There was no list of who those organisations were, no record of where they operated,
            and no contacts to reach them through. On top of that sat a language barrier and the
            founder's own lack of experience working on the continent. A cold email from an unknown
            US nonprofit was unlikely to land. The mission wasn't the problem; the groundwork
            underneath it simply didn't exist yet.
          </p>
        </div>
      </section>

      {/* ── What I decided to do */}
      <section className="border-y border-signature/10 bg-signature/[0.04] py-9 sm:py-11">
        <div className="container-content max-w-3xl">
          <SectionTitle kicker="What I decided to do">Build the map, then be the bridge.</SectionTitle>
          <p className="mt-4 text-body text-ink/80">
            I broke it into three moves. First, create the missing map — a structured database of
            autism organisations across Africa, with where each was based and how to reach them.
            Second, and this was the real judgement call: rather than hand the founder a cold
            contact list, I did the outreach myself, introducing the mission organisation by
            organisation and building the relationship before asking for anything.
          </p>
          <blockquote className="my-6 border-l-[3px] border-amber pl-5">
            <p className="max-w-[30ch] font-serif text-[clamp(1.2rem,2.6vw,1.6rem)] font-light leading-snug text-signature">
              A US founder cold-contacting African organisations wasn't going to work. So I became
              the person who reached out — in their own language.
            </p>
          </blockquote>
          <p className="text-body text-ink/80">
            Third, make it multilingual by design. Because the organisations spanned English-,
            French- and Portuguese-speaking Africa, I planned the engagement across all three
            languages rather than defaulting to English and quietly losing half the continent. And
            to keep it all coordinated, I ran the work through Asana so nothing — and no
            relationship — slipped.
          </p>
        </div>
      </section>

      {/* ── What I delivered */}
      <section className="py-9 sm:py-11">
        <div className="container-content max-w-3xl">
          <SectionTitle kicker="What I delivered">The system the founder walked away with.</SectionTitle>
          <div className="mt-6 border-t border-ink/10">
            {deliverables.map((d, i) => (
              <Reveal as="div" key={d.n} delay={i * 60} className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b border-ink/10 py-5">
                <p className="font-serif text-lg text-amber">{d.n}</p>
                <div>
                  <h3 className="font-semibold text-signature">{d.title}</h3>
                  <p className="mt-1.5 text-small text-ink/75">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Verified client review (navy block) */}
      <section className="pb-9 sm:pb-11">
        <div className="container-content">
          <Reveal
            as="div"
            className="relative overflow-hidden rounded-2xl bg-signature p-8 text-paper sm:p-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 560px 320px at 12% 30%, rgba(217,119,6,0.18) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
            <p className="kicker text-amber-bright">Verified client review</p>
            <p className="mt-3 text-xl tracking-[0.2em] text-amber-bright" aria-label="5 out of 5 stars">★★★★★</p>
            <blockquote className="mt-3 max-w-[32ch] font-serif text-[clamp(1.3rem,3vw,1.8rem)] font-light leading-snug text-paper">
              “It was a pleasure working with Keren. She is detail-oriented and asks follow-up
              questions. Would recommend her without hesitation.”
            </blockquote>
            <p className="mt-5 text-small text-paper/70">
              <strong className="font-semibold text-paper">Verified client</strong> · US-based nonprofit founder · via Fiverr
            </p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 border-t border-paper/15 pt-5">
              {[
                { n: "5.0", l: "Seller communication" },
                { n: "5.0", l: "Quality of delivery" },
                { n: "5.0", l: "Value of delivery" },
              ].map((b) => (
                <div key={b.l}>
                  <p className="font-serif text-2xl leading-none text-amber-bright">{b.n}</p>
                  <p className="mt-1.5 text-[0.72rem] uppercase tracking-wide text-paper/55">{b.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <a
                href={FIVERR}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-bright px-5 py-3 text-small font-semibold text-ink transition-all duration-300 ease-calm hover:brightness-95"
              >
                See the verified review on Fiverr →
              </a>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What it demonstrates */}
      <section className="border-t border-amber/15 bg-amber/[0.06] py-9 sm:py-11">
        <div className="container-content">
          <SectionTitle kicker="What it demonstrates">The operating skills behind the work.</SectionTitle>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal as="div" key={c.t} delay={i * 60} className="rounded-2xl border border-ink/10 bg-paper p-5">
                <p className="font-semibold text-signature">{c.t}</p>
                <p className="mt-1.5 text-small text-ink/70">{c.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={FIVERR} variant="primary" target="_blank" rel="noreferrer">See the verified review on Fiverr →</Button>
            <Button href="/contact" variant="ghost">Get in touch</Button>
          </Reveal>
          <p className="mt-4 text-[0.8rem] text-ink/50">
            Client anonymised at their request. Review is a verified client rating from my Fiverr profile.
          </p>
        </div>
      </section>
    </>
  );
}
