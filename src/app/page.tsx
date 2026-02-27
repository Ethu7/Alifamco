import { HeroSection } from "@/components/home/HeroSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CaseStudyHighlight } from "@/components/home/CaseStudyHighlight";
import { PlatformCarousel } from "@/components/home/PlatformCarousel";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { InteractiveFinesCalculator } from "@/components/home/InteractiveFinesCalculator";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <ServicesPreview />
      <InteractiveFinesCalculator />
      <ProcessSection />
      <CaseStudyHighlight />
      <PlatformCarousel />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
