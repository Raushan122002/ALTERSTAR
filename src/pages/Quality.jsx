import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageHero from "../components/PageHero";
import CTABand from "../components/CTABand";
import SubNav from "../components/SubNav";
import PhotoBand from "../components/PhotoBand";
import Photo from "../components/Photo";
import RefTable from "../components/RefTable";
import Icon from "../components/Icon";
import { PHOTOS } from "../data/photos";
import {
  PLANNING_POINTS,
  QUALITY_AUDIT,
  TRACKING,
  WORK_CENTRES,
} from "../data/site";

/* One representative frame per work centre, in the order they are listed. */
const CENTRE_PHOTOS = [
  PHOTOS.metalParts,
  PHOTOS.spindle,
  PHOTOS.gearsDetail,
  PHOTOS.workshopLathe,
];

export default function Quality() {
  return (
    <>
      <Seo
        title="Quality and Production Process"
        description="How AlterStar works: monthly, three-day and daily planning, four work centres, 100% final panel testing and audits on raw material, line and process."
      />

      <PageHero
        label="Quality and process"
        breadcrumb={[{ label: "Quality" }]}
        title="How the floor actually runs"
        lead="This is the working method rather than a promise. Planning at three levels, four work centres, audits along the way, and a panel test on every finished part before it is packed."
        photo={PHOTOS.gearsDetail}
      />

      <SubNav
        items={[
          { id: "planning", label: "Planning" },
          { id: "process", label: "Work centres" },
          { id: "audits", label: "Audits" },
          { id: "tracking", label: "What we track" },
        ]}
      />

      {/* Planning */}
      <section id="planning" className="wrap py-14 md:py-16 scroll-mt-24">
        <SectionHead
          label="Planning"
          title="Three planning horizons"
          lead="Each one exists for a different reason. Together they mean the date we give you is a date the line can actually hit."
        />
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {PLANNING_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="panel-lift h-full p-6">
                <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.1em] text-brand-600">
                  0{i + 1}
                </span>
                <h3 className="mt-2.5 text-[1.15rem]">{p.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work centres */}
      <section id="process" className="border-y border-rule bg-mist scroll-mt-24">
        <div className="wrap py-14 md:py-16">
          <SectionHead
            label="Work centres"
            title="Four work centres"
            lead="Each centre has a named person doing it, a separate person auditing it, and a measure of whether it went right."
          />
          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {WORK_CENTRES.map((w, i) => (
              <Reveal key={w.code} delay={i * 60}>
                <div className="panel-lift h-full overflow-hidden">
                  <Photo
                    photo={CENTRE_PHOTOS[i]}
                    ratio="landscape"
                    zoom
                    sizes="(min-width: 640px) 46vw, 100vw"
                  />
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[1.15rem]">{w.title}</h3>
                      <span className="font-mono text-[0.72rem] text-ink-faint">
                        {w.code}
                      </span>
                    </div>
                    <p className="mt-2.5 text-[0.94rem] leading-relaxed text-ink-soft">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-faint/85">
            Representative photography of each type of work
          </p>
        </div>
      </section>

      {/* Audits */}
      <section id="audits" className="wrap py-14 md:py-16 scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHead
            label="Audits"
            title="Checked four times over"
            lead="Final testing catches faults at the end. Audits catch them before they get there, which is the whole point of doing both."
          />

          <Reveal>
            <RefTable
              rowKey="stage"
              columns={[
                { key: "stage", label: "Stage", nowrap: true },
                { key: "sampling", label: "Sampling", mono: true, nowrap: true },
                { key: "checks", label: "Checked for" },
              ]}
              rows={QUALITY_AUDIT}
            />
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <p className="text-[0.88rem] text-ink-mute max-w-3xl">
            Sampling sizes are per 100-piece lot, tracked material-wise on
            receipt and lot and dispatch-wise on the line.
          </p>
        </Reveal>
      </section>

      <PhotoBand photo={PHOTOS.qcMeasuring} height="md:min-h-[380px]">
        <div className="max-w-lg">
          <span className="eyebrow eyebrow-light">Measurement</span>
          <h2 className="display-md mt-3 text-white">
            Nothing ships on a visual check alone
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Critical dimensions are measured with micrometers and calipers, and
            every finished unit is run on the panel. A part that has not been
            measured is not a finished part.
          </p>
          <p className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-white/45">
            Representative photography
          </p>
        </div>
      </PhotoBand>

      {/* Tracking */}
      <section id="tracking" className="border-t border-rule bg-mist scroll-mt-24">
        <div className="wrap py-14 md:py-16">
          <SectionHead
            label="What we track"
            title="The records behind the parts"
            lead="If you want to know where a batch came from, these are the things we can show you."
          />
          <div className="mt-9 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRACKING.map((t, i) => (
              <Reveal key={t.title} delay={i * 50}>
                <div className="flex gap-3 items-start">
                  <Icon name="check" className="w-[18px] h-[18px] text-ok-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[1rem] font-semibold">{t.title}</h3>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-ink-soft">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
