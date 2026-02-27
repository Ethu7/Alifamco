"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { CalendarEmbed } from "./CalendarEmbed";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 glow-oak-top" />
        <div className="absolute inset-0 dot-grid" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-4xl py-20 sm:py-28 text-center"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center rounded-full border border-oak-500/20 bg-oak-500/10 px-3 py-1 text-xs font-medium text-oak-400"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            variants={staggerItem}
            className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-display text-white"
          >
            Let&apos;s start a{" "}
            <span className="gradient-text-oak">conversation</span>
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
          >
            Whether you need a full platform implementation or a quick strategy
            consultation, we&apos;re here to help. Send us a message or book a
            call directly.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Form + Calendar */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-xl font-bold text-white font-display mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Calendar Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CalendarEmbed />
            </motion.div>
          </div>

          {/* Contact Info Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <div className="flex items-start gap-4 glass-card rounded-xl p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-oak-500/10 border border-oak-500/20 shrink-0">
                <Mail className="h-5 w-5 text-oak-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Email</h3>
                <a
                  href="mailto:info@alifamco.com"
                  className="mt-1 text-sm text-[#A1A1AA] hover:text-white transition-colors"
                >
                  info@alifamco.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 glass-card rounded-xl p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-oak-500/10 border border-oak-500/20 shrink-0">
                <MapPin className="h-5 w-5 text-oak-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Location</h3>
                <p className="mt-1 text-sm text-[#A1A1AA]">
                  United States (Remote-first)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
