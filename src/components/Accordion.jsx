import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

export default function Accordion({ items, className = "", defaultOpen = -1 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border-t border-rule ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q || i} className="acc-item" data-open={isOpen}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="acc-head"
            >
              <span>{item.q}</span>
              <span className="acc-icon">
                <Icon name="plus" className="w-4 h-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="acc-body">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
