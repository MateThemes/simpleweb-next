import Cookies from 'js-cookie'

export type CookieCategory = 'necessary' | 'analytics' | 'marketing'

export interface CookiePreferences {
  necessary: boolean // Always true, can't be disabled
  analytics: boolean
  marketing: boolean
  lastUpdated: string
}

const COOKIE_PREFERENCES_KEY = 'cookie-preferences'
const COOKIE_EXPIRY_DAYS = 365

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  lastUpdated: new Date().toISOString(),
}

export function getCookiePreferences(): CookiePreferences {
  const preferences = Cookies.get(COOKIE_PREFERENCES_KEY)
  if (!preferences) return defaultPreferences

  try {
    return JSON.parse(preferences)
  } catch {
    return defaultPreferences
  }
}

export function setCookiePreferences(preferences: Partial<CookiePreferences>) {
  const current = getCookiePreferences()
  const updated: CookiePreferences = {
    ...current,
    ...preferences,
    necessary: true, // Always true
    lastUpdated: new Date().toISOString(),
  }

  Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(updated), {
    expires: COOKIE_EXPIRY_DAYS,
    sameSite: 'strict',
    secure: true,
  })

  // Apply or remove cookies based on preferences
  if (updated.analytics) {
    enableAnalytics()
  } else {
    disableAnalytics()
  }

  if (updated.marketing) {
    enableMarketing()
  } else {
    disableMarketing()
  }

  return updated
}

export function hasConsented(): boolean {
  return Cookies.get(COOKIE_PREFERENCES_KEY) !== undefined
}

// Placeholder functions for managing specific cookie categories
function enableAnalytics() {
  // TODO: Implement analytics cookies (e.g., Google Analytics)
  console.log('Analytics cookies enabled')
}

function disableAnalytics() {
  // Remove analytics cookies
  Cookies.remove('_ga')
  Cookies.remove('_gid')
  Cookies.remove('_gat')
  console.log('Analytics cookies disabled')
}

function enableMarketing() {
  // TODO: Implement marketing cookies
  console.log('Marketing cookies enabled')
}

function disableMarketing() {
  // Remove marketing cookies
  // Add specific marketing cookie names here
  console.log('Marketing cookies disabled')
}