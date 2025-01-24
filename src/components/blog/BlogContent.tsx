import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { ComponentProps, HTMLAttributes } from 'react'

type MDXComponents = {
  h1: React.FC<HTMLAttributes<HTMLHeadingElement>>
  h2: React.FC<HTMLAttributes<HTMLHeadingElement>>
  h3: React.FC<HTMLAttributes<HTMLHeadingElement>>
  p: React.FC<HTMLAttributes<HTMLParagraphElement>>
  ul: React.FC<HTMLAttributes<HTMLUListElement>>
  ol: React.FC<HTMLAttributes<HTMLOListElement>>
  li: React.FC<HTMLAttributes<HTMLLIElement>>
  a: React.FC<HTMLAttributes<HTMLAnchorElement>>
  blockquote: React.FC<HTMLAttributes<HTMLQuoteElement>>
  img: React.FC<ComponentProps<'img'>>
  pre: React.FC<HTMLAttributes<HTMLPreElement>>
  code: React.FC<HTMLAttributes<HTMLElement>>
}

const components: MDXComponents = {
  h1: ({ ...props }) => (
    <h1 className="mt-8 font-display text-3xl font-bold tracking-tight text-neutral-950 dark:text-white" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="mt-8 font-display text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-neutral-950 dark:text-white" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="mt-6 list-disc list-inside text-neutral-600 dark:text-neutral-400" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="mt-6 list-decimal list-inside text-neutral-600 dark:text-neutral-400" {...props} />
  ),
  li: ({ ...props }) => (
    <li className="mt-2" {...props} />
  ),
  a: ({ ...props }) => (
    <a 
      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300" 
      target="_blank"
      rel="noopener noreferrer"
      {...props} 
    />
  ),
  blockquote: ({ ...props }) => (
    <blockquote className="mt-6 border-l-4 border-neutral-200 pl-4 italic text-neutral-600 dark:border-neutral-700 dark:text-neutral-400" {...props} />
  ),
  img: ({ alt, src }) => {
    if (!src) return null
    return (
      <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt || ''}
          fill
          sizes="(min-width: 1024px) 32rem, 100vw"
          className="object-cover"
        />
      </div>
    )
  },
  pre: ({ ...props }) => (
    <pre className="mt-6 overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-white" {...props} />
  ),
  code: ({ ...props }) => (
    <code className="rounded bg-neutral-100 px-1 py-0.5 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200" {...props} />
  ),
}

export function BlogContent({ content }: { content: string }) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={content} components={components} />
    </article>
  )
}
