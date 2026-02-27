import type { Metadata } from "next";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Case Studies | Alifamco — Data Privacy Consulting",
  description:
    "Explore how Alifamco has helped enterprises transform their privacy programs — from Fortune 500 financial institutions to global healthcare networks and e-commerce platforms.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CTABanner
        title="Ready to become our next success story?"
        titleHighlight="next success story"
        subtitle="Every case study started with a conversation. Book a free consultation and let's discuss how we can deliver similar results for your organization."
      />
    </>
  );
}
