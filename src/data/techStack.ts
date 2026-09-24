export interface TechBadge {
  name: string;
  src: string;
  position: string;
  anim: string;
}

export const engineeringTechnologies: string[] = [
  'Astro',
  'Tailwind CSS',
  'TypeScript',
  'Shopify',
  'WordPress Headless',
  'Next.js',
  'Vercel Edge'
];

export const heroTechBadges: TechBadge[] = [
  {
    name: 'React',
    src: '/icons/reactjs-ar21.svg',
    position: 'top-[-12px] left-[50%] -translate-x-1/2',
    anim: 'animate-float-slow'
  },
  {
    name: 'Node.js',
    src: '/icons/nodejs-ar21.svg',
    position: 'top-[-8px] left-[8%] sm:left-[10%]',
    anim: 'animate-float-reverse'
  },
  {
    name: 'Shopify',
    src: '/icons/shopify-ar21.svg',
    position: 'top-[-8px] right-[8%] sm:right-[10%]',
    anim: 'animate-float-slow'
  },
  {
    name: 'HTML5',
    src: '/icons/w3_html5-ar21.svg',
    position: 'top-[26%] -left-3 sm:-left-7',
    anim: 'animate-float-slow'
  },
  {
    name: 'Tailwind CSS',
    src: '/icons/tailwindcss-ar21.svg',
    position: 'top-[26%] -right-3 sm:-right-7',
    anim: 'animate-float-reverse'
  },
  {
    name: 'CSS3',
    src: '/icons/w3_css-ar21~old.svg',
    position: 'top-[64%] -left-3 sm:-left-7',
    anim: 'animate-float-reverse'
  },
  {
    name: 'WordPress',
    src: '/icons/wordpress-ar21.svg',
    position: 'top-[64%] -right-3 sm:-right-7',
    anim: 'animate-float-slow'
  },
  {
    name: 'PHP',
    src: '/icons/php-ar21.svg',
    position: 'bottom-[-10px] left-[16%] sm:left-[20%]',
    anim: 'animate-float-slow'
  }
];

export default {
  engineeringTechnologies,
  heroTechBadges
};
