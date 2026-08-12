import type { ReactNode } from "react";

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Cool pages use the signature navy headline; warm pages use ink. */
  tone?: "cool" | "warm";
};

/**
 * Compact inner-page hero — a soft navy→amber gradient band with an amber
 * kicker, a serif headline and a short intro. Matches the home hero's opening
 * so every page starts the same way. Animates up gently on load.
 */
export default function PageHero({ kicker, title, intro, tone = "cool" }: PageHeroProps) {
  return (
    <section className="border-b border-ink/5 bg-gradient-to-br from-signature/[0.07] via-background to-amber/[0.08]">
      <div className="container-content py-9 sm:py-11">
        <p className="kicker animate-fade-in text-amber">{kicker}</p>
        <h1
          className={`mt-3 max-w-3xl animate-hero-rise font-serif text-h1 font-light leading-[1.08] ${
            tone === "warm" ? "text-ink" : "text-signature"
          }`}
        >
          {title}
        </h1>
        {intro ? (
          <div
            className="mt-4 max-w-2xl animate-fade-up text-body text-ink/75"
            style={{ animationDelay: "150ms" }}
          >
            {intro}
          </div>
        ) : null}
      </div>
    </section>
  );
}
