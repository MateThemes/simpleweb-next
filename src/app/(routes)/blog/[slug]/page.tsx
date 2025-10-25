import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { BlogContent } from '@/components/blog/BlogContent'
import { getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { Post } from '@/lib/types'
import { articleSchema, breadcrumbSchema, webPageSchema } from '@/app/schema'
import { getBlogArticleDC } from '@/lib/dublinCore'

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
      url: `https://simplewebdesign.at/blog/${slug}`,
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
    alternates: {
      canonical: `https://simplewebdesign.at/blog/${slug}`,
    },
    // Dublin Core Metadata
    other: {
      ...getBlogArticleDC({
        title: post.title,
        description: post.description,
        author: post.author,
        date: post.date,
        url: `https://simplewebdesign.at/blog/${slug}`,
        category: post.category,
      }),
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

  const blogUrl = `https://simplewebdesign.at/blog/${slug}`;
  
  // Schema.org Structured Data
  const schemas = [
    // Article Schema
    articleSchema({
      title: post.title,
      description: post.description,
      image: post.image || 'https://simplewebdesign.at/img/og-image.jpg',
      datePublished: post.date,
      dateModified: post.date,
      author: post.author,
      url: blogUrl,
      category: post.category,
    }),
    // Breadcrumb Schema
    breadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://simplewebdesign.at' },
        { name: 'Blog', url: 'https://simplewebdesign.at/blog' },
        { name: post.title, url: blogUrl },
      ],
    }),
  ];

  return (
    <main>
      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

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
