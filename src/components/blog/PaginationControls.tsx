import Link from 'next/link'

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
}

export function PaginationControls({
  currentPage,
  totalPages,
}: PaginationControlsProps) {
  return (
    <nav
      className="flex justify-center items-center gap-1"
      aria-label="Blog-Seitennavigation"
    >
      {currentPage > 1 && (
        <Link
          href={`/blog?page=${currentPage - 1}`}
          className="inline-flex items-center justify-center min-w-[2.75rem] h-10 px-3 rounded-lg text-sm font-medium text-[var(--foreground)] bg-[var(--surface)] border border-[var(--border)] hover:bg-[var(--surface-2)] transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
          aria-label="Vorherige Seite"
        >
          Zurück
        </Link>
      )}

      <div
        className="inline-flex items-center rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-1 gap-0.5"
        role="group"
        aria-label="Seitennummern"
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Link
            key={pageNum}
            href={`/blog?page=${pageNum}`}
            className={`inline-flex items-center justify-center min-w-[2.25rem] h-8 px-2 rounded-lg text-sm font-medium transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] ${
              pageNum === currentPage
                ? 'bg-[var(--surface)] text-[var(--foreground)] shadow-sm border border-[var(--border)]'
                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]/60'
            }`}
            aria-label={`Seite ${pageNum}`}
            aria-current={pageNum === currentPage ? 'page' : undefined}
          >
            {pageNum}
          </Link>
        ))}
      </div>

      {currentPage < totalPages && (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="inline-flex items-center justify-center min-w-[2.75rem] h-10 px-3 rounded-lg text-sm font-medium text-[var(--foreground)] bg-[var(--surface)] border border-[var(--border)] hover:bg-[var(--surface-2)] transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
          aria-label="Nächste Seite"
        >
          Weiter
        </Link>
      )}
    </nav>
  )
}
