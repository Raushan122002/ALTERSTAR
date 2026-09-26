/**
 * Full-bleed photo band with content laid over a legibility scrim.
 *
 * Used to break up long pages and give the site photography at a scale that
 * reads as premium. `soft` flips the scrim to a bottom-up gradient, which suits
 * a single line of text near the lower edge.
 */
export default function PhotoBand({
  photo,
  soft = false,
  height = "md:min-h-[440px]",
  credit = true,
  children,
  className = "",
}) {
  if (!photo) return null;

  return (
    <section className={`band ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
      />
      <div className={soft ? "band-scrim-soft" : "band-scrim"} />
      <div
        className={`wrap-wide relative flex flex-col justify-center ${height} py-20 md:py-24`}
      >
        {children}
      </div>
      {credit && (
        <div className="wrap-wide relative pb-5 -mt-2">
          <span className="font-mono text-[0.64rem] uppercase tracking-[0.08em] text-white/40">
            {photo.credit}
          </span>
        </div>
      )}
    </section>
  );
}
