import { Link } from "react-router-dom";
import Icon from "./Icon";
import Breadcrumbs from "./Breadcrumbs";
import Photo from "./Photo";
import Rise from "./Rise";

/**
 * Inner-page hero. Pass `photo` to get the two-column photographic treatment;
 * without it the hero stays a single text column on a tinted surface.
 *
 * Every element uses the CSS-driven Rise rather than a JS animation. This hero
 * is effectively the whole first screen on an inner page, so gating its
 * visibility on JavaScript running is not worth the risk for a fade.
 */
export default function PageHero({
  label,
  title,
  lead,
  links = [],
  breadcrumb,
  photo,
  children,
}) {
  const hasPhoto = Boolean(photo);

  return (
    <section
      className={
        hasPhoto
          ? "border-b border-rule bg-gradient-to-b from-fill to-paper"
          : "border-b border-rule bg-mist"
      }
    >
      <div className="wrap-wide py-10 md:py-14">
        {breadcrumb && (
          <Rise className="mb-6" y={0} duration={0.4}>
            <Breadcrumbs items={breadcrumb} />
          </Rise>
        )}

        <div
          className={`grid gap-10 lg:items-end lg:gap-14 ${
            hasPhoto ? "lg:grid-cols-[1.25fr_1fr]" : "lg:grid-cols-[1.35fr_1fr]"
          }`}
        >
          <div>
            {label && (
              <Rise y={8} duration={0.45}>
                <span className="eyebrow">{label}</span>
                <span className="eyebrow-rule" />
              </Rise>
            )}

            <Rise as="h1" className={`${label ? "mt-4" : ""} display-lg`} y={12} delay={0.05} duration={0.5}>
              {title}
            </Rise>

            {lead && (
              <Rise
                as="p"
                className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft max-w-2xl"
                y={12}
                delay={0.12}
                duration={0.5}
              >
                {lead}
              </Rise>
            )}

            {links.length > 0 && (
              <Rise className="mt-7 flex flex-wrap gap-3" y={12} delay={0.18} duration={0.5}>
                {links.map((l, i) =>
                  l.href ? (
                    <a
                      key={i}
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noreferrer" : undefined}
                      className={`btn ${l.variant || "btn-primary"}`}
                    >
                      {l.icon && <Icon name={l.icon} />}
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      key={i}
                      to={l.to}
                      className={`btn ${l.variant || "btn-primary"}`}
                    >
                      {l.icon && <Icon name={l.icon} />}
                      {l.label}
                    </Link>
                  )
                )}
              </Rise>
            )}
          </div>

          {hasPhoto ? (
            <Rise y={14} delay={0.12} duration={0.6}>
              <Photo photo={photo} ratio="landscape" zoom priority sizes="(min-width: 1024px) 42vw, 100vw" />
            </Rise>
          ) : (
            children && (
              <Rise y={12} delay={0.2} duration={0.5}>
                {children}
              </Rise>
            )
          )}
        </div>
      </div>
    </section>
  );
}
