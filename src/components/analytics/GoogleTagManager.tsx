'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getCookiePreferences, defaultPreferences } from '../cookie/CookieStore'
import type { ConsentEvent, GTMEvent } from '@/types/gtm'

const GTM_ID = 'GTM-TNK6X4Q5'

export function GoogleTagManager() {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize dataLayer immediately
    window.dataLayer = window.dataLayer || []
    
    // Get current cookie preferences
    const preferences = getCookiePreferences()
    
    // Push consent update event based on current preferences
    // This will only be called if user has already made a choice
    if (preferences.lastUpdated !== defaultPreferences.lastUpdated) {
      const consentEvent: ConsentEvent = {
        consent: 'update',
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
        ad_user_data: preferences.marketing ? 'granted' : 'denied',
        ad_personalization: preferences.marketing ? 'granted' : 'denied'
      }
      window.dataLayer.push(consentEvent)
    }

    // Listen for cookie consent updates
    const handleCookieConsentUpdate = (event: CustomEvent) => {
      const { analytics, marketing } = event.detail
      const consentEvent: ConsentEvent = {
        consent: 'update',
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied'
      }
      window.dataLayer.push(consentEvent)
    }

    window.addEventListener('cookieConsentUpdated', handleCookieConsentUpdate as EventListener)

    return () => {
      window.removeEventListener('cookieConsentUpdated', handleCookieConsentUpdate as EventListener)
    }
  }, [])

  // Track page views for GA4
  useEffect(() => {
    if (pathname && window.dataLayer) {
      // Push page view event for GA4
      window.dataLayer.push({
        event: 'gtm.pageview',
        'gtm.pageview': pathname
      } as GTMEvent)
    }
  }, [pathname])

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
