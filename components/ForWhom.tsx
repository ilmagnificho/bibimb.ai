"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const buyerBenefits = [
  "First 5 users try it FREE",
  "Then just $4.99 — a coffee ☕",
  "Discover what's trending",
  "Be early — earliest buyers pay the least",
  "Real reviews from real users",
];

const makerBenefits = [
  "Get your first 5 users + reviews guaranteed",
  "Set your own target price",
  "Zero seller fees",
  "Built-in launch marketing",
  "Early feedback from real users",
];

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ForWhom() {
  return (
    <SectionWrapper id="for-whom">
      <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-center text-text-primary mb-14">
        Who is Bibimb.ai for?
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Buyers */}
        <motion.div
          variants={columnVariants}
          transition={{ duration: 0.5 }}
          className="bg-primary-light/30 rounded-[16px] p-8 border border-primary/10"
        >
          <h3 className="font-display font-semibold text-2xl text-text-primary mb-6">
            🍳 For Buyers
          </h3>
          <ul className="space-y-4 mb-8">
            {buyerBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span className="text-text-primary text-sm leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
          <Button variant="primary" size="lg" onClick={scrollToWaitlist} className="w-full">
            Join as Buyer →
          </Button>
        </motion.div>

        {/* Makers */}
        <motion.div
          variants={columnVariants}
          transition={{ duration: 0.5 }}
          className="bg-secondary-light/30 rounded-[16px] p-8 border border-secondary/10"
        >
          <h3 className="font-display font-semibold text-2xl text-text-primary mb-6">
            🧑‍🍳 For Makers
          </h3>
          <ul className="space-y-4 mb-8">
            {makerBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">✓</span>
                <span className="text-text-primary text-sm leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
          <Button variant="secondary" size="lg" onClick={scrollToWaitlist} className="w-full">
            List your tool →
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
