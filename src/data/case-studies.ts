export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  serviceType: string;
  challenge: string;
  approach: string;
  results: { metric: string; label: string }[];
  testimonial?: {
    quote: string;
    name: string;
    title: string;
  };
  tags: string[];
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "finserv-onetrust",
    company: "Global Financial Services Firm",
    industry: "Financial Services",
    serviceType: "Privacy Implementation",
    challenge:
      "A Fortune 500 financial institution needed to unify privacy operations across 30+ countries with varying regulatory requirements, while processing over 10,000 DSARs annually through manual workflows.",
    approach:
      "We implemented OneTrust across the enterprise with custom DSAR automation workflows, geo-targeted consent rules, and integration with their existing ServiceNow and Salesforce infrastructure. The phased rollout started with EMEA, expanded to APAC, then Americas over 6 months.",
    results: [
      { metric: "85%", label: "Reduction in DSAR response time" },
      { metric: "30+", label: "Countries unified on one platform" },
      { metric: "$2.1M", label: "Annual cost savings" },
      { metric: "99.7%", label: "SLA compliance rate" },
    ],
    testimonial: {
      quote:
        "Alifamco transformed our privacy program from a liability into a competitive advantage. Their technical depth with OneTrust is unmatched.",
      name: "Sarah Chen",
      title: "Global Chief Privacy Officer",
    },
    tags: ["OneTrust", "DSAR Automation", "Global Rollout", "Financial Services"],
    featured: true,
  },
  {
    id: "healthcare-bigid",
    company: "National Healthcare Network",
    industry: "Healthcare",
    serviceType: "Data Mapping",
    challenge:
      "A healthcare network with 200+ facilities had no visibility into where patient PHI resided across their hybrid cloud infrastructure, putting them at risk for HIPAA violations and making breach response nearly impossible.",
    approach:
      "We deployed BigID's data discovery engine across their on-premises databases, cloud storage, and 50+ SaaS applications. Custom classifiers were built for PHI detection, and automated data flow maps were generated to satisfy both HIPAA and state-level requirements.",
    results: [
      { metric: "15K+", label: "Data sources cataloged" },
      { metric: "94%", label: "PHI detection accuracy" },
      { metric: "60%", label: "Faster breach response" },
      { metric: "200+", label: "Facilities covered" },
    ],
    testimonial: {
      quote:
        "We finally know where our data lives. The visibility Alifamco gave us with BigID is transformative for our compliance posture.",
      name: "Dr. Michael Torres",
      title: "CISO",
    },
    tags: ["BigID", "Data Discovery", "HIPAA", "Healthcare"],
  },
  {
    id: "ecommerce-consent",
    company: "European E-Commerce Platform",
    industry: "Retail & E-Commerce",
    serviceType: "Cookie Consent",
    challenge:
      "An e-commerce platform operating in 15 EU markets was losing 40% of marketing attribution due to poorly configured cookie consent, while simultaneously receiving GDPR complaints from multiple DPAs.",
    approach:
      "We redesigned their consent experience using OneTrust's CMP with A/B tested banner designs, implemented granular geo-targeting rules for each market, and integrated consent signals with their Google Tag Manager and Adobe Analytics setup.",
    results: [
      { metric: "28%", label: "Increase in consent opt-in rate" },
      { metric: "0", label: "DPA complaints post-launch" },
      { metric: "15", label: "Markets with compliant consent" },
      { metric: "3 weeks", label: "Time to full deployment" },
    ],
    tags: ["OneTrust", "Cookie Consent", "GDPR", "E-Commerce"],
  },
  {
    id: "tech-ai-governance",
    company: "Enterprise SaaS Company",
    industry: "Technology",
    serviceType: "AI Governance",
    challenge:
      "A B2B SaaS company embedding AI features across their product suite needed a governance framework before their largest enterprise clients would approve AI-enabled features, and ahead of the EU AI Act enforcement.",
    approach:
      "We designed and implemented a comprehensive AI governance program including model risk classification, bias auditing processes, documentation standards, and a vendor AI assessment framework. The program was operationalized through OneTrust's AI Governance module.",
    results: [
      { metric: "50+", label: "AI models inventoried & classified" },
      { metric: "100%", label: "Enterprise client approval rate" },
      { metric: "EU AI Act", label: "Compliance readiness achieved" },
      { metric: "6 months", label: "Ahead of enforcement deadline" },
    ],
    testimonial: {
      quote:
        "Alifamco helped us turn AI governance from a blocker into an enabler. Our enterprise clients now see our governance program as a differentiator.",
      name: "James Wright",
      title: "VP of Product",
    },
    tags: ["OneTrust", "AI Governance", "EU AI Act", "SaaS"],
  },
  {
    id: "manufacturing-securiti",
    company: "Global Manufacturing Conglomerate",
    industry: "Manufacturing",
    serviceType: "Privacy Implementation",
    challenge:
      "A multinational manufacturer needed to modernize their privacy program across 45 countries while dealing with legacy systems, factory floor IoT data, and complex supplier data sharing agreements.",
    approach:
      "We implemented Securiti's unified data command center to provide centralized privacy management across their global operations. Custom connectors were built for legacy ERP systems and IoT platforms, with automated data flow mapping for cross-border transfers.",
    results: [
      { metric: "45", label: "Countries on unified platform" },
      { metric: "70%", label: "Reduction in manual processes" },
      { metric: "500+", label: "Data processing activities mapped" },
      { metric: "$1.8M", label: "Estimated regulatory risk reduction" },
    ],
    tags: ["Securiti", "Global Privacy", "Manufacturing", "IoT Data"],
  },
];

export const industries = [
  "All",
  "Financial Services",
  "Healthcare",
  "Retail & E-Commerce",
  "Technology",
  "Manufacturing",
] as const;

export const serviceTypes = [
  "All",
  "Privacy Implementation",
  "Data Mapping",
  "Cookie Consent",
  "AI Governance",
] as const;
