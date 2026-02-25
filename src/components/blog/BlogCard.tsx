import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  title: string
  description: string
  date: string
  slug: string
  image: string
  category: string
  /** Optional du-tone excerpt for index; when omitted, no teaser is shown to avoid Sie-tone from description */
  excerpt?: string | null
}

export function BlogCard({
  title,
  date,
  slug,
  image,
  category,
  excerpt,
}: BlogCardProps) {
  const teaser = excerpt ?? null
  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--surface)] border border-[var(--border)] shadow-elev-1 transition-[box-shadow] duration-[var(--duration-normal)] hover:shadow-elev-2 focus-within:shadow-elev-2">
      <div className="relative w-full aspect-[2/1] sm:aspect-[3/2] overflow-hidden bg-[var(--surface-2)]">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={630}
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-[var(--border)]" aria-hidden />
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--muted-foreground)]">
          <time dateTime={date}>{formatDate(date)}</time>
          <Link
            href={`/blog/kategorie/${category.toLowerCase()}`}
            className="rounded-full bg-[var(--surface-2)] px-2.5 py-1 font-medium text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface)] transition-colors duration-[var(--duration-fast)]"
          >
            {category}
          </Link>
        </div>
        <h3 className="mt-3 font-semibold text-[var(--foreground)] leading-tight">
          <Link
            href={`/blog/${slug}`}
            className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-inset rounded hover:underline"
          >
            {title}
          </Link>
        </h3>
        {teaser ? (
          <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2 flex-1">
            {teaser}
          </p>
        ) : null}
        <Link
          href={`/blog/${slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] rounded"
        >
          Artikel lesen
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  )
}
