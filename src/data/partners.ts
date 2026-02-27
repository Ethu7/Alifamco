export interface Partner {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  color: string;
  icon: string;
}

export const partners: Partner[] = [
  {
    id: "onetrust",
    name: "OneTrust",
    shortDescription:
      "Alifamco excels in privacy, cookie, consent, and rights topology deployments.",
    fullDescription:
      "OneTrust is the market-defining platform for Trust Intelligence, enabling organizations to operationalize privacy, security, and governance. It automates complex workflows and ensures compliance with global regulations like GDPR, CCPA, and LGPD. OneTrust provides a centralized hub that helps businesses manage consent, assess privacy risks, and maintain transparent data practices across their entire organization.",
    capabilities: [
      "Privacy Management & Compliance Automation",
      "Data Discovery & Classification",
      "Consent & Preference Management",
      "Third-Party Risk Management",
      "GRC (Governance, Risk & Compliance)",
      "Ethics & Compliance Program Management",
      "ESG & Sustainability Reporting",
    ],
    color: "#2DB84B",
    icon: "OT",
  },
  {
    id: "osano",
    name: "Osano",
    shortDescription:
      "Crypto-compliance consents and vendor discovery mapping and privacy monitoring.",
    fullDescription:
      "Osano is a complete data privacy platform that helps companies manage consent, monitor vendor compliance, and simplify regulatory obligations. With its intuitive consent management and vendor monitoring tools, Osano enables businesses to maintain continuous privacy compliance without requiring a dedicated legal team.",
    capabilities: [
      "Consent Management Platform",
      "Vendor Privacy Monitoring",
      "Data Subject Rights Automation",
      "Regulatory Compliance Tracking",
      "Cookie Consent Management",
      "Privacy Policy Generation",
    ],
    color: "#6366F1",
    icon: "OS",
  },
  {
    id: "ketch",
    name: "Ketch",
    shortDescription:
      "Advanced orchestrated integrations and cookie and consent frameworks.",
    fullDescription:
      "Ketch provides a modern data permissioning platform that automates privacy compliance at the infrastructure level. Its programmable privacy approach enables businesses to manage consent, honor data subject rights, and maintain compliance across complex tech stacks with minimal engineering overhead.",
    capabilities: [
      "Programmable Privacy Infrastructure",
      "Consent Orchestration",
      "Data Subject Rights Management",
      "Cross-Platform Consent Sync",
      "Privacy-by-Design Automation",
      "Regulatory Intelligence",
    ],
    color: "#10B981",
    icon: "KT",
  },
  {
    id: "trustarc",
    name: "TrustArc",
    shortDescription:
      "Governing assessment, compliance, and trust-based environments.",
    fullDescription:
      "TrustArc provides a comprehensive privacy management platform that helps organizations simplify compliance, manage risk, and build trust. With robust tools for assessment automation, cookie consent management, and individual rights handling, TrustArc supports businesses in meeting privacy obligations across global regulatory frameworks.",
    capabilities: [
      "Privacy Program Assessment & Benchmarking",
      "Cookie Consent Management",
      "Individual Rights Management",
      "Data Inventory & Mapping",
      "Regulatory Intelligence & Monitoring",
      "Vendor Risk Management",
    ],
    color: "#F59E0B",
    icon: "TA",
  },
  {
    id: "cookiebot",
    name: "CookieBot",
    shortDescription:
      "Cookie, consent, and cookie implementation into data consent management.",
    fullDescription:
      "CookieBot (by Usercentrics) is a leading consent management platform specializing in cookie compliance and website tracking management. It automatically scans websites for cookies and trackers, generates compliant consent banners, and ensures organizations meet GDPR, ePrivacy, and CCPA requirements.",
    capabilities: [
      "Automatic Cookie Scanning",
      "Consent Banner Management",
      "Cookie Declaration Generation",
      "Geo-Targeted Consent Rules",
      "IAB TCF 2.0 Compliance",
      "Analytics & Consent Reporting",
    ],
    color: "#3B82F6",
    icon: "CB",
  },
  {
    id: "bigid",
    name: "BigID",
    shortDescription:
      "AI-powered data intelligence for discovery, classification, and protection at scale.",
    fullDescription:
      "BigID is the data-first powerhouse in the data privacy space. As a leading Data Intelligence Platform, BigID specializes in helping organizations discover, classify, and protect sensitive information across hybrid and multi-cloud environments. Using advanced AI and machine learning, BigID maps, correlates, and manages data at scale.",
    capabilities: [
      "Data Discovery & Intelligence",
      "AI-Powered Data Classification",
      "Privacy & Compliance Automation",
      "Data Retention & Minimization",
      "Data Access Governance",
      "Cloud Data Security Posture Management",
    ],
    color: "#4F46E5",
    icon: "BI",
  },
  {
    id: "securiti",
    name: "Securiti",
    shortDescription:
      "Unified Data Command Center for privacy, security, and governance.",
    fullDescription:
      "Securiti offers a unified Data Command Center that combines privacy, security, governance, and compliance into one intelligent platform. Leveraging AI, Securiti automates sensitive data discovery across multi-cloud environments, streamlines privacy operations, and ensures continuous regulatory compliance.",
    capabilities: [
      "Sensitive Data Intelligence",
      "Privacy Automation & DSR Management",
      "Consent Lifecycle Management",
      "Data Access Governance & Controls",
      "AI-Driven Risk Assessment",
      "Multi-Cloud Security Posture",
    ],
    color: "#0EA5E9",
    icon: "SE",
  },
];

/** Integration partners shown in the logo strip */
export const integrationPartners = [
  "OneTrust",
  "Salesforce",
  "tippair",
  "mowele",
  "Snowflake",
  "AWS",
] as const;
