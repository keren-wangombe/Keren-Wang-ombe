import { brand, heroLoomShare, heroPortrait } from "@/lib/site";

/**
 * The hero's right column: Keren's portrait with a "Watch my intro" button
 * that goes straight to the Loom recording in a new tab — the first thing a
 * visitor meets is a face and a voice.
 */
export default function HeroIntro() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-3xl border border-signature/15 shadow-2xl shadow-signature/25 ring-1 ring-amber/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroPortrait} alt={brand.name} className="aspect-[4/5] w-full object-cover" />
      </div>

      {/* Watch-my-intro button, overlapping the photo's lower edge. */}
      <a
        href={heroLoomShare}
        target="_blank"
        rel="noreferrer"
        className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full bg-amber-bright py-2.5 pl-3 pr-6 text-small font-medium text-ink shadow-lg shadow-ink/20 transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:brightness-95"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-paper">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5 fill-signature" aria-hidden>
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </span>
        Watch my intro
      </a>
    </div>
  );
}
