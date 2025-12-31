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
  
  // For root path, always return with trailing slash
  if (cleanPathname === '/') {
    return `${cleanBaseUrl}/`;
  }
  
  // Remove trailing slash from pathname for other paths
  const finalPathname = cleanPathname.replace(/\/$/, '');
  
  return `${cleanBaseUrl}${finalPathname}`;
}

export function getCanonicalMetadata(pathname: string) {
  return {
    alternates: {
      canonical: generateCanonicalUrl(pathname),
    },
  };
}
