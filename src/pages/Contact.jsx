import { useState } from "react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import Icon from "../components/Icon";
import PhotoBand from "../components/PhotoBand";
import { PHOTOS } from "../data/photos";
import { FAQS, PRODUCTS, SITE, WHATSAPP_TEXT_DEFAULT } from "../data/site";

const NEED = [
  "OEM part number, if you have it",
  "Vehicle make, model and year",
  "12V or 24V system",
  "Quantity you need per month",
  "Delivery city or pincode",
  "A sample or photo, if you have one",
];

const CHANNELS = [
  {
    icon: "phone",
    title: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: SITE.hours[0].d + ", " + SITE.hours[0].t,
  },
  {
    icon: "whatsapp",
    title: "WhatsApp",
    value: SITE.whatsapp,
    href: SITE.whatsappHref,
    external: true,
    note: "Quickest for part numbers and samples",
  },
  {
    icon: "mail",
    title: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Quotations and development enquiries",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: PRODUCTS[0].name,
    partNo: "",
    quantity: "",
    message: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend on this build. The enquiry is handed to WhatsApp with the
  // details already filled in, and we say so plainly rather than faking a
  // success message.
  const onSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Quotation request from the website",
      `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Product: ${form.product}`,
      form.partNo && `Part number: ${form.partNo}`,
      form.quantity && `Quantity: ${form.quantity}`,
      form.message && `Notes: ${form.message}`,
    ].filter(Boolean);
    window.open(
      `${SITE.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Contact AlterStar at N-31, DSIIDC Industrial Area, Bawana, Delhi 110039. Phone +91 85952 30710, WhatsApp +91 92170 02598, email sales@anbenterprises.in."
      />

      <PageHero
            label="Contact"
            breadcrumb={[{ label: "Contact" }]}
            title="Contact"
            lead="Phone, WhatsApp or email, whichever is easiest. All three reach the same sales desk in Bawana."
            photo={PHOTOS.warehouse}
          />

      {/* Channels */}
      <section className="wrap py-12 md:py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="panel block h-full p-6 transition-colors hover:border-brand-500"
              >
                <div className="flex items-center gap-2.5">
                  <Icon name={c.icon} className="w-[18px] h-[18px] text-brand-600" />
                  <span className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-ink-mute">
                    {c.title}
                  </span>
                </div>
                <p className="mt-3 text-[1.05rem] text-ink break-all">{c.value}</p>
                <p className="mt-1.5 text-[0.85rem] text-ink-mute">{c.note}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form and address */}
      <section className="border-y border-rule bg-mist">
        <div className="wrap py-14 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <div className="panel p-7 md:p-8">
                <h2 className="text-[1.45rem]">Request a quotation</h2>
                <p className="mt-2.5 text-[0.95rem] text-ink-soft">
                  The form opens WhatsApp with your details already written out.
                  Send the message there, or email us the same information
                  directly.
                </p>

                <form onSubmit={onSubmit} className="mt-7 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label" htmlFor="name">
                        Name *
                      </label>
                      <input
                        required
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={update}
                        className="input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="company">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={update}
                        className="input"
                        placeholder="Workshop or company"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="phone">
                        Phone *
                      </label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={update}
                        className="input"
                        placeholder="Mobile number"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={update}
                        className="input"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="product">
                        Product
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={form.product}
                        onChange={update}
                        className="input"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id}>{p.name}</option>
                        ))}
                        <option>Multiple / not sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="label" htmlFor="partNo">
                        OEM part number
                      </label>
                      <input
                        id="partNo"
                        name="partNo"
                        value={form.partNo}
                        onChange={update}
                        className="input"
                        placeholder="e.g. 23300-12345"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label" htmlFor="quantity">
                        Monthly quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        value={form.quantity}
                        onChange={update}
                        className="input"
                        placeholder="e.g. 200 pieces per month"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label" htmlFor="message">
                      Anything else
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={update}
                      className="input resize-none"
                      placeholder="Vehicle platform, application, packaging or stamping requirements"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    <Icon name="whatsapp" />
                    Continue on WhatsApp
                  </button>
                  <p className="text-center text-[0.78rem] text-ink-mute">
                    Nothing is stored on this site. The form only builds the
                    message.
                  </p>
                </form>
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={100}>
                <div className="panel">
                  <div className="px-6 py-4 border-b border-rule">
                    <h2 className="text-[1.1rem]">Factory and office</h2>
                  </div>
                  <div className="p-6">
                    <address className="not-italic text-[0.95rem] leading-relaxed text-ink-soft">
                      {SITE.addressLines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost btn-sm mt-5"
                    >
                      <Icon name="pin" />
                      Open in Google Maps
                    </a>
                  </div>
                  <iframe
                    title="AlterStar location, Bawana, Delhi"
                    src="https://www.google.com/maps?q=N-31,+DSIIDC+Industrial+Area,+Sector+2,+Bawana,+Delhi+110039&output=embed"
                    className="w-full h-[240px] border-0 border-t border-rule grayscale-[0.35]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="panel p-6">
                  <h2 className="text-[1.05rem]">Business hours</h2>
                  <dl className="mt-3">
                    {SITE.hours.map((h) => (
                      <div
                        key={h.d}
                        className="flex items-baseline justify-between gap-4 py-2 border-b border-rule-soft last:border-b-0"
                      >
                        <dt className="text-[0.92rem] text-ink-soft">{h.d}</dt>
                        <dd className="font-mono text-[0.85rem] text-ink">
                          {h.t}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-5 pt-5 border-t border-rule">
                    <p className="text-[0.9rem] text-ink-soft">
                      Partnership firm, GST active since {SITE.gstRegistered}.
                    </p>
                    <a
                      href={SITE.gstVerifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-mono text-[0.8rem] text-brand-600 hover:underline"
                    >
                      <Icon name="shield" className="w-4 h-4" />
                      Verify GSTIN {SITE.gstin}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <PhotoBand photo={PHOTOS.dispatchTruck} soft height="md:min-h-[320px]">
        <div className="max-w-xl">
          <span className="eyebrow eyebrow-light">Dispatch</span>
          <h2 className="display-md mt-3 text-white">
            Packed, marked and handed to the transporter
          </h2>
          <p className="mt-4 max-w-lg text-white/80 leading-relaxed">
            Every carton carries its lot code so a batch can be traced back to
            the work order it came from. Freight is quoted against the pin code
            you give us.
          </p>
          <p className="mt-5 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-white/45">
            Representative photography
          </p>
        </div>
      </PhotoBand>

      {/* What to send */}
      <section className="wrap py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-[1.45rem] leading-snug">
              What to send us for a quick quote
            </h2>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">
              If you send all six, the first reply you get will have a real
              number in it. If something is missing we will ask, which usually
              takes one more message.
            </p>
            <a
              href={`${SITE.whatsappHref}?text=${encodeURIComponent(
                WHATSAPP_TEXT_DEFAULT
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm mt-5"
            >
              <Icon name="whatsapp" />
              Start on WhatsApp
            </a>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {NEED.map((n, i) => (
              <li
                key={n}
                className="flex items-center gap-3 border border-rule rounded-[5px] bg-white px-4 py-3.5"
              >
                <span className="font-mono text-[0.72rem] text-brand-600 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.93rem] text-ink-soft">{n}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-rule bg-mist">
        <div className="wrap py-14 md:py-16">
          <h2 className="text-[1.45rem]">Questions we get asked</h2>
          <Reveal className="mt-7 max-w-3xl">
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
