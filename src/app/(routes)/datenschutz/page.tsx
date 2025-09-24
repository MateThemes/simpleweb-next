import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'
import { CookieSettingsOpener } from '@/components/cookie/CookieSettingsOpener'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | SimpleWebDesign',
  description: 'Datenschutzerklärung von SimpleWebDesign - Erfahren Sie mehr über den Schutz Ihrer persönlichen Daten.',
  openGraph: {
    title: 'Datenschutzerklärung | SimpleWebDesign',
    description: 'Datenschutzerklärung von SimpleWebDesign - Erfahren Sie mehr über den Schutz Ihrer persönlichen Daten.',
    type: 'website',
    url: 'https://simplewebdesign.at/datenschutz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Datenschutzerklärung | SimpleWebDesign',
    description: 'Datenschutzerklärung von SimpleWebDesign - Erfahren Sie mehr über den Schutz Ihrer persönlichen Daten.',
  },
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
              4. Cookies und Tracking
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Cookies
                </h3>
                <div className="space-y-4">
                  <p>
                    Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.
                    Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                  </p>
                  <p>
                    Wir verwenden verschiedene Arten von Cookies:
                  </p>
                  <div className="space-y-4 pl-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Notwendige Cookies
                      </h4>
                      <p>
                        Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. 
                        Sie werden nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen, 
                        wie etwa dem Festlegen Ihrer Datenschutzeinstellungen oder dem Ausfüllen von Formularen.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Analyse-Cookies
                      </h4>
                      <p>
                        Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen 
                        und verbessern können. Sie helfen uns zu verstehen, welche Seiten am beliebtesten und am wenigsten beliebt sind, 
                        und zu sehen, wie sich Besucher auf der Website bewegen.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Marketing-Cookies
                      </h4>
                      <p>
                        Diese Cookies können von uns oder unseren Werbepartnern über unsere Website gesetzt werden. 
                        Sie können verwendet werden, um ein Interessenprofil zu erstellen und Ihnen relevante Werbung 
                        auf anderen Websites zu zeigen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Cookie-Einstellungen
                </h3>
                <p>
                  Sie können Ihre Cookie-Einstellungen jederzeit anpassen. Klicken Sie dazu auf den Button unten, 
                  um Ihre Präferenzen zu überprüfen oder zu ändern.
                </p>
                <div className="mt-4">
                  <CookieSettingsOpener />
                </div>
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
              6. SEO-Audit-Tool
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Datenerfassung beim SEO-Audit
                </h3>
                <p>
                  Unser kostenloses SEO-Audit-Tool analysiert Ihre Website auf Suchmaschinenoptimierung und Performance. 
                  Bei der Nutzung dieses Tools erfassen wir folgende Daten:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Website-URL:</strong> Die von Ihnen eingegebene URL wird zur technischen Analyse verwendet</li>
                  <li><strong>E-Mail-Adresse (optional):</strong> Nur wenn Sie den Audit-Bericht per E-Mail erhalten möchten</li>
                  <li><strong>IP-Adresse:</strong> Zur Sicherheit und Rate-Limiting (wird gehashed gespeichert)</li>
                  <li><strong>Technische Daten:</strong> Performance-Metriken, SEO-Bewertungen und Analyseergebnisse</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Rechtsgrundlage und Zweck
                </h3>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage Ihrer freiwilligen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
                  Der Zweck der Datenverarbeitung ist die Bereitstellung eines kostenlosen SEO-Audit-Services zur 
                  Analyse Ihrer Website-Performance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Speicherdauer
                </h3>
                <p>
                  Die eingegebene URL und Analyseergebnisse werden temporär für maximal 7 Tage gespeichert, 
                  um die Qualität unseres Services zu gewährleisten. E-Mail-Adressen werden nur bei expliziter 
                  Einwilligung für die Zusendung des Audit-Berichts verwendet.
                </p>
                <p className="mt-4">
                  <strong>Automatische Löschung:</strong> Nach 7 Tagen werden alle Audit-Berichte und 
                  zugehörigen Daten automatisch und unwiderruflich gelöscht. Die Berichte sind dann 
                  nicht mehr über die bereitgestellten Links abrufbar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Drittanbieter-Integrationen
                </h3>
                <p>
                  Für die technische Analyse nutzen wir folgende Dienste:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Google PageSpeed Insights API:</strong> Zur Performance-Analyse (nur bei konfigurierter API)</li>
                  <li><strong>Resend E-Mail-Service:</strong> Zur Versendung von Audit-Berichten (EU-Server, DSGVO-konform)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              7. Newsletter
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Newsletter-Anmeldung
                </h3>
                <p>
                  Wenn Sie unseren Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie 
                  Ihre explizite Einwilligung zum Empfang des Newsletters. Die Anmeldung erfolgt über:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Kontaktformular mit Newsletter-Checkbox</li>
                  <li>SEO-Audit-Tool mit Newsletter-Einwilligung</li>
                  <li>Direkte Newsletter-Anmeldung (falls verfügbar)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Rechtsgrundlage
                </h3>
                <p>
                  Die Verarbeitung Ihrer E-Mail-Adresse erfolgt ausschließlich auf Grundlage Ihrer freiwilligen 
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die Einwilligung zur Speicherung der Daten, der 
                  E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Newsletter-Inhalte
                </h3>
                <p>
                  Unser Newsletter enthält regelmäßig Informationen zu:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>SEO-Tipps und Webdesign-Trends</li>
                  <li>Neue Services und Angebote</li>
                  <li>Technische Updates und Best Practices</li>
                  <li>Kundenerfolge und Case Studies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Newsletter-Anbieter
                </h3>
                <p>
                  Wir nutzen für den Versand unseres Newsletters den E-Mail-Service Resend (Resend Inc., 
                  San Francisco, CA, USA). Resend ist DSGVO-konform und verarbeitet Daten auf EU-Servern. 
                  Weitere Informationen finden Sie in der Datenschutzerklärung von Resend.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Abmeldung
                </h3>
                <p>
                  Sie können den Newsletter jederzeit abbestellen. Dazu können Sie:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Den Abmeldelink in jeder Newsletter-E-Mail nutzen</li>
                  <li>Eine E-Mail mit &ldquo;Abmelden&rdquo; an uns senden</li>
                  <li>Uns über das Kontaktformular kontaktieren</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Speicherdauer
                </h3>
                <p>
                  Die bei der Newsletter-Anmeldung angegebenen Daten werden von uns gespeichert, bis Sie sich 
                  vom Newsletter abmelden und nach der Abmeldung aus unseren Servern gelöscht. Daten, die zu 
                  anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              8. Ihre Rechte
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Betroffenenrechte nach DSGVO
                </h3>
                <p>
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über die von uns verarbeiteten personenbezogenen Daten verlangen</li>
                  <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten</li>
                  <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer personenbezogenen Daten verlangen</li>
                  <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen</li>
                  <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen Format zu erhalten</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer Daten widersprechen</li>
                  <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können Ihre Einwilligung jederzeit widerrufen</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Beschwerderecht
                </h3>
                <p>
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung 
                  Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde 
                  in Österreich ist die Datenschutzbehörde (DSB).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                  Kontakt für Datenschutzanfragen
                </h3>
                <p>
                  Für alle Anfragen bezüglich Ihrer personenbezogenen Daten wenden Sie sich bitte an:
                </p>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p><strong>E-Mail:</strong> info@simplewebdesign.at</p>
                  <p><strong>Post:</strong> Gerald Schandl - SimpleWebDesign, Sonnleite 20, 3902 Vitis, Österreich</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              9. Plugins und Tools
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