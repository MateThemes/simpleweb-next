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
              Angaben gemäß § 5 TMG und § 14 UGB
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
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              Gewerbeberechtigung
            </h2>
            <div className="space-y-4">
              <p>Dienstleistungen in der Informationstechnologie</p>
              <p>
                Mitglied der Wirtschaftskammer Österreich (WKÖ),
                Wirtschaftskammer Niederösterreich (WKNÖ), Landesinnung
                Informationstechnologie
              </p>
              <p>
                Aufsichtsbehörde/Gewerbebehörde
                <br />
                Bezirkshauptmannschaft Waidhofen an der Thaya
              </p>
              <p>
                Umsatzsteuer-Identifikationsnummer
                <br />
                Gemäß § 6 Abs. 1 Z 27 UStG von der Umsatzsteuer befreit
                (Kleinunternehmerregelung).
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
              Haftung für Inhalte
            </h2>
            <div className="space-y-4">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
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
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}