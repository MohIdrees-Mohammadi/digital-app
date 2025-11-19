import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import AllServicesSection from "@/components/AllServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CoreServicesSection />
      <HowWeHelpSection />
      <AllServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
