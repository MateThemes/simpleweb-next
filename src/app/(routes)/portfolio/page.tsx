import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolioSchema } from "@/app/schema";

export const metadata: Metadata = {
  title: "Portfolio | Unsere Webdesign Projekte",
  description: "Entdecken Sie unsere erfolgreichen Webdesign-Projekte. Von modernen Websites bis zu E-Commerce Lösungen - hier finden Sie Inspiration für Ihr nächstes Projekt.",
  openGraph: {
    title: "Portfolio | Unsere Webdesign Projekte",
    description: "Entdecken Sie unsere erfolgreichen Webdesign-Projekte. Von modernen Websites bis zu E-Commerce Lösungen - hier finden Sie Inspiration für Ihr nächstes Projekt.",
    url: "https://simplewebdesign.at/portfolio",
    images: [
      {
        url: "/img/portfolio/showcase.jpg",
        width: 1200,
        height: 630,
        alt: "SimpleWeb Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Unsere Webdesign Projekte",
    description: "Entdecken Sie unsere erfolgreichen Webdesign-Projekte.",
    images: ["/img/portfolio/showcase.jpg"],
  },
  alternates: {
    canonical: "https://simplewebdesign.at/portfolio",
  },
};

const projects = [
  {
    title: "Business Website",
    description: "Eine moderne Unternehmenswebsite mit responsivem Design, optimiert für mobile Geräte. Features wie Kontaktformular, Blog-Bereich und Leistungsübersicht.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Konzept",
  },
  {
    title: "Online Shop",
    description: "Ein moderner Webshop mit benutzerfreundlicher Navigation, Produktfiltern und sicherem Checkout-Prozess. Optimiert für Conversion und Nutzererlebnis.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "In Entwicklung",
  },
  {
    title: "Portfolio Website",
    description: "Eine elegante Portfolio-Website für Kreative, mit Bildergalerie, Projektvorstellung und Kontaktmöglichkeiten. Perfekt für Selbstständige und Freelancer.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Planung",
  },
  {
    title: "Blog Website",
    description: "Eine moderne Blog-Website mit Kategorien, Tags und Suchfunktion. Optimiert für SEO und Lesefreundlichkeit, ideal für Content Creator.",
    technologies: ["Next.js", "MDX", "TailwindCSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Konzept",
  },
  {
    title: "Restaurant Website",
    description: "Eine ansprechende Website für Restaurants mit Speisekarte, Bildergalerie und Online-Reservierungssystem. Mobile-first Design für optimale Nutzung.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "In Entwicklung",
  },
  {
    title: "Landing Page",
    description: "Eine conversion-optimierte Landing Page für Produkte oder Dienstleistungen. Mit Call-to-Actions, Testimonials und responsivem Design.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Planung",
  },
  {
    title: "Immobilien Website",
    description: "Eine professionelle Website für Immobilienmakler mit Objektsuche, Detailansichten und Kontaktformularen. Optimiert für lokales SEO.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Konzept",
  },
  {
    title: "Event Website",
    description: "Eine informative Website für Veranstaltungen mit Programm-Übersicht, Anfahrt und Newsletter-Anmeldung. Ideal für Konferenzen und Events.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "In Entwicklung",
  },
  {
    title: "Bildung Website",
    description: "Eine übersichtliche Website für Bildungsangebote mit Kursübersicht, Anmeldeformular und Dozenten-Vorstellung. Perfekt für Schulen und Trainer.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
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
          <header className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Mein Portfolio
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Willkommen in meinem Portfolio! Diese Projekte repräsentieren meine Reise in der Webentwicklung
              und zeigen meine Fähigkeiten sowie zukünftige Ambitionen. Einige befinden sich noch in der
              Entwicklung oder Planung, aber sie spiegeln mein Engagement wider, innovative und
              bedeutungsvolle Weblösungen zu schaffen.
            </p>
          </header>
          <div className="mt-16 sm:mt-20 pb-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
