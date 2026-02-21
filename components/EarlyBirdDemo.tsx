"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Toast from "@/components/ui/Toast";
import {
  EARLY_BIRD_TIERS,
  TOTAL_SLOTS,
  TARGET_PRICE,
  getTierForCount,
} from "@/lib/constants";
import { useCountUp } from "@/lib/hooks/useCountUp";

export default function EarlyBirdDemo() {
  const [soldCount, setSoldCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [buttonState, setButtonState] = useState<"idle" | "success">("idle");

  const currentTier = getTierForCount(soldCount);
  const currentPrice = currentTier.price;
  const freeRemaining = Math.max(0, 5 - soldCount);
  const progressPercent = Math.min((soldCount / TOTAL_SLOTS) * 100, 100);
  const isFree = currentPrice === 0;

  const animatedPrice = useCountUp(currentPrice, 400);

  const handleBuy = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setButtonState("success");

    const newCount = soldCount + 1;
    const newTier = getTierForCount(newCount);

    setSoldCount(newCount);

    // Toast message
    if (currentPrice === 0 && newTier.price === 0) {
      setToastMessage("You got it FREE! Leave a review to unlock more 🎉");
    } else if (currentPrice === 0 && newTier.price > 0) {
      setToastMessage(
        `FREE spots gone! Next buyer pays ${newTier.label} ☕`
      );
    } else if (newTier.name !== currentTier.name) {
      setToastMessage(
        `You got it for ${currentTier.label}! Next tier: ${newTier.label} 🔥`
      );
    } else {
      setToastMessage(`You got it for ${currentTier.label}! 🎉`);
    }

    // Reset button state after delay
    setTimeout(() => {
      setButtonState("idle");
      setToastMessage(null);
      setIsAnimating(false);
    }, 2500);

    // Full reset when reaching high count
    if (newCount >= 90) {
      setTimeout(() => {
        setSoldCount(3);
        setButtonState("idle");
        setToastMessage(null);
        setIsAnimating(false);
      }, 3000);
    }
  }, [soldCount, isAnimating, currentPrice, currentTier]);

  // Tier boundary positions for progress bar markers
  const tierMarkers = EARLY_BIRD_TIERS.slice(0, -1).map((tier) => ({
    position: (tier.max / TOTAL_SLOTS) * 100,
    label: tier.max === 5 ? "Free" : `$${EARLY_BIRD_TIERS[EARLY_BIRD_TIERS.indexOf(tier) + 1]?.price}`,
  }));

  return (
    <SectionWrapper
      id="demo"
      bgClassName="bg-gradient-to-b from-bg to-primary-light/20"
    >
      <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-center text-text-primary mb-4">
        See it in action
      </h2>
      <p className="text-center text-text-secondary mb-12 max-w-md mx-auto">
        Click the button to simulate buying. Watch the price rise through each tier.
      </p>

      <div className="max-w-lg mx-auto">
        <motion.div
          className="relative bg-bg-card rounded-[16px] p-6 md:p-8 border border-border shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Product header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🤖</span>
            <div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                ExampleBot
              </h3>
              <p className="text-text-secondary text-sm">
                AI meeting summarizer
              </p>
            </div>
          </div>

          {/* Target price */}
          <p className="text-text-secondary text-sm mb-4">
            Target Price:{" "}
            <span className="font-semibold text-text-primary">
              ${TARGET_PRICE}
            </span>
          </p>

          {/* Tier indicator strip */}
          <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
            {EARLY_BIRD_TIERS.map((tier, i) => (
              <span
                key={tier.name}
                className={`font-medium ${
                  currentTier.name === tier.name
                    ? "text-primary font-bold"
                    : ""
                }`}
              >
                {i === 0 ? "🆓 FREE" : tier.label}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="relative h-3 bg-border/50 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full rounded-full"
              style={{
                backgroundColor: isFree ? "#2D8B4E" : "#E8432A",
              }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            {/* Tier boundary markers */}
            {tierMarkers.map((marker) => (
              <div
                key={marker.position}
                className="absolute top-0 w-px h-full bg-text-secondary/30"
                style={{ left: `${Math.min(marker.position, 100)}%` }}
              />
            ))}
          </div>

          {/* Sold count */}
          <p className="text-xs text-text-secondary mb-6">
            {soldCount} / {TOTAL_SLOTS} sold
          </p>

          {/* Current price display */}
          <div className="text-center mb-2">
            <p className="text-sm text-text-secondary mb-1">Current Price</p>
            <p
              className={`font-display font-extrabold text-4xl ${
                isFree ? "text-green" : "text-primary"
              }`}
            >
              {isFree ? "FREE" : `$${animatedPrice.toFixed(2)}`}
            </p>
          </div>

          {/* Status message */}
          <p
            className={`text-center text-sm mb-6 ${
              isFree ? "text-green" : "text-text-secondary"
            }`}
          >
            {isFree
              ? `🆓 ${freeRemaining} free spot${freeRemaining !== 1 ? "s" : ""} left!`
              : `${currentTier.name} tier · Next: ${
                  getTierForCount(currentTier.max + 1).label
                }`}
          </p>

          {/* Buy button */}
          <button
            onClick={handleBuy}
            disabled={isAnimating}
            className={`w-full py-4 rounded-[12px] font-semibold text-white text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 cursor-pointer ${
              buttonState === "success"
                ? "bg-green"
                : isFree
                  ? "bg-green hover:bg-green/90"
                  : "bg-primary hover:bg-primary-hover"
            }`}
          >
            {buttonState === "success"
              ? "✓ Got it!"
              : isFree
                ? "Get it FREE 🎉"
                : `Buy for $${currentPrice.toFixed(2)} ☕`}
          </button>

          {/* Toast */}
          <Toast message={toastMessage} isVisible={!!toastMessage} />
        </motion.div>

        {/* Try again hint */}
        <p className="text-center text-xs text-text-secondary mt-4">
          This is a demo — click multiple times to see prices rise through tiers
        </p>
      </div>
    </SectionWrapper>
  );
}
