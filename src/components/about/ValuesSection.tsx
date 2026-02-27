"use client";

import { motion } from "framer-motion";
import { Code, TrendingUp, Target, Layers } from "lucide-react";
import { companyValues } from "@/data/team";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  "trending-up": TrendingUp,
  target: Target,
  layers: Layers,
};

export function ValuesSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="Our Values"
          badgeVariant="amber"
          title="What makes us different"
          titleHighlight="different"
          subtitle="Four principles that guide every engagement and every recommendation we make."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {companyValues.map((value) => {
            const Icon = iconMap[value.icon] || Code;
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white font-display">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
