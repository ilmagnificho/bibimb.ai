"use client";

import { motion } from "framer-motion";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

// 히어로 우측에 보여줄 에이전트 카드 미리보기 데이터
const PREVIEW_AGENTS = [
  {
    emoji: "📝",
    name: "BlogDraft AI",
    tagline: "SEO blog posts in 60 seconds",
    category: "Writing & Content",
    freeLeft: 3,
    totalFree: 5,
    rating: null, // 아직 리뷰 없음 — 솔직하게 표현
    price: "$0",
    isFree: true,
  },
  {
    emoji: "🔍",
    name: "LeadRadar",
    tagline: "Find & qualify leads automatically",
    category: "Marketing & Sales",
    freeLeft: 0,
    totalFree: 5,
    rating: 4.8,
    reviews: 5,
    price: "$8.70",
    isFree: false,
  },
  {
    emoji: "🛠️",
    name: "CodeReviewer Pro",
    tagline: "Catch bugs before your team does",
    category: "Code & Dev",
    freeLeft: 2,
    totalFree: 10,
    rating: 4.6,
    reviews: 8,
    price: "$0",
    isFree: true,
  },
];

function AgentCard({ agent, delay }: { agent: typeof PREVIEW_AGENTS[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-4 border border-border/70 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-light/60 flex items-center justify-center text-xl shrink-0">
          {agent.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="font-display font-bold text-[14px] text-text-primary leading-tight truncate">
              {agent.name}
            </p>
            <span
              className={`text-[11px] font-bold shrink-0 ${
                agent.isFree ? "text-green" : "text-primary"
              }`}
            >
              {agent.price}
            </span>
          </div>
          <p className="text-[12px] text-text-secondary mt-0.5 leading-snug">
            {agent.tagline}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
        {/* 왼쪽: 리뷰 or 아직 없음 */}
        <div className="flex items-center gap-1">
          {agent.rating ? (
            <>
              <span className="text-[11px] text-secondary font-bold">★ {agent.rating}</span>
              <span className="text-[11px] text-text-secondary/50">({agent.reviews})</span>
            </>
          ) : (
            <span className="text-[11px] text-text-secondary/50 italic">No reviews yet</span>
          )}
        </div>
        {/* 오른쪽: 남은 무료 슬롯 */}
        {agent.freeLeft > 0 ? (
          <span className="text-[11px] font-semibold text-green bg-green/8 px-2 py-0.5 rounded-full">
            🥬 {agent.freeLeft} free left
          </span>
        ) : (
          <span className="text-[11px] text-text-secondary/40">Free tier full</span>
        )}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#FFF0ED_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        {/* 2-column layout on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ── 좌측: 카피 ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary-light/60 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                Pre-launch · Founding members wanted
              </span>
            </div>

            <h1 className="font-display font-extrabold text-[2.6rem] md:text-[3.6rem] leading-[1.08] text-text-primary tracking-tight">
              Where AI agents<br />
              earn their first <span className="text-primary">trust.</span>
            </h1>

            <p className="mt-6 text-[1.05rem] md:text-[1.1rem] leading-[1.75] text-text-secondary">
              Thousands of AI agents launch every week.<br />
              Most die without a single real user.<br />
              <span className="text-text-primary font-semibold">
                Bibimb.ai gives every agent its first believers —<br />
                free trials, real reviews, trust that compounds.
              </span>
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={scrollToWaitlist}
                className="px-7 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
              >
                Try agents for free 🥬
              </button>
              <button
                onClick={scrollToWaitlist}
                className="px-7 py-3.5 border-2 border-border text-text-primary font-semibold rounded-[12px] hover:border-primary/40 transition-colors text-[15px] cursor-pointer"
              >
                Deploy my agent 🚀
              </button>
            </div>

            {/* Stats row */}
            <motion.div
              className="mt-12 flex flex-wrap gap-x-10 gap-y-5 pt-8 border-t border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {[
                { val: "FREE", label: "First users of every agent", sub: "Namul tier 🥬" },
                { val: "5–50", label: "Free slots, your choice", sub: "Creator-controlled" },
                { val: "0%", label: "Creator fees at launch", sub: "Founding members" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-[1.5rem] text-text-primary">{s.val}</p>
                  <p className="text-sm text-text-secondary mt-0.5">{s.label}</p>
                  <p className="text-[11px] text-text-secondary/50 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── 우측: 에이전트 카드 미리보기 ── */}
          <div className="flex flex-col gap-3">
            {/* 상단 레이블 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex items-center justify-between mb-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary/40">
                Coming at launch
              </span>
              <span className="text-[11px] text-text-secondary/40">
                Preview only
              </span>
            </motion.div>

            {PREVIEW_AGENTS.map((agent, i) => (
              <AgentCard key={agent.name} agent={agent} delay={0.3 + i * 0.12} />
            ))}

            {/* 하단 힌트 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-center text-[12px] text-text-secondary/40 mt-1"
            >
              + more agents at launch · all start with free slots
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
