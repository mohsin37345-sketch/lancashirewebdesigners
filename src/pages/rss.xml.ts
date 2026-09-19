import type { APIRoute } from 'astro';
import { site } from 'src/data/site';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async () => {
  let posts: any[] = [];
  try {
    posts = await getCollection('blog');
  } catch (e) {
    posts = [];
  }

  // Filter out drafts and sort newest first
  const publishedPosts = posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${site.name} — Web Design &amp; Engineering Blog</title>
    <description>Technical articles, bespoke web development guides, and digital marketing insights for Lancashire and UK businesses.</description>
    <link>${site.siteUrl}/blog/</link>
    <language>en-GB</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site.siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${publishedPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.description}]]></description>
      <link>${site.siteUrl}/blog/${post.id}/</link>
      <guid isPermaLink="true">${site.siteUrl}/blog/${post.id}/</guid>
      <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.data.category}]]></category>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800'
    }
  });
};
