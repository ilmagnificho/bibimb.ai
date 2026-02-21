"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const buyerBenefits = [
  { icon: "🆓", text: "First 5 users get it completely free" },
  { icon: "☕", text: "Then just $4.99 — less than a coffee" },
  { icon: "⏰", text: "Earliest buyers lock in the lowest price" },
  { icon: "⭐", text: "Real reviews from real early users" },
  { icon: "🔍", text: "Discover tools before they go mainstream" },
];

const makerBenefits = [
  { icon: "🚀", text: "Guaranteed first 5 users + reviews on day one" },
  { icon: "🎯", text: "Set your own target price, we handle the rest" },
  { icon: "💸", text: "Zero seller fees, ever" },
  { icon: "📣", text: "Built-in launch exposure to early adopters" },
  { icon: "💬", text: "Real feedback before you scale" },
];

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export default function ForWhom() {
  return (
    <SectionWrapper id="for-whom" bgClassName="bg-[#F5F0EB]">
      <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-14">
        Built for two kinds of people
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Buyers */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-2xl p-8 flex flex-col"
          style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.05)" }}
        >
          <div className="mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">For Buyers</span>
            <h3 className="font-display font-bold text-2xl text-text-primary leading-tight">
              Get more AI,<br />spend less money.
            </h3>
          </div>
          <ul className="space-y-3.5 flex-1 mb-8">
            {buyerBenefits.map((b) => (
              <li key={b.text} className="flex items-start gap-3">
                <span className="text-base mt-0.5 shrink-0">{b.icon}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{b.text}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToWaitlist}
            className="w-full py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
          >
            Join as buyer →
          </button>
        </motion.div>

        {/* Makers */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-2xl p-8 flex flex-col"
          style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.05)" }}
        >
          <div className="mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-3">For Makers</span>
            <h3 className="font-display font-bold text-2xl text-text-primary leading-tight">
              Launch fast,<br />earn fairly.
            </h3>
          </div>
          <ul className="space-y-3.5 flex-1 mb-8">
            {makerBenefits.map((b) => (
              <li key={b.text} className="flex items-start gap-3">
                <span className="text-base mt-0.5 shrink-0">{b.icon}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{b.text}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToWaitlist}
            className="w-full py-3.5 border-2 border-secondary text-secondary font-semibold rounded-[12px] hover:bg-secondary-light/50 transition-colors text-[15px] cursor-pointer"
          >
            List your tool →
          </button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
