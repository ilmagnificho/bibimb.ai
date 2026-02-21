"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { EARLY_BIRD_TIERS, TOTAL_SLOTS, getTierForCount } from "@/lib/constants";
import { useCountUp } from "@/lib/hooks/useCountUp";

// 각 티어의 프로그레스바 내 끝 위치 (%)
const TIER_ENDS = EARLY_BIRD_TIERS.slice(0, -1).map(
  (t) => (t.max / TOTAL_SLOTS) * 100
);

export default function EarlyBirdDemo() {
  const [soldCount, setSoldCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null);
  const [justBought, setJustBought] = useState(false);

  // 버튼을 누를 "다음 구매자"가 지불할 가격
  const nextSlot = soldCount + 1;
  const nextTier = getTierForCount(nextSlot);
  const nextPrice = nextTier.price;
  const isFree = nextPrice === 0;
  const freeSlotsLeft = Math.max(0, 5 - soldCount);
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
      showToast(`${thisTier.emoji} Free ${thisTier.name} tier — on the house!`);
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
        <p className="text-text-secondary text-sm">
          Hit buy. See what you&apos;d pay right now.
        </p>
      </div>

      <div className="max-w-[460px] mx-auto">
        <div
          className="bg-white rounded-2xl overflow-visible"
          style={{ boxShadow: "0 2px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)" }}
        >
          {/* ── Product header ── */}
          <div className="px-6 pt-6 pb-5 flex items-center gap-3 border-b border-[#F0EDE8]">
            <div className="w-11 h-11 rounded-xl bg-[#FFF0ED] flex items-center justify-center text-2xl shrink-0">
              🤖
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-[16px] text-text-primary leading-tight">
                ExampleBot
              </p>
              <p className="text-xs text-text-secondary mt-0.5">AI meeting summarizer</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-widest">
                Target
              </p>
              <p className="font-display font-bold text-base text-text-primary">$29</p>
            </div>
          </div>

          {/* ── Tier ladder + progress bar (통합) ── */}
          <div className="px-6 pt-5 pb-4">

            {/* 티어 이름 + 가격 레이블 — 바 위에 크게 표시 */}
            <div className="relative flex justify-between mb-1">
              {EARLY_BIRD_TIERS.map((tier, i) => {
                const isActive = nextTier.name === tier.name;
                // 마지막 티어는 오른쪽 정렬
                const alignClass = i === 0 ? "items-start" : i === EARLY_BIRD_TIERS.length - 1 ? "items-end" : "items-center";
                return (
                  <div key={tier.name} className={`flex flex-col ${alignClass} gap-0.5`} style={{ width: "20%" }}>
                    <span
                      className={`font-display font-bold leading-none transition-all duration-300 ${
                        isActive
                          ? "text-[15px] " + (isFree && i === 0 ? "text-green" : i === 0 ? "text-green" : "text-primary")
                          : "text-[11px] text-text-secondary/40"
                      }`}
                    >
                      {tier.label}
                    </span>
                    <span
                      className={`transition-all duration-300 leading-none ${
                        isActive ? "text-[10px] font-semibold " + (i === 0 ? "text-green/70" : "text-primary/70") : "text-[9px] text-text-secondary/25"
                      }`}
                    >
                      {tier.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Progress bar — 티어 경계 세그먼트 */}
            <div className="relative h-3 rounded-full overflow-hidden bg-[#EEE9E4]">
              {/* 채워진 바 */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ backgroundColor: isFree ? "#2D8B4E" : "#E8432A" }}
                animate={{ width: `${Math.max(progressPct, 1.5)}%` }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              {/* 티어 경계선 */}
              {TIER_ENDS.slice(0, -1).map((pct) => (
                <div
                  key={pct}
                  className="absolute top-0 bottom-0 w-[2px] bg-white/70"
                  style={{ left: `${pct}%` }}
                />
              ))}
            </div>

            {/* sold count */}
            <div className="flex justify-between mt-1.5">
              <span className="text-[11px] text-text-secondary">
                <span className="font-semibold text-text-primary">{soldCount}</span> sold
              </span>
              <span className="text-[11px] text-text-secondary">{TOTAL_SLOTS} total slots</span>
            </div>
          </div>

          {/* ── 현재 가격 ── */}
          <div className="px-6 pt-2 pb-6 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-text-secondary/60 mb-2">
              Your price if you buy now
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={nextTier.name}
                initial={{ opacity: 0, scale: 0.9, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -6 }}
                transition={{ duration: 0.22 }}
              >
                <p
                  className={`font-display font-extrabold leading-none ${
                    isFree ? "text-green" : "text-primary"
                  } text-[3.6rem]`}
                >
                  {isFree ? "FREE" : `$${animatedPrice.toFixed(2)}`}
                </p>

                {/* 티어 설명 — flavor text */}
                <p className={`text-sm mt-2 font-medium ${isFree ? "text-green/80" : "text-text-secondary"}`}>
                  {nextTier.emoji}&nbsp;{nextTier.name} tier
                  <span className="mx-2 text-text-secondary/30">·</span>
                  <span className="font-normal text-text-secondary/70 italic">
                    {nextTier.flavor}
                  </span>
                </p>

                {/* FREE 남은 자리 */}
                {isFree && (
                  <p className="text-xs text-green/70 mt-1">
                    {freeSlotsLeft > 0
                      ? `${freeSlotsLeft} free spot${freeSlotsLeft !== 1 ? "s" : ""} left`
                      : "Last free spot!"}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Buy button ── */}
          <div className="px-6 pb-7 relative">
            <motion.button
              onClick={handleBuy}
              disabled={isAnimating}
              whileTap={{ scale: 0.975 }}
              className={`w-full py-[15px] rounded-[14px] font-bold text-white text-[16px] transition-colors duration-300 disabled:opacity-70 cursor-pointer ${
                justBought
                  ? "bg-green"
                  : isFree
                    ? "bg-green hover:bg-[#267a43]"
                    : "bg-primary hover:bg-primary-hover"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={justBought ? "done" : isFree ? "free" : "paid-" + nextTier.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="block"
                >
                  {justBought
                    ? "✓  Locked in!"
                    : isFree
                      ? "Taste it FREE  →"
                      : `Buy for ${nextTier.label}  →`}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Toast */}
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

        <p className="text-center text-xs text-text-secondary mt-16">
          Demo only — click to see the price climb through each ingredient tier 🥢
        </p>
      </div>
    </SectionWrapper>
  );
}
