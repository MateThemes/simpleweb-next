import React from 'react'
import { marked } from 'marked'
import * as cheerio from 'cheerio'
import Image from 'next/image'

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
})

// Component to render optimized images from markdown
function MarkdownImage({ src, alt, width, height }: { src: string; alt?: string; width?: number; height?: number }) {
  // If src is relative, it's a local image
  const isLocal = src.startsWith('/') || !src.startsWith('http')
  
  if (isLocal && width && height) {
    return (
      <Image
        src={src}
        alt={alt || ''}
        width={width}
        height={height}
        className="rounded-lg"
        loading="lazy"
      />
    )
  } else if (isLocal) {
    return (
      <div className="relative w-full aspect-video overflow-hidden rounded-lg my-4">
        <Image
          src={src}
          alt={alt || ''}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
    )
  } else {
    // External image - Next.js Image requires remotePatterns in next.config.ts
    // For now, fallback to regular img tag for external images
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ''}
        width={width}
        height={height}
        className="rounded-lg"
        loading="lazy"
      />
    )
  }
}

export function BlogContent({ content }: { content: string }) {
  // marked returns string synchronously when used with setOptions
  const htmlContent = marked(content) as string
  const $ = cheerio.load(htmlContent, { xml: { decodeEntities: false } })
  
  // Find all img tags and extract their attributes
  const imageElements: Array<{ src: string; alt?: string; width?: number; height?: number; placeholder: string }> = []
  
  $('img').each((index, element) => {
    const $img = $(element)
    const src = $img.attr('src') || ''
    const alt = $img.attr('alt') || ''
    const width = $img.attr('width') ? parseInt($img.attr('width') || '0', 10) : undefined
    const height = $img.attr('height') ? parseInt($img.attr('height') || '0', 10) : undefined
    const placeholder = `__IMAGE_PLACEHOLDER_${index}__`
    
    imageElements.push({ src, alt, width, height, placeholder })
    
    // Replace img with a unique placeholder
    $img.replaceWith(placeholder)
  })
  
  const processedHtml = $.html()
  
  // Split HTML by placeholders and render images as React components
  const parts = processedHtml.split(/(__IMAGE_PLACEHOLDER_\d+__)/)
  
  return (
    <div className="blog-content prose prose-neutral dark:prose-invert max-w-none">
      {parts.map((part, i) => {
        // Check if this part is an image placeholder
        const imageMatch = part.match(/^__IMAGE_PLACEHOLDER_(\d+)__$/)
        if (imageMatch) {
          const imageIndex = parseInt(imageMatch[1], 10)
          const image = imageElements[imageIndex]
          if (image) {
            return (
              <MarkdownImage
                key={`image-${imageIndex}`}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            )
          }
        }
        // Render HTML content
        if (part.trim()) {
          return (
            <div
              key={`html-${i}`}
              dangerouslySetInnerHTML={{ __html: part }}
            />
          )
        }
        return null
      })}
    </div>
  )
}
