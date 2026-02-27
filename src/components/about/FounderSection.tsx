"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function FounderSection() {
  const founder = teamMembers.find((m) => m.isFounder);
  if (!founder) return null;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Leadership"
          title="Founded by a practitioner, not a salesperson"
          titleHighlight="a practitioner"
          align="left"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 glass-card rounded-2xl p-6 sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Real Avatar/Portrait */}
            <div className="relative w-full lg:w-1/3 h-80 lg:h-[400px] shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/about/founder.png"
                alt={founder.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white font-display">
                {founder.name}
              </h3>
              <p className="text-sm text-oak-400 font-medium">
                {founder.role}
              </p>
              <p className="mt-4 text-[#A1A1AA] leading-relaxed">
                {founder.bio}
              </p>
              {founder.quote && (
                <blockquote className="mt-6 border-l-2 border-oak-500/30 pl-4">
                  <p className="text-sm italic text-[#D4D4D8] leading-relaxed">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                </blockquote>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
