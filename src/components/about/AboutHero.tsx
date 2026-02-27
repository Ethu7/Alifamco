"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 glow-oak-top" />
      <div className="absolute inset-0 dot-grid" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-4xl py-24 sm:py-32 text-center"
      >
        <motion.span
          variants={staggerItem}
          className="inline-flex items-center rounded-full border border-oak-500/20 bg-oak-500/10 px-3 py-1 text-xs font-medium text-oak-400"
        >
          About Alifamco
        </motion.span>
        <motion.h1
          variants={staggerItem}
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-display text-white"
        >
          Boutique precision for{" "}
          <span className="gradient-text-oak">enterprise privacy</span>
        </motion.h1>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
        >
          Ali Family Company (Alifamco) is a data privacy consulting firm built
          on a simple belief: enterprise-grade privacy compliance should be
          accessible, practical, and growth-enabling — not an expensive, bloated
          exercise in checkbox compliance.
        </motion.p>
      </motion.div>
    </section>
  );
}
