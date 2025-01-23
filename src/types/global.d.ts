interface ConsentState {
  granted: 'granted';
  denied: 'denied';
}

interface ConsentAction {
  default: 'default';
  update: 'update';
}

interface ConsentEventData {
  consent: 'default' | 'update';
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
}

interface GTMPageViewEvent {
  event: 'gtm.js' | 'page_view';
  'gtm.start'?: number;
}

type DataLayerEvent = {
  'gtm.start'?: number;
  event?: string;
  consent?: 'default' | 'update';
  analytics_storage?: 'granted' | 'denied';
  ad_storage?: 'granted' | 'denied';
  ad_user_data?: 'granted' | 'denied';
  ad_personalization?: 'granted' | 'denied';
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}
