import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const uploadedDir = 'C:/Users/Hp/.gemini/antigravity-ide/brain/265e9b5f-9911-4d7a-978d-e295626d0d38/.user_uploaded';
const outputDir = './public/images';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  {
    src: path.join(uploadedDir, 'media_1789227490737.jpg'),
    dest: path.join(outputDir, 'bespoke-web-design-lancashire-architecture.webp'),
    name: 'bespoke-web-design-lancashire-architecture.webp'
  },
  {
    src: path.join(uploadedDir, 'media_1789227490755.jpg'),
    dest: path.join(outputDir, 'strategic-web-design-process-lancashire.webp'),
    name: 'strategic-web-design-process-lancashire.webp'
  },
  {
    src: path.join(uploadedDir, 'media_1789227490774.jpg'),
    dest: path.join(outputDir, 'responsive-web-design-analytics-lancashire.webp'),
    name: 'responsive-web-design-analytics-lancashire.webp'
  }
];

async function convert() {
  for (const img of images) {
    if (!fs.existsSync(img.src)) {
      console.error(`Source not found: ${img.src}`);
      continue;
    }
    const metadata = await sharp(img.src).metadata();
    console.log(`Converting ${img.name} (Original: ${metadata.width}x${metadata.height})...`);
    
    await sharp(img.src)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(img.dest);

    const outStats = fs.statSync(img.dest);
    console.log(`Saved ${img.name}: ${Math.round(outStats.size / 1024)} KB`);
  }
}

convert().catch(console.error);
