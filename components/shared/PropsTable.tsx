type PropRow = {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
};

type PropsTableProps = {
  rows: PropRow[];
};

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <div className="liquid-panel overflow-hidden bg-liquid-surface/80">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-liquid-muted/80 text-liquid-ink">
          <tr>
            <th className="px-4 py-3 font-semibold">Prop</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Default</th>
            <th className="px-4 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-liquid-ink/10">
              <td className="px-4 py-3 font-mono text-xs">{row.name}</td>
              <td className="px-4 py-3 font-mono text-xs text-liquid-subtle">
                {row.type}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-liquid-subtle">
                {row.defaultValue ?? "-"}
              </td>
              <td className="px-4 py-3 text-liquid-subtle">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
