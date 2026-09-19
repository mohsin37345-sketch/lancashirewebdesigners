import fs from 'node:fs';
import path from 'node:path';

const keywordsPath = path.resolve(process.cwd(), 'src/data/keywords.json');

interface KeywordPage {
  url: string;
  primaryKeyword: string;
  title: string;
  h1: string;
  metaDescription?: string;
}

function resolvePageFile(url: string): string | null {
  const cleanUrl = url.replace(/^\/|\/$/g, '');
  if (cleanUrl === '') {
    const indexPath = path.resolve(process.cwd(), 'src/pages/index.astro');
    return fs.existsSync(indexPath) ? indexPath : null;
  }

  // Check location pages: /areas/web-design-town/
  if (cleanUrl.startsWith('areas/web-design-')) {
    const townSlug = cleanUrl.replace('areas/web-design-', '');
    const locationJson = path.resolve(process.cwd(), `src/content/locations/${townSlug}.json`);
    if (fs.existsSync(locationJson)) return locationJson;
    const locationMd = path.resolve(process.cwd(), `src/content/locations/${townSlug}.md`);
    if (fs.existsSync(locationMd)) return locationMd;
  }

  // Check content collections
  const servicesJson = path.resolve(process.cwd(), `src/content/services/${cleanUrl}.json`);
  if (fs.existsSync(servicesJson)) return servicesJson;

  const servicesMd = path.resolve(process.cwd(), `src/content/services/${cleanUrl}.md`);
  if (fs.existsSync(servicesMd)) return servicesMd;

  // Check direct astro page in src/pages/
  const directAstro = path.resolve(process.cwd(), `src/pages/${cleanUrl}.astro`);
  if (fs.existsSync(directAstro)) return directAstro;

  const directIndexAstro = path.resolve(process.cwd(), `src/pages/${cleanUrl}/index.astro`);
  if (fs.existsSync(directIndexAstro)) return directIndexAstro;

  return null;
}

function getFirstWords(text: string, count = 100): string {
  const clean = text.replace(/<[^>]*>?/gm, ' ').replace(/[\r\n\t]+/g, ' ');
  return clean.trim().split(/\s+/).slice(0, count).join(' ');
}

