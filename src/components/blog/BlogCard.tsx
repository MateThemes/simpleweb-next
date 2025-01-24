import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export function BlogCard({ title, description, date, slug }: BlogCardProps) {
  return (
    <article className="relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-neutral-950 dark:text-white">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <time
        dateTime={date}
        className="relative z-10 order-first mb-3 flex items-center text-sm text-neutral-600 dark:text-neutral-400"
      >
        {formatDate(date)}
      </time>
      <p className="relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </article>
  );
}
