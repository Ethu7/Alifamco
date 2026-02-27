"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { GradientBadge } from "./GradientBadge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "oak" | "amber" | "cyan";
  title: string;
  /** Highlighted portion of the title (rendered with gradient) */
  titleHighlight?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  badge,
  badgeVariant = "oak",
  title,
  titleHighlight,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  // Split the title around the highlight if provided
  let beforeHighlight = title;
  let afterHighlight = "";
  if (titleHighlight) {
    const idx = title.indexOf(titleHighlight);
    if (idx !== -1) {
      beforeHighlight = title.slice(0, idx);
      afterHighlight = title.slice(idx + titleHighlight.length);
    }
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-3xl ${alignClass}`}
    >
      {badge && (
        <GradientBadge variant={badgeVariant} className="mb-4">
          {badge}
        </GradientBadge>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display text-white">
        {titleHighlight ? (
          <>
            {beforeHighlight}
            <span className={`gradient-text-${badgeVariant === "amber" ? "amber" : "oak"}`}>
              {titleHighlight}
            </span>
            {afterHighlight}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
