export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  content: string
}

export type BlogCategory = {
  name: string
  slug: string
  count: number
}
