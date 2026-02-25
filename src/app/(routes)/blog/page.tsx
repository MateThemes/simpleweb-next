import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { BlogCard } from '@/components/blog'
import { PaginationControls } from '@/components/blog'
import { getAllPosts, getAllCategories } from '@/lib/mdx'
import { breadcrumbSchema, webPageSchema } from '@/app/schema'
import { getWebPageDC } from '@/lib/dublinCore'

// Base title only – root layout template adds " | SimpleWebDesign" once
const PAGE_TITLE = 'Blog: Webdesign, SEO & Struktur für KMU'
const PAGE_DESCRIPTION =
  'Artikel zu Struktur, SEO und Wirkung für KMU in Österreich & Deutschland. Praxisnahe Insights für Websites, die Besucher führen und Anfragen erhöhen.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: `${PAGE_TITLE} | SimpleWebDesign`,
    description: PAGE_DESCRIPTION,
    type: 'website',
    url: 'https://simplewebdesign.at/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} | SimpleWebDesign`,
    description: PAGE_DESCRIPTION,
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/blog',
  },
  other: {
    ...getWebPageDC({
      title: `${PAGE_TITLE} | SimpleWebDesign`,
      description: PAGE_DESCRIPTION,
      url: 'https://simplewebdesign.at/blog',
    }),
  },
}

const POSTS_PER_PAGE = 6;

/** Always fetch latest post list so new articles appear without rebuild. */
export const dynamic = 'force-dynamic';

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const sp = await searchParams;
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);
  const currentPage = sp?.page ? parseInt(sp.page, 10) || 1 : 1;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const schemas = [
    webPageSchema({
      name: `${PAGE_TITLE} | SimpleWebDesign`,
      description: PAGE_DESCRIPTION,
      url: 'https://simplewebdesign.at/blog',
      image: 'https://simplewebdesign.at/img/og-image.jpg',
    }),
    breadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://simplewebdesign.at' },
        { name: 'Blog', url: 'https://simplewebdesign.at/blog' },
      ],
    }),
  ];

  return (
    <main className="flex-auto">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero — M3, du-tone, consultant hub */}
      <section
        className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20"
        aria-labelledby="blog-hero-heading"
      >
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
              Insights
            </p>
            <h1
              id="blog-hero-heading"
              className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl mt-2"
            >
              Blog: Klarheit für deine Website.
            </h1>
            <p className="mt-4 text-base text-[var(--muted-foreground-strong)] leading-relaxed">
              Kurze, praxisnahe Artikel zu Struktur, SEO und Wirkung – für KMU in
              Österreich & Deutschland.
            </p>
            <p className="mt-3 text-base text-[var(--muted-foreground)] leading-relaxed">
              Hier findest du Prinzipien, Checklisten und Beispiele, die dir
              helfen, online bessere Entscheidungen zu ermöglichen – und mehr
              Anfragen zu bekommen.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <Link
                href="/services/webdesign"
                className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full text-sm font-medium bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface)] transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
              >
                Webdesign-Services
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full text-sm font-medium bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface)] transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
              >
                Portfolio
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full text-sm font-medium bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface)] transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter bar — category chips, existing routes */}
      {categories.length > 0 && (
        <div className="sticky top-0 z-10 py-4 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
          <Container>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-[var(--muted-foreground)] mr-1">
                Kategorien:
              </span>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/kategorie/${cat.slug}`}
                  className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-full text-sm font-medium bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface)] transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                >
                  {cat.name}
                  <span className="text-[var(--muted-foreground)]">({cat.count})</span>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}

      {/* Post list — M3 cards via BlogCard */}
      <section className="py-16 lg:py-20 bg-[var(--background)]">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
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
      </section>

      {/* CTA — surface panel, du-tone */}
      <section
        className="py-24 lg:py-28 bg-[var(--surface-2)]"
        aria-labelledby="blog-cta-heading"
      >
        <Container>
          <div
            className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--surface)] border border-[var(--border)] shadow-elev-2 px-6 py-16 sm:px-12 sm:py-20"
            style={{
              background:
                'linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
              aria-hidden
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 70% 30%, var(--foreground), transparent 70%)',
              }}
            />
            <div className="relative max-w-2xl">
              <h2
                id="blog-cta-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl"
              >
                Willst du Klarheit für deine Website?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Wenn du online zu wenig Anfragen bekommst, liegt es oft nicht am
                Design – sondern an fehlender Struktur. In der Einordnung zeigen
                wir dir die nächsten sinnvollen Schritte.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                >
                  Kostenlose Einordnung
                </Link>
                <Link
                  href="/services/webdesign"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                >
                  Webdesign ansehen
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
