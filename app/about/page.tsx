import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { bioCloseText, bioRoles, bioStory } from "@/lib/content";
import { aboutPortrait } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "An operations and analytics professional who builds the automation, tracking, and reporting systems that turn operational chaos into scale.",
};

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
      <section className="container-content py-9 sm:py-12">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
            <div>
              <span className="block h-px w-14 bg-amber" aria-hidden />
              <h2 className="mt-5 font-serif text-h2 font-light text-signature">
                Operations, analytics, and the systems that connect them
              </h2>
            </div>
            <div className="space-y-4 lg:pt-1">
              {bioStory.map((para, i) => (
                <p key={i} className="text-body text-ink/80">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── The three roles + close line, on a navy tint band. */}
      <section className="border-y border-signature/10 bg-signature/[0.05]">
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
      <section className="border-t border-amber/20 bg-amber/10">
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
