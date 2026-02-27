"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerItem } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color?: "oak" | "amber" | "cyan";
}

const colorStyles = {
  oak: {
    iconBg: "bg-oak-500/10 border-oak-500/20",
    iconText: "text-oak-400",
  },
  amber: {
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconText: "text-amber-400",
  },
  cyan: {
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    iconText: "text-cyan-400",
  },
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  color = "oak",
}: ServiceCardProps) {
  const styles = colorStyles[color];

  return (
    <motion.div variants={staggerItem}>
      <Link
        href={href}
        className="group block glass-card rounded-xl p-6 transition-colors hover:bg-white/[0.04]"
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg border ${styles.iconBg}`}
        >
          <Icon className={`h-5 w-5 ${styles.iconText}`} />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white font-display">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-oak-400 opacity-0 transition-opacity group-hover:opacity-100">
          Learn more
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </span>
      </Link>
    </motion.div>
  );
}
