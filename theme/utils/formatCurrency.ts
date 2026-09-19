const gbpFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0
});

const gbpDecimalFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

/**
 * Format number to GBP currency (e.g. £1,500)
 */
export function formatCurrency(amount: number, includeDecimals = false): string {
  return includeDecimals ? gbpDecimalFormatter.format(amount) : gbpFormatter.format(amount);
}
