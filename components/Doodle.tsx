import type { CSSProperties } from "react";

type DoodleName = "nodes" | "bars" | "wave" | "loop" | "orbit" | "sparks" | "flow";

/**
 * Decorative line-art doodles for empty background space. Drawn in
 * `currentColor` so the caller tints and fades them via text-color utilities
 * (e.g. `text-signature/10`). Always aria-hidden and non-interactive — pure
 * ornament that fills the white space with a quiet operations/analytics motif.
 */
export default function Doodle({
  name,
  className = "",
  style,
}: {
  name: DoodleName;
  className?: string;
  style?: CSSProperties;
}) {
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  // Gentle, slightly-varied drift so the motifs feel alive without distracting.
  const dur = { nodes: 8, bars: 7, wave: 6, loop: 9, orbit: 12, sparks: 5, flow: 7 }[name];
  const drift = (
    <animateTransform
      attributeName="transform"
      type="translate"
      values="0 0; 0 -6; 0 0"
      dur={`${dur}s`}
      repeatCount="indefinite"
      additive="sum"
    />
  );

  return (
    <svg viewBox="0 0 120 120" className={`pointer-events-none ${className}`} style={style} aria-hidden>
      {name === "nodes" && (
        <g {...common}>
          {drift}
          <circle cx="20" cy="30" r="8" />
          <circle cx="70" cy="18" r="8" />
          <circle cx="98" cy="58" r="8" />
          <circle cx="52" cy="70" r="8" />
          <circle cx="24" cy="96" r="8" />
          <path d="M27 33 66 22M76 24 93 51M92 63 58 68M46 74 30 90M28 90 62 72" />
          <circle cx="70" cy="18" r="2.5" fill="currentColor" stroke="none">
            <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="52" cy="70" r="2.5" fill="currentColor" stroke="none">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
      )}
      {name === "bars" && (
        <g {...common}>
          {drift}
          <path d="M14 104h96" />
          <rect x="24" y="66" width="16" height="38" rx="2">
            <animate attributeName="height" values="38;30;38" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="52" y="44" width="16" height="60" rx="2">
            <animate attributeName="height" values="60;70;60" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="80" y="24" width="16" height="80" rx="2">
            <animate attributeName="height" values="80;66;80" dur="4s" repeatCount="indefinite" />
          </rect>
          <path d="M20 40l24-14 26 8 24-20" strokeDasharray="3 6" />
        </g>
      )}
      {name === "wave" && (
        <g {...common}>
          {drift}
          <path d="M6 60q15-30 30 0t30 0 30 0 18 0">
            <animate attributeName="d" values="M6 60q15-30 30 0t30 0 30 0 18 0; M6 60q15 30 30 0t30 0 30 0 18 0; M6 60q15-30 30 0t30 0 30 0 18 0" dur="5s" repeatCount="indefinite" />
          </path>
          <path d="M6 84q15-24 30 0t30 0 30 0 18 0" opacity="0.7" />
        </g>
      )}
      {name === "loop" && (
        <g {...common}>
          {drift}
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="14s" repeatCount="indefinite" />
            <path d="M30 60a30 30 0 1 1 8 20" />
            <path d="M30 60l-8-10M30 60l12-4" />
          </g>
          <circle cx="60" cy="60" r="4" />
        </g>
      )}
      {name === "orbit" && (
        <g {...common}>
          {drift}
          <circle cx="60" cy="60" r="14" />
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="18s" repeatCount="indefinite" />
            <circle cx="60" cy="60" r="30" strokeDasharray="2 8" />
            <circle cx="106" cy="60" r="4" fill="currentColor" stroke="none" />
          </g>
          <g>
            <animateTransform attributeName="transform" type="rotate" from="360 60 60" to="0 60 60" dur="24s" repeatCount="indefinite" />
            <circle cx="60" cy="60" r="46" strokeDasharray="2 10" opacity="0.7" />
            <circle cx="30" cy="60" r="3" fill="currentColor" stroke="none" />
          </g>
        </g>
      )}
      {name === "sparks" && (
        <g {...common}>
          {drift}
          <path d="M24 24v16M16 32h16">
            <animate attributeName="opacity" values="1;0.25;1" dur="2.2s" repeatCount="indefinite" />
          </path>
          <path d="M92 30v12M86 36h12" opacity="0.8">
            <animate attributeName="opacity" values="0.25;0.9;0.25" dur="2.8s" repeatCount="indefinite" />
          </path>
          <path d="M60 84v14M53 91h14" opacity="0.7">
            <animate attributeName="opacity" values="0.9;0.2;0.9" dur="3.2s" repeatCount="indefinite" />
          </path>
          <circle cx="40" cy="70" r="3" fill="currentColor" stroke="none" />
          <circle cx="86" cy="80" r="3" fill="currentColor" stroke="none" />
          <circle cx="74" cy="52" r="3" fill="currentColor" stroke="none" />
        </g>
      )}
      {name === "flow" && (
        <g {...common}>
          {drift}
          <rect x="10" y="46" width="30" height="22" rx="4" />
          <path d="M40 57h20" strokeDasharray="3 5">
            <animate attributeName="stroke-dashoffset" values="0;-16" dur="1s" repeatCount="indefinite" />
          </path>
          <path d="M76 57l-6-4v8z" fill="currentColor" stroke="none" />
          <rect x="80" y="46" width="30" height="22" rx="4" />
          <path d="M25 68v22h60V68" strokeDasharray="3 5">
            <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.4s" repeatCount="indefinite" />
          </path>
        </g>
      )}
    </svg>
  );
}
