'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { AuditRequest, AuditResponse } from './_types';

export default function SeoAuditPage() {
  const [formData, setFormData] = useState<AuditRequest>({
    url: '',
    email: '',
    consent: false,
    newsletterConsent: false,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleInputChange = (field: keyof AuditRequest, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear email error when user starts typing
    if (field === 'email' && emailError) {
      setEmailError(null);
    }
  };

  const validateForm = (): boolean => {
    if (!formData.url.trim()) {
      setError('Bitte gib eine URL ein');
      return false;
    }

    // Check if email is provided but consent is not given
    if (formData.email && !formData.consent) {
      setEmailError('Einverständnis ist erforderlich, wenn eine E-Mail-Adresse angegeben wird');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);
    setEmailError(null);
    setResult(null);

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-50 border-green-200';
    if (score >= 70) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <Container size="small" className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Kostenloses SEO-Audit für KMU
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Sofort-Analyse für Performance, On-Page & Indexierbarkeit. Speziell für KMU in Österreich & Deutschland optimiert.
        </p>
      </div>

      {!result ? (
        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            data-testid="audit-form"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <div className="space-y-6">
              <Input
                id="url"
                label="Website-URL"
                type="text"
                placeholder="https://example.com"
                value={formData.url}
                onChange={(e) => handleInputChange('url', e.target.value)}
                required
                data-testid="audit-url"
              />

              <Input
                id="email"
                label="E-Mail-Adresse (optional)"
                type="email"
                placeholder="deine@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />

              {/* Always visible checkboxes */}
              <div className="space-y-4">
                {/* Datenschutz-Checkbox (immer angehakt) */}
                <div className="flex items-start space-x-3">
                  <input
                    id="privacyConsent"
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 h-4 w-4 text-gray-400 border-gray-300 rounded"
                  />
                  <label htmlFor="privacyConsent" className="text-sm text-gray-600 dark:text-gray-400">
                    Ich habe die <a href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.
                  </label>
                </div>
                
                {/* E-Mail-Checkbox (nur wenn E-Mail eingegeben) */}
                {formData.email && (
                  <div className="flex items-start space-x-3">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleInputChange('consent', e.target.checked)}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700 dark:text-gray-300">
                      Ich willige ein, dass meine E-Mail für die Zusendung des Audit-Berichts verwendet wird.
                    </label>
                  </div>
                )}
                
                {/* Newsletter-Checkbox (immer sichtbar) */}
                <div className="flex items-start space-x-3">
                  <input
                    id="newsletterConsent"
                    type="checkbox"
                    checked={formData.newsletterConsent}
                    onChange={(e) => handleInputChange('newsletterConsent', e.target.checked)}
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletterConsent" className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium text-green-700 dark:text-green-400">🎯 Bonus:</span> Ich möchte auch SEO-Tipps und Webdesign-Trends per E-Mail erhalten (kann jederzeit abbestellt werden).
                  </label>
                </div>
              </div>

              {emailError && (
                <p className="text-sm text-red-600 dark:text-red-400">{emailError}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                data-testid="audit-submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-center font-medium transition bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Analysiere Website...' : 'SEO-Audit starten'}
              </button>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                📋 Datenschutzhinweise
              </h4>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Die eingegebene URL wird zur Analyse verwendet und temporär gespeichert</li>
                <li>• E-Mail-Adressen werden nur mit deiner Einwilligung für den Audit-Bericht verwendet</li>
                <li>• <strong>Audit-Berichte werden nach 7 Tagen automatisch gelöscht</strong> und sind dann nicht mehr abrufbar</li>
                <li>• Keine Weitergabe an Dritte, keine Newsletter-Anmeldung</li>
                <li>• Du kannst jederzeit die Löschung deiner Daten verlangen</li>
                <li>• Weitere Details in unserer <a href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</a></li>
              </ul>
            </div>
          </form>
        </div>
      ) : (
        <div data-testid="audit-result" className="space-y-8">
          {/* Scores Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📊 SEO-Bewertung
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className={`p-4 rounded-lg border ${getScoreBgColor(result.summary.overall)}`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(result.summary.overall)}`}>
                    {result.summary.overall}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Gesamt</div>
                </div>
              </div>
              <div className={`p-4 rounded-lg border ${getScoreBgColor(result.summary.performance)}`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(result.summary.performance)}`}>
                    {result.summary.performance}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Performance</div>
                </div>
              </div>
              <div className={`p-4 rounded-lg border ${getScoreBgColor(result.summary.seo)}`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(result.summary.seo)}`}>
                    {result.summary.seo}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">SEO</div>
                </div>
              </div>
              <div className={`p-4 rounded-lg border ${getScoreBgColor(result.summary.accessibility)}`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(result.summary.accessibility)}`}>
                    {result.summary.accessibility}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Barrierefreiheit</div>
                </div>
              </div>
              <div className={`p-4 rounded-lg border ${getScoreBgColor(result.summary.bestPractices)}`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(result.summary.bestPractices)}`}>
                    {result.summary.bestPractices}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Best Practices</div>
                </div>
              </div>
            </div>
          </div>

          {/* On-Page Analysis Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📄 On-Page Analyse
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Titel-Tag</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  result.onPage.title.ok 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {result.onPage.title.ok ? '✓ OK' : '✗ Fehlt'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Meta-Description</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  result.onPage.metaDescription.ok 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {result.onPage.metaDescription.ok ? '✓ OK' : `✗ ${result.onPage.metaDescription.hint}`}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">H1-Tags</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  result.onPage.h1.count === 1 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {result.onPage.h1.count} {result.onPage.h1.hint && `(${result.onPage.h1.hint})`}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Bilder ohne Alt-Text</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  result.onPage.imagesWithoutAlt === 0 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {result.onPage.imagesWithoutAlt}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Canonical-URL</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  result.onPage.canonical.ok 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {result.onPage.canonical.ok ? '✓ OK' : '✗ Fehlt'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Open Graph Tags</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  result.onPage.ogTags.ok 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {result.onPage.ogTags.ok ? '✓ OK' : `✗ Fehlen: ${result.onPage.ogTags.missing.join(', ')}`}
                </span>
              </div>
            </div>
          </div>

          {/* Crawlability Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🕷️ Indexierbarkeit
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Robots.txt</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  result.crawlability.robots === 'OK' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {result.crawlability.robots}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">XML-Sitemap</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  result.crawlability.sitemap === 'FOUND' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {result.crawlability.sitemap}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Meta Robots Noindex</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  !result.crawlability.metaRobotsNoindex 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {result.crawlability.metaRobotsNoindex ? '✗ Blockiert' : '✓ Erlaubt'}
                </span>
              </div>
            </div>
          </div>

          {/* Email Status */}
          {result.mailSent !== undefined && (
            <div className={`p-4 rounded-lg ${
              result.mailSent 
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              <p className={`text-sm ${
                result.mailSent 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {result.mailSent 
                  ? '✓ Audit-Bericht wurde per E-Mail gesendet' 
                  : `✗ E-Mail konnte nicht gesendet werden: ${result.mailError || 'Unbekannter Fehler'}`
                }
              </p>
              
              {result.newsletterSubscribed && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                  🎯 ✓ Du erhältst jetzt auch unsere SEO-Tipps per E-Mail!
                </p>
              )}
              
              {result.leadId && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Lead-ID: {result.leadId}
                </p>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <Button href="/kontakt" variant="primary">
              Kostenlose 20-Minuten-Beratung buchen
            </Button>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Unsere SEO-Experten helfen dir gerne bei der Umsetzung dieser Empfehlungen.
            </p>
          </div>

          {/* Storage Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 dark:text-blue-400 text-lg">ℹ️</div>
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Speicherung deines Audit-Berichts
                </h3>
                <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <p>• <strong>Dein Audit-Bericht wird 7 Tage lang gespeichert</strong> und ist über den Link in der E-Mail abrufbar</p>
                  <p>• Nach 7 Tagen wird der Bericht automatisch gelöscht und ist nicht mehr verfügbar</p>
                  <p>• Speichere wichtige Informationen rechtzeitig oder buche eine Beratung für detaillierte Unterstützung</p>
                </div>
              </div>
            </div>
          </div>

          {/* Restart Button */}
          <div className="text-center">
            <Button 
              variant="secondary" 
              onClick={() => {
                setResult(null);
                setError(null);
                setEmailError(null);
                setFormData({ url: '', email: '', consent: false, newsletterConsent: false });
              }}
            >
              Neues Audit starten
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}
