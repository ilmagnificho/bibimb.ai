"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

const COMMUNITY_VALUES = [
  {
    emoji: "\ud83e\udd1d",
    title: "Builders test each other\u2019s agents",
    description:
      "Your agent gets real feedback from people who build agents themselves \u2014 not random clicks.",
  },
  {
    emoji: "\ud83d\udcca",
    title: "Revenue numbers are shared openly",
    description:
      "What pricing works? What doesn\u2019t? No secrets. The community learns and earns together.",
  },
  {
    emoji: "\ud83d\ude80",
    title: "Every launch gets community support",
    description:
      "When you deploy, fellow builders show up as your first users. You do the same for them.",
  },
];

export default function CommunityJoin() {
  return (
    <SectionWrapper id="community" bgClassName="bg-bg">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Better together
          </span>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-4 leading-tight">
            Built by builders.<br />
            For builders. No gatekeepers.
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto text-[15px] leading-relaxed">
            We believe great agents shouldn&apos;t die invisible. So we test each
            other&apos;s work, share what we learn, and help each other earn.
          </p>
        </motion.div>
      </div>

      {/* 3 behavior-based value prop cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {COMMUNITY_VALUES.map((prop, idx) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-white rounded-2xl p-6 border border-border hover:border-primary/20 transition-colors"
          >
            <span className="text-2xl block mb-3">{prop.emoji}</span>
            <h3 className="font-display font-bold text-[1rem] text-text-primary mb-2 leading-snug">
              {prop.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {prop.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={scrollToWaitlist}
          className="px-8 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
        >
          Become a founding creator {"\u2192"}
        </button>
      </div>
    </SectionWrapper>
  );
}
