/**
 * Canonical URL utilities
 * Automatically generates canonical URLs for all pages
 */

export function generateCanonicalUrl(pathname: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://simplewebdesign.at';
  
  // Remove trailing slash from base URL
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');
  
  // Ensure pathname starts with /
  const cleanPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  // Remove trailing slash from pathname (except for root)
  const finalPathname = cleanPathname === '/' ? '/' : cleanPathname.replace(/\/$/, '');
  
  return `${cleanBaseUrl}${finalPathname}`;
}

export function getCanonicalMetadata(pathname: string) {
  return {
    alternates: {
      canonical: generateCanonicalUrl(pathname),
    },
  };
}
