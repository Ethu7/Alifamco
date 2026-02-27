"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportOnce } from "@/lib/animations";

const trustedLogos = [
  "OneTrust",
  "Osano",
  "Ketch",
  "TrustArc",
  "CookieBot",
  "Salesforce",
  "Snowflake",
  "AWS",
];

export function SocialProofBar() {
  return (
    <section className="border-y border-white/[0.06] bg-surface-950 py-8">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <p className="text-center text-xs font-medium uppercase tracking-widest text-[#71717A] mb-6">
          Trusted by teams at leading organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustedLogos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-medium text-[#52525B] transition-colors hover:text-[#A1A1AA]"
            >
              {logo}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
