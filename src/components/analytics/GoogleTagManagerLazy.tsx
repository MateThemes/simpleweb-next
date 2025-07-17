'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { getCookiePreferences } from '../cookie/CookieStore'

const GTM_ID = 'GTM-TNK6X4Q5'

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
  }
}

export function GoogleTagManagerLazy() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Delay GTM loading to prioritize critical content
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 2000) // Load after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const preferences = getCookiePreferences()
    
    window.dataLayer = window.dataLayer || []
    const consentEvent: ConsentEvent = {
      consent: 'default',
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      ad_storage: preferences.marketing ? 'granted' : 'denied',
      ad_user_data: preferences.marketing ? 'granted' : 'denied',
      ad_personalization: preferences.marketing ? 'granted' : 'denied'
    }
    window.dataLayer.push(consentEvent)
  }, [])

  if (!shouldLoad) {
    return null
  }

  return (
    <>
      <Script
        id="gtm-script-lazy"
        strategy="lazyOnload"
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