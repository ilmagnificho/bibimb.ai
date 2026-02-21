"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

function scrollToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
          <span className="font-display font-bold text-xl text-text-primary">
            Bibimb.ai
          </span>
          <Button variant="outline" size="md" onClick={scrollToWaitlist}>
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-primary-light/30 to-secondary-light/20" />

        <motion.div
          className="relative mx-auto max-w-[1200px] px-6 pt-20 pb-24 md:pt-32 md:pb-36 text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-[2.5rem] md:text-[4rem] leading-[1.1] text-text-primary"
          >
            Every AI product
            <br />
            starts <span className="text-primary">FREE</span> 🆓
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl mx-auto"
          >
            First 5 users get it free. Then $4.99 ☕
            <br />
            Prices rise as people buy.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" onClick={scrollToWaitlist}>
              🍳 I&apos;m a Buyer
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToWaitlist}>
              🧑‍🍳 I&apos;m a Maker
            </Button>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-8 text-text-secondary italic"
          >
            &ldquo;Think Kickstarter Early Bird, but for AI tools.&rdquo;
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
