import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  status: string;
  websiteUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  status,
  websiteUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
      <div className="aspect-[16/9] overflow-hidden relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
            <span className="text-sm">Image Placeholder</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {websiteUrl ? (
                <a 
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {title} <span className="inline-block ml-1">↗</span>
                </a>
              ) : (
                title
              )}
            </h3>
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100">
              {status}
            </span>
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
