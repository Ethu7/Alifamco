"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  company: string;
  industry: string;
  challenge: string;
  keyMetric: string;
  metricLabel: string;
  tags: string[];
  onClick?: () => void;
}

export function CaseStudyCard({
  company,
  industry,
  challenge,
  keyMetric,
  metricLabel,
  tags,
  onClick,
}: CaseStudyCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <button
        onClick={onClick}
        className="group block w-full text-left glass-card rounded-xl p-6 transition-colors hover:bg-white/[0.04]"
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-oak-500/10 border border-oak-500/20 px-2.5 py-0.5 text-xs font-medium text-oak-400">
            {industry}
          </span>
          <ArrowRight className="h-4 w-4 text-[#A1A1AA] opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white font-display">
          {company}
        </h3>
        <p className="mt-2 text-sm text-[#A1A1AA] line-clamp-2">{challenge}</p>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white font-display">
            {keyMetric}
          </span>
          <span className="text-xs text-[#A1A1AA]">{metricLabel}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs text-[#71717A]"
            >
              {tag}
            </span>
          ))}
        </div>
      </button>
    </motion.div>
  );
}
