import { cn } from '@/lib/utils'

export interface RateRow {
  area: string
  description: string
  price: string
}

interface RatesTableProps {
  rows: RateRow[]
  className?: string
}

export function RatesTable({ rows, className }: RatesTableProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] shadow-elev-1',
        'focus-within:ring-2 focus-within:ring-[var(--ring)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--ring-offset)]',
        className
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--surface-2)]">
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-semibold text-[var(--foreground)]"
              >
                Bereich
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-semibold text-[var(--foreground)]"
              >
                Beschreibung
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-right text-sm font-semibold text-[var(--foreground)]"
              >
                Preis
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.area}
                className={cn(
                  'border-b border-[var(--border)] last:border-b-0',
                  'transition-colors duration-[var(--duration-fast)]',
                  'hover:bg-[var(--surface-2)]/60'
                )}
              >
                <td className="px-6 py-4 text-sm font-medium text-[var(--foreground)]">
                  {row.area}
                </td>
                <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">
                  {row.description}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-[var(--foreground)] text-right whitespace-nowrap">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
