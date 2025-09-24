import { Container } from '@/components/ui/Container';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface AuditResultPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: AuditResultPageProps): Promise<Metadata> {
  return {
    title: `SEO-Audit Ergebnis | SimpleWebDesign`,
    description: 'Detaillierter SEO-Audit Bericht mit Empfehlungen und Verbesserungsvorschlägen.',
    robots: 'noindex, nofollow', // Don't index individual audit results
  };
}

async function getAuditResult(auditId: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/audit-result/${auditId}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching audit result:', error);
    return null;
  }
}

export default async function AuditResultPage({ params }: AuditResultPageProps) {
  const { id } = await params;
  const auditData = await getAuditResult(id);
  
  if (!auditData) {
    notFound();
  }
  
  const { summary, onPage, crawlability, recommendations, hostname, timestamp } = auditData;
  
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            SEO-Audit Ergebnis
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            {hostname}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Analysiert am {new Date(timestamp).toLocaleDateString('de-DE')}
          </p>
        </div>

        {/* Overall Score */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 mb-12 text-center">
          <div className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {summary.overall}/100
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Gesamtbewertung
          </h2>
          
          {/* Score Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {summary.performance}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Performance</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {summary.seo}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">SEO</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {summary.accessibility}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Barrierefreiheit</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {summary.bestPractices}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Best Practices</div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
            🎯 Top-Empfehlungen
          </h2>
          <div className="space-y-4">
            {recommendations.map((recommendation: string, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* On-Page Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
            📄 On-Page Analyse
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Titel-Tag</h3>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                  onPage.title.ok 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {onPage.title.ok ? '✓ OK' : '✗ Problem'}
                </div>
                {onPage.title.text && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    &ldquo;{onPage.title.text}&rdquo;
                  </p>
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Meta-Description</h3>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                  onPage.metaDescription.ok 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {onPage.metaDescription.ok ? '✓ OK' : '✗ Fehlt'}
                </div>
                {onPage.metaDescription.text && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    &ldquo;{onPage.metaDescription.text}&rdquo;
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">H1-Tags</h3>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                  onPage.h1.count === 1 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {onPage.h1.count} H1-Tag{onPage.h1.count !== 1 ? 's' : ''}
                </div>
                {onPage.h1.hint && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {onPage.h1.hint}
                  </p>
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Bilder ohne Alt-Text</h3>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                  onPage.imagesWithoutAlt === 0 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {onPage.imagesWithoutAlt} Bild{onPage.imagesWithoutAlt !== 1 ? 'er' : ''}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crawlability */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
            🕷️ Indexierbarkeit
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Robots.txt</h3>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                crawlability.robots === 'OK' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {crawlability.robots}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sitemap</h3>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                crawlability.sitemap === 'FOUND' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {crawlability.sitemap}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Noindex</h3>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                !crawlability.metaRobotsNoindex 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {crawlability.metaRobotsNoindex ? 'Blockiert' : 'Erlaubt'}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Brauchst du Hilfe bei der Umsetzung?
          </h2>
          <p className="text-blue-100 mb-6">
            Unsere SEO-Experten helfen dir gerne bei der Umsetzung dieser Empfehlungen.
          </p>
          <a
            href="https://simplewebdesign.at/kontakt"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Kostenlose Beratung buchen
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Dieses Audit wurde erstellt von{' '}
            <a href="https://simplewebdesign.at" className="text-blue-600 hover:underline">
              SimpleWebDesign
            </a>
          </p>
          <p className="mt-2">
            <a href="https://simplewebdesign.at/datenschutz" className="text-blue-600 hover:underline">
              Datenschutzerklärung
            </a>
            {' • '}
            <a href="https://simplewebdesign.at/impressum" className="text-blue-600 hover:underline">
              Impressum
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
