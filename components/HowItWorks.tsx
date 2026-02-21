"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    step: 1,
    title: "List",
    emoji: "📦",
    description:
      "Makers list their AI tool and set a target price. Starting price is always FREE 🆓",
  },
  {
    step: 2,
    title: "Taste",
    emoji: "🍴",
    description:
      "First 5 users try it for FREE and leave a review. Real feedback from real users.",
  },
  {
    step: 3,
    title: "Rise",
    emoji: "📈",
    description:
      "As more people buy, the price rises: $4.99 → $9.99 → $29. Early buyers pay less.",
  },
  {
    step: 4,
    title: "Earn",
    emoji: "💰",
    description:
      "Once target price is reached, makers earn steady revenue. Zero seller fees.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-center text-text-primary mb-14">
        How Bibimb.ai Works
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.15 }}
      >
        {steps.map((item) => (
          <motion.div
            key={item.step}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="bg-bg-card rounded-[16px] p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                {item.step}
              </span>
              <span className="text-3xl">{item.emoji}</span>
            </div>
            <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
