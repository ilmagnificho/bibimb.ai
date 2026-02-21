"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    step: "01",
    title: "List",
    emoji: "📦",
    description: "Makers list their tool and set a target price. Starts at FREE — always.",
  },
  {
    step: "02",
    title: "Taste",
    emoji: "🍴",
    description: "First 5 users get it free and leave a real review. No fake signups.",
  },
  {
    step: "03",
    title: "Rise",
    emoji: "📈",
    description: "Each tier fills up and the price steps up: $4.99 → $9.99 → $19.99 → $29.",
  },
  {
    step: "04",
    title: "Earn",
    emoji: "💰",
    description: "Maker hits their target price and earns steady income. Zero seller fees.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary leading-tight max-w-xs">
          How it works
        </h2>
        <p className="text-text-secondary max-w-xs md:text-right text-sm leading-relaxed">
          A pricing model that rewards early adopters and gives makers a fair launch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {steps.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-bg p-7 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-widest text-text-secondary/50 uppercase">{item.step}</span>
              <span className="text-2xl">{item.emoji}</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
