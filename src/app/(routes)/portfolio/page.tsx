import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolioSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: "Portfolio Webdesign & Beispiele für KMU | SimpleWebDesign Österreich & Deutschland",
  description: "Ausgewählte Webdesign-Projekte und Demo-Websites für KMU, Handwerker & E-Commerce. Moderne, performante Websites mit Fokus auf Design & SEO.",
  openGraph: {
    title: "Portfolio Webdesign & Beispiele für KMU | SimpleWebDesign Österreich & Deutschland",
    description: "Ausgewählte Webdesign-Projekte und Demo-Websites für KMU, Handwerker & E-Commerce. Moderne, performante Websites mit Fokus auf Design & SEO.",
    url: "https://simplewebdesign.at/portfolio",
    images: [
      {
        url: "/img/portfolio/showcase.jpg",
        width: 1200,
        height: 630,
        alt: "SimpleWebDesign Portfolio"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Webdesign & Beispiele für KMU | SimpleWebDesign",
    description: "Ausgewählte Webdesign-Projekte und Demo-Websites für KMU, Handwerker & E-Commerce.",
    images: ["/img/portfolio/showcase.jpg"],
  },
  alternates: {
    canonical: "https://simplewebdesign.at/portfolio",
  },
};

const projects = [
  {
    id: "parkett-stelzl",
    title: "Parkett Stelzl – München",
    description: "Relaunch einer modernen Unternehmenswebsite für den Handwerksbetrieb Parkett Stelzl. Wir entwickelten eine neue, mobiloptimierte Website mit klarer Leistungsübersicht, Kontaktformular und SEO-Optimierung. Der Fokus lag auf regionaler Sichtbarkeit und einfacher Pflege über ein CMS.",
    technologies: ["Nuxt.js", "UIKit 3"],
    imageUrl: "/img/portfolio/parkett-stelzl-munich.jpg",
    status: "Relaunch",
    imageAlt: "Parkett Stelzl Website Screenshot",
    websiteUrl: "https://artparkett-stelzl.de/",
  },
  {
    id: "moderncut-friseur",
    title: "ModernCut Friseur",
    description: "Demo-Website für Beauty & Dienstleistungsbetriebe mit Terminbuchung, Galerie und Preisübersicht. Mobile-first Design für optimale Kundenerfahrung.",
    technologies: ["Next.js", "Tailwind CSS", "SEO-optimiert"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Demo",
    imageAlt: "Friseur Website Demo",
  },
  {
    id: "bodenpro-handwerk",
    title: "BodenPro Handwerk",
    description: "Beispielseite für Handwerksbetriebe & Bauunternehmen mit Leistungsübersicht, Referenzen und Kontaktformular. Optimiert für lokale Suchanfragen.",
    technologies: ["Next.js", "Tailwind CSS", "DSGVO-konform"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Demo",
    imageAlt: "Handwerker Website Beispiel",
  },
  {
    id: "ecofit-store",
    title: "EcoFit Store",
    description: "Demo-Shop auf Shopify für nachhaltige Produkte mit Produktfilter, Bewertungen und Wunschliste. Responsive Design für alle Geräte.",
    technologies: ["Shopify", "Liquid", "Responsive Design"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Demo",
    imageAlt: "Shopify Store Demo",
  },
  {
    id: "smarthelp-automation",
    title: "SmartHelp Automation",
    description: "KI-Automatisierung Demo: Anfrageprozess mit n8n & ChatGPT. Automatische E-Mail-Bearbeitung und Workflow-Optimierung für KMU.",
    technologies: ["Next.js", "n8n", "API Workflow"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Demo",
    imageAlt: "KI Automatisierung Workflow Beispiel",
  },
  {
    id: "eventplan-plattform",
    title: "EventPlan Plattform",
    description: "Webplattform für Events mit Kalender & Buchungssystem. Integrierte Zahlungsabwicklung und E-Mail-Benachrichtigungen für Teilnehmer.",
    technologies: ["Next.js", "Strapi CMS", "Stripe Checkout"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Demo",
    imageAlt: "Event Website Demo",
  },
  {
    id: "immoview",
    title: "ImmoView",
    description: "Demo-Projekt für Immobilienmakler mit Objektsuche, Filterfunktionen und Kartenintegration. Optimiert für lokale Immobilienportale.",
    technologies: ["Next.js", "Tailwind CSS", "Map Integration"],
    imageUrl: "/img/portfolio/placeholder.jpg",
    status: "Demo",
    imageAlt: "Immobilien Website Beispiel",
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
              name: "SimpleWebDesign Portfolio",
              description: "Ausgewählte Webdesign-Projekte und Demo-Websites für KMU, Handwerker & E-Commerce.",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-8">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">✨ Erfolgreiche Projekte</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Erfolgreiche Projekte & Webdesign-Demos für KMU
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Ein Teil unserer Projekte entsteht im Rahmen von Agenturpartnerschaften und darf aus Vertraulichkeitsgründen nicht öffentlich gezeigt werden.
            </p>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Hier finden Sie freigegebene Arbeiten sowie ausgewählte Demo-Websites, die typische Branchenprojekte repräsentieren.
            </p>
            <p className="mt-6 text-base text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto">
              Unsere Arbeit deckt vielfältige Branchen ab – vom Handwerksbetrieb über Friseure bis hin zu Shopify Online-Shops und KI-gestützten Prozessen.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <a href="/services/webdesign" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Webdesign-Services</a>
              <span>•</span>
              <a href="/preise-und-pakete" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Preise</a>
              <span>•</span>
              <a href="/kontakt" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Kontakt</a>
            </div>
          </header>
          
          <div className="mt-16 sm:mt-20 pb-24">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* 🪵 Real Client Project – Parkett Stelzl */}
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  imageUrl={project.imageUrl}
                  status={project.status}
                  websiteUrl={project.websiteUrl}
                  imageAlt={project.imageAlt}
                />
              ))}
            </div>
            
            {/* Trust Metrics Section */}
            <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
                <div className="flex flex-col items-center p-6">
                  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Webprojekte umgesetzt</p>
                </div>
                <div className="flex flex-col items-center p-6">
                  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5+</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Jahre Erfahrung</p>
                </div>
                <div className="flex flex-col items-center p-6">
                  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100%</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Kundenzufriedenheit</p>
                </div>
              </div>
            </div>

            {/* Modern CTA */}
            <div className="mt-20 text-center">
              <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-16 shadow-2xl rounded-3xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
                <div className="relative">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Bereit für Ihr nächstes Projekt?
                  </h3>
                  <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                    Lassen Sie uns gemeinsam Ihre Vision in die digitale Welt bringen. Kostenlose Beratung für KMU in Österreich & Deutschland.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <span>Projekt starten</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href="/preise-und-pakete"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-bold text-lg border-2 border-white rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
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
