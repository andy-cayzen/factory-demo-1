export type InvoiceLine = {
  description: string;
  quantity: number;
  unitAmountMinor: number;
  currency: "GBP" | "EUR" | "USD";
};

export type InvoiceBatch = {
  accountId: string;
  invoiceDate: string;
  lines: InvoiceLine[];
};

export function generateInvoiceTotals(batch: InvoiceBatch) {
  const totalsByCurrency = new Map<string, number>();
  for (const line of batch.lines) {
    const current = totalsByCurrency.get(line.currency) ?? 0;
    totalsByCurrency.set(line.currency, current + line.quantity * line.unitAmountMinor);
  }

  return [...totalsByCurrency.entries()].map(([currency, totalMinor]) => ({ currency, totalMinor }));
}
