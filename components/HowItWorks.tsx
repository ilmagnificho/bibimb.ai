"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    step: "01",
    emoji: "🚀",
    title: "Deploy your agent",
    description:
      "Creators list their AI agent and choose how many free slots to offer (5–50) and a target price. Trust building starts here.",
    tag: "For Creators",
  },
  {
    step: "02",
    emoji: "🥬",
    title: "First users try free",
    description:
      "Early adopters get the agent for free — the Namul tier. They use it, test it, and leave the first real reviews.",
    tag: "Namul tier",
  },
  {
    step: "03",
    emoji: "📈",
    title: "Trust builds, price rises",
    description:
      "As real reviews accumulate, the price steps up naturally. Each tier reflects growing confidence — from free to target price.",
    tag: "Trust → Value",
  },
  {
    step: "04",
    emoji: "🌊",
    title: "A trust economy grows",
    description:
      "Agents with real trust earn steady revenue. Users know what they're paying for. Zero creator fees for founding members.",
    tag: "For Everyone",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary leading-tight max-w-sm">
          How trust gets built
        </h2>
        <p className="text-text-secondary max-w-xs md:text-right text-sm leading-relaxed">
          Every agent starts at zero trust.<br />
          Bibimb.ai gives it a path to earn it.
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
