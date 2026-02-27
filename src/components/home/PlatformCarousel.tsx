"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { partners } from "@/data/partners";
import { PartnerCard } from "./PartnerCard";
import { PartnerModal } from "./PartnerModal";
import type { Partner } from "@/data/partners";
import type { CarouselApi } from "@/components/ui/carousel";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeUp, viewportOnce } from "@/lib/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function PlatformCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api || isHovered || modalOpen) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api, isHovered, modalOpen]);

  const handleCardClick = useCallback((partner: Partner) => {
    setSelectedPartner(partner);
    setModalOpen(true);
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section
      id="platform-experience"
      className="border-t border-white/[0.06] bg-surface-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-7xl"
      >
        <SectionHeader
          badge="Platform Expertise"
          title="Deep experience across every major privacy platform"
          titleHighlight="every major privacy platform"
          subtitle="We don't just know these platforms — we've implemented them at enterprise scale across dozens of industries."
        />

        <div
          className="mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="mx-auto w-full max-w-5xl"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <PartnerCard
                    partner={partner}
                    onClick={() => handleCardClick(partner)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden border-white/[0.06] bg-surface-800 text-white hover:bg-surface-700 sm:flex" />
            <CarouselNext className="hidden border-white/[0.06] bg-surface-800 text-white hover:bg-surface-700 sm:flex" />
          </Carousel>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-oak-500"
                    : "w-2 bg-white/[0.1] hover:bg-white/[0.2]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <PartnerModal
        partner={selectedPartner}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
