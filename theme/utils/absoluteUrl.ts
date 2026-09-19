import { site } from 'src/data/site';

/**
 * Builds an absolute WWW URL with an enforced trailing slash
 */
export function absoluteUrl(pathname = '', base = site.siteUrl): string {
  const cleanBase = base.replace(/\/+$/, '');
  let path = pathname.trim();

  // If already absolute URL
  if (path.startsWith('http://') || path.startsWith('https://')) {
    const url = new URL(path);
    if (!url.pathname.endsWith('/')) {
      url.pathname = `${url.pathname}/`;
    }
    return url.toString();
  }

  // Ensure leading slash
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  // Ensure trailing slash (unless it's an explicit file with extension like .xml, .txt, .png, etc.)
  const hasFileExtension = /\.[a-z0-9]{2,5}$/i.test(path);
  if (!hasFileExtension && !path.endsWith('/')) {
    path = `${path}/`;
  }

  return `${cleanBase}${path}`;
}
