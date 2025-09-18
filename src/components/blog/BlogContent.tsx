import React from 'react'
import { marked } from 'marked'

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
})

export function BlogContent({ content }: { content: string }) {
  const htmlContent = marked(content)
  
  return (
    <div 
      className="blog-content prose prose-neutral dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
