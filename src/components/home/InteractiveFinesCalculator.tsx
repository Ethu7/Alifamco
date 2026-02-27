"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function InteractiveFinesCalculator() {
    const [revenue, setRevenue] = useState(100); // in millions

    // Calculations
    const gdprFine = (revenue * 0.04).toFixed(1);
    const aiActFine = (revenue * 0.07).toFixed(1);

    return (
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0D13]">
            <div className="absolute inset-0 glow-amber-top z-0 opacity-50" />
            <div className="absolute inset-0 dot-grid z-0" />

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative z-10 mx-auto max-w-4xl text-center"
            >
                <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 mb-6">
                    <AlertTriangle className="mr-2 w-4 h-4" />
                    Regulatory Risk Assessment
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-display text-white mb-4">
                    The true cost of <span className="text-red-500">non-compliance</span>
                </h2>
                <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto mb-12">
                    Global privacy laws calculate fines based on total worldwide annual revenue. Discover your organization's potential financial exposure.
                </p>

                <div className="glass-card p-6 sm:p-10 rounded-2xl border-t-4 border-red-500/50 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <ShieldAlert className="w-48 h-48 text-red-500" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-6">
                        <label className="text-left font-display text-white text-lg">
                            Total Global Annual Revenue
                        </label>
                        <div className="flex items-center gap-6">
                            <input
                                type="range"
                                min="10"
                                max="1000"
                                step="10"
                                value={revenue}
                                onChange={(e) => setRevenue(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-red-500"
                            />
                            <div className="text-2xl font-bold text-white whitespace-nowrap w-32 text-right">
                                ${revenue}M
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {/* GDPR */}
                            <div className="bg-black/50 border border-white/5 rounded-xl p-6 text-left hover:bg-black/70 transition-colors">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-[#71717A] mb-2 flex justify-between items-center">
                                    GDPR Violation
                                    <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">4% MAX</span>
                                </h4>
                                <div className="flex items-end gap-2 text-red-400">
                                    <span className="text-4xl font-display font-bold">${gdprFine}M</span>
                                    <span className="text-sm pb-1 mb-1">potential fine</span>
                                </div>
                                <p className="text-xs text-[#A1A1AA] mt-3">
                                    Upper limit for severe General Data Protection Regulation (EU) infringements.
                                </p>
                            </div>

                            {/* EU AI Act */}
                            <div className="bg-black/50 border border-white/5 rounded-xl p-6 text-left hover:bg-black/70 transition-colors">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-[#71717A] mb-2 flex justify-between items-center">
                                    EU AI Act Breach
                                    <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">7% MAX</span>
                                </h4>
                                <div className="flex items-end gap-2 text-amber-400">
                                    <span className="text-4xl font-display font-bold">${aiActFine}M</span>
                                    <span className="text-sm pb-1 mb-1">potential fine</span>
                                </div>
                                <p className="text-xs text-[#A1A1AA] mt-3">
                                    Maximum penalty for strictly prohibited AI practices under the new act.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 text-sm text-[#71717A] text-left flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Calculations are estimates based on maximum percentage limits. Always consult legal counsel.
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
