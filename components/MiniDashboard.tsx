/**
 * MiniDashboard — a small, realistic "dashboard" graphic used as the preview at
 * the top of each Featured work card. Each project picks the `variant` that best
 * fits what it actually was — a support dashboard, a sales trend, a data-quality
 * heatmap, an onboarding funnel, or a delivery board. Charts use a small
 * categorical palette (not a wall of one colour), gridlines and axes so they
 * read like real charts. Purely decorative.
 */
export type DashboardVariant = "bars" | "line" | "grid" | "funnel" | "kanban";

export type DashboardConfig = {
  title: string;
  kpis: { value: string; label: string }[];
  variant?: DashboardVariant;
  /** Bar/line heights, each 0..1. */
  bars?: number[];
  /** Donut / gauge fill, 0..1 (used as the first slice of the donut). */
  donut?: number;
  accent?: "amber" | "blue";
};

const NAVY = "#1B3A6B";
const NAVY_2 = "#16305a";
const PAPER = "#FAFAF8";
const AMBER = "#F59E0B";
const AMBER_2 = "#D97706";
const BLUE = "#5B8DD6";
const BLUE_LT = "#93C5FD";
const TEAL = "#2FB0A0";
const GRID = "rgba(250,250,248,0.13)";

/** Categorical palette for multi-series charts. */
const CAT = [BLUE, AMBER, TEAL, BLUE_LT, "#C4B5FD"];

export default function MiniDashboard({ title, kpis, variant = "bars", bars = [0.5, 0.7, 0.6, 0.85], donut = 0.6, accent = "amber" }: DashboardConfig) {
  const hi = accent === "amber" ? AMBER : BLUE_LT;

  return (
    <svg viewBox="0 0 320 180" role="img" aria-label={`${title} preview`} className="h-full w-full">
      <rect width="320" height="180" fill={NAVY} />
      <rect x="0" y="0" width="320" height="30" fill={NAVY_2} />
      <text x="14" y="19" fill={PAPER} fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600">{title}</text>
      <circle cx="290" cy="15" r="2.5" fill={PAPER} opacity="0.35" />
      <circle cx="299" cy="15" r="2.5" fill={PAPER} opacity="0.35" />
      <circle cx="308" cy="15" r="2.5" fill={PAPER} opacity="0.35" />

      {/* KPI row */}
      {kpis.slice(0, 3).map((k, i) => (
        <g key={i} transform={`translate(${14 + i * 66}, 44)`}>
          <text x="0" y="12" fill={i === 1 ? AMBER : PAPER} fontFamily="Inter, system-ui, sans-serif" fontSize="15" fontWeight="700">{k.value}</text>
          <text x="0" y="26" fill={PAPER} opacity="0.6" fontFamily="Inter, system-ui, sans-serif" fontSize="7.5">{k.label}</text>
        </g>
      ))}

      {variant === "bars" ? <Bars bars={bars} donut={donut} /> : null}
      {variant === "line" ? <LineChart bars={bars} hi={hi} /> : null}
      {variant === "grid" ? <Grid /> : null}
      {variant === "funnel" ? <Funnel bars={bars} /> : null}
      {variant === "kanban" ? <Kanban /> : null}
    </svg>
  );
}

/** Horizontal gridlines + baseline for a chart area. */
function Grids({ x, w, top, base }: { x: number; w: number; top: number; base: number }) {
  const lines = [0, 0.25, 0.5, 0.75, 1];
  return (
    <>
      {lines.map((f, i) => {
        const y = base - f * (base - top);
        return <line key={i} x1={x} y1={y} x2={x + w} y2={y} stroke={GRID} strokeWidth="1" />;
      })}
    </>
  );
}

/** Multi-segment donut (a real breakdown, not one arc). */
function Donut({ cx, cy, r, first }: { cx: number; cy: number; r: number; first: number }) {
  const c = 2 * Math.PI * r;
  const a = Math.max(0.08, Math.min(0.9, first));
  const b = (1 - a) * 0.62;
  const d = 1 - a - b;
  const segs = [
    { frac: a, col: BLUE },
    { frac: b, col: AMBER },
    { frac: d, col: TEAL },
  ];
  let offset = 0;
  return (
    <g transform={`translate(${cx},${cy}) rotate(-90)`}>
      <circle r={r} fill="none" stroke="rgba(250,250,248,0.10)" strokeWidth="9" />
      {segs.map((s, i) => {
        const len = s.frac * c;
        const el = (
          <circle key={i} r={r} fill="none" stroke={s.col} strokeWidth="9" strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset} />
        );
        offset += len;
        return el;
      })}
    </g>
  );
}

