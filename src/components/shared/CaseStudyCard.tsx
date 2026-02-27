"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  company: string;
  industry: string;
  challenge: string;
  image: string;
  keyMetric: string;
  metricLabel: string;
  tags: string[];
  onClick?: () => void;
}

export function CaseStudyCard({
  company,
  industry,
  challenge,
  image,
  keyMetric,
  metricLabel,
  tags,
  onClick,
}: CaseStudyCardProps) {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <button
        onClick={onClick}
        className="group flex flex-col w-full h-full text-left glass-card rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-2xl hover:shadow-oak-500/10"
      >
        {/* Top Image Section */}
        <div className="relative w-full h-48 overflow-hidden z-0">
          <Image
            src={image}
            alt={company}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="inline-flex items-center rounded-full bg-oak-500/80 backdrop-blur-md border border-oak-400/30 px-2.5 py-0.5 text-xs font-medium text-white shadow-sm">
              {industry}
            </span>
            <div className="bg-black/50 backdrop-blur-md rounded-full p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="flex flex-col flex-grow p-6 z-10 bg-[#111318]/40 backdrop-blur-sm -mt-2">
          <h3 className="text-xl font-semibold text-white font-display line-clamp-1">
            {company}
          </h3>
          <p className="mt-2 text-sm text-[#A1A1AA] line-clamp-2 flex-grow">{challenge}</p>

          <div className="mt-5 pt-5 border-t border-white/5 flex items-baseline gap-2">
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
        </div>
      </button>
    </motion.div>
  );
}
