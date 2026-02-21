"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const adopterBenefits = [
  { icon: "🥬", text: "Try any agent free — every listing starts with a free Namul tier" },
  { icon: "⭐", text: "Read reviews from real users who actually tested the agent" },
  { icon: "⏰", text: "Lock in the lowest price — early adopters always pay less" },
  { icon: "🔍", text: "Discover agents before they hit the mainstream" },
  { icon: "💬", text: "Your review shapes the agent's reputation from day one" },
];

const creatorBenefits = [
  { icon: "🚀", text: "Get your first 5–50 real users guaranteed, with honest reviews" },
  { icon: "⚙️", text: "Control your pricing — set free slots and target price yourself" },
  { icon: "💸", text: "Zero platform fees for founding creators, forever" },
  { icon: "📈", text: "Trust-based pricing means revenue grows with your reputation" },
  { icon: "🌐", text: "Built-in discovery — users come looking for agents to try" },
];

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export default function ForWhom() {
  return (
    <SectionWrapper id="for-whom" bgClassName="bg-[#F5F0EB]">
      <div className="mb-12">
        <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-2">
          Built for both sides
        </h2>
        <p className="text-text-secondary text-[15px]">
          Whether you&apos;re trying agents or building them — Bibimb.ai works for you.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Early Adopters */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-2xl p-8 flex flex-col"
          style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.05)" }}
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-3">
              👤 For Early Adopters
            </span>
            <h3 className="font-display font-bold text-[1.4rem] text-text-primary leading-tight">
              Try first,<br />trust later.
            </h3>
          </div>
          <ul className="space-y-3.5 flex-1 mb-8">
            {adopterBenefits.map((b) => (
              <li key={b.text} className="flex items-start gap-3">
                <span className="text-base mt-0.5 shrink-0">{b.icon}</span>
                <span className="text-[15px] text-text-secondary leading-relaxed">{b.text}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToWaitlist}
            className="w-full py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
          >
            Join as early adopter →
          </button>
        </motion.div>

        {/* Agent Creators */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-2xl p-8 flex flex-col"
          style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.05)" }}
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              🧑‍🍳 For Agent Creators
            </span>
            <h3 className="font-display font-bold text-[1.4rem] text-text-primary leading-tight">
              Deploy once,<br />earn trust forever.
            </h3>
          </div>
          <ul className="space-y-3.5 flex-1 mb-8">
            {creatorBenefits.map((b) => (
              <li key={b.text} className="flex items-start gap-3">
                <span className="text-base mt-0.5 shrink-0">{b.icon}</span>
                <span className="text-[15px] text-text-secondary leading-relaxed">{b.text}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToWaitlist}
            className="w-full py-3.5 border-2 border-secondary text-secondary font-semibold rounded-[12px] hover:bg-secondary-light/50 transition-colors text-[15px] cursor-pointer"
          >
            Deploy my agent →
          </button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
