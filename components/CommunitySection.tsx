"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

const CHANNELS = [
  {
    icon: "⭐",
    name: "#agent-reviews",
    description: "Real talk about what works and what doesn't. Honest reviews from people who actually used the agent.",
  },
  {
    icon: "🚀",
    name: "#creator-showcase",
    description: "Creators share their agents, get feedback, and find their first power users. Launch here first.",
  },
  {
    icon: "🥬",
    name: "#early-adopters",
    description: "First movers only. Exclusive access to unreleased agents, beta features, and founding member perks.",
  },
  {
    icon: "🍳",
    name: "#kitchen-talk",
    description: "Off-topic but on-point. The AI agent world moves fast — discuss trends, ideas, and wild experiments.",
  },
];

export default function CommunitySection() {
  return (
    <SectionWrapper id="community" bgClassName="bg-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* ── 좌측: 카피 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Community
          </span>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary leading-tight mb-5">
            This isn&apos;t just<br />
            a marketplace.<br />
            It&apos;s a kitchen.
          </h2>
          <p className="text-text-secondary text-[15px] leading-[1.8] mb-6">
            The best AI agents aren&apos;t built in isolation — they&apos;re shaped
            by the people who use them. Join a community of early adopters
            and creators who share feedback, swap ideas, and help each other
            build things worth trusting.
          </p>
          <p className="text-text-secondary text-[15px] leading-[1.8] mb-8">
            When you join the waitlist, you&apos;re not just getting early access —
            you&apos;re joining the founding community that shapes what Bibimb.ai becomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToWaitlist}
              className="px-7 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
            >
              Join the kitchen 🍳
            </button>
            {/* Discord 준비 중 — 실제 링크는 추후 연결 */}
            <button
              disabled
              className="px-7 py-3.5 border-2 border-border text-text-secondary/50 font-semibold rounded-[12px] text-[15px] cursor-not-allowed relative group"
              title="Discord coming soon"
            >
              <span className="flex items-center gap-2">
                {/* Discord 로고 SVG */}
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                  <path d="M15.245 1.163A14.64 14.64 0 0 0 11.565 0c-.162.294-.351.69-.481 1.004a13.51 13.51 0 0 0-4.17 0A10.79 10.79 0 0 0 6.43 0 14.68 14.68 0 0 0 2.748 1.166C.395 4.706-.242 8.16.076 11.565c1.554 1.17 3.062 1.88 4.545 2.346a11.1 11.1 0 0 0 .96-1.6 9.584 9.584 0 0 1-1.512-.747c.127-.095.251-.195.371-.297 2.914 1.376 6.075 1.376 8.955 0 .121.102.245.202.371.297a9.56 9.56 0 0 1-1.514.748c.28.566.607 1.102.961 1.6 1.485-.465 2.994-1.175 4.549-2.347.373-4.003-.637-7.424-2.517-10.402ZM6.012 9.469c-.9 0-1.639-.85-1.639-1.893 0-1.043.72-1.895 1.639-1.895.919 0 1.651.852 1.638 1.895.001 1.043-.719 1.893-1.638 1.893Zm6.055 0c-.9 0-1.638-.85-1.638-1.893 0-1.043.719-1.895 1.638-1.895.918 0 1.65.852 1.638 1.895 0 1.043-.72 1.893-1.638 1.893Z" fill="currentColor"/>
                </svg>
                Discord · Coming soon
              </span>
            </button>
          </div>
        </motion.div>

        {/* ── 우측: 채널 카드들 ── */}
        <div className="flex flex-col gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-bold uppercase tracking-widest text-text-secondary/40 mb-1"
          >
            Inside the kitchen
          </motion.p>

          {CHANNELS.map((ch, idx) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.09 }}
              className="bg-white rounded-xl p-4 border border-border hover:border-primary/20 transition-colors flex gap-3.5 items-start"
            >
              <span className="text-xl shrink-0 mt-0.5">{ch.icon}</span>
              <div>
                <p className="font-mono font-semibold text-[13px] text-text-primary mb-1">
                  {ch.name}
                </p>
                <p className="text-text-secondary text-[13px] leading-relaxed">
                  {ch.description}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-2 px-4 py-3 rounded-xl bg-primary-light/30 border border-primary/10 flex items-center gap-2.5"
          >
            <span className="text-base">🔒</span>
            <p className="text-[13px] text-text-secondary">
              <span className="font-semibold text-text-primary">Founding members</span>{" "}
              get a permanent role and early access channel — before public launch.
            </p>
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
}
