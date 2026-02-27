"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, ctaLink } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#09090B]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-oak-500/10 border border-oak-500/20">
            <span className="text-sm font-bold text-oak-400">A</span>
          </div>
          <span className="text-lg font-semibold text-foreground font-display">
            Alifamco
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const linkPath = link.href.split("#")[0] || "/";
            const isActive =
              linkPath === "/"
                ? pathname === "/" && !link.href.includes("#")
                : pathname.startsWith(linkPath);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-[#A1A1AA] hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-oak-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex border-oak-500/30 bg-oak-500/5 text-oak-400 hover:bg-oak-500/10 hover:text-oak-300 font-semibold text-sm h-9 px-4"
          >
            <Link href={ctaLink.href}>
              {ctaLink.label}
            </Link>
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-[#A1A1AA] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#09090B]/95 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => {
              const linkPath = link.href.split("#")[0] || "/";
              const isActive =
                linkPath === "/"
                  ? pathname === "/" && !link.href.includes("#")
                  : pathname.startsWith(linkPath);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-[#A1A1AA] hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <Button
                asChild
                variant="outline"
                className="w-full border-oak-500/30 bg-oak-500/5 text-oak-400 hover:bg-oak-500/10 font-semibold h-11"
              >
                <Link href={ctaLink.href} onClick={() => setMobileOpen(false)}>
                  {ctaLink.label}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
