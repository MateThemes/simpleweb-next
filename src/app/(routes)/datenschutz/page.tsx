import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | SimpleWebDesign',
  description: 'Datenschutzerklärung von SimpleWebDesign - Erfahren Sie mehr über den Schutz Ihrer persönlichen Daten.',
}

export default function DatenschutzPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-12">
          Datenschutzerklärung
        </h1>

        <div className="space-y-12 text-base text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              1. Datenschutz auf einen Blick
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Datenerfassung auf dieser Website
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                    </h4>
                    <p>
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                      können Sie dem Impressum dieser Website entnehmen.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Wie erfassen wir Ihre Daten?
                    </h4>
                    <div className="space-y-2">
                      <p>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
                        z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                      </p>
                      <p>
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                        IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
                        Uhrzeit des Seitenaufrufs).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              2. Hosting
            </h2>
            <div className="space-y-4">
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Externes Hosting
                </h3>
                <p>
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
                  werden, werden auf den Servern des Hosters gespeichert.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Datenschutz
                </h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                  Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                  sowie dieser Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  SSL- bzw. TLS-Verschlüsselung
                </h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
                  wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                  Adresszeile des Browsers von &#34;http://&#34; auf &#34;https://&#34; wechselt und an dem Schloss-Symbol in
                  Ihrer Browserzeile.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              4. Datenerfassung auf dieser Website
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Cookies
                </h3>
                <p>
                  Unsere Internetseiten verwenden so genannte &#34;Cookies&#34;. Cookies sind kleine Textdateien und richten
                  auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer
                  Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Server-Log-Dateien
                </h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                  &#34;Server-Log-Dateien&#34;, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              5. Analyse-Tools und Werbung
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Google Analytics
                </h3>
                <p>
                  Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google
                  Ireland Limited (&#34;Google&#34;), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              6. Newsletter
            </h2>
            <div className="space-y-4">
              <p>
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine
                E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der
                angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              7. Plugins und Tools
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Google Web Fonts
                </h3>
                <p>
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte &#34;Web Fonts&#34;. Beim Aufruf
                  einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und
                  Schriftarten korrekt anzuzeigen.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}