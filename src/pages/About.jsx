import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageHero from "../components/PageHero";
import CTABand from "../components/CTABand";
import SubNav from "../components/SubNav";
import Photo from "../components/Photo";
import PhotoBand from "../components/PhotoBand";
import Icon from "../components/Icon";
import RefTable from "../components/RefTable";
import { PHOTOS } from "../data/photos";
import {
  BUSINESS_MODELS,
  CAPABILITIES,
  IDENTITY,
  SITE,
} from "../data/site";

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="AlterStar is a GST registered partnership manufacturing starter motors, solenoid switches, armatures and wiper motors at N-31, DSIIDC Industrial Area, Bawana, Delhi. GSTIN 07ABSFA3951B1ZI."
      />

      <PageHero
        label="About the company"
        breadcrumb={[{ label: "About" }]}
        title="About AlterStar"
        lead="A partnership firm registered in December 2020, manufacturing auto electrical components at N-31, DSIIDC Industrial Area, Bawana, Delhi. We supply workshops, fleet operators and trade buyers, and we export."
        photo={PHOTOS.engineBay}
      />

      <SubNav
        items={[
          { id: "what-we-do", label: "What we do" },
          { id: "models-about", label: "How we operate" },
          { id: "capabilities", label: "Capability" },
          { id: "identity", label: "Registration" },
        ]}
      />

      <section id="what-we-do" className="wrap py-14 md:py-16 scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHead label="What we do" title="Four product lines, made properly" />
            <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-ink-soft">
              <p>
                We make four things: starter motors, solenoid switches,
                armatures and wiper motors. All are built on our own floor in
                Bawana, from coil winding through sub-assembly, switch assembly
                and final testing to packing.
              </p>
              <p>
                There is no separate assembly line for export orders or a
                different route for bulk buyers. An order goes into the same
                monthly plan, gets built in the same sequence, and is tested on
                the same panel as everything else.
              </p>
              <p>
                We are a partnership firm, not a listed company, and we work
                through our own factory and sales desk. If you want to see the
                floor or check a claim on this website, the address is on the
                contact page and you are welcome to come.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="panel shadow-e2">
              <Photo
                photo={PHOTOS.workshopMechanic}
                ratio="landscape"
                zoom
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
              <div className="px-6 py-4 border-b border-rule">
                <h3 className="text-[1.05rem]">At a glance</h3>
              </div>
              <dl className="px-6 py-2">
                {[
                  { k: "Constitution", v: SITE.constitution },
                  { k: "GST active since", v: SITE.gstRegistered },
                  { k: "Product lines", v: "Starter motors, solenoid switches" },
                  { k: "Systems", v: "12V and 24V" },
                  { k: "Final testing", v: "100% on panel" },
                  { k: "Supply", v: "Domestic wholesale and export" },
                ].map((r) => (
                  <div
                    key={r.k}
                    className="flex items-baseline justify-between gap-4 py-3 border-b border-rule-soft last:border-b-0"
                  >
                    <dt className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-mute shrink-0">
                      {r.k}
                    </dt>
                    <dd className="text-[0.92rem] text-ink text-right">{r.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="models-about" className="border-y border-rule bg-mist scroll-mt-24">
        <div className="wrap py-14 md:py-16">
          <SectionHead
            label="How we operate"
            title="Four ways we work"
            lead="Whichever one you buy through, the production behind it is the same."
          />
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_MODELS.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div className="panel-lift h-full p-5">
                  <h3 className="text-[1.05rem]">{b.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                    {b.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PhotoBand photo={PHOTOS.industrialYard} height="md:min-h-[360px]">
        <div className="max-w-lg">
          <span className="eyebrow eyebrow-light">Where we are</span>
          <h2 className="display-md mt-3 text-white">
            One unit, one floor, in Bawana
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Everything is built, tested and dispatched from N-31, DSIIDC
            Industrial Area, Bawana, Delhi 110039. There is no second plant and
            no third-party line.
          </p>
          <p className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-white/45">
            Representative photography
          </p>
        </div>
      </PhotoBand>

      <section id="capabilities" className="wrap py-14 md:py-16 scroll-mt-24">
        <SectionHead
          label="Capability"
          title="What the floor can do"
          lead="Everything below happens in house. We do not subcontract any of it."
        />
        <Reveal className="mt-9">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 rule-list">
            {CAPABILITIES.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="identity" className="border-t border-rule bg-mist scroll-mt-24">
        <div className="wrap py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHead
              label="Registration"
              title="Details you can check"
              lead="Nothing here needs taking on trust. The GSTIN and the address are both verifiable."
              aside={
                <a
                  href={SITE.gstVerifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <Icon name="shield" />
                  Verify GSTIN
                </a>
              }
            />
            <Reveal>
              <RefTable
                rowKey="label"
                columns={[
                  { key: "label", label: "Detail", nowrap: true, tdClass: "w-[38%]" },
                  { key: "value", label: "Detail" },
                ]}
                rows={IDENTITY}
                className="[&_tbody_tr:last-child_td]:border-b-0"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
