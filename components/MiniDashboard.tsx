/**
 * MiniDashboard — a small, on-brand graphic used as the preview at the top of
 * each Featured work card. Each project picks the `variant` that best fits what
 * it actually was — a support dashboard, a sales trend, a data-quality grid, an
 * onboarding funnel, or a delivery board — so the thumbnail reflects the work,
 * not a generic chart. Navy/amber palette; purely decorative.
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

const NAVY = "#1B3A6B";
const NAVY_2 = "#16305a";
const PAPER = "#FAFAF8";
const AMBER = "#D97706";
const BLUE = "#3D6491";
const BLUE_LT = "#7FA6D6";

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
          <text x="0" y="12" fill={hi} fontFamily="Inter, system-ui, sans-serif" fontSize="15" fontWeight="700">{k.value}</text>
          <text x="0" y="26" fill={PAPER} opacity="0.6" fontFamily="Inter, system-ui, sans-serif" fontSize="7.5">{k.label}</text>
        </g>
      ))}

      {variant === "bars" ? <Bars bars={bars} donut={donut} hi={hi} /> : null}
      {variant === "line" ? <LineChart bars={bars} hi={hi} /> : null}
      {variant === "grid" ? <Grid fill={donut} hi={hi} /> : null}
      {variant === "funnel" ? <Funnel bars={bars} hi={hi} /> : null}
      {variant === "kanban" ? <Kanban hi={hi} /> : null}
    </svg>
  );
}

function Bars({ bars, donut, hi }: { bars: number[]; donut: number; hi: string }) {
  const r = 15;
  const c = 2 * Math.PI * r;
  const dash = Math.max(0.001, Math.min(1, donut)) * c;
  const x0 = 118, w = 182, gap = 8, baseY = 150, maxH = 74;
  const bw = (w - gap * (bars.length - 1)) / bars.length;
  return (
    <>
      <g transform="translate(52, 128)">
        <circle r={r} fill="none" stroke={PAPER} strokeOpacity="0.15" strokeWidth="8" />
        <circle r={r} fill="none" stroke={hi} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${dash} ${c - dash}`} transform="rotate(-90)" />
      </g>
      {bars.map((h, i) => {
        const bh = Math.max(4, h * maxH);
        const last = i === bars.length - 1;
        return <rect key={i} x={x0 + i * (bw + gap)} y={baseY - bh} width={bw} height={bh} rx="2" fill={last ? hi : BLUE} opacity={last ? 1 : 0.75} />;
      })}
      <line x1={x0} y1={baseY + 3} x2={x0 + w} y2={baseY + 3} stroke={PAPER} strokeOpacity="0.2" />
    </>
  );
}

function LineChart({ bars, hi }: { bars: number[]; hi: string }) {
  const x0 = 16, w = 288, top = 78, baseY = 156;
  const pts = bars.map((h, i) => {
    const x = x0 + (w * i) / (bars.length - 1);
    const y = baseY - Math.max(0, Math.min(1, h)) * (baseY - top);
    return [x, y] as const;
  });
  const line = pts.map((p) => `${p[0]},${p[1]}`).join(" ");
  const area = `${x0},${baseY} ${line} ${x0 + w},${baseY}`;
  return (
    <>
      {[0, 1, 2].map((g) => <line key={g} x1={x0} y1={top + g * ((baseY - top) / 2)} x2={x0 + w} y2={top + g * ((baseY - top) / 2)} stroke={PAPER} strokeOpacity="0.1" />)}
      <polygon points={area} fill={hi} opacity="0.18" />
      <polyline points={line} fill="none" stroke={hi} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill={hi} />)}
    </>
  );
}

function Grid({ fill, hi }: { fill: number; hi: string }) {
  const cols = 9, rows = 4, x0 = 16, y0 = 76, cw = 30, ch = 20, gap = 2;
  const total = cols * rows;
  const filled = Math.round(Math.max(0, Math.min(1, fill)) * total);
  const cells = [];
  for (let i = 0; i < total; i++) {
    const cx = x0 + (i % cols) * (cw + gap);
    const cy = y0 + Math.floor(i / cols) * (ch + gap);
    const on = i < filled;
    cells.push(<rect key={i} x={cx} y={cy} width={cw} height={ch} rx="2" fill={on ? BLUE : PAPER} opacity={on ? 0.8 : 0.12} />);
  }
  // a couple of "flagged / verified" accent cells
  [3, 12, 22].forEach((i, k) => {
    const cx = x0 + (i % cols) * (cw + gap);
    const cy = y0 + Math.floor(i / cols) * (ch + gap);
    cells.push(<rect key={`a${k}`} x={cx} y={cy} width={cw} height={ch} rx="2" fill={hi} />);
  });
  return <>{cells}</>;
}

function Funnel({ bars, hi }: { bars: number[]; hi: string }) {
  const top = 74, rowH = 20, gap = 4, cx = 160, maxW = 250;
  return (
    <>
      {bars.slice(0, 4).map((h, i) => {
        const w = Math.max(40, h * maxW);
        const y = top + i * (rowH + gap);
        const last = i === bars.slice(0, 4).length - 1;
        return <rect key={i} x={cx - w / 2} y={y} width={w} height={rowH} rx="3" fill={last ? hi : BLUE} opacity={last ? 1 : 0.55 + i * 0.12} />;
      })}
    </>
  );
}

function Kanban({ hi }: { hi: string }) {
  const cols = [
    { x: 16, cards: 3 },
    { x: 118, cards: 2 },
    { x: 220, cards: 1 },
  ];
  const y0 = 74, cw = 84;
  return (
    <>
      {cols.map((col, ci) => (
        <g key={ci}>
          <rect x={col.x} y={y0} width={cw} height="4" rx="2" fill={ci === 2 ? hi : BLUE_LT} opacity="0.9" />
          {Array.from({ length: col.cards }).map((_, k) => (
            <rect key={k} x={col.x} y={y0 + 12 + k * 24} width={cw} height="18" rx="3" fill={PAPER} opacity="0.14" />
          ))}
        </g>
      ))}
    </>
  );
}
