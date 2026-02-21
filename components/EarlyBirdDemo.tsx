"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { EARLY_BIRD_TIERS, TOTAL_SLOTS, getTierForCount } from "@/lib/constants";
import { useCountUp } from "@/lib/hooks/useCountUp";

export default function EarlyBirdDemo() {
  // soldCount = 지금까지 팔린 수. 다음 구매자는 soldCount+1번째.
  const [soldCount, setSoldCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null);
  const [justBought, setJustBought] = useState(false);

  // 다음 구매자(= 버튼 누를 사람)가 지불할 가격
  const nextBuyerSlot = soldCount + 1;
  const nextBuyerTier = getTierForCount(nextBuyerSlot);
  const nextBuyerPrice = nextBuyerTier.price;
  const isFreeNext = nextBuyerPrice === 0;

  // 현재 FREE 남은 자리: max 5 - soldCount
  const freeSlotsLeft = Math.max(0, 5 - soldCount);

  const progressPercent = Math.min((soldCount / TOTAL_SLOTS) * 100, 100);
  const animatedPrice = useCountUp(nextBuyerPrice, 450);

  const showToast = (msg: string) => {
    setToast({ msg, key: Date.now() });
    setTimeout(() => setToast(null), 2800);
  };

  const handleBuy = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setJustBought(true);

    const thisBuyerSlot = soldCount + 1;
    const thisTier = getTierForCount(thisBuyerSlot);
    const newSoldCount = thisBuyerSlot;
    const newNextTier = getTierForCount(newSoldCount + 1);

    setSoldCount(newSoldCount);

    if (thisTier.price === 0) {
      showToast("🎉 You got it FREE! Leave a review to help others.");
    } else if (newNextTier.price > thisTier.price) {
      showToast(`☕ Got it for ${thisTier.label}! Next tier: ${newNextTier.label}`);
    } else {
      showToast(`✓ Got it for ${thisTier.label}!`);
    }

    setTimeout(() => {
      setJustBought(false);
      setIsAnimating(false);
    }, 1800);

    if (newSoldCount >= 88) {
      setTimeout(() => {
        setSoldCount(3);
        setJustBought(false);
        setIsAnimating(false);
      }, 3200);
    }
  }, [soldCount, isAnimating]);

  // 티어 경계선 위치 (프로그레스바용)
  const boundaries = [
    { pos: (5 / TOTAL_SLOTS) * 100, label: "FREE" },
    { pos: (15 / TOTAL_SLOTS) * 100, label: "$4.99" },
    { pos: (35 / TOTAL_SLOTS) * 100, label: "$9.99" },
  ];

  return (
    <SectionWrapper id="demo" bgClassName="bg-[#F5F0EB]">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-text-primary mb-3">
          Try it yourself
        </h2>
        <p className="text-text-secondary max-w-sm mx-auto">
          Hit the button. Watch your price lock in.
        </p>
      </div>

      <div className="max-w-[440px] mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.05)" }}>

          {/* ─── Product strip ─── */}
          <div className="px-6 pt-6 pb-4 flex items-center gap-3 border-b border-[#F0EDE8]">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0ED] flex items-center justify-center text-xl">🤖</div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-[15px] text-text-primary leading-tight">ExampleBot</p>
              <p className="text-xs text-text-secondary mt-0.5">AI meeting summarizer</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] text-text-secondary uppercase tracking-wider">Target</p>
              <p className="font-display font-bold text-sm text-text-primary">$29</p>
            </div>
          </div>

          {/* ─── Tier ladder ─── */}
          <div className="px-6 pt-5 pb-2">
            <div className="flex justify-between items-end mb-2">
              {EARLY_BIRD_TIERS.map((tier, i) => {
                const isActive = getTierForCount(nextBuyerSlot).name === tier.name;
                return (
                  <div key={tier.name} className="flex flex-col items-center gap-1">
                    <span
                      className={`text-[10px] font-semibold transition-colors duration-300 ${
                        isActive ? (i === 0 ? "text-green" : "text-primary") : "text-text-secondary/40"
                      }`}
                    >
                      {i === 0 ? "FREE" : tier.label}
                    </span>
                    <div
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${
                        isActive ? (i === 0 ? "bg-green scale-150" : "bg-primary scale-150") : "bg-text-secondary/20"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="relative h-2 bg-[#EEE9E4] rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ backgroundColor: isFreeNext ? "#2D8B4E" : "#E8432A" }}
                animate={{ width: `${Math.max(progressPercent, 2)}%` }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              {boundaries.map((b) => (
                <div
                  key={b.pos}
                  className="absolute top-0 bottom-0 w-px bg-white/60"
                  style={{ left: `${b.pos}%` }}
                />
              ))}
            </div>

            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-text-secondary">{soldCount} sold</span>
              <span className="text-[10px] text-text-secondary">{TOTAL_SLOTS} total</span>
            </div>
          </div>

          {/* ─── Price display ─── */}
          <div className="px-6 py-6 text-center">
            <p className="text-xs text-text-secondary uppercase tracking-widest mb-1 font-medium">
              {isFreeNext ? "Your price" : "Your price"}
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={nextBuyerTier.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className={`font-display font-extrabold text-5xl leading-none ${
                  isFreeNext ? "text-green" : "text-primary"
                }`}
              >
                {isFreeNext ? "FREE" : `$${animatedPrice.toFixed(2)}`}
              </motion.p>
            </AnimatePresence>

            <p className={`text-sm mt-2 font-medium ${isFreeNext ? "text-green" : "text-text-secondary"}`}>
              {isFreeNext
                ? freeSlotsLeft > 0
                  ? `${freeSlotsLeft} free spot${freeSlotsLeft !== 1 ? "s" : ""} left`
                  : "Last free spot!"
                : `${nextBuyerTier.name} tier`}
            </p>
          </div>

          {/* ─── CTA button ─── */}
          <div className="px-6 pb-6 relative">
            <motion.button
              onClick={handleBuy}
              disabled={isAnimating}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-[14px] rounded-[14px] font-semibold text-white text-[15px] transition-colors duration-300 disabled:opacity-70 cursor-pointer ${
                justBought
                  ? "bg-green"
                  : isFreeNext
                    ? "bg-green hover:bg-[#267a43]"
                    : "bg-primary hover:bg-primary-hover"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={justBought ? "done" : isFreeNext ? "free" : "paid"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  {justBought
                    ? "✓ Locked in!"
                    : isFreeNext
                      ? "Get it FREE →"
                      : `Buy for $${nextBuyerPrice.toFixed(2)} →`}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Toast */}
            <AnimatePresence>
              {toast && (
                <motion.div
                  key={toast.key}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-6 right-6 -bottom-12 bg-[#1A1A1A] text-white text-xs font-medium px-4 py-2.5 rounded-xl text-center shadow-lg"
                >
                  {toast.msg}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="text-center text-xs text-text-secondary mt-16 mb-2">
          Demo only — click to watch the price climb ↑
        </p>
      </div>
    </SectionWrapper>
  );
}
