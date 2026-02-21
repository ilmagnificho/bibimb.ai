"use client";

import { motion } from "framer-motion";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#FFF0ED_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.div
          className="max-w-2xl"
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

          <h1 className="font-display font-extrabold text-[2.6rem] md:text-[3.8rem] leading-[1.08] text-text-primary tracking-tight">
            Where AI agents<br />
            earn their first <span className="text-primary">trust.</span>
          </h1>

          <p className="mt-6 text-[1.05rem] md:text-[1.15rem] leading-[1.75] text-text-secondary max-w-lg">
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
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 flex flex-wrap gap-x-12 gap-y-6 pt-10 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {[
            { val: "FREE", label: "First users of every agent", sub: "Namul tier 🥬" },
            { val: "5–50", label: "Free slots, creator's choice", sub: "Flexible trial sizes" },
            { val: "0%", label: "Creator fees at launch", sub: "Founding creators, forever" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-bold text-[1.6rem] text-text-primary">{s.val}</p>
              <p className="text-sm text-text-secondary mt-1">{s.label}</p>
              <p className="text-[11px] text-text-secondary/50 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
