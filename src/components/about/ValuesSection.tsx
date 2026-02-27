"use client";

import Image from "next/image";
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

        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-stretch">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-3/5"
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

          <div className="relative w-full lg:w-2/5 h-80 lg:h-auto rounded-2xl overflow-hidden glass-card shadow-2xl border border-white/10 hidden lg:block">
            <Image
              src="/images/about/values.png"
              alt="Corporate values and integrity"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-amber-500/5 mix-blend-overlay pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
