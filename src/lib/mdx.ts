import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost, BlogCategory } from '@/types/blog'

const POSTS_PATH = path.join(process.cwd(), 'content/blog')

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(POSTS_PATH)
  const posts = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file)
      const source = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(source)
      const slug = file.replace(/\.mdx?$/, '')

      return {
        ...data,
        slug,
        content,
      } as BlogPost
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(source)

    return {
      ...data,
      slug,
      content,
    } as BlogPost
  } catch {
    return null
  }
}

export async function getAllCategories(): Promise<BlogCategory[]> {
  const posts = await getAllPosts()
  const categories = posts.reduce((acc, post) => {
    const category = post.category.toLowerCase()
    const existing = acc.find((cat) => cat.slug === category)
    
    if (existing) {
      existing.count++
    } else {
      acc.push({
        name: post.category,
        slug: category,
        count: 1,
      })
    }
    
    return acc
  }, [] as BlogCategory[])

  return categories.sort((a, b) => b.count - a.count)
}
