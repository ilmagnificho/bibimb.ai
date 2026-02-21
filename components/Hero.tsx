"use client";

import { motion } from "framer-motion";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 h-14 flex items-center justify-between">
          <span className="font-display font-bold text-[17px] tracking-tight text-text-primary">
            Bibimb.ai
          </span>
          <button
            onClick={scrollToWaitlist}
            className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors cursor-pointer"
          >
            Join waitlist →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-bg">
        {/* Very subtle warm wash */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#FFF0ED_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-[1200px] px-6 pt-20 pb-28 md:pt-28 md:pb-36">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary-light/60 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Launching soon</span>
            </div>

            <h1 className="font-display font-extrabold text-[2.6rem] md:text-[3.8rem] leading-[1.08] text-text-primary tracking-tight">
              Every AI product<br />
              starts <span className="text-primary">free.</span>
            </h1>

            <p className="mt-5 text-[1.1rem] md:text-[1.2rem] leading-relaxed text-text-secondary max-w-lg">
              First 5 users get it free. Then $4.99. Prices rise as more people buy — like Kickstarter Early Bird, but for AI tools.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={scrollToWaitlist}
                className="px-7 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
              >
                I want to buy tools
              </button>
              <button
                onClick={scrollToWaitlist}
                className="px-7 py-3.5 border-2 border-border text-text-primary font-semibold rounded-[12px] hover:border-primary/40 transition-colors text-[15px] cursor-pointer"
              >
                I&apos;m building a tool
              </button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-16 flex flex-wrap gap-x-10 gap-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {[
              { val: "FREE", label: "Starting price" },
              { val: "$4.99", label: "After 5 users" },
              { val: "0%", label: "Seller fees" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-bold text-2xl text-text-primary">{s.val}</p>
                <p className="text-sm text-text-secondary mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
