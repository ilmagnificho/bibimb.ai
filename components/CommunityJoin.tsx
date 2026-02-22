"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

const VALUE_PROPS = [
  {
    emoji: "\ud83e\udd1d",
    title: "Peer reviews before you launch",
    description:
      "Your agent gets tested by fellow creators before it goes live. Real feedback, not fake ratings.",
  },
  {
    emoji: "\ud83d\udcca",
    title: "Shared revenue playbooks",
    description:
      "What pricing works? What doesn\u2019t? Learn from creators who are actually earning \u2014 not from Twitter threads.",
  },
  {
    emoji: "\ud83d\ude80",
    title: "First believers for every launch",
    description:
      "When you deploy, the community shows up. Your first 5-50 users aren\u2019t strangers \u2014 they\u2019re fellow builders who understand agents.",
  },
];

export default function CommunityJoin() {
  return (
    <SectionWrapper id="community" bgClassName="bg-bg">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Better together
          </span>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-4 leading-tight">
            Join creators who refuse<br />
            to let great agents die.
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto text-[15px] leading-relaxed">
            Bibimb.ai isn&apos;t just a platform. It&apos;s a community of agent builders
            united around one thing: earning from what they create.
          </p>
        </motion.div>
      </div>

      {/* 3 value prop cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {VALUE_PROPS.map((prop, idx) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-white rounded-2xl p-6 border border-border hover:border-primary/20 transition-colors"
          >
            <span className="text-2xl block mb-3">{prop.emoji}</span>
            <h3 className="font-display font-bold text-[1rem] text-text-primary mb-2 leading-snug">
              {prop.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {prop.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Honest social proof */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="text-center mb-8"
      >
        <p className="text-text-secondary text-[15px] leading-relaxed max-w-md mx-auto italic">
          &ldquo;We&apos;re just getting started. The founding crew is small &mdash; and that&apos;s the point.
          Early members shape everything: the platform, the culture, the rules.&rdquo;
        </p>
      </motion.div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={scrollToWaitlist}
          className="px-8 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] cursor-pointer"
        >
          Become a founding creator {"\u2192"}
        </button>
      </div>
    </SectionWrapper>
  );
}
