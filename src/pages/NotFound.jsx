import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { SITE } from "../data/site";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="wrap py-20 md:py-28">
        <div className="max-w-xl">
          <p className="font-mono text-[0.85rem] text-ink-faint">Error 404</p>
          <h1 className="mt-3 text-[2.1rem] md:text-[2.6rem]">
            That page is not here
          </h1>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
            The link may be old, or the address may have a typo in it. The
            products and contact details are a click away.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link to="/products" className="btn btn-ghost">
              See the range
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
          <p className="mt-10 pt-6 border-t border-rule text-[0.9rem] text-ink-mute">
            Or call {SITE.phone} if it is quicker.
          </p>
        </div>
      </section>
    </>
  );
}
