import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Services collection
const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    shortTitle: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    heroHeading: z.string(),
    heroSubheading: z.string(),
    icon: z.string().default('code'),
    summary: z.string(),
    benefits: z.array(z.string()).default([]),
    process: z
      .array(
        z.object({
          step: z.number(),
          title: z.string(),
          description: z.string()
        })
      )
      .default([]),
    whatsIncluded: z.array(z.string()).default([]),
    whatsNotIncluded: z.array(z.string()).default([]),
    priceFrom: z.number().optional(),
    priceUnit: z.string().default('fixed'),
    priceNotes: z.string().optional(),
    techStack: z.array(z.string()).default([]),
    typicalTimeline: z.string().default('4-6 weeks'),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
          display: z.boolean().default(true)
        })
      )
      .default([]),
    relatedServices: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false)
  })
});

// Locations collection
const locations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/locations' }),
  schema: z.object({
    town: z.string(),
    slug: z.string().optional(),
    county: z.string().default('Lancashire'),
    metaTitle: z.string(),
    metaDescription: z.string(),
    primaryKeyword: z.string(),
    intro: z.string(),
    localKnowledge: z.string(),
    postcodes: z.array(z.string()).default([]),
    nearbyAreas: z
      .array(
        z.object({
          name: z.string(),
          slug: z.string()
        })
      )
      .default([]),
    localIndustries: z.array(z.string()).default([]),
    servicesOffered: z.array(z.string()).default([]),
    localFaqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
          display: z.boolean().default(true)
        })
      )
      .default([]),
    caseStudyRef: z.string().optional(),
    testimonial: z
      .object({
        quote: z.string(),
        author: z.string(),
        company: z.string()
      })
      .optional(),
    lat: z.number(),
    lng: z.number(),
    tier: z.number().default(1),
    heroImage: z.string().optional()
  })
});

// Service x Location collection
const serviceAreas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/serviceAreas' }),
  schema: z.object({
    service: z.string(),
    location: z.string(),
    uniqueIntro: z.string(),
    localAngle: z.string(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
          display: z.boolean().default(true)
        })
      )
      .default([]),
    caseStudy: z.string().optional()
  })
});

// Portfolio collection
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    client: z.string(),
    clientType: z.string(),
    industry: z.string(),
    town: z.string().optional(),
    year: z.number(),
    services: z.array(z.string()).default([]),
    techStack: z.array(z.string()).default([]),
    brief: z.string(),
    approach: z.string(),
    outcome: z.string(),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          note: z.string().optional()
        })
      )
      .default([]),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional()
        })
      )
      .default([]),
    liveUrl: z.string().optional(),
    testimonialRef: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0)
  })
});

// Blog collection
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Lancashire Web Designers'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
          display: z.boolean().default(true)
        })
      )
      .optional(),
    relatedServices: z.array(z.string()).default([]),
    relatedLocations: z.array(z.string()).default([])
  })
});

// Testimonials collection
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    company: z.string(),
    town: z.string(),
    service: z.string(),
    rating: z.number().min(1).max(5),
    date: z.coerce.date(),
    body: z.string(),
    source: z.string().default('Google'),
    verified: z.boolean().default(false)
  })
});

export const collections = {
  services,
  locations,
  serviceAreas,
  portfolio,
  blog,
  testimonials
};
