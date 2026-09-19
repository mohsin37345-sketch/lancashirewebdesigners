# Analytics, Consent & Tracking Implementation Guide

## Overview
Accurate, privacy-compliant attribution tracking is vital for proving return on investment for Lancashire Web Designers and our clients. This document details the exact configuration of Google Analytics 4 (GA4), Google Tag Manager (GTM), Google Search Console (GSC), and GDPR Consent Mode v2.

---

## 1. Google Consent Mode v2 Architecture

Our platform implements strict European and UK GDPR consent mechanics via `ConsentInit.astro` and `LazyScripts.astro`:

- **Default State**: All tracking tags remain blocked until explicit user consent is granted via the banner.
- **Signals**:
  - `analytics_storage`: `denied` (default) &rarr; `granted` (upon acceptance)
  - `ad_storage`: `denied` (default) &rarr; `granted` (upon acceptance)
  - `ad_user_data`: `denied` (default) &rarr; `granted` (upon acceptance)
  - `ad_personalization`: `denied` (default) &rarr; `granted` (upon acceptance)

### Cookie Categories:
1. **Strictly Necessary**: Session states, cookie preferences, multi-step form progress (zero consent required).
2. **Analytics / Performance**: GA4 anonymous measurement, scroll depth, session timing (requires consent).
3. **Marketing / Advertising**: Meta Pixel, Google Ads remarketing tags (requires explicit consent).

---

## 2. Google Analytics 4 (GA4) Custom Event Taxonomy

Configure the following custom events in GTM and mark them as Key Events (Conversions) in GA4:

| Event Name | Trigger Condition | Event Parameters | Business Objective |
| :--- | :--- | :--- | :--- |
| `generate_lead_quote_inline` | Submission of inline quote form on homepage/service pages | `form_id`, `project_type`, `page_location` | Key commercial lead |
| `generate_lead_quote_full` | Final step submission of `/get-a-quote/` questionnaire | `budget_bracket`, `timeline`, `services_selected` | Qualified enterprise lead |
| `generate_lead_audit` | Submission of `/free-website-audit/` diagnostic request | `website_url`, `page_location` | Top-of-funnel lead |
| `generate_lead_contact` | Direct message from `/contact/` | `page_location`, `subject_intent` | General commercial inquiry |
| `calculate_project_cost` | Completion of `/website-cost-calculator/` estimate | `estimated_total`, `features_selected` | Pricing intent signal |
| `click_telephone` | Tap on `tel:` link | `telephone_number`, `page_location` | High-intent local phone call |
| `click_email` | Tap on `mailto:` link | `email_address`, `page_location` | Direct email inquiry |
| `file_download` | Download of whitepaper, brief template, or PDF | `file_name`, `file_extension` | Mid-funnel engagement |

---

## 3. Google Tag Manager (GTM) Container Structure

- **Container ID**: `GTM-XXXXXXX` (injected conditionally via `LazyScripts.astro`).
- **Triggers**:
  - `Consent Granted - Analytics`: Fires GA4 Configuration tag.
  - `Form Submission - Inline Quote`: Triggers GA4 `generate_lead_quote_inline`.
  - `Form Submission - Full Quote`: Triggers GA4 `generate_lead_quote_full`.
  - `Click - Phone Link`: CSS selector matches `a[href^="tel:"]`.
  - `Click - Mailto Link`: CSS selector matches `a[href^="mailto:"]`.

---

## 4. Google Search Console (GSC) Setup

1. **Domain Property Verification**:
   - Verify ownership via DNS TXT record at the DNS provider level (Cloudflare / Namecheap) rather than HTML file upload, ensuring subdomains and protocol variations are tracked simultaneously.
2. **Sitemap Submission**:
   - Submit canonical XML sitemap: `https://www.lancashirewebdesigners.co.uk/sitemap-index.xml` (or `/sitemap.xml`).
3. **Core Web Vitals Monitoring**:
   - Review weekly real-world Chrome User Experience Report (CrUX) field data for LCP, INP, and CLS.
4. **URL Inspection Protocol**:
   - Upon deploying new service pages or location hubs, use the URL Inspection tool to request priority indexing.

---

## 5. Privacy & Data Retention Policies

- Set GA4 data retention to the maximum allowed: **14 months** (default is 2 months).
- Enable Google Signals only after confirming relevant privacy policy disclosures.
- IP addresses in GA4 are anonymized automatically by default.
- Set up automatic internal IP exclusions for home/office development networks.
