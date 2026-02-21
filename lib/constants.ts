export const EARLY_BIRD_TIERS = [
  { name: "Taster", min: 0, max: 5, price: 0, label: "FREE" },
  { name: "Pioneer", min: 6, max: 15, price: 4.99, label: "$4.99" },
  { name: "Early", min: 16, max: 35, price: 9.99, label: "$9.99" },
  { name: "Growth", min: 36, max: 85, price: 19.99, label: "$19.99" },
  { name: "Full", min: 86, max: Infinity, price: 29.0, label: "$29.00" },
] as const;

export const TARGET_PRICE = 29;
export const TOTAL_SLOTS = 85;

export function getTierForCount(count: number) {
  return EARLY_BIRD_TIERS.find((t) => count >= t.min && count <= t.max)!;
}

export function getPriceForCount(count: number): number {
  return getTierForCount(count).price;
}

export function formatPrice(price: number): string {
  if (price === 0) return "FREE";
  return `$${price.toFixed(2)}`;
}
