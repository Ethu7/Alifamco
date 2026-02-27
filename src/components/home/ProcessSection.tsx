"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Wrench, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We audit your current privacy posture, map data flows, and identify gaps against your regulatory requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We design a tailored implementation roadmap with platform recommendations, timeline, and resource plan.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our senior consultants configure, integrate, and test your privacy platform with your existing infrastructure.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Post-launch tuning, team training, and ongoing support to ensure your program matures and scales.",
    icon: TrendingUp,
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="How We Work"
          badgeVariant="amber"
          title="From assessment to optimization in weeks, not months"
          titleHighlight="weeks, not months"
          subtitle="Our proven four-step process delivers results faster because every engagement is led by senior experts — no learning on your dime."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative glass-card rounded-xl p-6"
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-white/[0.06] lg:block" />
              )}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                <step.icon className="h-5 w-5 text-amber-400" />
              </div>
              <span className="mt-4 block text-xs font-bold uppercase tracking-widest text-[#52525B]">
                Step {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white font-display">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
