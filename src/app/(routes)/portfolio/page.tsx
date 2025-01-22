import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Portfolio | Gerald Hüsch",
  description: "Entdecken Sie meine Webentwicklungsprojekte und Arbeiten im Bereich moderner Webtechnologien.",
};

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Eine moderne E-Commerce-Plattform mit Next.js und Tailwind CSS. Features wie Produktfilterung, Warenkorbverwaltung und sicherer Checkout-Prozess.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Konzept",
  },
  {
    title: "Aufgabenverwaltung",
    description: "Eine Produktivitäts-App für die Verwaltung von Aufgaben und Projekten. Mit Drag-and-Drop-Organisation, Teamzusammenarbeit und Echtzeit-Updates.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "In Entwicklung",
  },
  {
    title: "Wetter Dashboard",
    description: "Ein Wetter-Dashboard mit Echtzeitinformationen und Vorhersagen. Mit standortbasierter Wetteranzeige und interaktiven Karten.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Weather API"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Planung",
  },
  {
    title: "Blog Platform",
    description: "Eine moderne Blogging-Plattform mit Markdown-Unterstützung, Kategorisierung und Suchfunktion. Optimiert für SEO und Lesefreundlichkeit.",
    technologies: ["Astro", "React", "MDX", "TailwindCSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Konzept",
  },
  {
    title: "Restaurant Buchungssystem",
    description: "Ein Online-Reservierungssystem für Restaurants mit Echtzeitverfügbarkeit, Tischauswahl und automatischen Bestätigungen.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "In Entwicklung",
  },
  {
    title: "Fitness Tracker",
    description: "Eine Fitness-App zur Verfolgung von Workouts, Ernährung und Fortschritt. Mit personalisierten Trainingsplänen und Statistiken.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Planung",
  },
  {
    title: "Immobilien Portal",
    description: "Ein Portal für Immobilienangebote mit detaillierter Suche, virtuellen Besichtigungen und Kontaktmöglichkeiten.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "MapboxGL"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Konzept",
  },
  {
    title: "Event Management",
    description: "Eine Plattform für die Organisation und Verwaltung von Events, mit Ticketing-System und Teilnehmerverwaltung.",
    technologies: ["Nuxt.js", "Supabase", "Stripe", "TailwindCSS"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "In Entwicklung",
  },
  {
    title: "Learning Management System",
    description: "Ein LMS für Online-Kurse mit Videostreaming, Fortschrittsverfolgung und interaktiven Übungen.",
    technologies: ["Next.js", "TypeScript", "AWS", "MongoDB"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    status: "Planung",
  },
];

export default function PortfolioPage() {
  return (
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
  );
}
