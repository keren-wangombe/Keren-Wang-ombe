"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, nav, resumeFile } from "@/lib/site";

/**
 * Header: the KW monogram + name (with the focus byline underneath) on the
 * left; the nav links and a "Download résumé" button on the right. Ink on
 * Paper; links shift to amber on hover. Collapses to a quiet disclosure on
 * mobile. Navy/amber brand palette.
 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Let Escape close the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/85 backdrop-blur-md print:hidden">
      <div className="container-content flex items-center justify-between gap-6 py-3.5">
        {/* Full name → home */}
        <Link href="/" className="group leading-none" aria-label={`${brand.name}, home`}>
          <span className="font-serif text-lg font-semibold tracking-[0.1em] text-signature transition-colors duration-300 ease-calm group-hover:text-amber sm:text-xl">
            {brand.name}
          </span>
        </Link>

        {/* Desktop nav + résumé button */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-amber text-small font-medium tracking-wide ${
                  active ? "text-signature" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-signature px-4 py-2.5 text-small font-medium tracking-wide text-paper transition-all duration-300 ease-calm hover:bg-blue-lift"
          >
            Download résumé
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors duration-300 ease-calm hover:text-blue-lift lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ease-calm ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-opacity duration-300 ease-calm ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ease-calm ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        aria-label="Primary"
        className={`grid overflow-hidden border-t border-ink/5 transition-[grid-template-rows,opacity] duration-500 ease-calm lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="container-content flex flex-col gap-1 py-4">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? undefined : -1}
                    className={`block rounded-md px-3 py-2.5 text-body tracking-wide transition-colors duration-300 ease-calm hover:bg-ink/[0.03] hover:text-amber ${
                      active ? "text-signature" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={resumeFile}
                target="_blank"
                rel="noreferrer"
                tabIndex={open ? undefined : -1}
                className="mt-1 block rounded-md bg-signature px-3 py-2.5 text-body font-medium tracking-wide text-paper transition-all duration-300 ease-calm hover:bg-blue-lift"
              >
                Download résumé
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
