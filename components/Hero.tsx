"use client";

import { motion } from "framer-motion";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

// Creator journey cards — 에이전트 성장 경로를 보여주는 3단계
const JOURNEY_CARDS = [
  {
    stage: "Just launched",
    emoji: "\ud83d\udcdd",
    name: "BlogDraft AI",
    tagline: "SEO blog posts in 60 seconds",
    detail: "\ud83e\udd6c 3 free spots left \u00b7 No reviews yet",
    status: "Gathering first believers",
    accent: "text-green",
    bg: "bg-green/8",
  },
  {
    stage: "Building trust",
    emoji: "\ud83d\udd0d",
    name: "LeadRadar",
    tagline: "Find & qualify leads automatically",
    detail: "\u2605 4.8 (5 reviews) \u00b7 $8.70/user",
    status: "Trust earned, revenue started",
    accent: "text-secondary",
    bg: "bg-secondary-light/40",
  },
  {
    stage: "Scaled",
    emoji: "\ud83d\udee0\ufe0f",
    name: "CodeReviewer Pro",
    tagline: "Catch bugs before your team does",
    detail: "\u2605 4.6 (48 reviews) \u00b7 $29/user \u00b7 200+ users",
    status: "Earning steady revenue",
    accent: "text-primary",
    bg: "bg-primary-light/60",
  },
];

function JourneyCard({ card, delay }: { card: typeof JOURNEY_CARDS[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-4 border border-border/70 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Stage label */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] font-bold uppercase tracking-widest ${card.accent}`}>
          {card.stage}
        </span>
      </div>

      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center text-xl shrink-0`}>
          {card.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-[14px] text-text-primary leading-tight truncate">
            {card.name}
          </p>
          <p className="text-[12px] text-text-secondary mt-0.5 leading-snug">
            {card.tagline}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
        <span className="text-[11px] text-text-secondary/70">{card.detail}</span>
      </div>
      <p className="text-[11px] text-text-secondary/50 mt-1.5 italic">
        {card.status}
      </p>
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

          {/* -- Left: Copy -- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary-light/60 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                Pre-launch &middot; Founding creators wanted
              </span>
            </div>

            <h1 className="font-display font-extrabold text-[2.6rem] md:text-[3.6rem] leading-[1.08] text-text-primary tracking-tight">
              Where AI agent creators<br />
              come to <span className="text-primary">earn.</span>
            </h1>

            <p className="mt-6 text-[1.05rem] md:text-[1.1rem] leading-[1.75] text-text-secondary">
              You built something great. But GPT Store pays nothing.<br />
              Going solo is exhausting.{" "}
              <span className="text-text-primary font-semibold">
                Bibimb.ai is where agent creators
                get their first users, first reviews, and first revenue — together.
              </span>
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={scrollToWaitlist}
                className="px-7 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
              >
                Deploy my agent \ud83d\ude80
              </button>
              <button
                onClick={scrollToWaitlist}
                className="px-7 py-3.5 border-2 border-border text-text-primary font-semibold rounded-[12px] hover:border-primary/40 transition-colors text-[15px] cursor-pointer"
              >
                Try agents for free \ud83e\udd6c
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
                { val: "5\u201350", label: "real users guaranteed", sub: "your first believers" },
                { val: "0%", label: "platform fees", sub: "for founding creators" },
                { val: "$0\u2013$99", label: "you set your price", sub: "we handle the tiers" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-[1.5rem] text-text-primary">{s.val}</p>
                  <p className="text-sm text-text-secondary mt-0.5">{s.label}</p>
                  <p className="text-[11px] text-text-secondary/50 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* -- Right: Creator journey cards -- */}
          <div className="flex flex-col gap-3">
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex items-center justify-between mb-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary/40">
                Your agent&apos;s journey on Bibimb.ai
              </span>
              <span className="text-[11px] text-text-secondary/40">
                Preview only
              </span>
            </motion.div>

            {JOURNEY_CARDS.map((card, i) => (
              <JourneyCard key={card.name} card={card} delay={0.3 + i * 0.12} />
            ))}

            {/* Bottom hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-center text-[12px] text-text-secondary/40 mt-1"
            >
              Every agent starts at Card 1. Community takes you to Card 3.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
