"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    step: "01",
    emoji: "📦",
    title: "List your bowl",
    description:
      "Makers add their AI tool and set a target price. Every listing starts at FREE — no exceptions.",
    tag: "For Makers",
  },
  {
    step: "02",
    emoji: "🥬",
    title: "First 5 taste free",
    description:
      "The first 5 buyers get it at zero cost — the Namul tier. They leave a real review. No fake signups.",
    tag: "Namul tier",
  },
  {
    step: "03",
    emoji: "🌶️",
    title: "Price rises with heat",
    description:
      "Each tier fills up and the price steps up — like adding gochujang to the bowl. $4.99 → $9.99 → $19.99 → $29.",
    tag: "Gochujang → Jeongsik",
  },
  {
    step: "04",
    emoji: "💰",
    title: "Maker earns, buyer wins",
    description:
      "When the target price is reached, makers earn steady income. Zero seller fees. The bowl is complete.",
    tag: "For Everyone",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary leading-tight max-w-xs">
          How the bowl fills up
        </h2>
        <p className="text-text-secondary max-w-xs md:text-right text-sm leading-relaxed">
          Early = cheap. Late = full price. Simple as bibimbap.
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
              <p className="text-text-secondary text-sm leading-relaxed">
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
