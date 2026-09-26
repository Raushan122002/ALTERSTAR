import Reveal from "./Reveal";
import { ORDER_STEPS } from "../data/site";

export default function StepsPath() {
  return (
    <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
      {ORDER_STEPS.map((s, i) => (
        <Reveal key={s.n} delay={i * 60}>
          <div className="relative pl-11">
            {i < ORDER_STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[15px] top-8 h-[calc(100%+0.5rem)] w-px bg-rule sm:hidden"
              />
            )}
            <span className="absolute left-0 top-0 w-8 h-8 grid place-items-center rounded-full bg-brand-50 border border-brand-200 font-mono text-[0.72rem] font-medium text-brand-700">
              {s.n}
            </span>
            <h3 className="text-[1.05rem] leading-snug">{s.title}</h3>
            <p className="mt-1.5 text-[0.93rem] leading-relaxed text-ink-soft">
              {s.desc}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
