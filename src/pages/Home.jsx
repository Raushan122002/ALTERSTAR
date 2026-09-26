import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import CTABand from "../components/CTABand";
import Photo from "../components/Photo";
import PhotoBand from "../components/PhotoBand";
import SplitFeature from "../components/SplitFeature";
import SpecPanels from "../components/SpecPanels";
import VehicleGrid from "../components/VehicleGrid";
import StepsPath from "../components/StepsPath";
import Accordion from "../components/Accordion";
import Icon from "../components/Icon";
import { PHOTOS, photoForProduct } from "../data/photos";
import {
  FAQS,
  PROCESS_STAGES,
  PRODUCTS,
  SITE,
  PRODUCT_SPECS,
  WHATSAPP_TEXT_DEFAULT,
} from "../data/site";

const ease = [0.16, 1, 0.3, 1];

const FACTS = [
  { k: "GSTIN", v: SITE.gstin },
  { k: "GST active since", v: SITE.gstRegistered },
  { k: "Systems", v: "12V and 24V" },
  { k: "Final testing", v: "100% on panel" },
];

function Hero() {
  return (
    <section className="border-b border-rule bg-gradient-to-b from-fill to-paper">
      <div className="wrap-wide grid gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="eyebrow">Manufacturer / Wholesaler / Exporter</span>
            <span className="eyebrow-rule" />
          </motion.div>

          <motion.h1
            className="display-xl mt-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease }}
          >
            Starter motors, solenoids, armatures and wipers
          </motion.h1>

          <motion.p
            className="mt-6 text-[1.1rem] leading-relaxed text-ink-soft max-w-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
          >
            Made at N-31, DSIIDC Industrial Area, Bawana, Delhi. Send us an OEM
            part number and we will confirm fitment, MOQ, lead time and freight
            to you in writing.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease }}
          >
            <Link to="/products" className="btn btn-primary btn-lg">
              See the range
              <Icon name="arrow" />
            </Link>
            <a
              href={`${SITE.whatsappHref}?text=${encodeURIComponent(
                WHATSAPP_TEXT_DEFAULT
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-lg"
            >
              <Icon name="whatsapp" />
              WhatsApp us
            </a>
          </motion.div>

          <motion.dl
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 pt-8 border-t border-rule max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.26 }}
          >
            {FACTS.map((f) => (
              <div key={f.k}>
                <dt className="font-mono text-[0.66rem] uppercase tracking-[0.11em] text-ink-faint">
                  {f.k}
                </dt>
                <dd className="mt-1 font-mono text-[0.88rem] text-ink">{f.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <Photo
            photo={PHOTOS.heroEngine}
            ratio="landscape"
            zoom
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            caption="Representative image. Engine and gear machining of the kind our components are built to work alongside."
          />

          {/* Overlapping spec card adds depth without a heavy shadow. */}
          <div className="panel-lift absolute -bottom-7 -left-3 hidden w-[15rem] p-5 sm:block lg:-left-8">
            <div className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-ink-faint">
              Build spec
            </div>
            <div className="mt-2.5 space-y-2 text-[0.85rem]">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-ink-mute">Pinion</span>
                <span className="font-mono text-ink">8 to 11 teeth</span>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-ink-mute">Voltage</span>
                <span className="font-mono text-ink">12V / 24V</span>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-ink-mute">Test</span>
                <span className="font-mono text-ink">Every unit</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductRange() {
  return (
    <section className="wrap pt-24 pb-16 md:pt-28 md:pb-20">
      <SectionHead
        label="What we make"
        title="Four product lines"
        lead="All manufactured in house, from coil winding through to the final panel test."
        aside={
          <Link to="/products" className="btn btn-ghost">
            Full range
            <Icon name="arrow" />
          </Link>
        }
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 70}>
            <Link
              to={`/products/#tab-${p.id}`}
              className="group panel-lift block h-full overflow-hidden"
            >
              <div className="relative">
                <img
                  src={photoForProduct(p.id).src}
                  alt={photoForProduct(p.id).alt}
                  width={photoForProduct(p.id).width}
                  height={photoForProduct(p.id).height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/75 via-steel-900/10 to-transparent" />
                <h3 className="absolute inset-x-6 bottom-5 text-[1.4rem] text-white">
                  {p.name}
                </h3>
              </div>

              <div className="p-7">
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                  {p.short}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-brand-600">
                  View range
                  <Icon name="arrow" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-faint/85">
        Representative photography. Product shots to follow.
      </p>
    </section>
  );
}

