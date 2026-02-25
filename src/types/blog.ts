export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  content: string
  /** Optional SEO title (max 60 chars for meta title). */
  seoTitle?: string
}

export type BlogCategory = {
  name: string
  slug: string
  count: number
}