async function validateSEO() {
  console.log('🔍 [SEO Validator] Validating keyword map & page targets...');

  if (!fs.existsSync(keywordsPath)) {
    console.error('❌ [SEO Validator] src/data/keywords.json not found!');
    process.exit(1);
  }

  const keywordData = JSON.parse(fs.readFileSync(keywordsPath, 'utf-8'));
  const pages: KeywordPage[] = keywordData.pages || [];
  const rules = keywordData.rules || { titleMaxLength: 60, metaDescriptionMinLength: 140, metaDescriptionMaxLength: 160 };

  const errors: string[] = [];
  const primaryKeywordsSeen = new Map<string, string>();

  // 1. Check for primary keyword cannibalisation across the entire map
  for (const page of pages) {
    const normKw = page.primaryKeyword.toLowerCase().trim();
    if (primaryKeywordsSeen.has(normKw)) {
      errors.push(
        `❌ [SEO Validator] Keyword Cannibalisation: Primary keyword "${page.primaryKeyword}" is mapped to both ${primaryKeywordsSeen.get(normKw)} and ${page.url}. Cannibalisation is a build failure.`
      );
    } else {
      primaryKeywordsSeen.set(normKw, page.url);
    }
  }

  // 2. Validate individual mapped pages (skipping non-existent routes for Part 1)
  let verifiedPages = 0;
  let skippedPages = 0;

  for (const page of pages) {
    // Check config definition lengths
    if (page.title.length > rules.titleMaxLength) {
      errors.push(
        `❌ [SEO Validator] Title exceeds ${rules.titleMaxLength} chars: "${page.title}" (${page.title.length} chars) for ${page.url}`
      );
    }

    if (page.metaDescription) {
      if (
        page.metaDescription.length < rules.metaDescriptionMinLength ||
        page.metaDescription.length > rules.metaDescriptionMaxLength
      ) {
        errors.push(
          `❌ [SEO Validator] Meta description for ${page.url} is ${page.metaDescription.length} chars (must be between ${rules.metaDescriptionMinLength} and ${rules.metaDescriptionMaxLength}).`
        );
      }
    }

    const pageFile = resolvePageFile(page.url);
    if (!pageFile) {
      // Gracefully skip Part 2 routes that do not exist yet
      console.log(`ℹ️ [SEO Validator] Skipping route ${page.url} (file does not exist yet — scheduled for Part 2).`);
      skippedPages++;
      continue;
    }

    verifiedPages++;
    const content = fs.readFileSync(pageFile, 'utf-8');
    const normKw = page.primaryKeyword.toLowerCase();

    // Check title presence
    let pageTitle = '';
    const titleTagMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
    const constTitleMatch = content.match(/const\s+title\s*=\s*["']([^"']+)["']/i);
    const propTitleMatch = content.match(/\btitle=["']([^"']+)["']/i);
    const metaTitleMatch = content.match(/metaTitle["']?\s*:\s*["']([^"']+)["']/i);
    const titleAttrMatch = content.match(/["']?title["']?\s*:\s*["']([^"']+)["']/i);

    if (titleTagMatch) {
      pageTitle = (titleTagMatch[1] || '').toLowerCase();
    } else if (constTitleMatch) {
      pageTitle = (constTitleMatch[1] || '').toLowerCase();
    } else if (propTitleMatch) {
      pageTitle = (propTitleMatch[1] || '').toLowerCase();
    } else if (metaTitleMatch) {
      pageTitle = (metaTitleMatch[1] || '').toLowerCase();
    } else if (titleAttrMatch) {
      pageTitle = (titleAttrMatch[1] || '').toLowerCase();
    }

    if (!pageTitle.includes(normKw)) {
      errors.push(
        `❌ [SEO Validator] Primary keyword "${page.primaryKeyword}" missing from title of ${pageFile}`
      );
    }

    // Check H1 presence
    let pageH1 = '';
    const h1TagMatch = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const heroHeadingMatch = content.match(/heading=["']([^"']+)["']/i);
    const h1AttrMatch = content.match(/(?:h1|heroHeading)["']?\s*:\s*["']([^"']+)["']/i);
    if (h1TagMatch) {
      pageH1 = (h1TagMatch[1] || '').toLowerCase();
    } else if (heroHeadingMatch) {
      pageH1 = (heroHeadingMatch[1] || '').toLowerCase();
    } else if (h1AttrMatch) {
      pageH1 = (h1AttrMatch[1] || '').toLowerCase();
    } else if (pageFile.endsWith('.json')) {
      // For location or service json, check if primaryKeyword or town match creates H1
      const json = JSON.parse(content);
      if (json.town && `web design ${json.town}`.toLowerCase() === normKw) {
        pageH1 = `web design ${json.town}`.toLowerCase();
      } else if (json.primaryKeyword) {
        pageH1 = json.primaryKeyword.toLowerCase();
      }
    }

    if (!pageH1.includes(normKw)) {
      errors.push(
        `❌ [SEO Validator] Primary keyword "${page.primaryKeyword}" missing from H1 of ${pageFile}`
      );
    }

    // Check first 100 words
    let textToScan = content;
    if (pageFile.endsWith('.json')) {
      try {
        const parsed = JSON.parse(content);
        textToScan = parsed.intro || parsed.summary || parsed.heroSubheading || content;
      } catch {
        textToScan = content;
      }
    }
    const first100 = getFirstWords(textToScan, 100).toLowerCase();
    if (!first100.includes(normKw)) {
      errors.push(
        `❌ [SEO Validator] Primary keyword "${page.primaryKeyword}" missing from first 100 words of ${pageFile}`
      );
    }
  }

  if (errors.length > 0) {
    console.error('\n🚨 SEO Validation Failed:');
    errors.forEach((e) => console.error(e));
    process.exit(1);
  }

  console.log(
    `✅ [SEO Validator] Keyword map validated cleanly (${verifiedPages} verified, ${skippedPages} skipped for Part 2).`
  );
  process.exit(0);
}

validateSEO();
