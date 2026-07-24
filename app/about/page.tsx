import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { bioCloseText, bioPersonal, bioRoles, bioStory } from "@/lib/content";
import { aboutPortrait, brand, pageBanners } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "A programme operations professional working at the seam of operations and analytics, building the automation, tracking, and reporting systems that turn operational chaos into scale.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        image={pageBanners.about}
        kicker="About"
        title="I work at the seam of operations and analytics."
        intro={
          <p>
            Operations and analytics ask the same question: how do we make this
            run better? I've spent three years building the automation, tracking,
            and reporting systems behind programmes reaching thousands of
            participants, with a hands-on analytics practice and a GIS and
            open-mapping background underneath it.
          </p>
        }
        figure={
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-amber/50 shadow-2xl shadow-ink/60 ring-1 ring-paper/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={aboutPortrait}
              alt="Keren Wang'ombe"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        }
      />

      {/* ── The bridge, the brand line in full, given room to breathe. */}
      <section className="container-content pt-12 pb-12 sm:pt-16 sm:pb-16">
        <Reveal>
          <span className="block h-px w-16 bg-amber" aria-hidden />
          <p className="mt-8 max-w-3xl font-serif text-h1 font-light leading-snug text-ink">
            {brand.oneLine}
          </p>
        </Reveal>
      </section>

      {/* ── The story, the bio narrative, set in a box. */}
      <section className="container-content py-12 sm:py-16">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-ink/10 bg-paper p-8 sm:p-12">
            <h2 className="font-serif text-h2 font-light text-signature">
              Programme operations, analytics, and the systems that connect them
            </h2>
            <div className="mt-6 space-y-6">
              {bioStory.map((para, i) => (
                <p key={i} className="text-body text-ink">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Off the cloud, a warm, human aside. */}
      <section className="container-content py-12 sm:py-16">
        <Reveal>
          <div className="rounded-3xl border border-amber/40 bg-paper p-8 sm:p-12">
            <p className="kicker text-amber">Off the clock</p>
            <p className="mt-5 max-w-2xl font-serif text-h2 font-light leading-snug text-ink">
              {bioPersonal}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Closing, the three roles set apart, then the statement. */}
      <section className="container-content py-16 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
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
            <p className="mx-auto mt-8 max-w-2xl text-body text-ink">{bioCloseText}</p>
          </div>
        </Reveal>
      </section>

      {/* ── CTA. */}
      <section className="container-content py-16 sm:py-24">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-h1 font-light text-ink">
            If any of this resonates, let&rsquo;s connect.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/work" variant="accent">
              See my work
            </Button>
            <Button href="/contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
