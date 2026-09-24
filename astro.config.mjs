import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lancashirewebdesigners.co.uk',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const p = url.pathname;
        if (p.includes('/404') || p.includes('/thank-you') || p.endsWith('/llms.txt') || p.endsWith('/robots.txt')) {
          return false;
        }
        return true;
      },
      serialize: (item) => {
        const p = new URL(item.url).pathname;
        item.lastmod = new Date();
        if (p === '/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (
          p === '/bespoke-web-design/' ||
          p === '/b2b-web-design/' ||
          p === '/ecommerce-web-design/' ||
          p === '/web-design-and-marketing/' ||
          p === '/website-support/' ||
          p.startsWith('/areas/web-design-')
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (p.startsWith('/portfolio/')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else if (p.startsWith('/blog/')) {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        theme: path.resolve(__dirname, './theme')
      }
    }
  }
});
