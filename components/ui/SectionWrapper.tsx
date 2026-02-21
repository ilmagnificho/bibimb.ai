"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgClassName?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  bgClassName = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-30 ${bgClassName}`}>
      <motion.div
        className={`mx-auto max-w-[1200px] px-6 ${className}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
