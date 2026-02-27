"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { engagementModels } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

export function EngagementModels() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="Engagement Models"
          badgeVariant="amber"
          title="Flexible models that fit your needs"
          titleHighlight="fit your needs"
          subtitle="Whether you need strategic guidance, hands-on implementation, or ongoing managed support — we have a model that works."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {engagementModels.map((model) => (
            <motion.div
              key={model.title}
              variants={staggerItem}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white font-display">
                {model.title}
              </h3>
              <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                {model.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span className="text-sm text-[#D4D4D8]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
