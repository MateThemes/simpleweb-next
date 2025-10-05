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
    return JSON.parse(preferences) as CookiePreferences
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

type ConsentEvent = {
  consent: 'default' | 'update';
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
}

type GTMEvent = {
  'gtm.start'?: number;
  event?: string;
} | ConsentEvent

declare global {
  interface Window {
    dataLayer: GTMEvent[];
    gtag: (...args: any[]) => void;
  }
}

function enableAnalytics() {
  window.dataLayer = window.dataLayer || []
  const consentEvent: ConsentEvent = {
    consent: 'update',
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  }
  window.dataLayer.push(consentEvent)
  
  // Also push gtag consent update for GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    })
  }
}

function disableAnalytics() {
  window.dataLayer = window.dataLayer || []
  const consentEvent: ConsentEvent = {
    consent: 'update',
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  }
  window.dataLayer.push(consentEvent)
  
  // Also push gtag consent update for GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    })
  }
  
  // Remove analytics cookies
  Cookies.remove('_ga', { path: '/' })
  Cookies.remove('_gid', { path: '/' })
  Cookies.remove('_gat', { path: '/' })
}

function enableMarketing() {
  window.dataLayer = window.dataLayer || []
  const consentEvent: ConsentEvent = {
    consent: 'update',
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted'
  }
  window.dataLayer.push(consentEvent)
  
  // Also push gtag consent update for GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    })
  }
}

function disableMarketing() {
  window.dataLayer = window.dataLayer || []
  const consentEvent: ConsentEvent = {
    consent: 'update',
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  }
  window.dataLayer.push(consentEvent)
  
  // Also push gtag consent update for GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    })
  }
  
  // Remove marketing cookies
  Cookies.remove('_gcl_au', { path: '/' })
  Cookies.remove('_gac_', { path: '/' })
}