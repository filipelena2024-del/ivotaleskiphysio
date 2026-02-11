import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import WhySection from "@/components/WhySection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <TreatmentsSection />
        <WhySection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <LanguageToggle />
    </div>
  );
};

export default Index;
