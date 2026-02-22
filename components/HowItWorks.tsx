"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    step: "01",
    emoji: "🚀",
    title: "Deploy in 5 minutes",
    description:
      "Set your free tier and target price. We auto-generate trust tiers.",
    tag: "For Creators",
  },
  {
    step: "02",
    emoji: "🥬",
    title: "Fellow builders test your agent",
    description:
      "Community members try your agent for real work — not random strangers, but builders who know what good looks like.",
    tag: "Namul tier",
  },
  {
    step: "03",
    emoji: "📈",
    title: "Peers review. Trust grows. Price rises.",
    description:
      "Honest peer reviews unlock the next pricing tier. Trust earned, not bought.",
    tag: "Trust → Revenue",
  },
  {
    step: "04",
    emoji: "💰",
    title: "You earn. Community grows.",
    description:
      "Steady revenue, zero platform fees. A track record verified by builders, not algorithms.",
    tag: "For Everyone",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary leading-tight max-w-sm">
          How the community works
        </h2>
        <p className="text-text-secondary max-w-xs md:text-right text-[15px] leading-relaxed">
          Every agent starts at zero.<br />
          The community gives you the path to revenue.
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
            className="bg-bg p-7 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] font-bold tracking-widest text-text-secondary/40 uppercase">
                {item.step}
              </span>
              <span className="text-2xl">{item.emoji}</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-[1.1rem] text-text-primary mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-text-secondary text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
            <span className="mt-auto inline-block text-[10px] font-semibold uppercase tracking-wider text-text-secondary/40 pt-2">
              {item.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
