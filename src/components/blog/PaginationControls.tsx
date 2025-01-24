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
    <div className="flex justify-center items-center space-x-2">
      {currentPage > 1 && (
        <Link
          href={`/blog?page=${currentPage - 1}`}
          className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
        >
          Zurück
        </Link>
      )}

      <div className="flex space-x-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Link
            key={pageNum}
            href={`/blog?page=${pageNum}`}
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              pageNum === currentPage
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {pageNum}
          </Link>
        ))}
      </div>

      {currentPage < totalPages && (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
        >
          Weiter
        </Link>
      )}
    </div>
  )
}
