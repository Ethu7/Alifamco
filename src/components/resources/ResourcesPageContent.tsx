"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resources, resourceCategories } from "@/data/resources";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

export function ResourcesPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 glow-oak-top" />
        <div className="absolute inset-0 dot-grid" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl py-24 sm:py-32 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-oak-500/20 bg-oak-500/10 px-3 py-1 text-xs font-medium text-oak-400">
            Resources
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-display text-white">
            Guides, blueprints &{" "}
            <span className="gradient-text-oak">expert insights</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Practical resources from our team of privacy consultants. Everything
            you need to evaluate, implement, and optimize your privacy program.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs + Grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Category Tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {resourceCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.value
                    ? "bg-oak-500/20 text-oak-400 border border-oak-500/30"
                    : "bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06] hover:bg-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Resource Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((resource) => (
              <motion.div
                key={resource.id}
                variants={staggerItem}
                className="group glass-card rounded-xl p-6 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-oak-500/10 border border-oak-500/20">
                    <resource.icon className="h-5 w-5 text-oak-400" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-[#71717A] capitalize">
                    {resource.category}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white font-display">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
                  {resource.description}
                </p>
                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs text-[#71717A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  {resource.readTime && (
                    <span className="text-xs text-[#52525B]">
                      {resource.readTime}
                    </span>
                  )}
                  <span className="inline-flex items-center text-sm font-medium text-oak-400 opacity-0 transition-opacity group-hover:opacity-100">
                    Read
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-[#A1A1AA] py-12">
              No resources in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
