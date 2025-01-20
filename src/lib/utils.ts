import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type AvatarStyle = 'avataaars' | 'initials' | 'bottts' | 'personas'
type AvatarOptions = {
  style?: AvatarStyle
  background?: string
}

export function getPlaceholderAvatar(seed: string, options: AvatarOptions = {}) {
  const { style = 'avataaars', background } = options
  const baseUrl = 'https://api.dicebear.com/7.x'
  const backgroundParam = background ? `&backgroundColor=${background}` : ''
  
  return `${baseUrl}/${style}/svg?seed=${encodeURIComponent(seed)}${backgroundParam}`
}

// Example usage:
// getPlaceholderAvatar('John Doe') -> Uses default avataaars style
// getPlaceholderAvatar('John Doe', { style: 'initials', background: '0088ff' })
// getPlaceholderAvatar('John Doe', { style: 'bottts' })