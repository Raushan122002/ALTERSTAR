import Reveal from "./Reveal";

/**
 * Spec panels, one per product line.
 *
 * Deliberately not a <table>. A four-column table has to scroll sideways on a
 * phone, and a sideways-scrolling spec sheet is worse than no spec sheet — the
 * buyer gives up before reading the first column. Stacked panels reflow instead:
 * one column on a phone, two on a tablet, four on a wide screen.
 */
export default function SpecPanels({ panels, columns = "sm:grid-cols-2 xl:grid-cols-4" }) {
  return (
    <div className={`grid gap-5 ${columns}`}>
      {panels.map((p, i) => (
        <Reveal key={p.product} delay={(i % 4) * 60}>
          <div className="panel flex h-full flex-col overflow-hidden">
            <div className="border-b border-rule bg-paper-2 px-5 py-3">
              <h3 className="text-[1.02rem] leading-snug">{p.product}</h3>
            </div>
            <dl className="flex-1 px-5 py-1">
              {p.rows.map((r) => (
                <div
                  key={r.field}
                  className="border-b border-rule-soft py-3 last:border-b-0 last:pb-4"
                >
                  <dt className="font-mono text-[0.66rem] uppercase tracking-[0.09em] text-ink-faint">
                    {r.field}
                  </dt>
                  <dd className="mt-1 text-[0.9rem] leading-relaxed text-ink">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
