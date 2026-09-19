import fs from 'node:fs';
import path from 'node:path';

const locationsDir = path.resolve(process.cwd(), 'src/content/locations');

function getWordCount(text: string): number {
  if (!text) return 0;
  const clean = text.replace(/<[^>]*>?/gm, ' ').replace(/[\r\n\t]+/g, ' ');
  return clean.trim().split(/\s+/).filter(Boolean).length;
}

function calculateSimilarity(textA: string, textB: string): number {
  const wordsA = new Set(
    textA
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 3)
  );
  const wordsB = new Set(
    textB
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 3)
  );

  if (wordsA.size === 0 || wordsB.size === 0) return 0;

  let intersection = 0;
  for (const word of wordsA) {
    if (wordsB.has(word)) {
      intersection++;
    }
  }

  // Jaccard similarity coefficient
  const union = new Set([...wordsA, ...wordsB]).size;
  return union === 0 ? 0 : intersection / union;
}

async function validateContent() {
  console.log('🔍 [Content Validator] Checking location collections...');

  if (!fs.existsSync(locationsDir)) {
    console.log('ℹ️ [Content Validator] No locations directory found. Passing cleanly.');
    process.exit(0);
  }

  const files = fs
    .readdirSync(locationsDir)
    .filter((f) => f.endsWith('.json') || f.endsWith('.md') || f.endsWith('.mdx'));

  if (files.length === 0) {
    console.log('✅ [Content Validator] Locations collection is empty. Pass (clean state for Part 1).');
    process.exit(0);
  }

  const locationEntries: { file: string; intro: string; faqsCount: number; fullText: string }[] = [];
  const errors: string[] = [];

  for (const file of files) {
    const filePath = path.join(locationsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    let intro = '';
    let faqsCount = 0;
    let fullText = content;

    if (file.endsWith('.json')) {
      try {
        const parsed = JSON.parse(content);
        intro = parsed.intro || '';
        faqsCount = Array.isArray(parsed.localFaqs) ? parsed.localFaqs.length : 0;
        fullText = `${intro} ${parsed.localKnowledge || ''} ${JSON.stringify(parsed.localFaqs || [])}`;
      } catch (err: any) {
        errors.push(`${file}: Failed to parse JSON: ${err.message}`);
        continue;
      }
    } else {
      // Frontmatter extraction for md/mdx
      const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (frontmatterMatch) {
        const fm = frontmatterMatch[1];
        const introMatch = fm.match(/intro:\s*["']?([\s\S]*?)["']?(?=\n\w+:|$)/);
        if (introMatch) intro = introMatch[1];

        const faqMatches = fm.match(/- question:/g);
        faqsCount = faqMatches ? faqMatches.length : 0;
      }
    }

    const wordCount = getWordCount(intro);
    if (wordCount < 100) {
      errors.push(
        `❌ [Content Validator] ${file}: Intro has ${wordCount} words (minimum required: 100 words).`
      );
    }

    if (faqsCount < 4) {
      errors.push(
        `❌ [Content Validator] ${file}: Has ${faqsCount} FAQs (minimum required: 4 FAQs).`
      );
    }

    locationEntries.push({ file, intro, faqsCount, fullText });
  }

  // Check pairwise text similarity (> 60% similarity fails build)
  for (let i = 0; i < locationEntries.length; i++) {
    for (let j = i + 1; j < locationEntries.length; j++) {
      const sim = calculateSimilarity(locationEntries[i].fullText, locationEntries[j].fullText);
      if (sim > 0.6) {
        errors.push(
          `❌ [Content Validator] High text similarity (${(sim * 100).toFixed(1)}%) between ${locationEntries[i].file} and ${locationEntries[j].file} (maximum allowed: 60%).`
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error('\n🚨 Content Validation Failed:');
    errors.forEach((e) => console.error(e));
    process.exit(1);
  }

  console.log(`✅ [Content Validator] All ${files.length} location page(s) passed quality checks.`);
  process.exit(0);
}

validateContent();
