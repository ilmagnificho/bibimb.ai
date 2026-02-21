"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { AGENT_CATEGORIES } from "@/lib/constants";

export default function AgentCategories() {
  return (
    <SectionWrapper id="categories">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">
            Agents for every workflow
          </span>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-3 leading-tight">
            Whatever you need automated,<br />
            there&apos;s an agent for that.
          </h2>
          <p className="text-text-secondary max-w-md mx-auto text-[15px] leading-relaxed">
            From writing to code to customer support —<br />
            discover agents that earn their trust through real use.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {AGENT_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="bg-white rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-sm transition-all group cursor-default"
          >
            <span className="text-2xl block mb-3">{cat.icon}</span>
            <h3 className="font-display font-bold text-[0.95rem] text-text-primary mb-1 leading-snug group-hover:text-primary transition-colors">
              {cat.name}
            </h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              {cat.examples}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-text-secondary/50 mt-8">
        Categories are growing — more agent types coming at launch.
      </p>
    </SectionWrapper>
  );
}
