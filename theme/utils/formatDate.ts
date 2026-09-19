const dtf = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
});

/**
 * Format a Date or date string to DD MMMM YYYY (e.g. 10 June 2026) using UK locale
 */
export function formatDate(input: Date | string | number): string {
  const date = typeof input === 'object' && input instanceof Date ? input : new Date(input);
  if (isNaN(date.getTime())) {
    return '';
  }
  return dtf.format(date);
}

/**
 * Format a Date or date string to ISO string (YYYY-MM-DD) for datetime attribute
 */
export function formatIsoDate(input: Date | string | number): string {
  const date = typeof input === 'object' && input instanceof Date ? input : new Date(input);
  if (isNaN(date.getTime())) {
    return '';
  }
  return date.toISOString().split('T')[0];
}
