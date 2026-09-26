import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import Logo from "./Logo";
import { SITE } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const nav = useNavigate();
  const loc = useLocation();

  const productLinks = [
    { id: "starter-motors", label: "Starter Motors" },
    { id: "solenoid-switches", label: "Solenoid Switches" },
  ];

  // Product tabs are selected by hash, so navigating is what actually switches
  // the tab. When already on the products page, replace the entry instead of
  // stacking history, and bring the product range into view.
  const goProduct = (id) => (e) => {
    e.preventDefault();
    const onProducts = loc.pathname === "/products";
    nav(`/products/#tab-${id}`, { replace: onProducts, state: { anchor: id } });
    if (onProducts) {
      setTimeout(
        () =>
          document
            .getElementById("range")
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        60
      );
    }
  };

  return (
    <footer className="border-t border-rule bg-mist">
      <div className="wrap py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 text-[0.92rem] leading-relaxed max-w-xs">
              Manufacturer, wholesaler and exporter of starter motors, solenoid
              switches, armatures and wiper motors. Built and tested at N-31,
              DSIIDC Industrial Area, Bawana, Delhi.
            </p>
            <p className="mt-4 text-[0.85rem] text-ink-mute">
              Supplying workshops, fleet operators and trade buyers across India.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.13em] text-ink-mute mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About us" },
                { to: "/quality", label: "Quality and process" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[0.92rem] text-ink-soft transition-colors hover:text-brand-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.13em] text-ink-mute mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((p) => (
                <li key={p.id}>
                  <a
                    href="#"
                    onClick={goProduct(p.id)}
                    className="text-[0.92rem] text-ink-soft transition-colors hover:text-brand-600"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/quality#process"
                  className="text-[0.92rem] text-ink-soft transition-colors hover:text-brand-600"
                >
                  Manufacturing process
                </Link>
              </li>
              <li>
                <Link
                  to="/products#diagnosis"
                  className="text-[0.92rem] text-ink-soft transition-colors hover:text-brand-600"
                >
                  Fault diagnosis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.13em] text-ink-mute mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-[0.92rem] text-ink-soft">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-brand-600"
                >
                  <Icon name="phone" className="w-4 h-4 text-ink-faint" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-ok-600"
                >
                  <Icon name="whatsapp" className="w-4 h-4 text-ink-faint" />
                  {SITE.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-brand-600 break-all"
                >
                  <Icon name="mail" className="w-4 h-4 text-ink-faint shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Icon name="pin" className="w-4 h-4 mt-1 text-ink-faint shrink-0" />
                <address className="not-italic leading-relaxed">
                  {SITE.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-rule">
              <a
                href={SITE.gstVerifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[0.78rem] text-brand-600 hover:underline"
              >
                <Icon name="shield" className="w-4 h-4" />
                Verify GSTIN
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[0.8rem] text-ink-mute">
          <p>
            {year} {SITE.legalName}. GSTIN {SITE.gstin}.
          </p>
          <p className="font-mono">
            Starter motors / Solenoid switches / Bawana, Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
