import { Container } from '@/components/ui/Container'
import { BlogCard } from '@/components/blog'
import { getAllPosts } from '@/lib/mdx'
import { Metadata } from 'next'
import { PaginationControls } from '@/components/blog'

export const metadata: Metadata = {
  title: 'Blog | SimpleWebDesign',
  description: 'Aktuelle Artikel und Insights zu Webdesign, SEO und Online Marketing.',
}

const POSTS_PER_PAGE = 6

interface SearchParams {
  page?: string
}

interface PageProps {
  searchParams: SearchParams
}

async function getPageData(searchParams: SearchParams) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1
  
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

export default async function BlogPage({ searchParams }: PageProps) {
  const { currentPage, totalPages, paginatedPosts } = await getPageData(searchParams)

  return (
    <main>
      <Container className="mt-24 sm:mt-32 lg:mt-40 pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          <header>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Blog
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
              Aktuelle Artikel und Insights zu Webdesign, SEO und Online Marketing.
            </p>
          </header>

          <div className="mt-16 sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
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
