export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/services" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Case Studies", href: "/case-studies" },
] as const;

export const ctaLink = {
  label: "Implementation Lab",
  href: "/contact",
} as const;

export const footerLinks = {
  solutions: [
    { label: "Privacy Implementation", href: "/services#privacy-implementation" },
    { label: "AI Governance", href: "/services#ai-governance" },
    { label: "Cookie Consent", href: "/services#cookie-consent" },
    { label: "Data Mapping", href: "/services#data-mapping" },
    { label: "Compliance Advisory", href: "/services#compliance-advisory" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
