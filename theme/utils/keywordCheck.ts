/**
 * Check if a target phrase exists as a case-insensitive whole phrase in text
 */
export function containsPhrase(text: string, phrase: string): boolean {
  if (!text || !phrase) return false;
  const normalizedText = text.toLowerCase().replace(/[\r\n\t]+/g, ' ');
  const normalizedPhrase = phrase.toLowerCase().trim();
  return normalizedText.includes(normalizedPhrase);
}

/**
 * Returns the first N words of a text string
 */
export function getFirstWords(text: string, wordCount = 100): string {
  if (!text) return '';
  const clean = text.replace(/<[^>]*>?/gm, ' ').replace(/[\r\n\t]+/g, ' ');
  return clean.trim().split(/\s+/).slice(0, wordCount).join(' ');
}
