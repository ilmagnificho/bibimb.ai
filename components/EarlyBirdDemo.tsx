"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { generateTiers, getTierForCount, getTotalSlots, type TierConfig } from "@/lib/constants";
import { useCountUp } from "@/lib/hooks/useCountUp";

type ViewMode = "buyer" | "creator";

export default function EarlyBirdDemo() {
  // ── Creator controls ──
  const [freeSlots, setFreeSlots] = useState(5);
  const [targetPrice, setTargetPrice] = useState(29);

  // ── View mode toggle ──
  const [viewMode, setViewMode] = useState<ViewMode>("buyer");

  // ── Demo state ──
  const tiers = generateTiers(freeSlots, targetPrice);
  const totalSlots = getTotalSlots(tiers);
  const [soldCount, setSoldCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null);
  const [justBought, setJustBought] = useState(false);

  const nextSlot = soldCount + 1;
  const nextTier = getTierForCount(tiers, nextSlot);
  const nextPrice = nextTier.price;
  const isFree = nextPrice === 0;
  const freeSlotsLeft = Math.max(0, tiers[0].max - soldCount);

  // Current tier slots left
  const currentTierSlotsLeft = nextTier.max === Infinity
    ? null
    : nextTier.max - soldCount;

  const progressPct = Math.min((soldCount / totalSlots) * 100, 100);
  const animatedPrice = useCountUp(nextPrice, 450);

  // Tier segments for progress bar (exclude last/infinite tier)
  const tierSegments = tiers.slice(0, -1).map((tier, i) => {
    const start = i === 0 ? 0 : ((tiers[i - 1].max) / totalSlots) * 100;
    const end = (tier.max / totalSlots) * 100;
    return { tier, start, end, mid: (start + end) / 2 };
  });
  const lastTier = tiers[tiers.length - 1];

  const showToast = useCallback((msg: string) => {
    setToast({ msg, key: Date.now() });
    setTimeout(() => setToast(null), 2800);
  }, []);

  const handleBuy = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setJustBought(true);

    const thisSlot = soldCount + 1;
    const thisTier = getTierForCount(tiers, thisSlot);
    const newCount = thisSlot;
    const afterTier = getTierForCount(tiers, newCount + 1);

    setSoldCount(newCount);

    if (thisTier.price === 0) {
      showToast(`${thisTier.emoji} Free ${thisTier.name} spot — enjoy!`);
    } else if (afterTier.price > thisTier.price) {
      showToast(`${thisTier.emoji} Locked in at ${thisTier.label}! Next: ${afterTier.label}`);
    } else {
      showToast(`${thisTier.emoji} Got it for ${thisTier.label}!`);
    }

    setTimeout(() => { setJustBought(false); setIsAnimating(false); }, 1800);
    if (newCount >= totalSlots - 2) {
      setTimeout(() => { setSoldCount(3); setJustBought(false); setIsAnimating(false); }, 3200);
    }
  }, [soldCount, isAnimating, showToast, tiers, totalSlots]);

  // Reset demo when creator changes sliders
  const handleFreeSlotsChange = (val: number) => {
    setFreeSlots(val);
    setSoldCount(Math.min(3, val - 2));
  };
  const handleTargetPriceChange = (val: number) => {
    setTargetPrice(val);
    setSoldCount(3);
  };

  return (
    <SectionWrapper id="demo" bgClassName="bg-[#F5F0EB]">
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-2">
          See how trust-based pricing works 🌶️
        </h2>
        <p className="text-text-secondary text-[15px]">
          Creators control their pricing. Buyers see trust grow in real time.
        </p>
      </div>

      {/* ── View Toggle ── */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white rounded-xl border border-border p-1 gap-1">
          <button
            onClick={() => setViewMode("buyer")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              viewMode === "buyer"
                ? "bg-primary text-white shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            👤 I&apos;m a buyer
          </button>
          <button
            onClick={() => setViewMode("creator")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              viewMode === "creator"
                ? "bg-secondary text-white shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            🧑‍🍳 I&apos;m a creator
          </button>
        </div>
      </div>

      <div className="max-w-[520px] mx-auto">
        {/* ── Creator Control Panel ── */}
        <AnimatePresence mode="wait">
          {viewMode === "creator" && (
            <motion.div
              key="creator-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-2xl border border-secondary/30 p-6 mb-4 shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-lg">⚙️</span>
                  <p className="font-display font-bold text-[15px] text-text-primary">
                    Creator Control Panel
                  </p>
                </div>

                {/* Free slots slider */}
                <div className="mb-5">
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="text-sm font-medium text-text-primary">
                      Free trial slots
                    </label>
                    <span className="font-display font-bold text-primary text-lg">
                      {freeSlots}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    step={1}
                    value={freeSlots}
                    onChange={(e) => handleFreeSlotsChange(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary bg-[#EEE9E4]"
                  />
                  <div className="flex justify-between text-[10px] text-text-secondary/50 mt-1">
                    <span>5</span>
                    <span>50</span>
                  </div>
                </div>

                {/* Target price slider */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="text-sm font-medium text-text-primary">
                      Target price
                    </label>
                    <span className="font-display font-bold text-primary text-lg">
                      {targetPrice === 0 ? "FREE" : `$${targetPrice}`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={99}
                    step={1}
                    value={targetPrice}
                    onChange={(e) => handleTargetPriceChange(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary bg-[#EEE9E4]"
                  />
                  <div className="flex justify-between text-[10px] text-text-secondary/50 mt-1">
                    <span>$0</span>
                    <span>$99</span>
                  </div>
                </div>

                {/* Auto-calculated tier preview */}
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/40 mb-3">
                    Auto-calculated tiers
                  </p>
                  <div className="space-y-1.5">
                    {tiers.map((t) => (
                      <div key={t.name} className="flex items-center gap-2 text-xs">
                        <span className="w-4 text-center">{t.emoji}</span>
                        <span className="font-semibold text-text-primary w-20">{t.name}</span>
                        <span className="text-text-secondary flex-1">
                          {t.max === Infinity ? `${t.min}+` : `${t.min}–${t.max}`}
                        </span>
                        <span className={`font-bold ${t.price === 0 ? "text-green" : "text-primary"}`}>
                          {t.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Pricing Card ── */}
        <div
          className="bg-white rounded-2xl overflow-visible"
          style={{ boxShadow: "0 2px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)" }}
        >
          {/* Product header */}
          <div className="px-6 pt-6 pb-5 flex items-center gap-3 border-b border-[#F0EDE8]">
            <div className="w-11 h-11 rounded-xl bg-[#FFF0ED] flex items-center justify-center text-2xl shrink-0">🤖</div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-[16px] text-text-primary leading-tight">ExampleBot</p>
              <p className="text-xs text-text-secondary mt-0.5">AI meeting summarizer agent</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-widest">Target</p>
              <p className="font-display font-bold text-base text-text-primary">
                {targetPrice === 0 ? "FREE" : `$${targetPrice}`}
              </p>
            </div>
          </div>

          {/* ── Segmented progress bar ── */}
          <div className="px-6 pt-5 pb-2">
            <div className="relative h-5 rounded-lg overflow-hidden bg-[#EEE9E4] mb-3">
              {/* Tier background highlights */}
              {tierSegments.map((seg) => (
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
              {/* Filled progress */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-lg"
                style={{ backgroundColor: isFree ? "#2D8B4E" : "#E8432A" }}
                animate={{ width: `${Math.max(progressPct, 1)}%` }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              {/* Segment boundaries + price labels */}
              {tierSegments.map((seg, i) => (
                <div key={seg.tier.name}>
                  {i > 0 && (
                    <div
                      className="absolute top-0 bottom-0 w-px bg-white/60"
                      style={{ left: `${seg.start}%` }}
                    />
                  )}
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
              {/* Last tier label */}
              <div
                className="absolute inset-y-0 flex items-center justify-end pr-2 pointer-events-none"
                style={{ left: `${tierSegments[tierSegments.length - 1]?.end ?? 80}%`, right: 0 }}
              >
                <span className={`text-[10px] font-bold select-none ${
                  nextTier.name === lastTier.name ? "text-primary" : "text-text-secondary/40"
                }`}>
                  {lastTier.label}
                </span>
              </div>
            </div>

            {/* Tier name labels */}
            <div className="relative h-5">
              {tierSegments.map((seg) => (
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
                  left: `${(tierSegments[tierSegments.length - 1]?.end ?? 80) + (100 - (tierSegments[tierSegments.length - 1]?.end ?? 80)) / 2}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <span className={`text-[9px] font-semibold uppercase tracking-wide transition-colors ${
                  nextTier.name === lastTier.name ? "text-primary" : "text-text-secondary/35"
                }`}>
                  {lastTier.emoji} {lastTier.name}
                </span>
              </div>
            </div>

            {/* Sold count + remaining */}
            <div className="flex justify-between items-center mt-3">
              <span className="text-[12px] text-text-secondary">
                <span className="font-bold text-text-primary">{soldCount}</span> users
              </span>
              {currentTierSlotsLeft !== null && currentTierSlotsLeft > 0 && (
                <span className={`text-[12px] font-semibold ${isFree ? "text-green" : "text-primary"}`}>
                  {isFree
                    ? `🥬 ${freeSlotsLeft} free spot${freeSlotsLeft !== 1 ? "s" : ""} left`
                    : `🌶️ ${currentTierSlotsLeft} spot${currentTierSlotsLeft !== 1 ? "s" : ""} left at ${nextTier.label}`}
                </span>
              )}
              <span className="text-[12px] text-text-secondary">{totalSlots} total</span>
            </div>
          </div>

          {/* ── Current price ── */}
          <div className="px-6 pt-4 pb-5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-text-secondary/50 mb-3">
              {viewMode === "buyer" ? "Your price if you try now" : "Next user pays"}
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={nextTier.name + targetPrice}
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
                  {justBought ? "✓  Trust earned!" : isFree ? "Try it FREE  →" : `Try for ${nextTier.label}  →`}
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
          Demo only — click to see how trust-based pricing works through each tier 🥢
        </p>
      </div>
    </SectionWrapper>
  );
}
