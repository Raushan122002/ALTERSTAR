import Reveal from "./Reveal";

// Left aligned by default. The centred pill-badge-then-divider layout that most
// templates use is one of the strongest visual tells of generated sites.
export default function SectionHead({
  label,
  title,
  lead,
  aside,
  className = "",
}) {
  return (
    <Reveal
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className={lead || aside ? "max-w-2xl" : "max-w-3xl"}>
        {label && (
          <div>
            <span className="eyebrow">{label}</span>
            <span className="eyebrow-rule" />
          </div>
        )}
        <h2 className="mt-4 text-[1.75rem] md:text-[2.1rem] leading-[1.18]">
          {title}
        </h2>
        {lead && (
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
            {lead}
          </p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </Reveal>
  );
}
