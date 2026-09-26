import { motion } from "framer-motion";

/* Scroll-reveal that can NEVER leave content invisible.
   Content renders fully visible by default (opacity starts at 1);
   the animation is a subtle upward slide as the element scrolls into view,
   and even if that never fires the content remains readable. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 1, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.05 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}