import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import Logo from "./Logo";
import { SITE } from "../data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * The panel is a fixed overlay, so it has to be dismissed on anything that
   * would otherwise leave it stranded. Escape closes it and returns focus to
   * the button, and crossing up into the desktop breakpoint closes it — that
   * last one matters because the overlay also locks body scroll, and without it
   * the page would stay unscrollable on desktop after rotating a tablet or
   * resizing the window.
   */
  // Tapping a link already closes the menu, but the back button can change the
  // route without any tap. Adjusting during render is the documented way to
  // reset state on a prop change, and keeps this out of an effect.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-150 ${
          scrolled ? "border-b border-rule shadow-[0_1px_12px_rgba(16,21,28,0.06)]" : "border-b border-rule"
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-3 sm:gap-6">
          <Link to="/" aria-label="AlterStar home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={SITE.phoneHref} className="btn btn-ghost btn-sm">
              <Icon name="phone" />
              {SITE.phone}
            </a>
            <Link to="/contact" className="btn btn-primary btn-sm">
              Request a quote
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE.phoneHref}
              className="btn btn-ghost btn-sm"
              aria-label={`Call ${SITE.phone}`}
            >
              <Icon name="phone" />
              Call
            </a>
            <button
              ref={toggleRef}
              className="w-10 h-10 grid place-items-center rounded-[5px] border border-rule text-ink shrink-0"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon name={open ? "close" : "menu"} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/*
        `invisible` when closed is doing real work: opacity-0 alone leaves the
        links in the tab order, so a keyboard user tabs into an invisible menu.
      */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white overscroll-contain overflow-y-auto transition-[opacity,visibility] duration-200 ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <nav className="wrap py-4 flex flex-col">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between py-3.5 border-b border-rule-soft text-[1.05rem] font-medium ${
                  isActive ? "text-brand-600" : "text-ink"
                }`
              }
            >
              {l.label}
              <Icon name="arrow" className="w-4 h-4 text-ink-faint" />
            </NavLink>
          ))}
        </nav>
        <div className="wrap pb-10 flex flex-col gap-2.5">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary btn-block"
          >
            Request a quote
          </Link>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-block"
          >
            <Icon name="whatsapp" /> WhatsApp us
          </a>
          <p className="text-center font-mono text-[0.72rem] text-ink-mute pt-3 break-words">
            GSTIN {SITE.gstin}
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="text-center text-[0.85rem] text-ink-soft break-all pt-1"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </>
  );
}
