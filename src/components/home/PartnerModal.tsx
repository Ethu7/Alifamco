"use client";

import type { Partner } from "@/data/partners";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface PartnerModalProps {
  partner: Partner | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PartnerModal({
  partner,
  open,
  onOpenChange,
}: PartnerModalProps) {
  if (!partner) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto border-white/[0.06] bg-surface-800 text-foreground sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-lg text-xl font-bold"
              style={{
                backgroundColor: partner.color + "15",
                color: partner.color,
              }}
            >
              {partner.icon}
            </div>
            <div>
              <DialogTitle className="text-2xl text-white font-display">
                {partner.name}
              </DialogTitle>
              <DialogDescription className="text-sm text-[#A1A1AA]">
                Privacy Platform Partner
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-4">
          <p className="text-sm leading-relaxed text-[#A1A1AA]">
            {partner.fullDescription}
          </p>

          <h4 className="mt-6 text-sm font-semibold text-white">
            Key Capabilities
          </h4>
          <ul className="mt-3 space-y-2">
            {partner.capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-2.5">
                <CheckCircle
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: partner.color }}
                />
                <span className="text-sm text-[#A1A1AA]">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
