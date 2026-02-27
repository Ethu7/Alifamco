import {
  BookOpen,
  Shield,
  Database,
  Lock,
  Brain,
  FileText,
  Globe,
  Scale,
  type LucideIcon,
} from "lucide-react";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "guide" | "use-case" | "blueprint" | "whitepaper";
  icon: LucideIcon;
  tags: string[];
  readTime?: string;
}

export const resources: Resource[] = [
  {
    id: "ai-governance-playbook",
    title: "AI Governance Playbook 2025",
    description:
      "A comprehensive guide to building an AI governance framework that satisfies the EU AI Act, NIST AI RMF, and enterprise client requirements — without slowing down product innovation.",
    category: "guide",
    icon: Brain,
    tags: ["AI Governance", "EU AI Act", "NIST"],
    readTime: "15 min read",
  },
  {
    id: "cookie-consent-optimization",
    title: "Cookie Consent Optimization Strategies",
    description:
      "Learn how to maximize opt-in rates while maintaining full GDPR and CCPA compliance. Includes A/B testing frameworks, banner design best practices, and geo-targeting strategies.",
    category: "use-case",
    icon: Shield,
    tags: ["Cookie Consent", "GDPR", "CCPA"],
    readTime: "10 min read",
  },
  {
    id: "data-mapping-blueprint",
    title: "Data Mapping Automation Blueprint",
    description:
      "Step-by-step guide to deploying automated data discovery across hybrid cloud infrastructure. Covers tool selection, classification strategies, and continuous monitoring setup.",
    category: "blueprint",
    icon: Database,
    tags: ["Data Mapping", "BigID", "Securiti"],
    readTime: "12 min read",
  },
  {
    id: "cross-border-framework",
    title: "Cross-Border Data Transfer Framework",
    description:
      "Navigate the complex landscape of international data transfers post-Schrems II. Includes TIA templates, SCCs guidance, and practical transfer mechanism selection criteria.",
    category: "whitepaper",
    icon: Lock,
    tags: ["Cross-Border", "Schrems II", "SCCs"],
    readTime: "20 min read",
  },
  {
    id: "onetrust-implementation-guide",
    title: "OneTrust Implementation Best Practices",
    description:
      "Lessons learned from 30+ OneTrust deployments. Covers architecture decisions, common pitfalls, integration patterns, and optimization techniques that most implementers miss.",
    category: "guide",
    icon: BookOpen,
    tags: ["OneTrust", "Implementation", "Best Practices"],
    readTime: "18 min read",
  },
  {
    id: "privacy-program-maturity",
    title: "Privacy Program Maturity Assessment",
    description:
      "Evaluate your organization's privacy program maturity across 8 dimensions. Includes scoring rubrics, benchmark data, and a prioritized roadmap template for improvement.",
    category: "blueprint",
    icon: Scale,
    tags: ["Privacy Program", "Maturity Model", "Assessment"],
    readTime: "14 min read",
  },
  {
    id: "dsar-automation-playbook",
    title: "DSAR Automation Playbook",
    description:
      "Transform your DSAR process from manual chaos to automated efficiency. Covers workflow design, identity verification, data retrieval automation, and response templating.",
    category: "use-case",
    icon: FileText,
    tags: ["DSAR", "Automation", "OneTrust"],
    readTime: "11 min read",
  },
  {
    id: "multi-jurisdiction-compliance",
    title: "Multi-Jurisdiction Compliance Guide",
    description:
      "Managing privacy compliance across 100+ global regulations. Practical strategies for harmonizing requirements, building scalable compliance processes, and avoiding regulatory conflicts.",
    category: "whitepaper",
    icon: Globe,
    tags: ["Global Privacy", "Multi-Jurisdiction", "Strategy"],
    readTime: "22 min read",
  },
];

export const resourceCategories = [
  { value: "all", label: "All Resources" },
  { value: "guide", label: "Guides" },
  { value: "use-case", label: "Use Cases" },
  { value: "blueprint", label: "Blueprints" },
  { value: "whitepaper", label: "Whitepapers" },
] as const;
