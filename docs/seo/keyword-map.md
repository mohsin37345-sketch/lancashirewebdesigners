# Semrush Keyword Strategy & Page Mapping Guide

## Overview
This document represents the binding keyword architecture for Lancashire Web Designers. Every primary commercial keyword is mapped to exactly one page to eliminate internal cannibalisation. Secondary and supporting keywords are distributed across sub-sections and topic clusters.

---

## Complete Keyword Mapping Table

| URL Slug | Primary Keyword | UK Vol | KD | Page Title (≤60 chars) | H1 Heading | Secondary / Supporting Keywords |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `web design lancashire` | 590 | 9 | `Web Design Lancashire \| Lancashire Web Designers` (47) | `Web Design Lancashire` | `website design lancashire`, `lancashire website design`, `web design agency lancashire`, `web agency lancashire` |
| `/bespoke-web-design/` | `bespoke web design` | 2,400 | 22 | `Bespoke Web Design Agency \| Lancashire Web Designers` (52) | `Bespoke Web Design` | `bespoke website design`, `bespoke web development`, `bespoke website development`, `bespoke web design agency` |
| `/b2b-web-design/` | `b2b web design agency` | 880 | 28 | `B2B Web Design Agency \| Lancashire Web Designers` (47) | `B2B Web Design Agency` | `b2b website design agency`, `b2b web development` (dedicated 200+ word H2), `b2b web agency`, `b2b web design company` |
| `/ecommerce-web-design/` | `ecommerce design agency` | 1,000 | 52 | `Ecommerce Design Agency \| Lancashire Web Designers` (49) | `Ecommerce Design Agency` | `ecommerce web design`, `shopify web design`, `custom ecommerce development`, `online store design` |
| `/web-design-and-marketing/` | `web design and marketing` | 390 | 19 | `Web Design and Marketing \| Lancashire Web Designers` (51) | `Web Design and Marketing` | `website design and marketing`, `web marketing services`, `digital marketing website design`, `seo and web design services` |
| `/website-support/` | `web support agency` | 320 | 43 | `Web Support Agency \| Care Plans \| Lancashire Web Designers` (57) | `Web Support Agency` | `website support agency`, `website redesign agency`, `website maintenance services`, `wordpress support plans` |
| `/areas/web-design-preston/` | `web design preston` | 480 | 36 | `Web Design Preston \| Lancashire Web Designers` (45) | `Web Design Preston` | `website design preston`, `digital agency preston`, `digital marketing preston`, `marketing agency preston` |
| `/areas/web-design-lancaster/` | `web design lancaster` | 260 | 15 | `Web Design Lancaster \| Lancashire Web Designers` (47) | `Web Design Lancaster` | `website design lancaster`, `digital agency lancaster`, `web development lancaster` |
| `/areas/web-design-blackburn/` | `web design blackburn` | 140 | 8 | `Web Design Blackburn \| Lancashire Web Designers` (47) | `Web Design Blackburn` | `website design blackburn`, `web designer blackburn`, `digital agency blackburn` |

---

## Sub-Service Supporting Keyword Cluster

| URL Slug | Primary Keyword | Search Volume | Search Intent | Parent Pillar |
| :--- | :--- | :--- | :--- | :--- |
| `/services/seo/` | `seo services lancashire` | 260 | Commercial / Local | `/web-design-and-marketing/` |
| `/services/wordpress-development/` | `wordpress development lancashire` | 210 | Commercial / Tech | `/bespoke-web-design/` |
| `/services/shopify-development/` | `shopify development lancashire` | 190 | Commercial / Tech | `/ecommerce-web-design/` |
| `/services/website-redesign/` | `website redesign services` | 720 | Commercial / Need | `/bespoke-web-design/` |
| `/services/landing-page-design/` | `landing page design agency` | 880 | Commercial / PPC | `/web-design-and-marketing/` |
| `/services/website-speed-optimisation/`| `website speed optimisation uk` | 590 | Informational / Tech | `/website-support/` |

---

## Cannibalisation Safeguards

1. **Homepage Dominance**: The keyword `web design lancashire` is exclusively targeted on `/`. No duplicate `/web-design-lancashire/` route is permitted in the codebase.
2. **Strict Single-Owner Rule**: Every high-volume keyword has exactly one target URL. Mapped keywords are audited on every continuous integration build via `npm run validate:seo`.
3. **Internal Anchor Hygiene**: When linking between internal pages, anchor text must strictly reflect the target page's primary or secondary keyword (e.g. any link pointing to `/b2b-web-design/` must use variations of "B2B web design agency" or "B2B web development", never generic "read more" or conflicting terms).
