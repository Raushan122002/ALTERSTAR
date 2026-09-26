import { Link } from "react-router-dom";
import Icon from "./Icon";
import { SITE, WHATSAPP_TEXT_DEFAULT } from "../data/site";

/**
 * Closing call to action. Dark ink band so the end of every page has contrast
 * against the light body copy.
 */
export default function CTABand() {
  return (
    <section className="bg-ink text-white">
      <div className="wrap py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="display-md text-white">Send us the part number</h2>
            <p className="mt-3 text-[1rem] text-white/70 max-w-xl leading-relaxed">
              Tell us the part number, the vehicle platform and your monthly
              quantity. You will get a written quotation with confirmed fitment,
              MOQ, lead time and freight.
            </p>
            <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.11em] text-white/40">
              {SITE.phone} · {SITE.hours[0].d}, {SITE.hours[0].t}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request a quote
              <Icon name="arrow" />
            </Link>
            <a
              href={`${SITE.whatsappHref}?text=${encodeURIComponent(
                WHATSAPP_TEXT_DEFAULT
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-onphoto btn-lg"
            >
              <Icon name="whatsapp" />
              WhatsApp sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
