"use client";

import type { Partner } from "@/data/partners";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PartnerCardProps {
  partner: Partner;
  onClick: () => void;
}

export function PartnerCard({ partner, onClick }: PartnerCardProps) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer border-white/[0.06] bg-surface-800 transition-all duration-300 hover:border-oak-500/30 hover:bg-white/[0.04]"
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold"
            style={{ backgroundColor: partner.color + "15", color: partner.color }}
          >
            {partner.icon}
          </div>
          <CardTitle className="text-xl text-white font-display">{partner.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-4 text-sm leading-relaxed text-[#A1A1AA]">
          {partner.shortDescription}
        </p>
        <p className="mt-4 text-sm font-medium text-oak-400">
          Click to learn more &rarr;
        </p>
      </CardContent>
    </Card>
  );
}