function Specs() {
  return (
    <section className="border-y border-rule bg-mist">
      <div className="wrap py-16 md:py-20">
        <SectionHead
          label="Comparison"
          title="Every line, spec by spec"
          lead="What each product is and how it differs. For full detail, see the products page or ask us for a spec sheet."
        />
        <div className="mt-9">
          <SpecPanels panels={PRODUCT_SPECS} />
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="wrap py-16 md:py-20">
      <SectionHead
        label="Production"
        title="Five stages, same sequence every time"
        lead="The order runs through the same controlled pipeline each time, which is what makes a part from this month match one from last year."
        aside={
          <Link to="/quality" className="btn btn-ghost">
            Quality system
            <Icon name="arrow" />
          </Link>
        }
      />

      <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS_STAGES.map((s, i) => (
          <Reveal key={s.tag} delay={i * 55}>
            <li className="h-full">
              <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-brand-600">
                {s.tag}
              </span>
              <h3 className="mt-2 text-[1.08rem] leading-snug">{s.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                {s.desc}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Fitments() {
  return (
    <section className="border-y border-rule bg-mist">
      <div className="wrap py-16 md:py-20">
        <SectionHead
          label="Applications"
          title="What these fit"
          lead="Specified the way the trade specifies it, by wheel count. If your class is not listed, ask anyway — we work from part numbers, not from descriptions."
        />
        <div className="mt-9">
          <VehicleGrid />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Starter Motors and Solenoid Switches Manufacturer, Bawana Delhi"
        description="AlterStar manufactures and supplies starter motors, solenoid switches, armatures and wiper motors from Bawana, Delhi. 12V and 24V, GST registered, every finished part panel tested."
      />

      <Hero />
      <ProductRange />
      <Specs />
      <Process />

      <PhotoBand photo={PHOTOS.workshopMechanic} height="md:min-h-[400px]">
        <div className="max-w-xl">
          <span className="eyebrow eyebrow-light">On the bench</span>
          <h2 className="display-lg mt-3 text-white">
            Parts are checked against the original, not against a drawing
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-white/80">
            When you send an OEM number or a sample, we build to that sample and
            measure against it. If it does not match, it does not leave the
            bench.
          </p>
          <Link to="/quality" className="btn btn-onphoto btn-lg mt-8">
            How we check
            <Icon name="arrow" />
          </Link>
          <p className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-white/45">
            Representative photography
          </p>
        </div>
      </PhotoBand>

      <section className="wrap py-16 md:py-20">
        <SplitFeature
          photo={PHOTOS.qcMicrometer}
          ratio="portrait"
          flip
          eyebrow="Measurement"
          title="Checked with instruments, not by eye"
          bullets={[
            "Micrometer and caliper checks on armature shaft and pinion before assembly",
            "Continuity and insulation checks across every winding",
            "No-load and load running on the test panel before packing",
            "Lot code marked on the carton so a batch can be traced back",
          ]}
          action={
            <Link to="/quality" className="btn btn-ghost">
              See the quality system
              <Icon name="arrow" />
            </Link>
          }
        />
      </section>

      <Fitments />

      <section className="wrap py-16 md:py-20">
        <SectionHead
          label="Ordering"
          title="How an order runs"
          lead="Four steps. Nothing unusual, and you get dates in writing at the second one."
        />
        <div className="mt-10">
          <StepsPath />
        </div>
      </section>

      <section className="border-t border-rule bg-mist">
        <div className="wrap py-16 md:py-20">
          <SectionHead
            label="Questions"
            title="Asked and answered"
            aside={
              <Link to="/contact" className="btn btn-ghost">
                Ask us something else
                <Icon name="arrow" />
              </Link>
            }
          />
          <Reveal className="mt-9 max-w-3xl">
            <Accordion items={FAQS.slice(0, 6)} />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
