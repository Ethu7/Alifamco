"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";
import { caseStudies } from "@/data/case-studies";

export function CaseStudyHighlight() {
  const featured = caseStudies.find((cs) => cs.featured) ?? caseStudies[0];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="absolute inset-0 glow-amber" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="Results That Speak"
          badgeVariant="amber"
          title="Real outcomes for real enterprises"
          titleHighlight="real enterprises"
          subtitle="See how we've helped organizations transform their privacy programs from compliance burdens into competitive advantages."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 glass-card rounded-2xl p-6 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-400">
              {featured.industry}
            </span>
            <span className="text-xs text-[#71717A]">
              {featured.serviceType}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white font-display sm:text-3xl">
            {featured.company}
          </h3>
          <p className="mt-3 max-w-3xl text-[#A1A1AA] leading-relaxed">
            {featured.challenge}
          </p>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {featured.results.map((result) => (
              <motion.div
                key={result.label}
                variants={staggerItem}
                className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-4 text-center"
              >
                <div className="text-2xl font-bold text-white font-display">
                  {result.metric}
                </div>
                <p className="mt-1 text-xs text-[#A1A1AA]">{result.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          {featured.testimonial && (
            <div className="mt-8 border-t border-white/[0.06] pt-8">
              <p className="text-sm italic text-[#D4D4D8] leading-relaxed">
                &ldquo;{featured.testimonial.quote}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-white">
                {featured.testimonial.name}
                <span className="ml-2 text-[#A1A1AA] font-normal">
                  {featured.testimonial.title}
                </span>
              </p>
            </div>
          )}

          <Button
            asChild
            variant="outline"
            className="mt-8 border-white/[0.1] bg-white/[0.03] text-white hover:bg-white/[0.06]"
          >
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
