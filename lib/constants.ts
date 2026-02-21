// Creator-controlled pricing engine
// Creators set: freeSlots (5–50) and targetPrice ($0–$99)
// Intermediate tiers auto-calculated at 30%/60%/85% of target

export interface TierConfig {
  name: string;
  emoji: string;
  min: number;
  max: number;
  price: number;
  label: string;
  flavor: string;
}

// Bibimbap-themed tier metadata (static)
export const TIER_META = [
  { name: "Namul",     emoji: "🥬", flavor: "First taste, on the house" },
  { name: "Gochujang", emoji: "🌶️", flavor: "A little kick. Still cheap." },
  { name: "Bibim",     emoji: "🥢", flavor: "Now we're mixing things." },
  { name: "Dolsot",    emoji: "🍲", flavor: "Hot and getting hotter." },
  { name: "Jeongsik",  emoji: "🍱", flavor: "Full course. Worth every bite." },
] as const;

/**
 * Generate 5-tier pricing from creator's two inputs.
 *
 * @param freeSlots  number of free users (5–50, default 5)
 * @param targetPrice  final tier price in $ (0–99, default 29)
 *
 * Tier distribution:
 *  - Namul (FREE):      slots 0 → freeSlots
 *  - Gochujang (30%):   next ~15% of remaining
 *  - Bibim (60%):       next ~25% of remaining
 *  - Dolsot (85%):      next ~30% of remaining
 *  - Jeongsik (100%):   rest → ∞
 */
export function generateTiers(
  freeSlots: number = 5,
  targetPrice: number = 29,
): TierConfig[] {
  // Clamp inputs
  freeSlots = Math.max(5, Math.min(50, Math.round(freeSlots)));
  targetPrice = Math.max(0, Math.min(99, targetPrice));

  // Paid slots base (scales with free slots)
  const paidBase = Math.max(30, freeSlots * 6);

  // Tier boundary calculations
  const t1End = freeSlots;
  const t2Size = Math.round(paidBase * 0.15);
  const t3Size = Math.round(paidBase * 0.25);
  const t4Size = Math.round(paidBase * 0.30);
  const t2End = t1End + t2Size;
  const t3End = t2End + t3Size;
  const t4End = t3End + t4Size;

  // Price steps at 30% / 60% / 85% / 100% of target
  const p2 = targetPrice > 0 ? Math.round(targetPrice * 0.30 * 100) / 100 : 0;
  const p3 = targetPrice > 0 ? Math.round(targetPrice * 0.60 * 100) / 100 : 0;
  const p4 = targetPrice > 0 ? Math.round(targetPrice * 0.85 * 100) / 100 : 0;
  const p5 = targetPrice;

  return [
    {
      ...TIER_META[0],
      min: 0, max: t1End,
      price: 0, label: "FREE",
    },
    {
      ...TIER_META[1],
      min: t1End + 1, max: t2End,
      price: p2, label: p2 === 0 ? "FREE" : `$${p2.toFixed(2)}`,
    },
    {
      ...TIER_META[2],
      min: t2End + 1, max: t3End,
      price: p3, label: p3 === 0 ? "FREE" : `$${p3.toFixed(2)}`,
    },
    {
      ...TIER_META[3],
      min: t3End + 1, max: t4End,
      price: p4, label: p4 === 0 ? "FREE" : `$${p4.toFixed(2)}`,
    },
    {
      ...TIER_META[4],
      min: t4End + 1, max: Infinity,
      price: p5, label: p5 === 0 ? "FREE" : `$${p5.toFixed(2)}`,
    },
  ];
}

/** Get total paid slots (before Jeongsik / final tier) */
export function getTotalSlots(tiers: TierConfig[]): number {
  // Last finite max
  const finiteTiers = tiers.filter((t) => t.max !== Infinity);
  return finiteTiers.length > 0 ? finiteTiers[finiteTiers.length - 1].max : 85;
}

/** Lookup tier for a given sold count */
export function getTierForCount(tiers: TierConfig[], count: number): TierConfig {
  return tiers.find((t) => count >= t.min && count <= t.max) || tiers[tiers.length - 1];
}

/** Format price display */
export function formatPrice(price: number): string {
  if (price === 0) return "FREE";
  return `$${price.toFixed(2)}`;
}

// ── Default tiers (for backward compat & initial demo state) ──
export const DEFAULT_FREE_SLOTS = 5;
export const DEFAULT_TARGET_PRICE = 29;
export const EARLY_BIRD_TIERS = generateTiers(DEFAULT_FREE_SLOTS, DEFAULT_TARGET_PRICE);
export const TOTAL_SLOTS = getTotalSlots(EARLY_BIRD_TIERS);

// Agent categories for the marketplace
export const AGENT_CATEGORIES = [
  { icon: "✍️", name: "Writing & Content", examples: "Blog posts, ad copy, SEO content" },
  { icon: "💻", name: "Code & Dev", examples: "Code review, bug fixing, refactoring" },
  { icon: "📊", name: "Data & Analytics", examples: "Reports, dashboards, insights" },
  { icon: "🎨", name: "Design & Creative", examples: "UI/UX, image gen, branding" },
  { icon: "📣", name: "Marketing & Sales", examples: "Lead gen, outreach, campaigns" },
  { icon: "🤝", name: "Customer Support", examples: "Chatbots, ticket triage, FAQs" },
  { icon: "⚙️", name: "Automation & Ops", examples: "Workflows, scheduling, integration" },
  { icon: "🔬", name: "Research & Strategy", examples: "Market research, competitive analysis" },
] as const;
