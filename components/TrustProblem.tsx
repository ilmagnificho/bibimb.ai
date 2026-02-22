"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function TrustProblem() {
  return (
    <SectionWrapper id="why" bgClassName="bg-[#F5F0EB]">

      {/* Section header */}
      <div className="text-center mb-12">
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
            You can build an agent in hours.<br />
            Selling it? That&apos;s where creators get stuck.
          </h2>
        </motion.div>
      </div>

      {/* 3 problem cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          {
            icon: "\ud83d\udc80",
            stat: "90%",
            title: "of indie agents die in 90 days",
            description:
              "No users \u2192 no reviews \u2192 no trust \u2192 no growth.",
          },
          {
            icon: "\ud83c\udfea",
            stat: "$0",
            title: "is what GPT Store pays most creators",
            description:
              "US-only. Invite-only. One builder has 1M users and $0 revenue.",
          },
          {
            icon: "\ud83d\ude29",
            stat: "Solo",
            title: "is how most creators try to sell",
            description:
              "Gumroad + Stripe + marketing + support + reviews. All alone. No leverage.",
          },
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-white rounded-2xl p-6 border border-border"
          >
            <span className="text-2xl block mb-3">{item.icon}</span>
            <p className="font-display font-extrabold text-[1.9rem] text-primary leading-none mb-1.5">
              {item.stat}
            </p>
            <h3 className="font-display font-bold text-[1rem] text-text-primary mb-1.5 leading-snug">
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
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="bg-white rounded-2xl border border-primary/15 px-7 py-5 flex flex-col sm:flex-row items-center gap-4"
      >
        <span className="text-3xl shrink-0">{"\ud83c\udf5a"}</span>
        <p className="text-[15px] text-text-primary font-medium text-center sm:text-left leading-relaxed">
          That&apos;s why we built this. A community where builders give each other{" "}
          <span className="font-bold text-primary">first users</span>,{" "}
          <span className="font-bold text-primary">honest reviews</span>, and a{" "}
          <span className="font-bold text-primary">real path to revenue</span>.
        </p>
      </motion.div>

    </SectionWrapper>
  );
}
