export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  quote?: string;
  isFounder?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ali Telila",
    role: "Founder & Principal Consultant",
    bio: "Ali founded Alifamco with a singular mission: to make enterprise-grade privacy compliance accessible, practical, and growth-enabling. With deep expertise across OneTrust, BigID, Securiti, and TrustArc, Ali has led privacy implementations for Fortune 500 companies, healthcare networks, and high-growth SaaS platforms across 30+ countries. Before Alifamco, Ali built and scaled privacy programs at leading consulting firms, gaining the conviction that boutique precision beats big-firm bureaucracy every time.",
    quote:
      "Privacy isn't a checkbox — it's the foundation of digital trust. We help organizations build that foundation with the right technology and the right strategy.",
    isFounder: true,
  },
];

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export const companyValues: CompanyValue[] = [
  {
    title: "Technical Excellence",
    description:
      "We don't just configure platforms — we architect solutions. Deep technical expertise across every major privacy platform means we find the right answer, not just the easy one.",
    icon: "code",
  },
  {
    title: "Compliance as Growth",
    description:
      "We see privacy compliance not as a cost center but as a competitive advantage. Our implementations are designed to build customer trust and enable business growth.",
    icon: "trending-up",
  },
  {
    title: "Boutique Precision",
    description:
      "No outsourced junior consultants, no bloated timelines. Every engagement is led by senior experts who know your platform, your industry, and your regulatory landscape.",
    icon: "target",
  },
  {
    title: "Platform Agnostic",
    description:
      "We recommend the right tool for the job, not the platform that pays us the highest referral fee. Our vendor-neutral approach ensures you get the best solution for your needs.",
    icon: "layers",
  },
];

export interface CompanyStat {
  value: number;
  suffix: string;
  label: string;
}

export const companyStats: CompanyStat[] = [
  { value: 50, suffix: "+", label: "Enterprise Implementations" },
  { value: 30, suffix: "+", label: "Countries Served" },
  { value: 20, suffix: "M+", label: "Data Subjects Protected" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];
