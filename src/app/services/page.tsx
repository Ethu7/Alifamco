import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { EngagementModels } from "@/components/services/EngagementModels";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Services | Alifamco — Data Privacy Consulting",
  description:
    "Privacy platform implementation, AI governance, cookie consent, data mapping, and compliance advisory services. Expert consultants for OneTrust, BigID, Securiti, and TrustArc.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
      <EngagementModels />
      <CTABanner
        title="Ready to implement privacy the right way?"
        titleHighlight="the right way"
        subtitle="Let's discuss which platform and approach is right for your organization. No commitment, no sales pressure — just honest expert advice."
        buttonText="Schedule a Free Assessment"
      />
    </>
  );
}
