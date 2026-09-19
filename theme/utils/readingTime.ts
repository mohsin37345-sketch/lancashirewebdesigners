/**
 * Calculates estimated reading time in minutes based on 200 words per minute
 */
export function calculateReadingTime(text: string): { minutes: number; text: string; words: number } {
  if (!text) {
    return { minutes: 1, text: '1 min read', words: 0 };
  }
  const clean = text.replace(/<[^>]*>?/gm, '').replace(/[\r\n]+/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return {
    minutes,
    text: `${minutes} min read`,
    words
  };
}
