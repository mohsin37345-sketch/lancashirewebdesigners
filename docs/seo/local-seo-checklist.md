# Lancashire Local SEO Deployment Checklist

## Overview
This actionable checklist ensures every on-page and off-page local search signal is systematically audited and verified prior to aggressive outreach and marketing.

---

## 1. On-Page Local SEO Checklist

- [x] **Strict Heading Hierarchy**: Every page contains exactly one `<h1>` featuring the targeted local commercial keyword.
- [x] **Primary Keyword Placement**: Primary keyword included in URL slug, `<title>`, `<h1>`, first 100 words, and at least one `<h2>`.
- [x] **Meta Title & Description Bounds**: All titles strictly ≤60 characters; meta descriptions strictly 140–160 characters.
- [x] **Local Schema.org Graphs**: Valid JSON-LD `@graph` containing `LocalBusiness` / `ProfessionalService`, geo-coordinates (`latitude`, `longitude`), `postalCode`, `areaServed`, and `hasMap`.
- [x] **Zero Doorway Pages**: No generic thin "near me" pages; all location pages contain >100 words of unique narrative, authentic local commercial knowledge (e.g. M65 corridor, Winckley Square, UCLan, Lancaster Castle), and pairwise similarity <60%.
- [x] **Zero Fabricated Content**: If real company registration, telephone, or physical address are not yet registered, templates cleanly suppress placeholders rather than outputting fake numbers or generic lorem ipsum.
- [x] **Interactive & Static Map Embeds**: Zero-JS accessible SVG route map on homepage and location hubs with coordinates.
- [x] **Internal Geographic Linking**: Location hubs interlink systematically with nearby towns without circular redirect chains.

---

## 2. Technical & Performance Checklist

- [x] **Core Web Vitals Pass**:
  - Largest Contentful Paint (LCP) < 1.2s on mobile 4G.
  - Interaction to Next Paint (INP) < 100ms.
  - Cumulative Layout Shift (CLS) = 0.00.
- [x] **Lighthouse Score Targets**: Desktop 100/100, Mobile 95–100 across Performance, Accessibility, Best Practices, and SEO.
- [x] **WCAG 2.2 Level AA**: Keyboard navigable, clear visible focus rings, color contrast ratios ≥ 4.5:1 for normal text and ≥ 3:1 for large text.
- [x] **Machine-Readable Endpoints**:
  - `/robots.txt` disallows private paths, references XML sitemap.
  - `/sitemap.xml` includes all canonical URLs with lastmod dates.
  - `/llms.txt` structured for AI search crawlers (Perplexity, ChatGPT, Claude).
  - `/rss.xml` for content syndication.

---

## 3. Off-Page & Citation Activation Checklist (Post-Registration)

- [ ] **Google Business Profile Claimed & Verified** (Category: Website Designer).
- [ ] **Bing Places Synced** directly with verified GBP profile.
- [ ] **Apple Business Connect Claimed** for Apple Maps iOS navigation.
- [ ] **NAP Consistency Validated**: Verify character-for-character match against Royal Mail PAF database.
- [ ] **Top 10 UK Citations Established**: Yell, Thomson Local, Scoot, 192.com, Cylex, Hotfrog, FreeIndex, Brownbook, Yelp UK, Foursquare.
- [ ] **Regional Chamber Listings**: East Lancashire Chamber of Commerce and North & Western Lancashire Chamber of Commerce directories.
- [ ] **Review Funnel Active**: Automated review request sequence triggered upon final project handover.
