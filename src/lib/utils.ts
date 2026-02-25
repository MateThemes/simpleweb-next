import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function normalizeGermanChars(str: string): string {
  return str
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
    .replace(/Ü/g, 'Ue')
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('de-AT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Strip markdown to plain text and count words (for reading time). */
export function getWordCount(content: string): number {
  const stripped = content
    .replace(/^---[\s\S]*?---/, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_`~]/g, '')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return stripped ? stripped.split(' ').filter(Boolean).length : 0
}

/** Reading time in minutes (≈200 words/min). */
export function getReadingTimeMinutes(content: string): number {
  const words = getWordCount(content)
  return Math.max(1, Math.round(words / 200))
}

export function getPlaceholderAvatar(name: string, options?: { style?: 'personas' }) {
  const style = options?.style || 'personas'
  const normalizedName = normalizeGermanChars(name)
  
  // For production, we should use local placeholder images
  return `/img/avatars/${style}/placeholder-${normalizedName.toLowerCase().replace(/\s+/g, '-')}.jpg`
  
  // Alternatively, if we don't have local images yet, we can use a service like DiceBear
  // return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(name)}`
}

// Example usage:
// getPlaceholderAvatar('John Doe') -> Uses default avataaars style
// getPlaceholderAvatar('John Doe', { style: 'initials', background: '0088ff' })
// getPlaceholderAvatar('John Doe', { style: 'bottts' })