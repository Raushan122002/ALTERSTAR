import { useEffect, useMemo } from "react";

const BASE_URL = "https://www.anbenterprises.in/";
const FALLBACK =
  "AlterStar, starter motors, solenoid switches, armatures and wiper motors. Bawana, Delhi. Manufacturer, wholesaler and exporter.";

export default function Seo({ title, description, canonical }) {
  const fullTitle = useMemo(
    () =>
      title
        ? `${title} | AlterStar, Bawana Delhi`
        : "Starter Motors and Solenoid Switches | AlterStar, Bawana Delhi",
    [title]
  );

  const desc = description || FALLBACK;

  useEffect(() => {
    const upsert = (tag, attrs, content) => {
      const key = Object.keys(attrs)[0];
      let el = document.head.querySelector(`${tag}[${key}="${attrs[key]}"]`);
      if (!el) {
        el = document.createElement(tag);
        el.setAttribute(key, attrs[key]);
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      if (content !== undefined) el.setAttribute("content", content);
    };

    document.title = fullTitle;
    upsert("meta", { name: "description" }, desc);
    upsert("meta", { property: "og:title" }, fullTitle);
    upsert("meta", { property: "og:description" }, desc);
    upsert("meta", { property: "og:site_name" }, "AlterStar");
    upsert("meta", { property: "og:type" }, "website");
    upsert("meta", { property: "og:url" }, canonical || BASE_URL);
    upsert("meta", { name: "twitter:card" }, "summary_large_image");
    upsert("link", { rel: "canonical" }, canonical || BASE_URL);
  }, [fullTitle, desc, canonical]);

  return null;
}
