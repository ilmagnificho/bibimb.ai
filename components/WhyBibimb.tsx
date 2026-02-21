"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { AGENT_CATEGORIES } from "@/lib/constants";

// TrustProblem + AgentCategories 통합 섹션
// "왜 Bibimb.ai인가" 흐름: 문제 → 해결 → 카테고리

export default function WhyBibimb() {
  return (
    <SectionWrapper id="why" bgClassName="bg-[#F5F0EB]">

      {/* ── 상단: 문제 헤더 ── */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            The trust gap
          </span>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-4 leading-tight">
            Great AI agents are dying<br />
            because nobody trusts them yet.
          </h2>
        </motion.div>
      </div>

      {/* ── 3개 문제 카드 ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          {
            icon: "🤖",
            stat: "1,000+",
            title: "New AI agents ship every week",
            description: "But without users and reviews, most die invisible — no matter how good they are.",
          },
          {
            icon: "🔍",
            stat: "73%",
            title: "of users don't trust unreviewed AI",
            description: "Trust is the #1 barrier to adoption. No reviews = no clicks = dead agent.",
          },
          {
            icon: "💀",
            stat: "90%",
            title: "of indie agents fail in 90 days",
            description: "Not because the product is bad. Because they never got their first 5 real users.",
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

      {/* ── 해결책 브릿지 ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="bg-white rounded-2xl border border-primary/15 px-7 py-5 mb-14 flex flex-col sm:flex-row items-center gap-4"
      >
        <span className="text-3xl shrink-0">🍚</span>
        <p className="text-[15px] text-text-primary font-medium text-center sm:text-left leading-relaxed">
          Bibimb.ai fixes this — every agent starts with{" "}
          <span className="font-bold text-primary">free trial users</span>,
          earns{" "}
          <span className="font-bold text-primary">real reviews</span>, and
          builds{" "}
          <span className="font-bold text-primary">compounding trust</span>{" "}
          before charging a cent.
        </p>
      </motion.div>

      {/* ── 구분선 + 카테고리 ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 block">
          Agents for every workflow
        </span>
        <h3 className="font-display font-bold text-[1.6rem] md:text-[1.9rem] text-text-primary leading-tight">
          Whatever you need done,<br className="hidden sm:block" />
          there&apos;s an agent for that.
        </h3>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {AGENT_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className="bg-white rounded-xl p-4 border border-border hover:border-primary/30 hover:shadow-sm transition-all group cursor-default"
          >
            <span className="text-xl block mb-2">{cat.icon}</span>
            <h4 className="font-display font-bold text-[0.9rem] text-text-primary mb-0.5 leading-snug group-hover:text-primary transition-colors">
              {cat.name}
            </h4>
            <p className="text-text-secondary text-[11px] leading-relaxed">
              {cat.examples}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-[11px] text-text-secondary/40 mt-6">
        More categories and agents coming at launch.
      </p>

    </SectionWrapper>
  );
}
