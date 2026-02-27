"use client";

import { companyStats } from "@/data/team";
import { StatsDisplay } from "@/components/shared/StatsDisplay";

export function StatsStrip() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-[#71717A] mb-10">
          By the Numbers
        </p>
        <StatsDisplay stats={companyStats} variant="grid" />
      </div>
    </section>
  );
}
