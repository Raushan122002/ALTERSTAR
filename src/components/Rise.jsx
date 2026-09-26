/**
 * Entrance reveal.
 *
 * Deliberately CSS-driven rather than JS-driven. The previous version used
 * framer-motion's initial={{ opacity: 0 }} + animate, which meant every page
 * only became visible once a JavaScript animation ran to completion. If that
 * animation failed to start, the content stayed at opacity 0 — and because
 * PageTransition wrapped the whole page in exactly that pattern, the failure
 * mode was a completely blank page with a working header.
 *
 * A CSS keyframe animation with fill-mode "both" is used instead:
 *   - it always terminates in the visible end state
 *   - if animations are disabled or unsupported, no opacity is set at all, so
 *     the element renders visible
 *   - prefers-reduced-motion turns it off entirely
 *
 * The reveal is decoration. It must never be load-bearing for readability.
 */
export default function Rise({
  children,
  className = "",
  delay = 0,
  y = 14,
  duration = 0.6,
  as: Tag = "div",
}) {
  return (
    <Tag
      className={`rise ${className}`}
      style={{
        "--rise-delay": `${Math.round(delay * 1000)}ms`,
        "--rise-y": `${y}px`,
        "--rise-dur": `${duration}s`,
      }}
    >
      {children}
    </Tag>
  );
}
