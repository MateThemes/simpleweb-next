import { Metadata } from 'next'
import { Container } from '@/components/ui/Container';
import { BlogCard } from '@/components/blog';
import { PaginationControls } from '@/components/blog';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog Webdesign & SEO für KMU | Tipps Österreich & Deutschland | SimpleWebDesign',
  description: 'Aktuelle Artikel und Insights zu KMU Webdesign, SEO und Online Marketing in Österreich & Deutschland. Professionelle Tipps für Ihren Online-Erfolg.',
  openGraph: {
    title: 'Blog Webdesign & SEO für KMU | Tipps Österreich & Deutschland | SimpleWebDesign',
    description: 'Aktuelle Artikel und Insights zu KMU Webdesign, SEO und Online Marketing in Österreich & Deutschland. Professionelle Tipps für Ihren Online-Erfolg.',
    type: 'website',
    url: 'https://simplewebdesign.at/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Webdesign & SEO für KMU | Tipps Österreich & Deutschland | SimpleWebDesign',
    description: 'Aktuelle Artikel und Insights zu KMU Webdesign, SEO und Online Marketing in Österreich & Deutschland.',
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/blog',
  },
}

const POSTS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  // CHANGE: Next 15.3 sync dynamic APIs return Promise for searchParams
  searchParams: Promise<{ page?: string }>
}) {
  const sp = await searchParams;
  const posts = await getAllPosts();
  const currentPage = sp?.page ? parseInt(sp.page, 10) || 1 : 1;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <main>
      <Container className="mt-24 sm:mt-32 lg:mt-40 pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          <header className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-8">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">📚 Expertentipps</span>
            </div>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Blog Webdesign & SEO für KMU
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Aktuelle Artikel und Insights zu KMU Webdesign, SEO und Online Marketing in Österreich & Deutschland. Professionelle Tipps für Next.js, Strapi CMS, Shopify und moderne Webtechnologien. Erfahren Sie, wie kleine und mittlere Unternehmen ihre Online-Präsenz optimieren können.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <a href="/services/webdesign" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Webdesign-Services</a>
              <span>•</span>
              <a href="/portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Portfolio</a>
              <span>•</span>
              <a href="/kontakt" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Kontakt</a>
            </div>
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

          {/* Trust Signals */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">KMU-Projekte</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Jahre Erfahrung</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Zufriedenheit</div>
              </div>
            </div>
          </div>

          {/* Modern CTA */}
          <div className="mt-20 text-center">
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-16 shadow-2xl rounded-3xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Brauchen Sie professionelle Unterstützung?
                </h3>
                <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                  Lassen Sie uns gemeinsam Ihre KMU-Website optimieren. Kostenlose Beratung für Unternehmen in Österreich & Deutschland.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Beratung buchen</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/services/webdesign"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-bold text-lg border-2 border-white rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
                  >
                    <span>Services ansehen</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
