import { Toaster } from 'sonner';
import Navigation from "../sections/Navigation";
import HeroSection from "../sections/HeroSection";
import LogoMarquee from "../components/LogoMarquee";
import ServicesSection from "../sections/ServicesSection";
import ProcessSection from "../sections/ProcessSection";
import PortfolioSection from "../sections/PortfolioSection";
import IndustriesSection from "../sections/IndustriesSection";
import TechStackSection from "../sections/TechStackSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";

function HomePage() {
  return (
    <div className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Toast notifications */}
      <Toaster position="top-center" richColors />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative">
        <HeroSection className="z-10" />
        <LogoMarquee />
        <ServicesSection className="z-20" />
        <ProcessSection className="z-30" />
        <PortfolioSection className="z-40" />
        <IndustriesSection className="z-50" />
        <TechStackSection className="z-[60]" />
        <TestimonialsSection className="z-[70]" />
        <ContactSection className="z-[80]" />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
