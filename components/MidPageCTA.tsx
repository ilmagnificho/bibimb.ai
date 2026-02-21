"use client";

import { motion } from "framer-motion";

// HowItWorks 뒤, EarlyBirdDemo 앞에 삽입하는 mid-page CTA 배너
// 스크롤 중 자연스럽게 마주치는 지점에 전환 유도

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export default function MidPageCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="bg-primary"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">

          {/* 좌측 텍스트 */}
          <div>
            <p className="text-white/70 text-[13px] font-bold uppercase tracking-widest mb-2">
              Limited founding spots
            </p>
            <h3 className="font-display font-extrabold text-white text-[1.7rem] md:text-[2rem] leading-tight">
              Free slots go fast.<br />
              <span className="text-white/80">Get yours before launch.</span>
            </h3>
          </div>

          {/* 우측 CTA */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={scrollToWaitlist}
              className="px-7 py-3.5 bg-white text-primary font-bold rounded-[12px] hover:bg-primary-light transition-colors text-[15px] cursor-pointer whitespace-nowrap"
            >
              Become a founding member →
            </button>
            <button
              onClick={scrollToWaitlist}
              className="px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-[12px] hover:border-white/60 transition-colors text-[15px] cursor-pointer whitespace-nowrap"
            >
              Deploy my agent free
            </button>
          </div>

        </div>

        {/* 혜택 한 줄 요약 */}
        <div className="mt-8 pt-7 border-t border-white/15 flex flex-wrap gap-x-8 gap-y-2">
          {[
            "🥬 Free trial access to every agent",
            "🌶️ Lock in the lowest price",
            "💸 0% creator fees forever",
            "🔒 Founding member badge",
          ].map((item) => (
            <span key={item} className="text-white/70 text-[14px]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
