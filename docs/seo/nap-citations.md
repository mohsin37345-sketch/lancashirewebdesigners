# NAP & Citation Consistency Strategy

## Overview
Name, Address, and Phone Number (NAP) consistency is a non-negotiable ranking pillar for local Google search results. Inconsistent street formats, divergent business naming, or mismatched phone numbers degrade Google's trust graph, diluting local map pack rankings.

This playbook outlines the exact citation profiles to establish, audit, and maintain once real company details are registered.

---

## 1. The Strict NAP Rule

When company details are finalized and added to `src/data/site.ts`, all citations across the web must match character-for-character:

- **Business Name**: Lancashire Web Designers
- **Address Format**: Standard Royal Mail PAF formatting (Building/Suite, Street, Town, County, Postcode).
- **Telephone**: Local Lancashire area code (01254 or 01772) formatted consistently as `01254 XXXXXX` and E.164 `+441254XXXXXX`.
- **Website URL**: Canonical HTTPS with trailing slash: `https://www.lancashirewebdesigners.co.uk/`.

---

## 2. Primary UK Citation Tiers

### Tier 1: Primary Data Aggregators & Tier-1 Platforms
These platforms feed regional mapping systems, in-car GPS, voice search (Siri, Alexa), and search engine knowledge graphs:

1. **Google Business Profile (GBP)** — Highest local authority.
2. **Bing Places for Business** — Sync directly from GBP for effortless maintenance.
3. **Apple Business Connect** — Apple Maps default source for iOS devices.
4. **Foursquare / Factual** — Powers Uber, Twitter, and location APIs.
5. **Thomson Local / Data Axle** — Major UK business data syndicate.
6. **Yell.com (Yellow Pages UK)** — Authoritative UK citation and backlink.

### Tier 2: UK Commercial & Trade Directories
High-trust UK business directories indexed reliably by Google:

1. **Scoot / TouchLocal Network** (Scoot, TouchLocal, The Sun, The Mirror directories)
2. **192.com** — Canonical UK directory backed by Companies House records.
3. **Cylex UK** — High-authority UK business directory.
4. **FreeIndex** — UK B2B marketplace with client review verification.
5. **Hotfrog UK** — Commercial local listing platform.
6. **Brownbook.net** — Global open business directory.
7. **MisterWhat UK** — Local business finder.
8. **Yelp UK** — High-trust domain authority.

### Tier 3: Lancashire Regional & B2B Directories
Hyper-local citations that reinforce regional relevance within Lancashire and the North West:

1. **East Lancashire Chamber of Commerce Directory** (`https://www.eastlancschamber.co.uk/`)
2. **North & Western Lancashire Chamber of Commerce** (`https://www.lancschamber.co.uk/`)
3. **Boost Lancashire / Lancashire Growth Hub** (`https://www.boostbusinesslancashire.co.uk/`)
4. **Lancashire Business View Directory** (`https://www.lancashirebusinessview.co.uk/`)
5. **Preston Business Directory / Visit Preston Business**
6. **Blackburn with Darwen Local Directory**

---

## 3. Duplicate Suppression & Audit Protocol

1. **Quarterly NAP Audit**:
   - Run automated scans via BrightLocal or Moz Local to uncover erroneous duplicate listings.
   - Look specifically for past legacy company names, previous trading addresses, or obsolete phone numbers.
2. **Immediate Correction**:
   - Submit claim verification to correct any directory showing mismatched details.
   - Enforce 301 redirects if old web URLs are listed on external directories.
3. **Consistent UTM Tagging**:
   - Append tracking parameters to citation URLs to measure directory referral traffic in GA4:
     `https://www.lancashirewebdesigners.co.uk/?utm_source=yell&utm_medium=citation&utm_campaign=local-seo`
