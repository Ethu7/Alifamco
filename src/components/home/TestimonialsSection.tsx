"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { staggerContainer, viewportOnce } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Alifamco completely transformed our data mapping structure. Not only did we hit compliance ahead of the CCPA deadline, but the new clean architecture unlocked insights that increased our marketing revenue by 14%.",
    name: "Sarah Jenkins",
    title: "Chief Privacy Officer",
    company: "GlobalFin",
  },
  {
    quote:
      "Their tech implementations for AI governance are unmatched. We were struggling to structure our models properly inside OneTrust, and Alifamco built a robust framework that scales seamlessly.",
    name: "David Chen",
    title: "VP of Engineering",
    company: "HealthTech Solutions",
  },
  {
    quote:
      "Instead of treating privacy as a roadblock, Alifamco showed us how strict cookie compliance could actually improve our data quality and conversion tracking. A true partner in growth.",
    name: "Elena Rodriguez",
    title: "Director of Data Management",
    company: "RetailCorp",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Client Testimonials"
          title="Trusted by enterprise privacy leaders"
          titleHighlight="enterprise privacy leaders"
          subtitle="See what CISOs, CPOs, and compliance leaders say about working with Alifamco."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
