"use client";

import { motion } from "framer-motion";
import { partners, integrationPartners } from "@/data/partners";
import {
  staggerContainer,
  staggerItem,
  fadeUp,
  viewportOnce,
} from "@/lib/animations";

/** Show top 5 ecosystem platforms in the grid (OneTrust, Osano, Ketch, TrustArc, CookieBot) */
const ecosystemPlatforms = partners.slice(0, 5);

export function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]"
    >
      <div className="absolute inset-0 dot-grid" />
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-oak-400 mb-3">
            Global Consent Tech Ecosystem
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-lg mx-auto">
            Alifamco&apos;s SaaS tools and a deep integration expertise.
          </p>
        </motion.div>

        {/* Platform Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {ecosystemPlatforms.map((platform) => (
            <motion.div
              key={platform.id}
              variants={staggerItem}
              className="group glass-card rounded-xl p-5 transition-colors hover:bg-white/[0.04]"
            >
              {/* Platform icon / badge */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold"
                  style={{
                    backgroundColor: `${platform.color}15`,
                    color: platform.color,
                    border: `1px solid ${platform.color}30`,
                  }}
                >
                  {platform.icon}
                </div>
                <span className="text-sm font-semibold text-white font-display">
                  {platform.name}
                </span>
              </div>

              {/* Short label - like in mockup */}
              <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#71717A] mb-2">
                {platform.name}
              </p>

              {/* Description */}
              <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
                {platform.shortDescription}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Partners Logo Strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 pt-8 border-t border-white/[0.06]"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {integrationPartners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-medium text-[#52525B] transition-colors hover:text-[#A1A1AA]"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
