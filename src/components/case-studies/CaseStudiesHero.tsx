"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function CaseStudiesHero() {
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
          className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400"
        >
          Case Studies
        </motion.span>
        <motion.h1
          variants={staggerItem}
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-display text-white"
        >
          Real results for{" "}
          <span className="gradient-text-amber">real enterprises</span>
        </motion.h1>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
        >
          Explore how we&apos;ve helped organizations across industries transform
          their privacy programs from compliance burdens into competitive
          advantages.
        </motion.p>
      </motion.div>
    </section>
  );
}
