"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const problems = [
  {
    icon: "🤖",
    stat: "1,000+",
    title: "New AI agents ship every week",
    description:
      "The explosion of AI agents is real. But without users and reviews, most agents die invisible — no matter how good they are.",
  },
  {
    icon: "🔍",
    stat: "73%",
    title: "of users don't trust unreviewed AI",
    description:
      "Would you hand your data to an agent with zero reviews? Neither would your customers. Trust is the #1 barrier to adoption.",
  },
  {
    icon: "💀",
    stat: "90%",
    title: "of indie AI agents fail in 90 days",
    description:
      "Not because the product is bad — because they never got their first 5 real users. No users → no reviews → no trust → no growth.",
  },
];

export default function TrustProblem() {
  return (
    <SectionWrapper id="trust-problem" bgClassName="bg-[#F5F0EB]">
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            The problem
          </span>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-4 leading-tight">
            Great AI agents are dying<br />
            because nobody trusts them yet.
          </h2>
          <p className="text-text-secondary max-w-md mx-auto text-[15px] leading-relaxed">
            The AI agent market has an invisible crisis: a trust gap<br />
            between builders and the users who need their work.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {problems.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-7 border border-border"
          >
            <span className="text-3xl block mb-4">{item.icon}</span>
            <p className="font-display font-extrabold text-[2rem] text-primary leading-none mb-2">
              {item.stat}
            </p>
            <h3 className="font-display font-bold text-[1.05rem] text-text-primary mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Solution bridge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-border shadow-sm">
          <span className="text-2xl">🍚</span>
          <p className="text-[15px] text-text-primary font-medium">
            Bibimb.ai fixes this — by giving every agent its{" "}
            <span className="font-bold text-primary">first free users</span>,{" "}
            <span className="font-bold text-primary">first real reviews</span>, and a{" "}
            <span className="font-bold text-primary">path to earn trust</span>.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
