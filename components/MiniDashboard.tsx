/**
 * MiniDashboard — a small but real-looking chart used as the preview at the top
 * of each Featured / Work card. Follows chart conventions rather than
 * decoration: a single hue per series (one highlighted mark, never a per-bar
 * rainbow), a baseline, recessive gridlines and axis labels, rounded data-ends.
 * Purely presentational; the numbers are illustrative of each project.
 */
export type DashboardVariant = "bars" | "line" | "grid" | "funnel" | "kanban";

export type DashboardConfig = {
  title: string;
  kpis: { value: string; label: string }[];
  variant?: DashboardVariant;
  /** Bar/line heights, each 0..1. */
  bars?: number[];
  /** Donut / gauge fill, 0..1. */
  donut?: number;
  accent?: "amber" | "blue";
};

const PANEL = "#F2F5FA";
const HEADER = "#E5EBF3";
const INK = "#26303F";
const MUTED = "#7A8496";
const GRID = "#DBE2EC";
const AXIS = "#BAC4D2";
const NAVY = "#1B3A6B";
const SERIES = "#3D6491"; // single-series hue
const AMBER = "#D97706"; // highlight only
const FONT = "Inter, system-ui, sans-serif";

/** X-axis category labels — generic but plausible, so the chart reads as real. */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

export default function MiniDashboard({ title, kpis, variant = "bars", bars = [0.4, 0.6, 0.5, 0.7, 0.85, 0.65], donut = 0.6, accent = "amber" }: DashboardConfig) {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label={`${title} chart`} className="h-full w-full" fontFamily={FONT}>
      <rect width="320" height="180" fill={PANEL} />
      <rect x="0" y="0" width="320" height="26" fill={HEADER} />
      <text x="14" y="17" fill={INK} fontSize="10.5" fontWeight="600">{title}</text>

      {/* one headline number, top-left */}
      {kpis[0] ? (
        <g transform="translate(14, 34)">
          <text x="0" y="14" fill={NAVY} fontSize="17" fontWeight="700">{kpis[0].value}</text>
          <text x="0" y="26" fill={MUTED} fontSize="7.5">{kpis[0].label}</text>
        </g>
      ) : null}

      {variant === "bars" ? <Bars bars={bars} /> : null}
      {variant === "line" ? <Line bars={bars} /> : null}
      {variant === "grid" ? <Heatmap /> : null}
      {variant === "funnel" ? <Funnel bars={bars} /> : null}
      {variant === "kanban" ? <HBars bars={bars} /> : null}
    </svg>
  );
}

/** Recessive horizontal gridlines + a solid baseline. */
function Axes({ x, w, top, base, ticks = 3 }: { x: number; w: number; top: number; base: number; ticks?: number }) {
  const lines = Array.from({ length: ticks }, (_, i) => top + (i * (base - top)) / ticks);
  return (
    <>
      {lines.map((y, i) => <line key={i} x1={x} y1={y} x2={x + w} y2={y} stroke={GRID} strokeWidth="1" />)}
      <line x1={x} y1={base} x2={x + w} y2={base} stroke={AXIS} strokeWidth="1" />
    </>
  );
}

/** Vertical bars — single hue, last bar highlighted. */
function Bars({ bars }: { bars: number[] }) {
  const left = 120, right = 306, top = 44, base = 150, gap = 8;
  const w = right - left;
  const bw = (w - gap * (bars.length - 1)) / bars.length;
  const peak = Math.max(...bars);
  return (
    <>
      <Axes x={left} w={w} top={top} base={base} />
      {bars.map((h, i) => {
        const bh = Math.max(3, h * (base - top));
        const x = left + i * (bw + gap);
        const isPeak = h === peak;
        return (
          <g key={i}>
            <rect x={x} y={base - bh} width={bw} height={bh} rx="3" fill={isPeak ? AMBER : SERIES} />
            <text x={x + bw / 2} y={base + 10} fill={MUTED} fontSize="6.5" textAnchor="middle">{MONTHS[i] ?? i + 1}</text>
          </g>
        );
      })}
    </>
  );
}

/** Horizontal bars (categories) — single hue, longest highlighted. */
function HBars({ bars }: { bars: number[] }) {
  const items = bars.slice(0, 4);
  const left = 120, right = 300, top = 44, rowH = 15, gap = 10;
  const w = right - left;
  const peak = Math.max(...items);
  return (
    <>
      {items.map((v, i) => {
        const bw = Math.max(6, v * w);
        const y = top + i * (rowH + gap);
        return (
          <g key={i}>
            <line x1={left} y1={top - 4} x2={left} y2={top + items.length * (rowH + gap) - gap} stroke={AXIS} strokeWidth="1" />
            <rect x={left} y={y} width={bw} height={rowH} rx="3" fill={v === peak ? AMBER : SERIES} />
          </g>
        );
      })}
    </>
  );
}

/** Single-series line with area, markers, gridlines and month axis. */
function Line({ bars }: { bars: number[] }) {
  const left = 106, right = 306, top = 44, base = 150;
  const w = right - left;
  const pts = bars.map((h, i) => {
    const x = left + (w * i) / (bars.length - 1);
    const y = base - Math.max(0, Math.min(1, h)) * (base - top);
    return [x, y] as const;
  });
  const line = pts.map((p) => `${p[0]},${p[1]}`).join(" ");
  const area = `${left},${base} ${line} ${right},${base}`;
  return (
    <>
      <Axes x={left} w={w} top={top} base={base} />
      <polygon points={area} fill={SERIES} opacity="0.1" />
      <polyline points={line} fill="none" stroke={SERIES} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.6" fill={SERIES} stroke={PANEL} strokeWidth="1.4" />)}
      {pts.map((p, i) => <text key={`t${i}`} x={p[0]} y={base + 10} fill={MUTED} fontSize="6.5" textAnchor="middle">{MONTHS[i] ?? i + 1}</text>)}
    </>
  );
}

/** Data-quality heatmap — a single-hue sequential scale (light → dark), ordered. */
function Heatmap() {
  const cols = 10, rows = 4, x0 = 118, y0 = 42, cw = 17, ch = 20, gap = 3;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // smooth value field so it reads like real data, not noise
      const v = (Math.sin(c * 0.7 + r * 0.9) + Math.cos(c * 0.4 - r * 0.6) + 2) / 4;
      const t = 0.18 + v * 0.72;
      cells.push(
        <rect key={`${r}-${c}`} x={x0 + c * (cw + gap)} y={y0 + r * (ch + gap)} width={cw} height={ch} rx="2"
          fill={NAVY} opacity={t} />,
      );
    }
  }
  return <>{cells}</>;
}

/** Funnel — single hue, sequential shade per stage, with a highlighted final stage. */
function Funnel({ bars }: { bars: number[] }) {
  const stages = bars.slice(0, 4);
  const top = 44, rowH = 18, gap = 6, cx = 214, maxW = 176;
  const shades = ["#26507F", "#345E8E", "#4E77A6", AMBER];
  return (
    <>
      {stages.map((h, i) => {
        const w = Math.max(34, h * maxW);
        const y = top + i * (rowH + gap);
        return <rect key={i} x={cx - w / 2} y={y} width={w} height={rowH} rx="3" fill={shades[i] ?? SERIES} />;
      })}
    </>
  );
}
