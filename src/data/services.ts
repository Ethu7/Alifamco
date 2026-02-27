import {
  Shield,
  Brain,
  Cookie,
  Database,
  FileCheck,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  platforms: string[];
  icon: LucideIcon;
  color: "oak" | "amber" | "cyan";
  image: string;
}

export const services: Service[] = [
  {
    id: "privacy-implementation",
    title: "Privacy Platform Implementation",
    shortTitle: "Privacy Implementation",
    description:
      "End-to-end deployment of enterprise privacy platforms — from requirements gathering to production rollout and team training.",
    longDescription:
      "We implement and customize the leading privacy platforms to match your organization's unique regulatory landscape. Our approach goes beyond out-of-the-box configurations to deliver fully tailored solutions that integrate with your existing data infrastructure, automate compliance workflows, and scale with your growth.",
    deliverables: [
      "Platform architecture & configuration",
      "Data inventory & classification setup",
      "Workflow automation (DSARs, assessments)",
      "Integration with existing tech stack",
      "Admin training & documentation",
      "Post-launch optimization (90 days)",
    ],
    platforms: ["OneTrust", "BigID", "Securiti", "TrustArc"],
    icon: Shield,
    color: "oak",
    image: "/images/services/privacy.png",
  },
  {
    id: "ai-governance",
    title: "AI Governance & Compliance",
    shortTitle: "AI Governance",
    description:
      "Build responsible AI frameworks that align with emerging regulations like the EU AI Act, NIST AI RMF, and internal ethics policies.",
    longDescription:
      "As AI regulation accelerates globally, organizations need governance frameworks that are both robust and practical. We design and implement AI governance programs that balance innovation velocity with compliance requirements, covering model risk management, bias auditing, transparency requirements, and vendor AI assessments.",
    deliverables: [
      "AI inventory & risk classification",
      "Governance framework design",
      "Bias & fairness audit processes",
      "Model documentation templates",
      "Vendor AI assessment program",
      "Board-level reporting dashboards",
    ],
    platforms: ["OneTrust", "BigID", "Securiti"],
    icon: Brain,
    color: "amber",
    image: "/images/services/ai-gov.png",
  },
  {
    id: "cookie-consent",
    title: "Cookie Consent & Preference Management",
    shortTitle: "Cookie Consent",
    description:
      "Deploy compliant cookie banners and preference centers that respect user choices while minimizing revenue impact from consent loss.",
    longDescription:
      "Cookie compliance is a moving target with evolving regulations and browser changes. We configure and optimize consent management platforms to maximize opt-in rates while ensuring full regulatory compliance across GDPR, CCPA/CPRA, and emerging state-level laws. Our implementations prioritize user experience and are tested across devices and geographies.",
    deliverables: [
      "Cookie audit & categorization",
      "Banner design & UX optimization",
      "Geo-targeted consent rules",
      "Preference center configuration",
      "Tag management integration",
      "Consent analytics & reporting",
    ],
    platforms: ["OneTrust", "TrustArc", "Securiti"],
    icon: Cookie,
    color: "cyan",
    image: "/images/services/cookie.png",
  },
  {
    id: "data-mapping",
    title: "Data Mapping & Discovery",
    shortTitle: "Data Mapping",
    description:
      "Automated discovery and mapping of personal data across your entire infrastructure — databases, SaaS apps, cloud storage, and more.",
    longDescription:
      "You can't protect what you can't find. We deploy automated data discovery tools that continuously scan your infrastructure to build a living data map. This foundation enables accurate DSAR fulfillment, targeted data minimization, and confident regulatory reporting across all jurisdictions where you operate.",
    deliverables: [
      "Infrastructure scanning & discovery",
      "Data flow mapping & visualization",
      "Sensitive data classification",
      "Cross-border transfer documentation",
      "Retention policy implementation",
      "Continuous monitoring setup",
    ],
    platforms: ["BigID", "Securiti", "OneTrust"],
    icon: Database,
    color: "amber",
    image: "/images/services/data-map.png",
  },
  {
    id: "compliance-advisory",
    title: "Compliance Strategy & Advisory",
    shortTitle: "Compliance Advisory",
    description:
      "Strategic privacy counsel for complex regulatory scenarios — from multi-jurisdictional compliance to M&A privacy due diligence.",
    longDescription:
      "Not every challenge requires a new tool. Our advisory services help you navigate complex regulatory scenarios with clear, actionable strategies. Whether you're expanding into new markets, preparing for an acquisition, or responding to regulatory inquiries, we provide the expertise to make confident decisions.",
    deliverables: [
      "Gap assessment & roadmap",
      "Multi-jurisdiction compliance strategy",
      "Privacy impact assessments (PIAs/DPIAs)",
      "Regulatory response support",
      "M&A privacy due diligence",
      "Quarterly compliance reviews",
    ],
    platforms: ["OneTrust", "TrustArc", "BigID", "Securiti"],
    icon: FileCheck,
    color: "oak",
    image: "/images/services/privacy.png",
  },
];

export interface EngagementModel {
  title: string;
  description: string;
  features: string[];
}

export const engagementModels: EngagementModel[] = [
  {
    title: "Advisory",
    description:
      "Strategic guidance and expert counsel for teams that need direction, not hands-on implementation.",
    features: [
      "Gap assessments & roadmaps",
      "Regulatory interpretation",
      "Vendor evaluation support",
      "Quarterly strategy reviews",
    ],
  },
  {
    title: "Implementation",
    description:
      "Full-service platform deployment with our team handling configuration, integration, and training.",
    features: [
      "End-to-end platform setup",
      "Custom workflow automation",
      "Data migration & integration",
      "Team training & enablement",
    ],
  },
  {
    title: "Managed Services",
    description:
      "Ongoing platform management and optimization for organizations that need sustained expert support.",
    features: [
      "Continuous platform monitoring",
      "Regular configuration updates",
      "Incident response support",
      "Monthly performance reporting",
    ],
  },
];
