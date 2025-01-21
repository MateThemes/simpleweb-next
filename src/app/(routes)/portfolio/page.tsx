import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Portfolio | Gerald Hüsch",
  description: "Showcase of my web development projects and work",
};

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Tailwind CSS. Features include product filtering, cart management, and secure checkout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/images/portfolio/ecommerce-placeholder.jpg",
    status: "Concept",
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects. Includes features like drag-and-drop organization, team collaboration, and real-time updates.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    imageUrl: "/images/portfolio/task-app-placeholder.jpg",
    status: "In Development",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that provides real-time weather information and forecasts. Features include location-based weather data and interactive maps.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Weather API"],
    imageUrl: "/images/portfolio/weather-placeholder.jpg",
    status: "Planning",
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex-auto">
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            My Portfolio
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Welcome to my portfolio! These projects represent my journey in web development,
            showcasing my skills and future aspirations. While some are still in development
            or planning stages, they reflect my commitment to creating meaningful and
            innovative web solutions.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
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
