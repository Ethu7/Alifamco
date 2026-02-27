import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Alifamco — Data Privacy Consulting",
  description:
    "Get in touch with Alifamco's privacy consulting team. Book a free consultation or send us a message to discuss your compliance needs.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
