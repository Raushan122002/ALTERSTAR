import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Photo from "./Photo";
import Icon from "./Icon";
import { PHOTOS } from "../data/photos";
import { VEHICLE_CLASSES } from "../data/site";

/**
 * Vehicle classes by wheel count, the way the trade actually specifies them.
 * Each card carries a representative photograph; the class shown in the photo is
 * indicative, so swap in real shots of the vehicles you supply.
 */
export default function VehicleGrid({ columns = "sm:grid-cols-2 lg:grid-cols-4" }) {
  return (
    <div>
      <div className={`grid gap-5 ${columns}`}>
        {VEHICLE_CLASSES.map((v, i) => (
          <Reveal key={v.id} delay={(i % 4) * 60}>
            <article className="panel-lift flex h-full flex-col overflow-hidden">
              <div className="relative">
                <Photo
                  photo={PHOTOS[v.photo]}
                  ratio="landscape"
                  zoom
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 100vw"
                  className="[&>div]:rounded-none [&>div]:border-0 [&>div]:shadow-none"
                />
                <span className="absolute left-3 top-3 rounded-[5px] bg-steel-900/85 px-2.5 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.1em] text-white backdrop-blur-sm">
                  {v.label}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[1.05rem] leading-snug">{v.duty}</h3>
                <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-soft">
                  {v.typical}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-rule-soft pt-3.5">
                  <span className="tag tag-brand">{v.voltage}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Enquire
                    <Icon name="arrow" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-faint/85">
        Representative photography. Vehicle class shown is indicative — fitment
        is confirmed from the OEM part number.
      </p>
    </div>
  );
}
