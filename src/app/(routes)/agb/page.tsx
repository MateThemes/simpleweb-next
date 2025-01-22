import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen | SimpleWebDesign',
  description: 'Allgemeine Geschäftsbedingungen von SimpleWebDesign - Ihre Webagentur aus dem Waldviertel.',
}

export default function AGBPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-12">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="space-y-12 text-base text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              1. Geltungsbereich
            </h2>
            <div className="space-y-4">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (nachfolgend &quot;AGB&quot;) gelten für alle zwischen Gerald Schandl (SimpleWebDesign)
                (nachfolgend &quot;Agentur&quot;) und dem Auftraggeber geschlossenen Verträge über die Erbringung von
                Webdesign-, SEO- und Marketingdienstleistungen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              2. Vertragsschluss
            </h2>
            <div className="space-y-4">
              <p>
                Die Angebote der Agentur sind freibleibend. Der Vertrag kommt durch die Annahme des Auftrags durch
                die Agentur zustande. Die Annahme erfolgt durch schriftliche Auftragsbestätigung oder durch
                Ausführung der vereinbarten Leistungen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              3. Leistungsumfang
            </h2>
            <div className="space-y-6">
              <p>
                Der Umfang der zu erbringenden Leistungen ergibt sich aus der schriftlichen Auftragsbestätigung
                der Agentur. Nachträgliche Änderungen des Leistungsinhalts bedürfen der schriftlichen Bestätigung
                durch die Agentur.
              </p>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  3.1 Webdesign-Leistungen
                </h3>
                <p>
                  Die Agentur erstellt die Website nach den Vorgaben des Auftraggebers. Der Auftraggeber erhält
                  Gelegenheit, die Website zu prüfen und freizugeben. Mit der Freigabe bestätigt der Auftraggeber
                  die Vertragsgemäßheit der Website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  3.2 SEO-Leistungen
                </h3>
                <p>
                  Die Agentur optimiert die Website des Auftraggebers nach den aktuellen Standards der
                  Suchmaschinenoptimierung. Ein bestimmter Erfolg wird nicht geschuldet.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              4. Mitwirkungspflichten des Auftraggebers
            </h2>
            <div className="space-y-4">
              <p>
                Der Auftraggeber stellt der Agentur alle für die Durchführung des Projekts benötigten Daten und
                Unterlagen unentgeltlich zur Verfügung. Alle Arbeitsunterlagen werden von der Agentur sorgsam
                behandelt, vor dem Zugriff Dritter geschützt und nur zur Erarbeitung des jeweiligen Auftrags genutzt.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              5. Vergütung
            </h2>
            <div className="space-y-4">
              <p>
                Es gilt die vereinbarte Vergütung. Zahlungen sind, wenn nicht anders vertraglich geregelt,
                innerhalb von 14 Tagen nach Rechnungsstellung ohne jeden Abzug fällig.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              6. Nutzungsrechte
            </h2>
            <div className="space-y-4">
              <p>
                Die Agentur überträgt dem Auftraggeber mit vollständiger Bezahlung alle für den jeweiligen
                Verwendungszweck erforderlichen Nutzungsrechte in dem Umfang, wie dies für den Auftrag vereinbart ist.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              7. Gewährleistung und Haftung
            </h2>
            <div className="space-y-4">
              <p>
                Die Agentur verpflichtet sich, den Auftrag mit größtmöglicher Sorgfalt auszuführen. Bei Fehlern
                oder Mängeln an den erbrachten Leistungen besteht ein Anspruch auf Nachbesserung.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              8. Kündigung
            </h2>
            <div className="space-y-4">
              <p>
                Der Vertrag kann nur aus wichtigem Grund gekündigt werden. Jede Kündigung bedarf der Schriftform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              9. Schlussbestimmungen
            </h2>
            <div className="space-y-4">
              <p>9.1 Es gilt das Recht der Republik Österreich.</p>
              <p>9.2 Erfüllungsort und Gerichtsstand ist der Sitz der Agentur.</p>
              <p>
                9.3 Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein oder werden, so wird die
                Gültigkeit der übrigen Bestimmungen dadurch nicht berührt.
              </p>
            </div>
          </section>

          <p className="text-sm mt-8 text-gray-500 dark:text-gray-400">
            Stand: Januar 2025
          </p>
        </div>
      </div>
    </Container>
  )
}