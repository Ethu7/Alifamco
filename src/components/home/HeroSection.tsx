"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 glow-oak-top" />
      <div className="absolute inset-0 dot-grid" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-5xl py-24 sm:py-32 lg:py-40"
      >
        {/* Headline */}
        <motion.h1
          variants={staggerItem}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-display text-white uppercase"
        >
          Orchestrating{" "}
          <span className="gradient-text-oak">Privacy</span>.
          <br />
          Implementing{" "}
          <span className="gradient-text-oak">Consent</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={staggerItem}
          className="mt-6 max-w-2xl text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
        >
          Your Strategic Partner for Future-Proof Privacy Tech
          and Multi-SaaS Consent Frameworks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={staggerItem}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
        >
          <Button
            asChild
            className="bg-oak-500 text-white hover:bg-oak-600 font-semibold text-base h-12 px-8 rounded-lg"
          >
            <Link href="/services">
              Explore Implementation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/[0.15] bg-white/[0.03] text-white hover:bg-white/[0.06] font-medium text-base h-12 px-8 rounded-lg"
          >
            <Link href="/contact">Speak to an Expert</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
