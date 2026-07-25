import type { ReactNode } from "react";

type PageBannerProps = {
  /** Optional background banner image. Omit for a clean dark band, no artwork. */
  image?: string;
  imageAlt?: string;
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Key info / CTAs surfaced above the fold, under the intro. */
  children?: ReactNode;
  /** Optional foreground figure (e.g. the About portrait) shown beside the copy. */
  figure?: ReactNode;
  /** Slow-drifting glow shapes behind the copy (dark banners only). */
  animated?: boolean;
};

/**
 * Full-bleed page banner, the landing-style opening every section now uses.
 * A deep Ink band carries the (placeholder) banner image behind the headline,
 * sized so the key information lands above the fold without scrolling. An amber
 * hairline closes the band; a gradient keeps Paper-toned copy legible over any
 * image.
 */
export default function PageBanner({
  image,
  imageAlt = "",
  kicker,
  title,
  intro,
  children,
  figure,
  animated = false,
}: PageBannerProps) {
  return (
    <section className="relative flex min-h-[17rem] w-full items-center overflow-hidden bg-ink lg:min-h-[19rem]">
      {image ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-40 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/80 to-ink/55" />
        </>
      ) : null}

      {/* Slow-drifting glow shapes — a quiet living background on dark banners. */}
      {animated ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob absolute -left-24 top-4 h-72 w-72 rounded-full bg-amber/25 blur-3xl" />
          <div
            className="blob absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-blue-lift/25 blur-3xl"
            style={{ animationDelay: "-6s" }}
          />
          <div
            className="blob absolute bottom-[-4rem] left-1/3 h-64 w-64 rounded-full bg-signature/50 blur-3xl"
            style={{ animationDelay: "-12s" }}
          />
        </div>
      ) : null}
      <span className="absolute inset-x-0 bottom-0 h-px bg-amber/50" aria-hidden />

      <div className="container-content relative z-10 py-10 sm:py-14">
        {figure ? (
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Copy kicker={kicker} title={title} intro={intro}>
                {children}
              </Copy>
            </div>
            <div className="order-first lg:order-none">{figure}</div>
          </div>
        ) : (
          <Copy kicker={kicker} title={title} intro={intro}>
            {children}
          </Copy>
        )}
      </div>
    </section>
  );
}

function Copy({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <>
      {kicker ? (
        <p className="kicker text-amber animate-fade-up">{kicker}</p>
      ) : null}
      <h1 className="mt-4 max-w-3xl font-serif text-h1 font-light text-paper animate-hero-rise">
        {title}
      </h1>
      <span
        className="mt-6 block h-px w-16 bg-amber animate-fade-up"
        style={{ animationDelay: "160ms" }}
        aria-hidden
      />
      {intro ? (
        <div
          className="mt-8 max-w-2xl text-body text-paper/75 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          {intro}
        </div>
      ) : null}
      {children ? (
        <div className="mt-8 sm:mt-10 animate-fade-up" style={{ animationDelay: "320ms" }}>
          {children}
        </div>
      ) : null}
    </>
  );
}
