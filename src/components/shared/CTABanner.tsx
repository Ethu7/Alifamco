"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface CTABannerProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  title,
  titleHighlight,
  subtitle,
  buttonText = "Book a Consultation",
  buttonHref = "/contact",
}: CTABannerProps) {
  let beforeHighlight = title;
  let afterHighlight = "";
  if (titleHighlight) {
    const idx = title.indexOf(titleHighlight);
    if (idx !== -1) {
      beforeHighlight = title.slice(0, idx);
      afterHighlight = title.slice(idx + titleHighlight.length);
    }
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background glow */}
      <div className="absolute inset-0 glow-oak" />
      <div className="absolute inset-0 dot-grid" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display text-white">
          {titleHighlight ? (
            <>
              {beforeHighlight}
              <span className="gradient-text-oak">{titleHighlight}</span>
              {afterHighlight}
            </>
          ) : (
            title
          )}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
          {subtitle}
        </p>
        <Button
          asChild
          className="mt-8 bg-oak-500 text-white hover:bg-oak-600 font-semibold text-base h-12 px-8"
        >
          <Link href={buttonHref}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
