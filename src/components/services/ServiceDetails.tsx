"use client";

import Image from "next/image";
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
                className="glass-card rounded-2xl p-6 sm:p-10 flex flex-col gap-8 lg:flex-row lg:items-stretch scroll-mt-24 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-full lg:w-5/12 h-64 lg:h-auto rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-center">
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
                  <p className="text-[#A1A1AA] leading-relaxed mb-8">
                    {service.longDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-auto">
                    {/* Platform badges */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-[#71717A] mb-4">
                        Supported Platforms
                      </h4>
                      <div className="flex flex-wrap gap-2">
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

                    {/* Deliverables */}
                    <div className="shrink-0">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-[#71717A] mb-4">
                        Deliverables
                      </h4>
                      <ul className="space-y-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle
                              className={`mt-0.5 h-4 w-4 shrink-0 ${styles.check}`}
                            />
                            <span className="text-sm text-[#D4D4D8]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
