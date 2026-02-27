"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { caseStudies, industries, serviceTypes } from "@/data/case-studies";
import type { CaseStudy } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/shared/CaseStudyCard";
import { staggerContainer, viewportOnce, fadeUp } from "@/lib/animations";

export function CaseStudiesGrid() {
  const [industryFilter, setIndustryFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filtered = caseStudies.filter((cs) => {
    const matchIndustry =
      industryFilter === "All" || cs.industry === industryFilter;
    const matchService =
      serviceFilter === "All" || cs.serviceType === serviceFilter;
    return matchIndustry && matchService;
  });

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        {/* Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 mb-10">
          <div>
            <label className="block text-xs font-medium uppercase tracking-widest text-[#71717A] mb-2">
              Industry
            </label>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setIndustryFilter(ind)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${industryFilter === ind
                      ? "bg-oak-500/20 text-oak-400 border border-oak-500/30"
                      : "bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06] hover:bg-white/[0.08]"
                    }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-widest text-[#71717A] mb-2">
              Service
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceTypes.map((st) => (
                <button
                  key={st}
                  onClick={() => setServiceFilter(st)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${serviceFilter === st
                      ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      : "bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06] hover:bg-white/[0.08]"
                    }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((cs) => (
            <CaseStudyCard
              key={cs.id}
              company={cs.company}
              industry={cs.industry}
              challenge={cs.challenge}
              image={cs.image}
              keyMetric={cs.results[0]?.metric ?? ""}
              metricLabel={cs.results[0]?.label ?? ""}
              tags={cs.tags}
              onClick={() => setSelectedStudy(cs)}
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-[#A1A1AA] py-12">
            No case studies match the selected filters.
          </p>
        )}
      </div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card rounded-2xl p-6 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-white bg-black/40 hover:bg-black/60 shadow-lg backdrop-blur-md transition-colors z-50"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover Image */}
              <div className="relative w-full h-64 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-8 overflow-hidden rounded-t-2xl z-0">
                <img
                  src={selectedStudy.image}
                  alt={selectedStudy.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318] to-transparent pointer-events-none" />

                {/* Titles overlayed on image */}
                <div className="absolute bottom-6 left-6 sm:left-10 z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center rounded-full bg-oak-500/20 backdrop-blur-md border border-oak-400/30 px-2.5 py-0.5 text-xs font-medium text-white shadow-sm">
                      {selectedStudy.industry}
                    </span>
                    <span className="text-xs text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5">
                      {selectedStudy.serviceType}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white font-display sm:text-3xl">
                    {selectedStudy.company}
                  </h2>
                </div>
              </div>

              {/* Challenge */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#71717A] mb-2">
                  Challenge
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  {selectedStudy.challenge}
                </p>
              </div>

              {/* Approach */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#71717A] mb-2">
                  Approach
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  {selectedStudy.approach}
                </p>
              </div>

              {/* Results */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#71717A] mb-4">
                  Results
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedStudy.results.map((result) => (
                    <div
                      key={result.label}
                      className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-4 text-center"
                    >
                      <div className="text-xl font-bold text-white font-display">
                        {result.metric}
                      </div>
                      <p className="mt-1 text-xs text-[#A1A1AA]">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedStudy.testimonial && (
                <div className="mt-6 border-t border-white/[0.06] pt-6">
                  <p className="text-sm italic text-[#D4D4D8] leading-relaxed">
                    &ldquo;{selectedStudy.testimonial.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-medium text-white">
                    {selectedStudy.testimonial.name}
                    <span className="ml-2 text-[#A1A1AA] font-normal">
                      {selectedStudy.testimonial.title}
                    </span>
                  </p>
                </div>
              )}

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {selectedStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs text-[#71717A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
