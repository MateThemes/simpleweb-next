// SEO Audit Types
export interface AuditRequest {
  url: string;
  email?: string;
  consent?: boolean;
  newsletterConsent?: boolean;
}

export interface AuditSummary {
  overall: number;
  performance: number;
  seo: number;
  accessibility: number;
  bestPractices: number;
}

export interface AuditOnPage {
  title: {
    ok: boolean;
    text: string | null;
  };
  metaDescription: {
    ok: boolean;
    text: string | null;
    hint?: string;
  };
  h1: {
    count: number;
    hint?: string;
  };
  imagesWithoutAlt: number;
  canonical: {
    ok: boolean;
    url: string | null;
  };
  ogTags: {
    ok: boolean;
    missing: string[];
  };
  schema: Array<{ "@type": string }>;
}

export interface AuditCrawlability {
  robots: "OK" | "NOT_FOUND" | "ERROR";
  sitemap: "FOUND" | "NOT_FOUND" | "ERROR";
  metaRobotsNoindex: boolean;
}

export interface AuditResponse {
  summary: AuditSummary;
  onPage: AuditOnPage;
  crawlability: AuditCrawlability;
  mailSent?: boolean;
  mailError?: string;
  newsletterSubscribed?: boolean;
  leadId?: string;
  shareableUrl?: string;
}

export interface PageSpeedInsightsResponse {
  lighthouseResult: {
    categories: {
      performance: { score: number };
      seo: { score: number };
      accessibility: { score: number };
      'best-practices': { score: number };
    };
  };
}

export interface EmailData {
  hostname: string;
  summary: AuditSummary;
  recommendations: string[];
  auditUrl: string;
  newsletterSubscribed?: boolean;
  leadId?: string;
  shareableUrl?: string;
}
