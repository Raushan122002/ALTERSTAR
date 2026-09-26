/**
 * Framed photograph with an optional caption and a stock-photography credit.
 *
 * `ratio` picks the frame shape, `zoom` enables the slow scale on hover, and
 * `credit` defaults to on because every image in PHOTOS is licensed stock. Pass
 * credit={false} once real photography of the actual workshop replaces it.
 */
export default function Photo({
  photo,
  ratio = "landscape",
  caption,
  credit = true,
  zoom = false,
  className = "",
  imgClassName = "",
  sizes,
  priority = false,
  children,
}) {
  if (!photo) return null;

  const shape = {
    portrait: "photo-portrait",
    landscape: "photo-landscape",
    wide: "photo-wide",
    square: "photo-square",
  }[ratio];

  return (
    <figure className={className}>
      <div className={`photo ${shape} ${zoom ? "photo-hover" : ""}`}>
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : undefined}
          className={imgClassName}
        />
        {children}
      </div>

      {(caption || credit) && (
        <figcaption>
          {caption && <div className="photo-cap">{caption}</div>}
          {credit && <div className="photo-credit">{photo.credit}</div>}
        </figcaption>
      )}
    </figure>
  );
}
