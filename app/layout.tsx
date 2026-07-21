import type { Metadata } from "next";
import { playfair, inter } from "./fonts";
import { brand } from "@/lib/site";
import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${brand.name}, ${brand.byline}`,
    template: `%s · ${brand.name}`,
  },
  description: brand.oneLine,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${brand.name}, ${brand.byline}`,
    description: brand.oneLine,
    type: "website",
  },
};

// Warm up the TLS handshake for the origins the client talks to right after
// hydration: Supabase (realtime questions/reactions) and YouTube thumbnails.
const supabaseOrigin = (() => {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    return url ? new URL(url).origin : null;
  } catch {
    return null;
  }
})();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {supabaseOrigin ? (
          <link rel="preconnect" href={supabaseOrigin} crossOrigin="anonymous" />
        ) : null}
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-signature focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <div className="border-t border-slate-100 bg-white px-6 py-6 print:hidden">
          <div className="mx-auto max-w-5xl">
            <p className="font-serif text-sm italic text-signature">
              © {new Date().getFullYear()} {brand.name}
            </p>
          </div>
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
