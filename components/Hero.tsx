"use client";

import { motion } from "framer-motion";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

// Real quotes from real forums — actual pain points from agent creators
const BUILDER_VOICES = [
  {
    quote: "I have over 1M users on my GPT and still $0 revenue. I\u2019ve been paying server costs out of pocket for 2 years.",
    source: "GPT builder, OpenAI Forum",
    emoji: "\ud83d\ude29",
  },
  {
    quote: "Built an agent I\u2019m really proud of. No idea how to get my first 5 real users. App stores bury you.",
    source: "indie builder on Reddit",
    emoji: "\ud83e\udee0",
  },
  {
    quote: "GPT Store monetization is US-only and invite-only. I\u2019m in Europe. What are my options?",
    source: "developer on Hacker News",
    emoji: "\ud83c\udf0d",
  },
];

function VoiceCard({ voice, delay }: { voice: typeof BUILDER_VOICES[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-5 border border-border/70 shadow-sm"
    >
      <p className="text-[14px] text-text-primary leading-relaxed italic">
        &ldquo;{voice.quote}&rdquo;
      </p>
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
        <span className="text-lg">{voice.emoji}</span>
        <span className="text-[11px] text-text-secondary/60">
          &mdash; {voice.source}
        </span>
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
              For the builders who<br />
              refuse to earn <span className="text-primary">$0.</span>
            </h1>

            <p className="mt-6 text-[1.05rem] md:text-[1.1rem] leading-[1.75] text-text-secondary">
              AI agent tools are everywhere. Revenue isn&apos;t.<br />
              <span className="text-text-primary font-semibold">
                Join the community where builders help each other earn.
              </span>
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={scrollToWaitlist}
                className="px-7 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
              >
                Join the founding crew {"\ud83e\udd1d"}
              </button>
              <button
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3.5 border-2 border-border text-text-primary font-semibold rounded-[12px] hover:border-primary/40 transition-colors text-[15px] cursor-pointer"
              >
                See how it works {"\u2193"}
              </button>
            </div>

            {/* Stats row — 2 lines per stat */}
            <motion.div
              className="mt-12 flex flex-wrap gap-x-10 gap-y-5 pt-8 border-t border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {[
                { val: "0%", label: "platform fees for founders" },
                { val: "100%", label: "of revenue goes to you" },
                { val: "Day 1", label: "community access at launch" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-[1.5rem] text-text-primary">{s.val}</p>
                  <p className="text-sm text-text-secondary mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Founder line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-6 text-[13px] text-text-secondary/60"
            >
              Founded by{" "}
              <a href="/about" className="text-text-secondary hover:text-primary transition-colors underline underline-offset-2">
                Yoongjae Cho
              </a>
              {" "}&mdash; investor &amp; builder who kept watching great tools die with zero revenue.
            </motion.p>
          </motion.div>

          {/* -- Right: Real builder voices -- */}
          <div className="flex flex-col gap-3">
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex items-center justify-between mb-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary/40">
                Real builders. Real problems.
              </span>
              <span className="text-[11px] text-text-secondary/40">
                This is why we exist.
              </span>
            </motion.div>

            {BUILDER_VOICES.map((voice, i) => (
              <VoiceCard key={voice.source} voice={voice} delay={0.3 + i * 0.12} />
            ))}

            {/* Bottom hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-center text-[12px] text-text-secondary/40 mt-1"
            >
              These are the people Bibimb.ai is built for.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
