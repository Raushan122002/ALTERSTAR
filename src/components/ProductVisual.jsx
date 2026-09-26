import Photo from "./Photo";
import { PHOTOS } from "../data/photos";

/**
 * Product photograph in a framed plate.
 *
 * `photo` accepts a registry key ("starterMotor"), a full photo object, or a
 * bare `image` src string, so callers can pass whichever they already have.
 * Anything unresolvable falls back to a generic workshop shot rather than
 * rendering nothing — a silently empty frame reads as a broken page.
 */
export default function ProductVisual({
  photo,
  image,
  alt,
  caption,
  ratio = "landscape",
  credit = true,
  className = "",
}) {
  const resolved =
    typeof photo === "string"
      ? PHOTOS[photo]
      : photo || (image ? { src: image, alt: alt || caption } : null);

  return (
    <Photo
      photo={resolved || { ...PHOTOS.engineBay, alt: alt || "Automotive components, representative of the work" }}
      ratio={ratio}
      caption={caption}
      credit={credit}
      zoom
      className={className}
      sizes="(min-width: 1024px) 40vw, 100vw"
    />
  );
}
