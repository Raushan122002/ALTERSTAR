import Reveal from "./Reveal";
import Photo from "./Photo";

/**
 * Photo beside a block of text. `flip` puts the image on the right.
 * Pass `credit={false}` once real photography replaces the stock image.
 */
export default function SplitFeature({
  photo,
  ratio = "landscape",
  flip = false,
  eyebrow,
  title,
  children,
  bullets,
  action,
  credit = true,
  caption,
  className = "",
}) {
  return (
    <div className={`grid gap-10 lg:gap-16 items-center lg:grid-cols-2 ${className}`}>
      <Reveal className={flip ? "lg:order-2" : ""}>
        <Photo
          photo={photo}
          ratio={ratio}
          caption={caption}
          credit={credit}
          zoom
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
      </Reveal>

      <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && <h2 className="display-lg mt-3">{title}</h2>}
        {children && <div className="mt-5 text-[1.02rem] leading-relaxed">{children}</div>}

        {bullets?.length > 0 && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-ink-soft leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {action && <div className="mt-8">{action}</div>}
      </Reveal>
    </div>
  );
}
