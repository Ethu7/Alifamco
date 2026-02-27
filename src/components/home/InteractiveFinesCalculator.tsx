"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, AlertCircle, ShieldAlert, Globe, Scale, Cpu, FileText } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function InteractiveFinesCalculator() {
    // Log scale from 5 (10^5 = 100K) to 11 (10^11 = 100B)
    const [revenueLog, setRevenueLog] = useState<number>(7); // Starts at 10M
    const [severity, setSeverity] = useState<"standard" | "willful">("willful");

    const revenue = Math.pow(10, revenueLog);
    const multiplier = severity === "willful" ? 1 : 0.5;

    const formatCurrency = (val: number) => {
        if (val >= 1_000_000_000) return `$${(val / 1_000_000_000).toFixed(2)}B`;
        if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`;
        if (val >= 1_000) return `$${(val / 1_000).toFixed(0)}K`;
        return `$${val.toFixed(0)}`;
    };

    const regulations = [
        {
            title: "GDPR Violation",
            maxPercent: 4,
            amount: revenue * 0.04 * multiplier,
            desc: "Upper limit for severe EU data infringements.",
            colorTheme: "red",
            colorClass: "text-red-500",
            icon: <Globe className="w-4 h-4" />
        },
        {
            title: "EU AI Act Breach",
            maxPercent: 7,
            amount: revenue * 0.07 * multiplier,
            desc: "Penalty for prohibited or high-risk AI practices.",
            colorTheme: "amber",
            colorClass: "text-amber-500",
            icon: <Cpu className="w-4 h-4" />
        },
        {
            title: "Digital Markets Act",
            maxPercent: 10,
            amount: revenue * 0.10 * multiplier,
            desc: "Fines for core platform service non-compliance.",
            colorTheme: "purple",
            colorClass: "text-purple-500",
            icon: <Scale className="w-4 h-4" />
        },
        {
            title: "LGPD (Brazil)",
            maxPercent: 2,
            amount: revenue * 0.02 * multiplier,
            desc: "Maximum assessment for severe privacy failure.",
            colorTheme: "blue",
            colorClass: "text-blue-500",
            icon: <FileText className="w-4 h-4" />
        }
    ];

    return (
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0D13]">
            <div className="absolute inset-0 glow-amber-top z-0 opacity-50" />
            <div className="absolute inset-0 dot-grid z-0" />

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative z-10 mx-auto max-w-5xl text-center"
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
                        <ShieldAlert className="w-64 h-64 text-red-500" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-8">
                        {/* Controls */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black/40 p-6 rounded-xl border border-white/5">
                            {/* Revenue Slider */}
                            <div className="flex flex-col gap-4 text-left">
                                <label className="font-display text-white text-lg flex justify-between">
                                    Global Annual Revenue
                                    <span className="text-2xl font-bold text-white whitespace-nowrap">
                                        {formatCurrency(revenue)}
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="5" // 10^5 = 100K
                                    max="11" // 10^11 = 100B
                                    step="0.01"
                                    value={revenueLog}
                                    onChange={(e) => setRevenueLog(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-red-500"
                                />
                                <div className="flex justify-between text-xs text-[#71717A] font-medium">
                                    <span>$100K+</span>
                                    <span>$100B</span>
                                </div>
                            </div>

                            {/* Severity Toggle */}
                            <div className="flex flex-col gap-4 text-left">
                                <label className="font-display text-white text-lg">
                                    Violation Severity
                                </label>
                                <div className="flex rounded-lg bg-black/50 p-1 border border-white/10 w-full sm:w-fit">
                                    <button
                                        onClick={() => setSeverity("standard")}
                                        className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${severity === "standard" ? "bg-white/10 text-white shadow-sm" : "text-[#71717A] hover:text-[#A1A1AA]"}`}
                                    >
                                        Standard Negligence
                                    </button>
                                    <button
                                        onClick={() => setSeverity("willful")}
                                        className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${severity === "willful" ? "bg-red-500/20 text-red-400 border border-red-500/20 shadow-sm" : "text-[#71717A] hover:text-[#A1A1AA]"}`}
                                    >
                                        Willful / Maximal
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                            {regulations.map((reg) => (
                                <div key={reg.title} className="bg-black/50 border border-white/5 rounded-xl p-6 text-left hover:bg-black/70 transition-colors group">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#71717A] mb-2 flex justify-between items-center group-hover:text-white transition-colors">
                                        <span className="flex items-center gap-2">
                                            {reg.icon}
                                            {reg.title}
                                        </span>
                                        <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">{reg.maxPercent}% MAX</span>
                                    </h4>
                                    <div className={`flex items-end gap-2 ${reg.colorClass}`}>
                                        <span className="text-4xl font-display font-bold">{formatCurrency(reg.amount)}</span>
                                        <span className="text-sm pb-1 mb-1 opacity-80">potential fine</span>
                                    </div>
                                    <p className="text-xs text-[#A1A1AA] mt-3">
                                        {reg.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 text-sm text-[#71717A] text-left flex items-center gap-2 bg-[#18181B] p-4 rounded-lg">
                            <AlertCircle className="w-5 h-5 shrink-0 text-amber-500/70" />
                            <p>
                                Calculations are estimates based on maximum statutory percentage limits relative to the selected global revenue. Standard negligence is modeled at 50% of the maximum fine. Always consult legal counsel.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
