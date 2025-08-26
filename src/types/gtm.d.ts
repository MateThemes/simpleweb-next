declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}

export type ConsentEvent = {
  consent: 'default' | 'update';
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
}

export type GTMEvent = {
  'gtm.start'?: number;
  event?: string;
  'gtm.pageview'?: string;
} | ConsentEvent
