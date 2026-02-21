"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { EARLY_BIRD_TIERS, TOTAL_SLOTS, getTierForCount } from "@/lib/constants";
import { useCountUp } from "@/lib/hooks/useCountUp";

// 각 티어의 세그먼트 시작·끝 위치 (% of TOTAL_SLOTS)
// Namul: 0~5 (5.88%), Gochujang: 6~15 (11.76%), Bibim: 16~35 (23.53%), Dolsot: 36~85 (58.82%)
const TIER_SEGMENTS = EARLY_BIRD_TIERS.slice(0, -1).map((tier, i) => {
  const start = i === 0 ? 0 : (EARLY_BIRD_TIERS[i - 1].max / TOTAL_SLOTS) * 100;
  const end = (tier.max / TOTAL_SLOTS) * 100;
  return { tier, start, end, mid: (start + end) / 2 };
});
// Jeongsik (마지막 티어)도 추가 — 레이블 표시용
const LAST_TIER = EARLY_BIRD_TIERS[EARLY_BIRD_TIERS.length - 1];

export default function EarlyBirdDemo() {
  const [soldCount, setSoldCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null);
  const [justBought, setJustBought] = useState(false);

  const nextSlot = soldCount + 1;
  const nextTier = getTierForCount(nextSlot);
  const nextPrice = nextTier.price;
  const isFree = nextPrice === 0;
  const freeSlotsLeft = Math.max(0, 5 - soldCount);
  // 현재 티어에서 남은 슬롯
  const currentTierSlotsLeft = nextTier.max === Infinity
    ? null
    : nextTier.max - soldCount;

  const progressPct = Math.min((soldCount / TOTAL_SLOTS) * 100, 100);
  const animatedPrice = useCountUp(nextPrice, 450);

  const showToast = useCallback((msg: string) => {
    setToast({ msg, key: Date.now() });
    setTimeout(() => setToast(null), 2800);
  }, []);

  const handleBuy = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setJustBought(true);

    const thisSlot = soldCount + 1;
    const thisTier = getTierForCount(thisSlot);
    const newCount = thisSlot;
    const afterTier = getTierForCount(newCount + 1);

    setSoldCount(newCount);

    if (thisTier.price === 0) {
      showToast(`${thisTier.emoji} Free ${thisTier.name} spot — enjoy!`);
    } else if (afterTier.price > thisTier.price) {
      showToast(`${thisTier.emoji} Locked in at ${thisTier.label}! Next: ${afterTier.label}`);
    } else {
      showToast(`${thisTier.emoji} Got it for ${thisTier.label}!`);
    }

    setTimeout(() => { setJustBought(false); setIsAnimating(false); }, 1800);
    if (newCount >= 88) {
      setTimeout(() => { setSoldCount(3); setJustBought(false); setIsAnimating(false); }, 3200);
    }
  }, [soldCount, isAnimating, showToast]);

  return (
    <SectionWrapper id="demo" bgClassName="bg-[#F5F0EB]">
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-2">
          Watch the price rise 🌶️
        </h2>
        <p className="text-text-secondary text-[15px]">
          Hit buy. See what you&apos;d pay — right now.
        </p>
      </div>

      <div className="max-w-[480px] mx-auto">
        <div
          className="bg-white rounded-2xl overflow-visible"
          style={{ boxShadow: "0 2px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)" }}
        >
          {/* Product header */}
          <div className="px-6 pt-6 pb-5 flex items-center gap-3 border-b border-[#F0EDE8]">
            <div className="w-11 h-11 rounded-xl bg-[#FFF0ED] flex items-center justify-center text-2xl shrink-0">🤖</div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-[16px] text-text-primary leading-tight">ExampleBot</p>
              <p className="text-xs text-text-secondary mt-0.5">AI meeting summarizer</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-widest">Target</p>
              <p className="font-display font-bold text-base text-text-primary">$29</p>
            </div>
          </div>

          {/* ── Segmented progress bar ── */}
          <div className="px-6 pt-5 pb-2">
            {/* 바 자체 */}
            <div className="relative h-5 rounded-lg overflow-hidden bg-[#EEE9E4] mb-3">
              {/* 세그먼트별 배경색 (티어 구분) */}
              {TIER_SEGMENTS.map((seg) => (
                <div
                  key={seg.tier.name}
                  className="absolute top-0 bottom-0"
                  style={{
                    left: `${seg.start}%`,
                    width: `${seg.end - seg.start}%`,
                    backgroundColor:
                      nextTier.name === seg.tier.name
                        ? isFree ? "rgba(45,139,78,0.12)" : "rgba(232,67,42,0.1)"
                        : "transparent",
                  }}
                />
              ))}
              {/* 채워진 진행 바 */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-lg"
                style={{ backgroundColor: isFree ? "#2D8B4E" : "#E8432A" }}
                animate={{ width: `${Math.max(progressPct, 1)}%` }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              {/* 세그먼트 경계선 + 가격 텍스트 */}
              {TIER_SEGMENTS.map((seg, i) => (
                <div key={seg.tier.name}>
                  {/* 경계선 */}
                  {i > 0 && (
                    <div
                      className="absolute top-0 bottom-0 w-px bg-white/60"
                      style={{ left: `${seg.start}%` }}
                    />
                  )}
                  {/* 세그먼트 안 가격 레이블 */}
                  <div
                    className="absolute inset-y-0 flex items-center justify-center pointer-events-none"
                    style={{ left: `${seg.start}%`, width: `${seg.end - seg.start}%` }}
                  >
                    <span
                      className={`text-[10px] font-bold transition-all duration-300 select-none ${
                        nextTier.name === seg.tier.name
                          ? isFree ? "text-green" : "text-primary"
                          : progressPct > seg.mid
                            ? "text-white/80"
                            : "text-text-secondary/40"
                      }`}
                    >
                      {seg.tier.label}
                    </span>
                  </div>
                </div>
              ))}
              {/* 마지막 Jeongsik 세그먼트 */}
              <div
                className="absolute inset-y-0 flex items-center justify-end pr-2 pointer-events-none"
                style={{ left: `${TIER_SEGMENTS[TIER_SEGMENTS.length - 1].end}%`, right: 0 }}
              >
                <span className={`text-[10px] font-bold select-none ${
                  nextTier.name === LAST_TIER.name ? "text-primary" : "text-text-secondary/40"
                }`}>
                  {LAST_TIER.label}
                </span>
              </div>
            </div>

            {/* 티어 이름 레이블 — 경계에 정확히 정렬 */}
            <div className="relative h-5">
              {TIER_SEGMENTS.map((seg) => (
                <div
                  key={seg.tier.name}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${seg.start + (seg.end - seg.start) / 2}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <span
                    className={`text-[9px] font-semibold uppercase tracking-wide transition-all duration-300 ${
                      nextTier.name === seg.tier.name
                        ? isFree && seg.tier.name === "Namul" ? "text-green" : "text-primary"
                        : "text-text-secondary/35"
                    }`}
                  >
                    {seg.tier.emoji} {seg.tier.name}
                  </span>
                </div>
              ))}
              {/* Jeongsik */}
              <div
                className="absolute flex flex-col items-center"
                style={{
                  left: `${TIER_SEGMENTS[TIER_SEGMENTS.length - 1].end + (100 - TIER_SEGMENTS[TIER_SEGMENTS.length - 1].end) / 2}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <span className={`text-[9px] font-semibold uppercase tracking-wide transition-colors ${
                  nextTier.name === LAST_TIER.name ? "text-primary" : "text-text-secondary/35"
                }`}>
                  {LAST_TIER.emoji} {LAST_TIER.name}
                </span>
              </div>
            </div>

            {/* sold count + 남은 슬롯 */}
            <div className="flex justify-between items-center mt-3">
              <span className="text-[12px] text-text-secondary">
                <span className="font-bold text-text-primary">{soldCount}</span> sold
              </span>
              {currentTierSlotsLeft !== null && currentTierSlotsLeft > 0 && (
                <span className={`text-[12px] font-semibold ${isFree ? "text-green" : "text-primary"}`}>
                  {isFree
                    ? `🥬 ${freeSlotsLeft} free spot${freeSlotsLeft !== 1 ? "s" : ""} left in this tier`
                    : `🌶️ ${currentTierSlotsLeft} spot${currentTierSlotsLeft !== 1 ? "s" : ""} left at ${nextTier.label}`}
                </span>
              )}
              <span className="text-[12px] text-text-secondary">{TOTAL_SLOTS} total</span>
            </div>
          </div>

          {/* ── 현재 가격 ── */}
          <div className="px-6 pt-4 pb-5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-text-secondary/50 mb-3">
              Your price if you buy now
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={nextTier.name}
                initial={{ opacity: 0, scale: 0.92, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <p className={`font-display font-extrabold leading-none ${isFree ? "text-green" : "text-primary"} text-[3.8rem]`}>
                  {isFree ? "FREE" : `$${animatedPrice.toFixed(2)}`}
                </p>
                <p className={`text-[14px] mt-2.5 font-medium ${isFree ? "text-green/80" : "text-text-secondary"}`}>
                  {nextTier.emoji}&nbsp;
                  <span className="font-semibold">{nextTier.name} tier</span>
                  <span className="mx-2 text-text-secondary/25">·</span>
                  <span className="italic font-normal text-text-secondary/60">{nextTier.flavor}</span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Button ── */}
          <div className="px-6 pb-7 relative">
            <motion.button
              onClick={handleBuy}
              disabled={isAnimating}
              whileTap={{ scale: 0.975 }}
              className={`w-full py-[15px] rounded-[14px] font-bold text-white text-[16px] transition-colors duration-300 disabled:opacity-70 cursor-pointer ${
                justBought ? "bg-green" : isFree ? "bg-green hover:bg-[#267a43]" : "bg-primary hover:bg-primary-hover"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={justBought ? "done" : nextTier.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="block"
                >
                  {justBought ? "✓  Price locked!" : isFree ? "Taste it FREE  →" : `Buy for ${nextTier.label}  →`}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <AnimatePresence>
              {toast && (
                <motion.div
                  key={toast.key}
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-6 right-6 -bottom-14 bg-[#1A1A1A] text-white text-xs font-medium px-4 py-3 rounded-xl text-center shadow-xl"
                >
                  {toast.msg}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="text-center text-xs text-text-secondary/60 mt-16">
          Demo only — click to see prices climb through each ingredient tier 🥢
        </p>
      </div>
    </SectionWrapper>
  );
}
