// Wordmark. Recreated as inline SVG rather than the original PNG because that
// file is white text on transparent, which disappears on a light background.
// currentColor lets it sit on either surface. Bolt mark follows the favicon.

export default function Logo({ className = "", markOnly = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <rect width="32" height="32" rx="6" fill="#1472fa" />
        <path
          d="M17.4 6.5 9.8 17.1h4.4l-1.5 8.4 7.7-10.9h-4.6l1.6-8.1z"
          fill="#fff"
        />
      </svg>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span className="font-display font-bold text-[1.32rem] tracking-[-0.02em] text-ink">
            ALTERSTAR
          </span>
          <span className="mt-[3px] font-mono text-[0.58rem] uppercase tracking-[0.14em] text-ink-mute">
            Auto Electrical
          </span>
        </span>
      )}
    </span>
  );
}
