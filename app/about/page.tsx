import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Doodle from "@/components/Doodle";
import { bioCloseText, bioRoles, bioStory } from "@/lib/content";
import { aboutPortrait } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "An operations and analytics professional who builds the automation, tracking, and reporting systems that turn operational chaos into scale.",
};

/** Key facts/metrics to bold in the bio so the important bits catch the eye. */
const HIGHLIGHTS = [
  "thousands of learners across twelve countries",
  "Google Apps Script, SQL, Excel, Power BI",
  "data quality is an operational discipline",
  "86% completion rate",
  "81% learner satisfaction",
  "98% data accuracy",
  "1,046 learners",
  "more than 15 hours",
  "reliable system",
  "50%",
];

function highlight(text: string) {
  const escaped = HIGHLIGHTS.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "g");
  return text.split(re).map((part, i) =>
    HIGHLIGHTS.includes(part) ? (
      <strong key={i} className="font-semibold text-signature">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── Dark hero with a quiet animated glow behind the copy. */}
      <PageBanner
        animated
        kicker="About"
        title="I work at the seam of operations and analytics."
        intro={
          <p>
            Operations and analytics ask the same question: how do we make this
            run better? I build the automation, tracking, and reporting systems
            behind programmes reaching thousands of participants, with a GIS and
            open-mapping background underneath it.
          </p>
        }
        figure={
          <div className="relative mx-auto w-full max-w-[15rem] overflow-hidden rounded-3xl border border-amber/50 shadow-2xl shadow-ink/60 ring-1 ring-paper/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={aboutPortrait}
              alt="Keren Wang'ombe"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        }
      />

      {/* ── The story, two columns so it fills the width (heading | narrative). */}
      <section className="relative isolate overflow-hidden py-9 sm:py-12">
        <Doodle name="wave" className="absolute -right-6 top-6 hidden h-40 w-40 text-amber/[0.12] lg:block" />
        <div className="container-content">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
              <div>
                <span className="block h-px w-14 bg-amber" aria-hidden />
                <h2 className="mt-5 font-serif text-h2 font-light text-signature">
                  Operations, analytics, and the systems that connect them
                </h2>
                <Doodle name="nodes" className="mt-8 hidden h-44 w-44 text-signature/[0.12] lg:block" />
              </div>
              <div className="space-y-4 lg:pt-1">
                {bioStory.map((para, i) => (
                  <p key={i} className="text-body text-ink">
                    {highlight(para)}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The three roles + close line, on a navy tint band. */}
      <section className="relative isolate overflow-hidden border-y border-signature/10 bg-signature/[0.05]">
        <Doodle name="loop" className="absolute left-6 top-1/2 hidden h-32 w-32 -translate-y-1/2 text-signature/[0.10] lg:block" />
        <Doodle name="flow" className="absolute right-6 top-1/2 hidden h-32 w-32 -translate-y-1/2 text-signature/[0.10] lg:block" />
        <div className="container-content py-8 sm:py-10 text-center">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-serif text-h1 font-light leading-none text-signature">
              {bioRoles.map((role, i) => (
                <span key={role} className="inline-flex items-center gap-x-5">
                  {i > 0 ? (
                    <span className="text-amber" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  {role}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-body text-ink">{bioCloseText}</p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA, on a warm amber wash. */}
      <section className="relative isolate overflow-hidden border-t border-amber/20 bg-amber/10">
        <Doodle name="sparks" className="absolute left-8 top-8 hidden h-28 w-28 text-amber/[0.18] lg:block" />
        <Doodle name="orbit" className="absolute right-8 bottom-6 hidden h-28 w-28 text-amber/[0.15] lg:block" />
        <div className="container-content py-9 sm:py-12">
          <Reveal className="text-center">
            <h2 className="mx-auto max-w-2xl font-serif text-h1 font-light text-ink">
              If any of this resonates, let&rsquo;s connect.
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/work" variant="accent">
                See my work
              </Button>
              <Button href="/contact" variant="ghost">
                Get in touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
