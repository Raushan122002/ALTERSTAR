/**
 * Reference table that reflows on a phone.
 *
 * Renders a real <table> (correct for screen readers, and the reason there is no
 * duplicated mobile markup), but each cell carries a data-label. The .tbl-stack
 * stylesheet uses those to collapse the table into one card per row below the
 * `sm` breakpoint, so a three-column reference table stays readable at 360px
 * instead of scrolling sideways.
 */
export default function RefTable({ columns, rows, rowKey, className = "", bodyClass = "" }) {
  const keyOf =
    typeof rowKey === "function" ? rowKey : (r, i) => r[rowKey] ?? i;

  return (
    <div className="panel overflow-hidden shadow-e2">
      <div className="overflow-x-auto">
        <table className={`tbl tbl-stack ${className}`}>
          {columns.some((c) => c.label) && (
            <thead>
              <tr>
                {columns.map((c) => (
                  <th key={c.key} scope="col" className={c.thClass}>
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className={bodyClass}>
            {rows.map((row, i) => (
              <tr key={keyOf(row, i)}>
                {columns.map((c, ci) => (
                  <td
                    key={c.key}
                    data-label={c.label}
                    className={[
                      ci === 0 ? "row-key" : "",
                      c.mono ? "font-mono text-[0.82rem]" : "",
                      c.nowrap ? "whitespace-nowrap" : "",
                      c.tdClass || "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {c.render ? c.render(row) : row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