function Bars({ bars, donut }: { bars: number[]; donut: number }) {
  const x0 = 120, w = 184, gap = 9, baseY = 152, top = 74;
  const bw = (w - gap * (bars.length - 1)) / bars.length;
  return (
    <>
      <Donut cx={54} cy={122} r={26} first={donut} />
      <Grids x={x0} w={w} top={top} base={baseY} />
      {bars.map((h, i) => {
        const bh = Math.max(4, h * (baseY - top));
        return <rect key={i} x={x0 + i * (bw + gap)} y={baseY - bh} width={bw} height={bh} rx="2" fill={CAT[i % CAT.length]} />;
      })}
    </>
  );
}

function LineChart({ bars, hi }: { bars: number[]; hi: string }) {
  const x0 = 16, w = 288, top = 76, baseY = 156;
  const pts = (arr: number[]) => arr.map((h, i) => {
    const x = x0 + (w * i) / (arr.length - 1);
    const y = baseY - Math.max(0, Math.min(1, h)) * (baseY - top);
    return [x, y] as const;
  });
  const main = pts(bars);
  const compare = pts(bars.map((h, i) => Math.max(0.08, h - 0.18 - (i % 2) * 0.05)));
  const line = main.map((p) => `${p[0]},${p[1]}`).join(" ");
  const area = `${x0},${baseY} ${line} ${x0 + w},${baseY}`;
  const cline = compare.map((p) => `${p[0]},${p[1]}`).join(" ");
  return (
    <>
      <Grids x={x0} w={w} top={top} base={baseY} />
      <polygon points={area} fill={hi} opacity="0.16" />
      <polyline points={cline} fill="none" stroke={AMBER} strokeWidth="2" strokeDasharray="4 3" opacity="0.85" />
      <polyline points={line} fill="none" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {main.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.6" fill={BLUE} stroke={NAVY} strokeWidth="1" />)}
    </>
  );
}

/** Data-quality heatmap — a sequential colour scale, not uniform blocks. */
function Grid() {
  const cols = 10, rows = 4, x0 = 16, y0 = 74, cw = 27.4, ch = 20, gap = 2;
  const scale = [BLUE_LT, BLUE, NAVY_2, TEAL, AMBER];
  const cells = [];
  let seed = 7;
  for (let i = 0; i < cols * rows; i++) {
    // deterministic pseudo-random pick for a heatmap look
    seed = (seed * 9301 + 49297) % 233280;
    const r = seed / 233280;
    const idx = r < 0.08 ? 4 : r < 0.24 ? 3 : r < 0.5 ? 2 : r < 0.78 ? 1 : 0;
    const cx = x0 + (i % cols) * (cw + gap);
    const cy = y0 + Math.floor(i / cols) * (ch + gap);
    cells.push(<rect key={i} x={cx} y={cy} width={cw} height={ch} rx="2" fill={scale[idx]} opacity={idx === 0 ? 0.5 : 0.92} />);
  }
  return <>{cells}</>;
}

function Funnel({ bars }: { bars: number[] }) {
  const top = 76, rowH = 19, gap = 5, cx = 160, maxW = 250;
  const cols = [NAVY_2, BLUE, TEAL, AMBER];
  return (
    <>
      {bars.slice(0, 4).map((h, i) => {
        const w = Math.max(46, h * maxW);
        const y = top + i * (rowH + gap);
        return <rect key={i} x={cx - w / 2} y={y} width={w} height={rowH} rx="3" fill={cols[i % cols.length]} />;
      })}
    </>
  );
}

function Kanban() {
  const cols = [
    { x: 16, head: BLUE, cards: 3 },
    { x: 118, head: AMBER, cards: 2 },
    { x: 220, head: TEAL, cards: 1 },
  ];
  const y0 = 74, cw = 84;
  return (
    <>
      {cols.map((col, ci) => (
        <g key={ci}>
          <rect x={col.x} y={y0} width={cw} height="5" rx="2.5" fill={col.head} />
          {Array.from({ length: col.cards }).map((_, k) => (
            <rect key={k} x={col.x} y={y0 + 13 + k * 24} width={cw} height="18" rx="3" fill={PAPER} opacity="0.16" />
          ))}
        </g>
      ))}
    </>
  );
}
