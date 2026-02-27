"use client";

import { Calendar } from "lucide-react";

const GHL_CALENDAR_URL = process.env.NEXT_PUBLIC_GHL_CALENDAR_URL;

export function CalendarEmbed() {
  if (!GHL_CALENDAR_URL) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 text-center h-full min-h-[400px]">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-oak-500/10 border border-oak-500/20 mb-4">
          <Calendar className="h-6 w-6 text-oak-400" />
        </div>
        <h3 className="text-lg font-semibold text-white font-display">
          Schedule a Call
        </h3>
        <p className="mt-2 text-sm text-[#A1A1AA] max-w-xs">
          Send us a message using the form and we&apos;ll set up a call at a
          time that works for you.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden h-full min-h-[500px]">
      <iframe
        src={GHL_CALENDAR_URL}
        className="h-full w-full min-h-[500px]"
        frameBorder="0"
        title="Book a Consultation"
        allow="camera; microphone"
      />
    </div>
  );
}
