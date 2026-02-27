"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  company,
}: TestimonialCardProps) {
  return (
    <motion.div variants={staggerItem} className="glass-card rounded-xl p-6">
      <svg
        className="h-8 w-8 text-oak-500/30"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
      </svg>
      <p className="mt-4 text-sm leading-relaxed text-[#D4D4D8]">{quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-oak-500/10 border border-oak-500/20">
          <span className="text-sm font-semibold text-oak-400">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-[#A1A1AA]">
            {title}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
