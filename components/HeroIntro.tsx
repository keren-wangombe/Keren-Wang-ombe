"use client";

import { useState } from "react";
import { brand, heroLoomEmbed, heroPortrait, aboutPortrait } from "@/lib/site";

/**
 * The hero's right column: Keren's portrait with a "Watch my intro" control.
 * Clicking swaps the photo for the embedded Loom (autoplaying), so the first
 * thing a visitor meets is a face and a voice, not an illustration.
 */
export default function HeroIntro() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="w-full overflow-hidden rounded-3xl border border-signature/20 bg-ink shadow-2xl shadow-signature/30">
        <div className="flex items-center justify-between bg-signature px-5 py-3">
          <p className="text-small font-medium text-paper">A quick hello from {brand.name.split(" ")[0]}</p>
          <button
            type="button"
            onClick={() => setPlaying(false)}
            className="text-small text-paper/70 transition-colors duration-300 ease-calm hover:text-amber-bright"
          >
            Back to photo
          </button>
        </div>
        <div className="relative aspect-video">
          {/* Loom's plain recommended embed. No autoplay param: browsers block
              sound-on autoplay inside third-party iframes, which can leave the
              player stuck — the viewer presses play in Loom's own player. */}
          <iframe
            src={heroLoomEmbed}
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            title={`${brand.name} — video introduction`}
          />
        </div>
        <div className="flex justify-end bg-signature px-5 py-2">
          <a
            href={heroLoomEmbed.replace("/embed/", "/share/")}
            target="_blank"
            rel="noreferrer"
            className="text-small text-paper/60 transition-colors duration-300 ease-calm hover:text-amber-bright"
          >
            Trouble playing? Open in Loom ↗
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-3xl border border-signature/15 shadow-2xl shadow-signature/25 ring-1 ring-amber/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroPortrait}
          alt={brand.name}
          className="aspect-[4/5] w-full object-cover"
          onError={(e) => {
            // Until the real keren.jpg is dropped into /public/portraits,
            // fall back to the placeholder portrait so the hero never breaks.
            const img = e.target as HTMLImageElement;
            if (!img.src.endsWith(aboutPortrait)) img.src = aboutPortrait;
          }}
        />
      </div>

      {/* Watch-my-intro control, overlapping the photo's lower edge. */}
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full bg-amber-bright py-2.5 pl-3 pr-6 text-small font-medium text-ink shadow-lg shadow-ink/20 transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:brightness-95"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-paper">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5 fill-signature" aria-hidden>
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </span>
        Watch my intro
      </button>
    </div>
  );
}
