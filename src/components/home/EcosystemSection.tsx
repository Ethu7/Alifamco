"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { partners, integrationPartners, type Partner } from "@/data/partners";
import {
  staggerContainer,
  staggerItem,
  fadeUp,
  viewportOnce,
} from "@/lib/animations";

/** Show top 5 ecosystem platforms in the grid (OneTrust, Osano, Ketch, TrustArc, CookieBot) */
const ecosystemPlatforms = partners.slice(0, 5);

export function EcosystemSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<Partner | null>(null);

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
              onClick={() => setSelectedPlatform(platform)}
              className="group glass-card rounded-xl p-5 cursor-pointer transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-2xl hover:shadow-oak-500/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-transform group-hover:scale-110"
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
              <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#71717A] mb-2">
                Click to Expand
              </p>
              <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
                {platform.shortDescription}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Pop-up for the clicked partner */}
        <AnimatePresence>
          {selectedPlatform && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPlatform(null)}
                className="fixed inset-0 z-40 bg-[#090A0F]/90 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 px-4"
              >
                <div
                  className="glass-card rounded-2xl p-6 sm:p-10 relative overflow-hidden"
                  style={{ borderBottom: `4px solid ${selectedPlatform.color}` }}
                >
                  <button
                    onClick={() => setSelectedPlatform(null)}
                    className="absolute right-4 top-4 rounded-full p-2 text-[#A1A1AA] hover:text-white hover:bg-white/[0.06] transition-colors z-50"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-xl text-xl font-bold"
                      style={{
                        backgroundColor: `${selectedPlatform.color}15`,
                        color: selectedPlatform.color,
                        border: `1px solid ${selectedPlatform.color}30`,
                      }}
                    >
                      {selectedPlatform.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-display">
                        {selectedPlatform.name}
                      </h3>
                      <p className="text-sm" style={{ color: selectedPlatform.color }}>Our Partnership Integration</p>
                    </div>
                  </div>

                  <p className="text-[#A1A1AA] text-base leading-relaxed mb-8">
                    {selectedPlatform.fullDescription}
                  </p>

                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[#71717A] mb-4">
                    Key Implementation Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedPlatform.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: selectedPlatform.color }} />
                        <span className="text-sm text-[#D4D4D8]">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

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
