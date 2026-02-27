"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function ServicesHero() {
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
          Our Services
        </motion.span>
        <motion.h1
          variants={staggerItem}
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-display text-white"
        >
          Privacy solutions that{" "}
          <span className="gradient-text-oak">scale with you</span>
        </motion.h1>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
        >
          From initial assessment to ongoing optimization, we deliver end-to-end
          privacy platform implementations backed by deep technical expertise
          and real-world experience.
        </motion.p>
        <motion.div variants={staggerItem} className="mt-8">
          <Button
            asChild
            className="bg-oak-500 text-white hover:bg-oak-600 font-semibold text-base h-12 px-8"
          >
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
