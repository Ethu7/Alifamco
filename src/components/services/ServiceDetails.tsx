"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

const colorStyles = {
  oak: {
    iconBg: "bg-oak-500/10 border-oak-500/20",
    iconText: "text-oak-400",
    check: "text-oak-400",
    badge: "bg-oak-500/10 text-oak-400 border-oak-500/20",
  },
  amber: {
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconText: "text-amber-400",
    check: "text-amber-400",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  cyan: {
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    iconText: "text-cyan-400",
    check: "text-cyan-400",
    badge: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  },
};

export function ServiceDetails() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Capabilities"
          title="Deep expertise across every privacy discipline"
          titleHighlight="every privacy discipline"
          subtitle="Each service is delivered by senior consultants with hands-on platform experience — not generalists learning on the job."
        />

        <div className="mt-16 space-y-12">
          {services.map((service) => {
            const styles = colorStyles[service.color];
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="glass-card rounded-2xl p-6 sm:p-10 scroll-mt-24"
              >
                <div className="flex flex-col gap-8 lg:flex-row">
                  {/* Left: Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${styles.iconBg}`}
                      >
                        <service.icon className={`h-6 w-6 ${styles.iconText}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-display">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#A1A1AA] leading-relaxed max-w-2xl">
                      {service.longDescription}
                    </p>
                    {/* Platform badges */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.platforms.map((platform) => (
                        <span
                          key={platform}
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles.badge}`}
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Deliverables */}
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="lg:w-80 shrink-0"
                  >
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-[#71717A] mb-4">
                      Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <motion.li
                          key={item}
                          variants={staggerItem}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle
                            className={`mt-0.5 h-4 w-4 shrink-0 ${styles.check}`}
                          />
                          <span className="text-sm text-[#D4D4D8]">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
