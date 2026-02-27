"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/remotion/HeroVideo";
import {
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 glow-oak-top z-0" />
      <div className="absolute inset-0 dot-grid z-0" />
      <HeroVideo />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl py-24 sm:py-32 lg:py-48 flex flex-col items-center text-center"
      >
        <div className="flex flex-col items-center">
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
            className="mt-6 max-w-xl text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
          >
            Your Strategic Partner for Future-Proof Privacy Tech
            and Multi-SaaS Consent Frameworks. We bring clients closer to new revenue streams, ensure strict legal compliance to avoid fines, and foster premium partnerships.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
        </div>
      </motion.div>
    </section>
  );
}
