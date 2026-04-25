const fractionDigitsByCurrency: Record<string, number> = {
  GBP: 2,
  EUR: 2,
  USD: 2
};

export function formatMinorCurrency(amountMinor: number, currency: string, locale = "en-GB") {
  const fractionDigits = fractionDigitsByCurrency[currency] ?? 2;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  }).format(amountMinor / 10 ** fractionDigits);
}
