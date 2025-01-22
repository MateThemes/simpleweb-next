import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | SimpleWebDesign',
  description: 'Impressum und rechtliche Informationen von SimpleWebDesign - Ihre Webagentur aus dem Waldviertel.',
}

export default function ImpressumPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-12">
          Impressum
        </h1>

        <div className="space-y-12 text-base text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                Gerald Schandl
              </p>
              <p>SimpleWebDesign</p>
              <p>Sonnleite 20, 3902 Vitis</p>
              <p>Niederösterreich</p>
              <p>Österreich</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              Kontakt
            </h2>
            <div className="space-y-2">
              <p>Telefon: [+43 664 518 26 96]</p>
              <p>E-Mail: info[at]simplewebdesign.at</p>
              <p>Dienstleistungen in der Informationstechnologie</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              Umsatzsteuer-ID
            </h2>
            <div className="space-y-4">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a
                Umsatzsteuergesetz:
                <br />
                [Ihre UID-Nummer]
              </p>
              <p>Mitglied der WKÖ, WKNÖ, Landesinnung ...?</p>

              <p>
                Aufsichtsbehörde/Gewerbebehörde Bezirkshauptmannschaft
                Waidhofen an der Thaya
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <div className="space-y-4">
              <p>
                Berufsbezeichnung: Webdesigner und Online Marketing Berater
                <br />
                Verliehen in: Österreich
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              EU-Streitschlichtung
            </h2>
            <div className="space-y-4">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              Haftung für Inhalte
            </h2>
            <div className="space-y-4">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              Urheberrecht
            </h2>
            <div className="space-y-4">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem österreichischen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}