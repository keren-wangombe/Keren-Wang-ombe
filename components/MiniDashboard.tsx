/**
 * MiniDashboard — a small, on-brand "dashboard" graphic used as the preview at
 * the top of each Featured work card (in place of a screenshot). It renders a
 * navy panel with a title bar, a row of KPI figures, a donut, and a bar chart,
 * so the cards read like the dashboards in the design mockup while staying in
 * the navy/amber palette. Purely decorative — driven by a small config.
 */
export type DashboardConfig = {
  title: string;
  kpis: { value: string; label: string }[];
  /** Bar heights, each 0..1. */
  bars: number[];
  /** Donut fill, 0..1. */
  donut: number;
  /** Highlight colour for the donut + last bar. */
  accent?: "amber" | "blue";
};

const NAVY = "#1B3A6B";
const NAVY_2 = "#16305a";
const PAPER = "#FAFAF8";
const AMBER = "#D97706";
const BLUE = "#3D6491";

export default function MiniDashboard({ title, kpis, bars, donut, accent = "amber" }: DashboardConfig) {
  const hi = accent === "amber" ? AMBER : "#7FA6D6";
  const r = 15;
  const c = 2 * Math.PI * r;
  const dash = Math.max(0.001, Math.min(1, donut)) * c;

  const barAreaX = 118;
  const barAreaW = 182;
  const gap = 8;
  const bw = (barAreaW - gap * (bars.length - 1)) / bars.length;
  const baseY = 150;
  const maxH = 74;

  return (
    <svg viewBox="0 0 320 176" role="img" aria-label={`${title} dashboard preview`} className="h-full w-full">
      <rect width="320" height="176" fill={NAVY} />
      {/* title bar */}
      <rect x="0" y="0" width="320" height="30" fill={NAVY_2} />
      <text x="14" y="19" fill={PAPER} fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600">
        {title}
      </text>
      <circle cx="290" cy="15" r="2.5" fill={PAPER} opacity="0.35" />
      <circle cx="299" cy="15" r="2.5" fill={PAPER} opacity="0.35" />
      <circle cx="308" cy="15" r="2.5" fill={PAPER} opacity="0.35" />

      {/* KPI row */}
      {kpis.slice(0, 3).map((k, i) => (
        <g key={i} transform={`translate(${14 + i * 66}, 44)`}>
          <text x="0" y="12" fill={hi} fontFamily="Inter, system-ui, sans-serif" fontSize="15" fontWeight="700">
            {k.value}
          </text>
          <text x="0" y="26" fill={PAPER} opacity="0.6" fontFamily="Inter, system-ui, sans-serif" fontSize="7.5">
            {k.label}
          </text>
        </g>
      ))}

      {/* donut */}
      <g transform="translate(52, 128)">
        <circle r={r} fill="none" stroke={PAPER} strokeOpacity="0.15" strokeWidth="8" />
        <circle
          r={r}
          fill="none"
          stroke={hi}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          transform="rotate(-90)"
        />
      </g>

      {/* bar chart */}
      {bars.map((h, i) => {
        const bh = Math.max(4, h * maxH);
        const isLast = i === bars.length - 1;
        return (
          <rect
            key={i}
            x={barAreaX + i * (bw + gap)}
            y={baseY - bh}
            width={bw}
            height={bh}
            rx="2"
            fill={isLast ? hi : BLUE}
            opacity={isLast ? 1 : 0.75}
          />
        );
      })}
      <line x1={barAreaX} y1={baseY + 3} x2={barAreaX + barAreaW} y2={baseY + 3} stroke={PAPER} strokeOpacity="0.2" strokeWidth="1" />
    </svg>
  );
}
