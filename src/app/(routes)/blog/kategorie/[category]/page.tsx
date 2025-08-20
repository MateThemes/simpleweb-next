import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { getAllPosts, getAllCategories } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paramsValue = await params;
  const categories = await getAllCategories()
  const category = categories.find((cat) => cat.slug === paramsValue.category)

  if (!category) {
    return {
      title: 'Kategorie nicht gefunden',
    }
  }

  return {
    title: `${category.name} Blog Artikel & Tipps | SimpleWebDesign - Webdesign & Marketing Blog`,
    description: `Entdecken Sie alle ${category.name} Blog Artikel, Tipps und Insights von SimpleWebDesign. Professionelle Beratung zu ${category.name} für Unternehmen in Niederösterreich.`,
  }
}

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({ params }: Props) {
  const paramsValue = await params;
  const categories = await getAllCategories()
  const category = categories.find((cat) => cat.slug === paramsValue.category)

  if (!category) {
    notFound()
  }

  const posts = (await getAllPosts()).filter(
    (post) => post.category.toLowerCase() === paramsValue.category
  )

  return (
    <main>
      <Container className="mt-24 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
            {posts.length} Artikel in dieser Kategorie
          </p>
        </div>
      </Container>

      <Container className="mt-16 sm:mt-24 pb-16 sm:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group relative flex flex-col items-start">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-neutral-950 dark:text-white">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <time className="relative z-10 order-first mb-3 flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.date)}
              </time>
              <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="relative z-10 mt-6 flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <span>Weiterlesen</span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </main>
  )
}
