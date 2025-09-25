import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolioSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: "Portfolio Webdesign für KMU | Erfolgreiche Projekte Österreich & Deutschland",
  description: "Entdecken Sie unsere erfolgreichen KMU Webdesign-Projekte in Österreich & Deutschland. Von modernen Websites bis zu E-Commerce Lösungen - Inspiration für Ihr nächstes Projekt.",
  openGraph: {
    title: "Portfolio Webdesign für KMU | Erfolgreiche Projekte Österreich & Deutschland",
    description: "Entdecken Sie unsere erfolgreichen KMU Webdesign-Projekte in Österreich & Deutschland. Von modernen Websites bis zu E-Commerce Lösungen - Inspiration für Ihr nächstes Projekt.",
    url: "https://simplewebdesign.at/portfolio",
    images: [
      {
        url: "/img/portfolio/showcase.jpg",
        width: 1200,
        height: 630,
        alt: "SimpleWeb Design Portfolio"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Webdesign für KMU | Erfolgreiche Projekte Österreich & Deutschland",
    description: "Entdecken Sie unsere erfolgreichen KMU Webdesign-Projekte in Österreich & Deutschland.",
    images: ["/img/portfolio/showcase.jpg"],
  },
  alternates: {
    canonical: "https://simplewebdesign.at/portfolio",
  },
};

const projects = [
  {
    id: "parkett-stelzl",
    title: "Parkett Stelzl",
    description:
      "Eine moderne Unternehmenswebsite für Parkett Stelzl in München mit responsivem Design, optimiert für mobile Geräte. Features wie Kontaktformular, Angebotsbereich und Leistungsübersicht.",
    technologies: ["Nuxt.js", "Vue.js", "UIKit 3", "Static Site"],
    imageUrl: "/img/portfolio/parkett-stelzl-munich.jpg",
    status: "Relaunch",
    websiteUrl: "https://artparkett-stelzl.de",
  },
  {
    id: "mueller-bodenleger",
    title: "Müller Bodenbeläge",
    description:
      "Derzeit ist die Webseite von Müller Bodenbeläge in München noch ein OnePager, erstellt mit Nuxt.js. Wir überarbeiten die Webseite gerade auf eine moderne Unternehmenswebsite mit responsivem Design. Features wie Kontaktformular, Angebotsbereich und Leistungsübersicht.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "ReDesign",
    websiteUrl: "https://boden-mueller.de",
  },
  {
    id: "online-shop",
    title: "Online Shop",
    description:
      "Ein moderner Webshop mit benutzerfreundlicher Navigation, Produktfiltern und sicherem Checkout-Prozess. Optimiert für Conversion und Nutzererlebnis.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "In Entwicklung",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Eine elegante Portfolio-Website für Kreative, mit Bildergalerie, Projektvorstellung und Kontaktmöglichkeiten. Perfekt für Selbstständige und Freelancer.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Planung",
  },
  {
    id: "blog-website",
    title: "Blog Website",
    description:
      "Eine moderne Blog-Website mit Kategorien, Tags und Suchfunktion. Optimiert für SEO und Lesefreundlichkeit, ideal für Content Creator.",
    technologies: ["Next.js", "MDX", "TailwindCSS"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Konzept",
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    description:
      "Eine ansprechende Website für Restaurants mit Speisekarte, Bildergalerie und Online-Reservierungssystem. Mobile-first Design für optimale Nutzung.",
    technologies: ["CMS", "Marktplatz", "TailwindCSS"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "In Entwicklung",
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description:
      "Eine conversion-optimierte Landing Page für Produkte oder Dienstleistungen. Mit Call-to-Actions, Testimonials und responsivem Design.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Planung",
  },
  {
    id: "immobilien-website",
    title: "Immobilien Website",
    description:
      "Eine professionelle Website für Immobilienmakler mit Objektsuche, Detailansichten und Kontaktformularen. Optimiert für lokales SEO.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Konzept",
  },
  {
    id: "event-website",
    title: "Event Website",
    description:
      "Eine informative Website für Veranstaltungen mit Programm-Übersicht, Anfahrt und Newsletter-Anmeldung. Ideal für Konferenzen und Events.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "In Entwicklung",
  },
  {
    id: "bildung-website",
    title: "Bildung Website",
    description:
      "Eine übersichtliche Website für Bildungsangebote mit Kursübersicht, Anmeldeformular und Dozenten-Vorstellung. Perfekt für Schulen und Trainer.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Planung",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            portfolioSchema({
              name: "SimpleWeb Design Portfolio",
              description: "Unsere erfolgreichen Webdesign-Projekte. Von modernen Websites bis zu E-Commerce Lösungen.",
              image: "/img/portfolio/showcase.jpg",
              projects: projects.map((project) => ({
                name: project.title,
                description: project.description,
                image: project.imageUrl,
                url: "#"
              }))
            })
          ),
        }}
      />
      <main className="flex-auto">
        <Container className="mt-16 sm:mt-32">
          <header className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800 mb-8">
              <span className="text-green-600 dark:text-green-400 font-medium">✨ Erfolgreiche Projekte</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Portfolio Webdesign für KMU
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Willkommen in unserem Portfolio! Diese KMU-Projekte aus Wien, München, Waldviertel und ganz Österreich & Deutschland repräsentieren unsere Expertise in der Webentwicklung für kleine und mittlere Unternehmen. Von modernen Next.js-Websites über Shopify E-Commerce-Lösungen bis hin zu Strapi CMS-Integrationen - hier finden Sie Inspiration für Ihr nächstes Projekt.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <a href="/services/webdesign" className="hover:text-green-600 dark:hover:text-green-400 underline">Webdesign-Services</a>
              <span>•</span>
              <a href="/preise-und-pakete" className="hover:text-green-600 dark:hover:text-green-400 underline">Preise</a>
              <span>•</span>
              <a href="/kontakt" className="hover:text-green-600 dark:hover:text-green-400 underline">Kontakt</a>
            </div>
          </header>
          <div className="mt-16 sm:mt-20 pb-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            
            {/* Trust Signals */}
            <div className="mt-20 text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Erfolgreiche KMU-Projekte</div>
                </div>
                <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Jahre Erfahrung</div>
                </div>
                <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Kundenzufriedenheit</div>
                </div>
              </div>
            </div>

            {/* Modern CTA */}
            <div className="mt-20 text-center">
              <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-16 shadow-2xl rounded-3xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
                <div className="relative">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Bereit für Ihr nächstes Projekt?
                  </h3>
                  <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                    Lassen Sie uns gemeinsam Ihre Vision in die digitale Welt bringen. Kostenlose Beratung für KMU in Österreich & Deutschland.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <span>Projekt starten</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href="/preise-und-pakete"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-bold text-lg border-2 border-white rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300"
                    >
                      <span>Preise ansehen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
