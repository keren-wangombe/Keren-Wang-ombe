"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { brand, nav } from "@/lib/site";

/**
 * Header: the reference-site chrome — a midnight mesh hero carrying the name
 * and positioning line, with the floating white tab bar overlapping its base.
 * Three tabs: KW (hosts About, the landing), Work, Contact.
 */

const tabIcons: Record<string, ReactNode> = {
  "/": (
    // Users — the "who is this" tab.
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "/work": (
    // Settings — the systems tab.
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  "/contact": (
    // Mail — the details tab.
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="print:hidden">
      {/* ── Hero: midnight mesh with faint concentric circles. */}
      <header className="header-mesh relative overflow-hidden px-6 pb-28 pt-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
        />
        <div className="relative z-10 mx-auto max-w-3xl animate-fade-up">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#1A8B8B]">
            {brand.byline}
          </span>
          <h1 className="mb-6 mt-4 font-serif text-5xl font-normal italic tracking-tight text-white md:text-7xl lg:text-8xl">
            {brand.name}
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light italic leading-snug text-white/80 md:text-xl">
            &ldquo;{brand.oneLine}&rdquo;
          </p>
        </div>
      </header>

      {/* ── Floating tab bar, overlapping the hero's base edge. */}
      <nav aria-label="Primary" className="relative z-20 mx-auto -mt-7 w-full max-w-5xl px-4">
        <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
          <div className="flex gap-1">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex min-w-max flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[10px] font-extrabold uppercase tracking-[0.12em] transition-all duration-200 md:text-[11px] ${
                    active
                      ? "bg-signature text-white"
                      : "text-slate-400 hover:-translate-y-px hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  {tabIcons[item.href]}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
