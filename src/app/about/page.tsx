import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { FounderSection } from "@/components/about/FounderSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { StatsStrip } from "@/components/about/StatsStrip";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "About | Alifamco — Data Privacy Consulting",
  description:
    "Learn about Alifamco — a boutique data privacy consulting firm founded on the belief that enterprise-grade privacy compliance should be accessible, practical, and growth-enabling.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderSection />
      <ValuesSection />
      <StatsStrip />
      <CTABanner
        title="Work with a team that understands privacy inside and out"
        titleHighlight="inside and out"
        subtitle="We bring senior-level expertise to every engagement. No outsourced junior consultants — just experienced professionals who know your platform and your industry."
      />
    </>
  );
}
