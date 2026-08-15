import Link from "next/link";
import { brand, footerTagline, otherPortfolio } from "@/lib/site";

/**
 * Footer: a slim navy bar carrying the monogram + name, the copyright line, and
 * the focus tagline. Contact actions live in the home "Hi, I'm Keren" strip and
 * on the Contact page, so the footer stays quiet. Navy/amber brand palette.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-signature text-paper print:hidden">
      <div className="container-content flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Full name */}
        <Link href="/" className="group" aria-label={`${brand.name}, home`}>
          <span className="font-serif text-small font-semibold tracking-[0.1em] text-paper transition-colors duration-300 ease-calm group-hover:text-amber-bright">
            {brand.name}
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-small text-paper/60">
          © {year} {brand.name}. All rights reserved.
        </p>

        {/* Tagline (+ optional sibling-portfolio link) */}
        <div className="flex flex-col items-center gap-1 sm:items-end">
          <p className="inline-flex items-center gap-2 font-serif text-small italic text-paper/85">
            {footerTagline}
            <span aria-hidden className="text-amber-bright">
              ♥
            </span>
          </p>
          {otherPortfolio ? (
            <a
              href={otherPortfolio.href}
              className="text-[0.8rem] text-paper/55 underline decoration-paper/30 underline-offset-2 transition-colors hover:text-amber-bright"
            >
              {otherPortfolio.label} →
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
