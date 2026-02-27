import type { Metadata } from "next";
import { ResourcesPageContent } from "@/components/resources/ResourcesPageContent";

export const metadata: Metadata = {
  title: "Resources | Alifamco — Data Privacy Consulting",
  description:
    "Free guides, blueprints, use cases, and whitepapers on privacy compliance, AI governance, cookie consent, and data mapping from Alifamco's expert consultants.",
};

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
