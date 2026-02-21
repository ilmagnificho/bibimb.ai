// 비빔밥 재료 이름으로 티어 네이밍
// 비빔밥은 재료(ingredient)가 많을수록 풍성해지고 가격이 올라가는 개념
export const EARLY_BIRD_TIERS = [
  {
    name: "Namul",        // 나물 — FREE, 첫 맛보기
    emoji: "🥬",
    min: 0, max: 5,
    price: 0,
    label: "FREE",
    flavor: "First taste, on the house",
  },
  {
    name: "Gochujang",    // 고추장 — 매운맛 시작, $4.99
    emoji: "🌶️",
    min: 6, max: 15,
    price: 4.99,
    label: "$4.99",
    flavor: "A little kick. Still cheap.",
  },
  {
    name: "Bibim",        // 비빔 — 섞기 시작, $9.99
    emoji: "🥢",
    min: 16, max: 35,
    price: 9.99,
    label: "$9.99",
    flavor: "Now we're mixing things.",
  },
  {
    name: "Dolsot",       // 돌솥 — 뜨겁게 달아오름, $19.99
    emoji: "🍲",
    min: 36, max: 85,
    price: 19.99,
    label: "$19.99",
    flavor: "Hot and getting hotter.",
  },
  {
    name: "Jeongsik",     // 정식 — 풀코스, $29
    emoji: "🍱",
    min: 86, max: Infinity,
    price: 29.0,
    label: "$29.00",
    flavor: "Full course. Worth every bite.",
  },
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
