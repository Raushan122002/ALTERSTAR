import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "./Icon";
import Breadcrumbs from "./Breadcrumbs";
import Photo from "./Photo";

const ease = [0.16, 1, 0.3, 1];

/**
 * Inner-page hero. Pass `photo` to get the two-column photographic treatment;
 * without it the hero stays a single text column on a tinted surface.
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Breadcrumbs items={breadcrumb} />
          </motion.div>
        )}

        <div
          className={`grid gap-10 lg:items-end lg:gap-14 ${
            hasPhoto ? "lg:grid-cols-[1.25fr_1fr]" : "lg:grid-cols-[1.35fr_1fr]"
          }`}
        >
          <div>
            {label && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease }}
              >
                <span className="eyebrow">{label}</span>
                <span className="eyebrow-rule" />
              </motion.div>
            )}

            <motion.h1
              className={`${label ? "mt-4" : ""} display-lg`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
            >
              {title}
            </motion.h1>

            {lead && (
              <motion.p
                className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft max-w-2xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease }}
              >
                {lead}
              </motion.p>
            )}

            {links.length > 0 && (
              <motion.div
                className="mt-7 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease }}
              >
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
              </motion.div>
            )}
          </div>

          {hasPhoto ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease }}
            >
              <Photo photo={photo} ratio="landscape" zoom priority sizes="(min-width: 1024px) 42vw, 100vw" />
            </motion.div>
          ) : (
            children && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
              >
                {children}
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
