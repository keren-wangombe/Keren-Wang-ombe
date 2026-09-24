import Link from "next/link";
import { brand, footerTagline } from "@/lib/site";

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
          © {year} {brand.name}
        </p>

        <p className="font-serif text-small text-paper/85">{footerTagline}</p>
      </div>
    </footer>
  );
}
