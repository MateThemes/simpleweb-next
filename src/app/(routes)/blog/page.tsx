import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { getAllPosts, getAllCategories } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'

const POSTS_PER_PAGE = 6

interface Props {
  searchParams: {
    page?: string
  }
}

export const metadata: Metadata = {
  title: 'Blog | SimpleWebDesign',
  description: 'Insights und Tipps zu Webdesign, SEO und digitalem Marketing',
}

export default async function BlogPage({ searchParams }: Props) {
  const currentPage = Number(searchParams.page) || 1
  const posts = await getAllPosts()
  const categories = await getAllCategories()

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const offset = (currentPage - 1) * POSTS_PER_PAGE
  const currentPosts = posts.slice(offset, offset + POSTS_PER_PAGE)

  return (
    <main>
      <Container className="mt-24 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
            Blog & Insights
          </h1>
          <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
            Erfahren Sie mehr über Webdesign, SEO und digitales Marketing. Hier teilen wir unser Wissen und aktuelle Trends.
          </p>
        </div>
      </Container>

      <Container className="mt-16 sm:mt-24 pb-16 sm:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-12">
          {/* Main content - blog posts */}
          <div className="lg:col-span-8">
            <div className="space-y-16">
              {currentPosts.length === 0 ? (
                <p className="text-neutral-600 dark:text-neutral-400">
                  Noch keine Blog-Einträge vorhanden.
                </p>
              ) : (
                <>
                  {currentPosts.map((post) => (
                    <article key={post.slug} className="group relative flex flex-col items-start">
                      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h2 className="mt-6 text-2xl font-semibold text-neutral-950 dark:text-white">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <time className="relative z-10 order-first mb-3 flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                        {formatDate(post.date)}
                      </time>
                      <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
                        {post.description}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="relative z-10 mt-6 flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <span>Weiterlesen</span>
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          className="ml-1 h-4 w-4 stroke-current"
                        >
                          <path
                            d="M6.75 5.75 9.25 8l-2.5 2.25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </article>
                  ))}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <nav className="mt-16 flex items-center justify-center space-x-2" aria-label="Pagination">
                      {currentPage > 1 && (
                        <Link
                          href={`/blog?page=${currentPage - 1}`}
                          className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                        >
                          Zurück
                        </Link>
                      )}
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Link
                          key={page}
                          href={`/blog?page=${page}`}
                          className={`inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium ${
                            currentPage === page
                              ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                              : 'border border-neutral-200 text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800'
                          }`}
                        >
                          {page}
                        </Link>
                      ))}

                      {currentPage < totalPages && (
                        <Link
                          href={`/blog?page=${currentPage + 1}`}
                          className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                        >
                          Weiter
                        </Link>
                      )}
                    </nav>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Sidebar - categories */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
              <h2 className="font-display text-lg font-semibold text-neutral-950 dark:text-white">
                Kategorien
              </h2>
              {categories.length === 0 ? (
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                  Keine Kategorien vorhanden.
                </p>
              ) : (
                <ul className="mt-4 space-y-2">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/blog/kategorie/${category.slug}`}
                        className="group flex items-center justify-between"
                      >
                        <span className="text-sm text-neutral-600 group-hover:text-neutral-950 dark:text-neutral-400 dark:group-hover:text-white">
                          {category.name}
                        </span>
                        <span className="text-sm text-neutral-400 group-hover:text-neutral-500 dark:group-hover:text-neutral-300">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
