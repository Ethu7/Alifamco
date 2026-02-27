"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Cookie, Database } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { staggerContainer, viewportOnce } from "@/lib/animations";

const previewServices = [
  {
    title: "Privacy Implementation",
    description:
      "End-to-end deployment of OneTrust, BigID, Securiti, and TrustArc — configured for your unique regulatory landscape.",
    icon: Shield,
    href: "/services#privacy-implementation",
    color: "oak" as const,
  },
  {
    title: "AI Governance",
    description:
      "Build responsible AI frameworks aligned with the EU AI Act, NIST AI RMF, and enterprise client requirements.",
    icon: Brain,
    href: "/services#ai-governance",
    color: "amber" as const,
  },
  {
    title: "Cookie Consent",
    description:
      "Compliant cookie banners and preference centers that maximize opt-in rates while respecting user choices.",
    icon: Cookie,
    href: "/services#cookie-consent",
    color: "cyan" as const,
  },
  {
    title: "Data Mapping",
    description:
      "Automated discovery and mapping of personal data across your entire infrastructure — databases, SaaS, and cloud.",
    icon: Database,
    href: "/services#data-mapping",
    color: "amber" as const,
  },
];

export function ServicesPreview() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 glow-oak" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="What We Do"
          title="Privacy expertise across every major platform"
          titleHighlight="every major platform"
          subtitle="From initial assessment to production deployment, we deliver privacy solutions that actually work."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6"
        >
          {previewServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
