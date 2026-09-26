import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  const crumbs = items || [{ label: "Home" }];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] text-ink-mute">
        <li className="flex items-center gap-2">
          <Link to="/" className="transition-colors hover:text-brand-600">
            Home
          </Link>
        </li>
        {crumbs.map((c) => (
          <li key={c.to || c.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-rule">
              /
            </span>
            {c.to ? (
              <Link to={c.to} className="transition-colors hover:text-brand-600">
                {c.label}
              </Link>
            ) : (
              <span className="text-ink-soft">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
