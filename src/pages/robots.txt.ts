import type { APIRoute } from 'astro';
import { site } from 'src/data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /404/
Disallow: /thank-you/
Disallow: /*?utm_*
Disallow: /*?fbclid=*

# Host & Sitemaps
Host: ${site.siteUrl}
Sitemap: ${site.siteUrl}/sitemap-index.xml
`;

  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600'
    }
  });
};
