import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { BlogContent } from '@/components/blog/BlogContent'
import { getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { Post } from '@/lib/types'

// Temporarily disabled static generation due to React version conflict
// export async function generateStaticParams(): Promise<PageParams[]> {
//   const posts = await getAllPosts()
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // CHANGE: Next 15.3 sync dynamic APIs return Promise for params; await before using
  const { slug } = await params
  const post: Post | null = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Artikel nicht gefunden',
    }
  }

  const hasImage = typeof post.image === 'string' && post.image.length > 0;

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      ...(hasImage
        ? {
            images: [
              {
                url: post.image,
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: hasImage ? 'summary_large_image' : 'summary',
      title: post.title,
      description: post.description,
      ...(hasImage ? { images: [post.image] } : {}),
    },
  }
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  // CHANGE: Next 15.3 sync dynamic APIs return Promise for params; await before using
  const { slug } = await params
  const post: Post | null = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  if (!post.content) {
    notFound()
  }

  return (
    <main>
      <Container className="mt-16 lg:mt-32 pb-16 sm:pb-24 lg:pb-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  {post.title}
                </h1>
                <time
                  dateTime={post.date}
                  className="order-first flex items-center text-base text-neutral-600 dark:text-neutral-400"
                >
                  {formatDate(post.date)}
                </time>
                <p className="mt-8 font-display text-xl text-neutral-600 dark:text-neutral-400">
                  {post.description}
                </p>
              </header>
              
              {post.image ? (
                <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : null}

              <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
                <BlogContent content={post.content} />
              </div>
            </article>
          </div>
        </div>
      </Container>
    </main>
  )
}
