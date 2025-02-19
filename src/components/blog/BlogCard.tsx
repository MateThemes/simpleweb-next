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
}

export function BlogCard({
  title,
  description,
  date,
  slug,
  image,
  category,
}: BlogCardProps) {
  return (
    <article className="flex flex-col items-start">
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={630}
          className="aspect-[2/1] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[3/2]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-gray-500">
            {formatDate(date)}
          </time>
          <Link
            href={`/blog/kategorie/${category.toLowerCase()}`}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {category}
          </Link>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
            <Link href={`/blog/${slug}`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}
