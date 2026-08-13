const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy for the Next.js app.
 * 'unsafe-inline' in script-src is required by Next's inline hydration
 * payloads; 'unsafe-eval' is dev-only, for React Refresh.
 */
const appCsp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://i.ytimg.com https://cdn.loom.com",
  "font-src 'self'",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://formsubmit.co",
  "frame-src 'self' https://www.loom.com https://www.youtube.com https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formsubmit.co",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * Looser CSP scoped to the standalone case-study pages under /case-studies,
 * which are self-contained HTML that pulls DM Serif Display + DM Sans from
 * Google Fonts. Everything else stays under the strict appCsp above.
 */
const caseStudyCsp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const sharedHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Everything except the standalone case-study pages gets the strict CSP.
        source: "/((?!case-studies/).*)",
        headers: [...sharedHeaders, { key: "Content-Security-Policy", value: appCsp }],
      },
      {
        source: "/case-studies/:path*",
        headers: [...sharedHeaders, { key: "Content-Security-Policy", value: caseStudyCsp }],
      },
    ];
  },
};

export default nextConfig;
