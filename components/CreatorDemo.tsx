"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { generateTiers } from "@/lib/constants";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export default function CreatorDemo() {
  const [agentName, setAgentName] = useState("");
  const [freeSlots, setFreeSlots] = useState(10);
  const [targetPrice, setTargetPrice] = useState(29);

  const tiers = generateTiers(freeSlots, targetPrice);

  // Calculate estimated revenue (simple, not overpromising)
  const totalUsers = tiers.reduce((sum, t) => {
    const count = t.max === Infinity ? t.min : t.max;
    return sum + (count - (t.min - 1));
  }, 0);
  const estimatedRevenue = tiers.reduce((sum, t) => {
    if (t.price === 0) return sum;
    const slotCount = t.max === Infinity ? 1 : t.max - t.min + 1;
    return sum + slotCount * t.price;
  }, 0);

  const displayName = agentName.trim() || "My Awesome Agent";

  return (
    <SectionWrapper id="demo" bgClassName="bg-[#F5F0EB]">
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Try it yourself
          </span>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-2">
            Design your agent&apos;s pricing in 30 seconds
          </h2>
          <p className="text-text-secondary text-[15px]">
            Two inputs. Auto-generated trust tiers.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left: Creator controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border border-border p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg">{"\u2699\ufe0f"}</span>
              <p className="font-display font-bold text-[15px] text-text-primary">
                Your agent settings
              </p>
            </div>

            {/* Agent name */}
            <div className="mb-5">
              <label className="text-sm font-medium text-text-primary block mb-2">
                Your agent name
              </label>
              <input
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                placeholder="My Awesome Agent"
                className="w-full px-4 py-3 rounded-[10px] border border-border bg-white text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[15px]"
              />
            </div>

            {/* Free tier slider */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-sm font-medium text-text-primary">
                  Free tier size
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
                onChange={(e) => setFreeSlots(Number(e.target.value))}
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
                onChange={(e) => setTargetPrice(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary bg-[#EEE9E4]"
              />
              <div className="flex justify-between text-[10px] text-text-secondary/50 mt-1">
                <span>$0</span>
                <span>$99</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Generated tier preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl border border-border p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg">{"\ud83d\udcca"}</span>
              <p className="font-display font-bold text-[15px] text-text-primary truncate">
                {displayName}
              </p>
            </div>

            {/* Tier list */}
            <div className="space-y-2.5">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#FAFAF8] border border-border/50"
                >
                  <span className="text-lg w-6 text-center">{t.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[13px] text-text-primary leading-tight">
                      {t.name}
                      {t.price === 0 && <span className="text-green ml-1.5 text-[11px]">(Free)</span>}
                      {t.name === "Jeongsik" && <span className="text-primary ml-1.5 text-[11px]">(Target)</span>}
                    </p>
                    <p className="text-[11px] text-text-secondary/60 mt-0.5">
                      {t.max === Infinity
                        ? `User ${t.min}+`
                        : t.price === 0
                          ? `First ${t.max} users`
                          : `Users ${t.min}\u2013${t.max}`}
                    </p>
                  </div>
                  <span className={`font-display font-bold text-[15px] shrink-0 ${t.price === 0 ? "text-green" : "text-primary"}`}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Revenue projection */}
            <div className="mt-5 pt-4 border-t border-border/50">
              {targetPrice === 0 ? (
                <p className="text-[13px] text-text-secondary text-center">
                  Your agent is free forever. Reviews still build trust.
                </p>
              ) : (
                <>
                  <p className="text-[13px] text-text-secondary text-center">
                    If all tiers fill up with {totalUsers} users:{" "}
                    <span className="font-bold text-text-primary">
                      estimated revenue ${estimatedRevenue.toFixed(0)}
                    </span>
                  </p>
                  <p className="text-[11px] text-primary font-semibold text-center mt-1">
                    Founding creators keep 100% &mdash; zero platform fees.
                  </p>
                </>
              )}
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-8"
        >
          <button
            onClick={scrollToWaitlist}
            className="px-8 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
          >
            Like what you see? Join as founding creator {"\u2192"}
          </button>
          <p className="text-center text-xs text-text-secondary/50 mt-4">
            Simulation only &mdash; real pricing launches with the community.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
