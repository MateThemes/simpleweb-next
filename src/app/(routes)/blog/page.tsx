import { Metadata } from 'next'
import { Container } from '@/components/ui/Container';
import { BlogCard } from '@/components/blog';
import { PaginationControls } from '@/components/blog';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog | Webdesign, SEO & Marketing Insights | SimpleWebDesign',
  description: 'Aktuelle Artikel und Insights zu Webdesign, SEO und Online Marketing. Professionelle Tipps für Ihren Online-Erfolg.',
}

const POSTS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const posts = await getAllPosts();
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

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
  );
}
