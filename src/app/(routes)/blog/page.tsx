import { Container } from '@/components/ui/Container'
import { BlogCard, PaginationControls } from '@/components/blog'
import { getAllPosts } from '@/lib/mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | SimpleWebDesign',
  description: 'Aktuelle Artikel und Insights zu Webdesign, SEO und Online Marketing.',
}

const POSTS_PER_PAGE = 6

async function getPageData(searchParams: { [key: string]: string | string[] | undefined }) {
  const page = searchParams.page
  const currentPage = typeof page === 'string' ? parseInt(page) : 1
  
  const posts = await getAllPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  return {
    currentPage,
    totalPages,
    paginatedPosts
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { currentPage, totalPages, paginatedPosts } = await getPageData(searchParams)

  return (
    <main>
      <Container className="mt-16 lg:mt-32">
        <div className="mx-auto max-w-5xl">
          <header className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-base text-neutral-600 dark:text-neutral-400">
              Aktuelle Artikel und Insights zu Webdesign, SEO und Online Marketing.
            </p>
          </header>

          <div className="mt-16 sm:mt-20">
            <div className="md:border-l md:border-neutral-100 md:pl-6 md:dark:border-neutral-800">
              <div className="flex flex-col space-y-16">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            </div>
          </div>

          {totalPages > 1 && (
            <div className="mt-16">
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>
          )}
        </div>
      </Container>
    </main>
  )
}
