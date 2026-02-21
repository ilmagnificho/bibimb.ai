"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const buyerBenefits = [
  { icon: "🥬", text: "First 5 get it free — the Namul tier is always open" },
  { icon: "🌶️", text: "Then just $4.99 — a coffee's worth of spice" },
  { icon: "⏰", text: "Earliest buyers lock in the lowest price forever" },
  { icon: "⭐", text: "Reviews from real early adopters, not fake signups" },
  { icon: "🥢", text: "Discover tools before they hit the mainstream bowl" },
];

const makerBenefits = [
  { icon: "🚀", text: "Guaranteed first 5 users + reviews on day one" },
  { icon: "🎯", text: "Set your Jeongsik (target) price — we handle the rest" },
  { icon: "💸", text: "Zero seller fees, no matter the tier" },
  { icon: "📣", text: "Built-in launch exposure to real early adopters" },
  { icon: "💬", text: "Honest feedback before you scale the recipe" },
];

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export default function ForWhom() {
  return (
    <SectionWrapper id="for-whom" bgClassName="bg-[#F5F0EB]">
      <div className="mb-12">
        <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-2">
          Two seats at the table
        </h2>
        <p className="text-text-secondary text-sm">
          Whether you&apos;re eating or cooking — there&apos;s a bowl for you.
        </p>
      </div>

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
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-3">
              🍳 For Buyers
            </span>
            <h3 className="font-display font-bold text-[1.4rem] text-text-primary leading-tight">
              Eat first,<br />pay less.
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
            Grab a free spot →
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
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              🧑‍🍳 For Makers
            </span>
            <h3 className="font-display font-bold text-[1.4rem] text-text-primary leading-tight">
              Cook once,<br />earn steady.
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
            List your recipe →
          </button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
