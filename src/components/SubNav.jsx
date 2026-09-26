import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Sticky in-page topic nav. Highlights whichever section is currently in view,
// which a hash-only version got wrong whenever the reader scrolled manually.
export default function SubNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      const line = window.scrollY + 140;
      let current = items[0]?.id;
      for (const i of items) {
        const el = document.getElementById(i.id);
        if (el && el.offsetTop <= line) current = i.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="subnav">
      <div className="wrap">
        <div className="inner">
          {items.map((i) => (
            <button
              key={i.id}
              type="button"
              onClick={() => go(i.id)}
              data-active={active === i.id}
              className="link"
            >
              {i.label}
            </button>
          ))}
          <Link
            to="/contact"
            className="ml-auto hidden md:inline-flex items-center font-mono text-[0.7rem] uppercase tracking-[0.11em] text-ink-mute hover:text-brand-600 transition-colors"
          >
            Ask a question
          </Link>
        </div>
      </div>
    </div>
  );
}
