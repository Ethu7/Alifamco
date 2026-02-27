"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { AnimatedCounter } from "./AnimatedCounter";

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsDisplayProps {
  stats: Stat[];
  variant?: "row" | "grid";
}

export function StatsDisplay({ stats, variant = "row" }: StatsDisplayProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={
        variant === "grid"
          ? "grid grid-cols-2 gap-6 sm:grid-cols-4"
          : "flex flex-wrap items-center justify-center gap-8 sm:gap-12"
      }
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={staggerItem}
          className={
            variant === "grid"
              ? "glass-card rounded-xl p-6 text-center"
              : "text-center"
          }
        >
          <div className="text-3xl font-bold text-white sm:text-4xl font-display">
            <AnimatedCounter
              target={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          </div>
          <p className="mt-1 text-sm text-[#A1A1AA]">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
