/**
 * KeyFigures — the visual at the top of each Featured / Work card. Rather than
 * invent chart shapes, it presents the project's real headline numbers as clean
 * stat tiles (value + label). Honest, always legible, and it never looks like a
 * fabricated chart. Kept named MiniDashboard so existing imports don't change.
 */
export type DashboardVariant = "bars" | "line" | "grid" | "funnel" | "kanban";

export type DashboardConfig = {
  title: string;
  kpis: { value: string; label: string }[];
  /** Legacy chart fields — accepted for compatibility, no longer rendered. */
  variant?: DashboardVariant;
  bars?: number[];
  donut?: number;
  accent?: "amber" | "blue";
};

export default function MiniDashboard({ title, kpis }: DashboardConfig) {
  const tiles = kpis.slice(0, 3);
  return (
    <div className="w-full bg-signature/[0.03]">
      <div className="flex items-center gap-2 border-b border-ink/10 px-3 py-1.5">
        <span className="h-2.5 w-1 rounded-full bg-amber" aria-hidden />
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-signature">{title}</p>
      </div>
      <div
        className="grid divide-x divide-ink/10"
        style={{ gridTemplateColumns: `repeat(${tiles.length}, minmax(0, 1fr))` }}
      >
        {tiles.map((k, i) => (
          <div key={i} className="flex flex-col items-center justify-center px-2 py-3 text-center">
            <p className={`font-serif text-[clamp(1.05rem,2.4vw,1.5rem)] font-light leading-none ${i === 0 ? "text-amber" : "text-signature"}`}>
              {k.value}
            </p>
            <p className="mt-1.5 text-[0.68rem] leading-snug text-ink/60">{k.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
