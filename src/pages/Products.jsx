import { Link, useLocation, useNavigate } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageHero from "../components/PageHero";
import CTABand from "../components/CTABand";
import ProductVisual from "../components/ProductVisual";
import SpecPanels from "../components/SpecPanels";
import VehicleGrid from "../components/VehicleGrid";
import Photo from "../components/Photo";
import RefTable from "../components/RefTable";
import { photoForProduct, PHOTOS } from "../data/photos";
import SubNav from "../components/SubNav";
import Accordion from "../components/Accordion";
import Icon from "../components/Icon";
import {
  DIAGNOSIS,
  FAQ_NO,
  PRODUCT_MODELS,
  PRODUCTS,
  SITE,
  PRODUCT_SPECS,
} from "../data/site";

const tabs = [
  { id: "starter", label: "Starter motors", product: "starter-motors" },
  { id: "solenoid", label: "Solenoid switches", product: "solenoid-switches" },
  { id: "armature", label: "Armatures", product: "armatures" },
  { id: "wiper", label: "Wiper motors", product: "wipers" },
  { id: "applications", label: "Applications" },
  { id: "development", label: "New development" },
];

const PRODUCT_FAQ = [
  {
    q: "How do I know whether I need 12V or 24V?",
    a: "Cars, tractors and most three-wheelers are 12V. Many trucks and buses run 24V. If you are not sure, send the vehicle make, model and year and we will confirm.",
  },
  {
    q: "Can you match my existing part exactly?",
    a: "Yes, if you give us the OEM part number or a sample. Development is done against the original sample rather than drawings alone.",
  },
  {
    q: "Do you sell single pieces or only in bulk?",
    a: "We run as a manufacturer and a wholesaler, so volumes vary by part number. Send your expected monthly quantity and we will confirm the minimum in writing.",
  },
  {
    q: "What do the switch categories A, B and C mean?",
    a: "The category describes the assembly sequence for that switch: A is spot, crimp, tower, solder; B is spot, tower, crimp, solder; C is solder, spot, crimp, tower. The sequence follows the part's build.",
  },
  {
    q: "How long does delivery take?",
    a: "It depends on the part and where it sits in our monthly plan. We confirm a realistic date in the quotation rather than guessing at the time you call.",
  },
];

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-selected={active}
      role="tab"
      className={`px-4 py-2.5 rounded-[5px] text-[0.92rem] font-medium border transition-colors whitespace-nowrap ${
        active
          ? "bg-brand-500 text-white border-brand-500"
          : "bg-white text-ink-soft border-rule hover:border-ink-faint hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

export default function Products() {
  const location = useLocation();
  const nav = useNavigate();

  // Incoming links arrive as product ids (starter-motors) while the tab strip is
  // keyed by tab id (starter). Map one to the other, then derive the active tab
  // from the location rather than syncing it in an effect.
  const toTabId = (v) => {
    if (!v) return null;
    if (tabs.some((t) => t.id === v)) return v;
    const byProduct = tabs.find((t) => t.product === v);
    return byProduct ? byProduct.id : null;
  };

  const active =
    toTabId((location.hash || "").replace("#tab-", "")) ||
    toTabId(location.state?.anchor) ||
    "starter";

  const current = PRODUCTS.find(
    (p) => p.id === tabs.find((t) => t.id === active)?.product
  );

  return (
    <>
      <Seo
        title="Products"
        description="Starter motors, solenoid switches, armatures and wiper motors from AlterStar, Bawana Delhi. 12V and 24V, car, commercial, tractor and three-wheeler applications, plus development to an OEM sample."
      />

      <PageHero
        label="Range and specifications"
        breadcrumb={[{ label: "Products" }]}
        title="Products"
        lead="Four lines, all made in house. Pick a category for specifications, or send us a part number and we will tell you what fits."
        links={[
          {
            href: `${SITE.whatsappHref}?text=${encodeURIComponent(
              "Hello AlterStar, please share specifications for your starter motors, solenoid switches, armatures and wiper motors."
            )}`,
            label: "Ask for a spec sheet",
            icon: "whatsapp",
            external: true,
            variant: "btn-ghost",
          },
        ]}
        photo={PHOTOS.starterMotor}
      />

      <SubNav
        items={[
          { id: "range", label: "Range" },
          { id: "models", label: "Series" },
          { id: "diagnosis", label: "Fault diagnosis" },
          { id: "faq-products", label: "Questions" },
        ]}
      />

      {/* Range, tabbed */}
      <section id="range" className="wrap py-14 md:py-16 scroll-mt-24">
        <div role="tablist" aria-label="Product categories" className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <TabButton
              key={t.id}
              active={active === t.id}
              onClick={() => nav(`#tab-${t.id}`, { replace: true })}
            >
              {t.label}
            </TabButton>
          ))}
        </div>

        <div className="mt-10">
          {current && (
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <ProductVisual
                  photo={photoForProduct(current.id)}
                  caption={current.name}
                />
                {current.secondary && PHOTOS[current.secondary] && (
                  <div className="mt-5">
                    <ProductVisual
                      photo={current.secondary}
                      caption={current.secondaryCaption}
                      ratio="portrait"
                    />
                  </div>
                )}
              </div>

              <div>
                <h2 className="display-md">{current.name}</h2>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
                  {current.long}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {current.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="mt-9 font-mono text-[0.68rem] font-medium uppercase tracking-[0.11em] text-ink-mute">
                  How it works
                </h3>
                <ol className="mt-3 space-y-2.5">
                  {current.steps.map((s) => (
                    <li key={s.n} className="flex gap-3 items-start">
                      <span className="shrink-0 w-6 h-6 grid place-items-center rounded-[4px] bg-brand-50 border border-brand-200 font-mono text-[0.65rem] text-brand-700">
                        {s.n}
                      </span>
                      <span className="text-[0.95rem] text-ink-soft pt-0.5">
                        {s.label}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn btn-primary">
                    Request a quotation
                    <Icon name="arrow" />
                  </Link>
                  <a
                    href={`${SITE.whatsappHref}?text=${encodeURIComponent(
                      `Hello AlterStar, I am interested in ${current.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    <Icon name="whatsapp" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}

          {active === "applications" && (
            <div>
              <SectionHead
                label="Fitment"
                title="Where the range fits"
                lead="Listed by wheel count, the way the trade specifies it. Fitment itself is confirmed against the part number, not inferred from a vehicle description. Send the number and we will check it."
              />
              <div className="mt-9">
                <VehicleGrid />
              </div>
            </div>
          )}

          {active === "development" && (
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-[1.7rem] md:text-[2rem]">
                  Development to your sample
                </h2>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
                  When you bring an OEM sample we build against the sample
                  itself, not against a drawing. Dimension, build and performance
                  are all referenced to it. The job is logged in our FMS against
                  your part number, and it only goes to production once it has
                  been verified under working conditions.
                </p>
                <ul className="mt-6 space-y-2.5 rule-list">
                  {[
                    "Benchmarked to the sample, not to a drawing alone",
                    "Tracked in our New Development file against your part number",
                    "Prototype built and tested on our own panel",
                    "Verified under working conditions before bulk release",
                  ].map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn btn-primary">
                    Start a development
                    <Icon name="arrow" />
                  </Link>
                  <a
                    href={`${SITE.whatsappHref}?text=${encodeURIComponent(
                      "Hello AlterStar, I want to develop a part against an OEM sample."
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    <Icon name="whatsapp" />
                    Share sample details
                  </a>
                </div>
              </div>

              <Reveal>
                <div className="panel overflow-hidden">
                  <Photo
                    photo={PHOTOS.truckDetail}
                    ratio="landscape"
                    zoom
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="[&>div]:rounded-none [&>div]:border-0 [&>div]:border-b [&>div]:shadow-none"
                  />
                  <div className="px-6 py-4 border-b border-rule">
                    <h3 className="text-[1.05rem]">How a development runs</h3>
                  </div>
                  <ol className="px-6 py-5">
                    {[
                      {
                        t: "Sample received",
                        d: "Logged against your part number in our development file.",
                      },
                      {
                        t: "Plan and materials",
                        d: "Raw material and coil planned to the sample's criteria.",
                      },
                      {
                        t: "Prototype build",
                        d: "Built in house and tested on the final panel.",
                      },
                      {
                        t: "Verification",
                        d: "Checked under working conditions before release to bulk.",
                      },
                    ].map((s, i) => (
                      <li
                        key={s.t}
                        className={`relative pl-8 ${
                          i < 3 ? "pb-6" : ""
                        }`}
                      >
                        {i < 3 && (
                          <span
                            aria-hidden="true"
                            className="absolute left-[9px] top-5 bottom-0 w-px bg-rule"
                          />
                        )}
                        <span className="absolute left-0 top-0.5 w-[19px] h-[19px] grid place-items-center rounded-full border border-brand-200 bg-brand-50 font-mono text-[0.62rem] text-brand-700">
                          {i + 1}
                        </span>
                        <p className="text-[0.97rem] font-medium text-ink pt-0.5">
                          {s.t}
                        </p>
                        <p className="mt-1 text-[0.9rem] text-ink-soft">{s.d}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      {/* Full comparison, always visible rather than hidden behind a tab */}
      <section className="border-y border-rule bg-mist">
        <div className="wrap py-14 md:py-16">
            <SectionHead label="Full comparison" title="All four lines, parameter by parameter" />
            <div className="mt-8">
              <SpecPanels panels={PRODUCT_SPECS} />
            </div>
        </div>
      </section>

      {/* Series */}
      <section id="models" className="wrap py-14 md:py-16 scroll-mt-24">
        <SectionHead
          label="Series"
          title="Grouped by platform"
          lead="Find the series closest to your application, then send the OEM part number so we can confirm the exact match."
        />
        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {PRODUCT_MODELS.map((group, gi) => (
            <Reveal key={group.product} delay={gi * 70}>
              <div className="panel h-full flex flex-col">
                <div className="px-6 py-4 border-b border-rule">
                  <h3 className="text-[1.2rem]">{group.product}</h3>
                  <p className="mt-1 text-[0.88rem] text-ink-mute">
                    {group.blurb}
                  </p>
                </div>
                <div className="divide-y divide-rule-soft">
                  {group.ranges.map((r) => (
                    <div key={r.id} className="px-6 py-4">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="text-[1rem] font-semibold">{r.name}</h4>
                        <span className="font-mono text-[0.72rem] text-brand-600">
                          {r.id}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">
                        {r.desc}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {r.tags.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Diagnosis */}
      <section id="diagnosis" className="border-y border-rule bg-mist scroll-mt-24">
        <div className="wrap py-14 md:py-16">
          <SectionHead
            label="Fault diagnosis"
            title="Working out which part has failed"
            lead="A starting fault is usually one of four things. This is the order we work through it in, and it saves parts getting replaced unnecessarily."
          />
          <Reveal className="mt-9">
            <RefTable
              rowKey="symptom"
              columns={[
                { key: "symptom", label: "Symptom" },
                {
                  key: "likely",
                  label: "Check first",
                  render: (d) => (
                    <span
                      className={`tag ${d.likely === "Send it to us" ? "tag-brand" : ""}`}
                    >
                      {d.likely}
                    </span>
                  ),
                },
                { key: "note", label: "Why" },
              ]}
              rows={DIAGNOSIS}
            />
          </Reveal>
        </div>
      </section>

      {/* What we don't claim */}
      <section className="wrap py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            label="Straight answers"
            title="What we will not tell you"
            lead="It is easier to set expectations up front than to explain a gap later."
          />
          <Reveal>
            <ul className="space-y-4">
              {FAQ_NO.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 items-start border-l-2 border-rule pl-4"
                >
                  <span className="text-[0.95rem] leading-relaxed text-ink-soft">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Questions */}
      <section id="faq-products" className="border-t border-rule bg-mist scroll-mt-24">
        <div className="wrap py-14 md:py-16">
          <SectionHead label="Questions" title="Before you order" />
          <Reveal className="mt-8 max-w-3xl">
            <Accordion items={PRODUCT_FAQ} />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
