import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { BlogContent } from '@/components/blog/BlogContent'
import { getPostBySlug } from '@/lib/mdx'
import { formatDate, getReadingTimeMinutes, getWordCount } from '@/lib/utils'
import { Post } from '@/lib/types'
import { articleSchema, breadcrumbSchema, faqSchema } from '@/app/schema'
import { getBlogArticleDC } from '@/lib/dublinCore'

// Temporarily disabled static generation due to React version conflict
// export async function generateStaticParams(): Promise<PageParams[]> {
//   const posts = await getAllPosts()
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

/** Ensure each slug gets its own content (no shared cache across blog posts). */
export const dynamic = 'force-dynamic';

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
  const metaTitle = post.seoTitle || `${post.title} | Blog`;

  return {
    title: metaTitle,
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
  const categorySlug = post.category.toLowerCase();
  const wordCount = getWordCount(post.content ?? '');
  const readingTimeMin = getReadingTimeMinutes(post.content ?? '');

  // FAQ JSON-LD only for the "website-bringt-keine-anfragen" article (matches FAQ block in content)
  const articleFaq =
    slug === 'website-bringt-keine-anfragen'
      ? [
          {
            question: 'Warum bringt meine Website keine Anfragen?',
            answer:
              'Häufig fehlt Klarheit: Besucher erkennen nicht sofort, für wen die Seite da ist und welcher nächste Schritt sinnvoll ist. Oft sind es unklarer Nutzen, fehlende Führung oder ein unklarer Conversion-Pfad. Eine gezielte Einordnung zeigt, wo es hakt – und was zuerst angepackt werden sollte.',
          },
          {
            question: 'Wann ist ein Website-Relaunch sinnvoll?',
            answer:
              'Sinnvoll ist ein Relaunch, wenn die Grundstruktur nicht mehr passt: falsche Zielgruppe, veraltete Technik oder keine Möglichkeit, Conversion und Inhalte sinnvoll zu verbessern. Wenn nur Texte oder einzelne Elemente fehlen, reicht meist eine Überarbeitung. Vor der Entscheidung hilft eine Einordnung, Prioritäten zu setzen.',
          },
          {
            question: 'Reicht SEO alleine, um mehr Anfragen zu bekommen?',
            answer:
              'Nein. Sichtbarkeit in Google nützt wenig, wenn die gefundene Seite nicht überzeugt oder nicht zum Suchziel passt. SEO wirkt am besten gemeinsam mit klarer Struktur, Nutzen und einem erkennbaren nächsten Schritt. Ohne diese Basis bringt mehr Traffic oft keine zusätzlichen Anfragen.',
          },
        ]
      : [];

  // Schema.org Structured Data
  const schemas = [
    // Article Schema
    articleSchema({
      title: post.title,
      description: post.description,
      image: post.image ? `https://simplewebdesign.at${post.image}` : 'https://simplewebdesign.at/img/og-image.jpg',
      datePublished: post.date,
      dateModified: post.date,
      author: post.author,
      url: blogUrl,
      category: post.category,
      wordCount: wordCount > 0 ? wordCount : undefined,
    }),
    // Breadcrumb Schema
    breadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://simplewebdesign.at' },
        { name: 'Blog', url: 'https://simplewebdesign.at/blog' },
        { name: post.title, url: blogUrl },
      ],
    }),
    ...(articleFaq.length > 0 ? [faqSchema({ faqs: articleFaq })] : []),
  ];

  return (
    <main className="flex-auto">
      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero — single title, eyebrow, lead, image */}
      <section
        className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24"
        aria-labelledby="article-heading"
      >
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            {/* Back to blog */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
            >
              <span aria-hidden>←</span>
              Zurück zum Blog
            </Link>

            <article>
              <header className="flex flex-col">
                {/* Eyebrow: category chip + date */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Link
                    href={`/blog/kategorie/${categorySlug}`}
                    className="inline-flex items-center rounded-full bg-[var(--muted)]/60 border border-[var(--border)]/60 px-3.5 py-1.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]/80 transition-colors"
                  >
                    {post.category}
                  </Link>
                  <time
                    dateTime={post.date}
                    className="text-sm text-[var(--muted-foreground)]"
                  >
                    {formatDate(post.date)}
                  </time>
                  <span className="text-sm text-[var(--muted-foreground)]" aria-hidden>
                    · {readingTimeMin} Min. Lesezeit
                  </span>
                </div>

                <h1
                  id="article-heading"
                  className="font-display text-4xl font-bold tracking-tight text-[var(--foreground)] leading-[1.12] sm:text-5xl"
                >
                  {post.title}
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed">
                  {post.description}
                </p>
              </header>

              {post.image ? (
                <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]/60 shadow-[var(--shadow-3)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 48rem"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : null}
            </article>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border)]" aria-hidden />

      {/* Article body — prose, max-w-3xl, enhanced typography */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[var(--background)]">
        <Container>
          <BlogContent
            content={post.content}
            className={`
              blog-content prose prose-neutral dark:prose-invert max-w-3xl mx-auto
              prose-headings:font-display prose-headings:tracking-tight prose-headings:text-[var(--foreground)]
              prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:font-semibold prose-h2:mt-16 prose-h2:mb-5 prose-h2:leading-tight
              prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:font-semibold prose-h3:mt-12 prose-h3:mb-4
              prose-p:leading-[1.75] prose-p:mt-6 prose-p:mb-6
              prose-ul:my-7 prose-ul:pl-6 prose-ul:space-y-2 prose-li:leading-[1.75]
              prose-ol:my-7 prose-ol:pl-6 prose-ol:space-y-2
              prose-blockquote:bg-[var(--muted)]/40 prose-blockquote:rounded-xl prose-blockquote:py-6 prose-blockquote:px-6 prose-blockquote:border prose-blockquote:border-[var(--border)]/40 prose-blockquote:not-italic prose-blockquote:my-8 prose-blockquote:font-normal prose-blockquote:text-[var(--foreground)]
              prose-a:text-[var(--primary)] prose-a:underline prose-a:decoration-[var(--primary)]/50 prose-a:underline-offset-2 hover:prose-a:decoration-[var(--primary)]
            `}
          />
        </Container>
      </section>

      {/* CTA — M3 surface panel, du-tone */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-[var(--background)]"
        aria-labelledby="blog-cta-heading"
      >
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl bg-[var(--surface)]/60 border border-[var(--border)]/60 p-8 sm:p-10 shadow-[var(--shadow-2)]">
            <h2
              id="blog-cta-heading"
              className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)]"
            >
              Lass uns deine Website einordnen.
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
              Wenn deine Website gut aussieht, aber zu wenig Anfragen bringt, liegt es oft an der Struktur. In einer kurzen Einordnung zeigen wir dir die nächsten sinnvollen Schritte.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
              >
                Kostenlose Einordnung
              </Link>
              <Link
                href="/services/webdesign"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-medium text-base bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
              >
                Webdesign ansehen
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
