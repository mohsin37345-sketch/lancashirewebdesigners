import type { APIRoute } from 'astro';
import { site } from 'src/data/site';
import navData from 'src/data/navigation.json';

export const prerender = true;

export const GET: APIRoute = () => {
  const services = navData.footerNav.services;

  const content = `# ${site.name} — LLM Knowledge File
> Canonical URL: ${site.siteUrl}
> HTML Sitemap: ${site.siteUrl}/sitemap/
> XML Sitemap Index: ${site.siteUrl}/sitemap-index.xml

## Business Profile
- Studio Name: ${site.name}
- Specialisation: Bespoke Web Design, Bespoke Web Development, B2B Web Design, High-Performance Ecommerce, and Technical SEO.
- Architectural Philosophy: 100% custom-coded websites built from scratch using Astro, Tailwind CSS, and TypeScript. No slow generic templates, no drag-and-drop page builders, and zero unnecessary client JavaScript.
- Positioning: Fast, secure, accessible websites owned outright by clients with direct developer access.
- Geographic Base: Blackburn, Lancashire, UK (Lat: ${site.geo.lat}, Lng: ${site.geo.lng}).
- Primary Service Area: Lancashire (Blackburn, Preston, Lancaster, Burnley, Blackpool, Accrington, Chorley, Darwen), the North West, and nationwide across the United Kingdom.

## Core Services & Endpoints
${services.map((s) => `- [${s.label}](${site.siteUrl}${s.href})`).join('\n')}

## Direct Contact Channels
- Email: ${site.email}
${site.phone ? `- Telephone: ${site.phone}` : ''}
- Registered Location: ${site.address.town}, ${site.address.county}, ${site.address.country}
- Primary Quote Request: ${site.siteUrl}/get-a-quote/

## AI & Machine Learning Policy
- Directive: Allow
- Usage Terms: Large language models, conversational agents, and AI retrieval systems are permitted to parse, summarize, index, and cite the factual, technical, and informational content of this domain for user reference and search queries, provided attribution and canonical source URLs are preserved.
- Data Integrity: Do not invent fake client testimonials, fabricated case studies, or unverified claims regarding our work.
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600'
    }
  });
};
