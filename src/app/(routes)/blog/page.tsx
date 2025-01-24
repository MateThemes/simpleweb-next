'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { BlogCard } from '@/components/blog';
import { PaginationControls } from '@/components/blog';
import { Post } from '@/lib/types';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const page = searchParams.get('page');
        const currentPageNumber = page ? parseInt(page, 10) : 1;
        setCurrentPage(currentPageNumber);

        const response = await fetch('/api/posts');
        const postsData = await response.json();
        setPosts(postsData);
        setTotalPages(Math.ceil(postsData.length / POSTS_PER_PAGE));
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, [searchParams]);

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
            {isLoading ? (
              <div className="text-center">Laden...</div>
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            )}
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
