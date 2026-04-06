import React from 'react';
import ServiceHero from '../sections/services/ServiceHero';
import ServiceOfferings from '../sections/services/ServiceOfferings';
import ServiceList from '../sections/services/ServiceList';
import ServiceCapabilities from '../sections/services/ServiceCapabilities';
import ServiceProcess from '../sections/services/ServiceProcess';
import ServiceExpertise from '../sections/services/ServiceExpertise';
import ServiceFAQ from '../sections/services/ServiceFAQ';
import ServiceTestimonials from '../sections/services/ServiceTestimonials';
import ServiceWhyMe from '../sections/services/ServiceWhyMe';
import ServiceTechStack from '../sections/services/ServiceTechStack';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import { Toaster } from 'sonner';
import useCalendly from '../hooks/useCalendly';
import { Calendar } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const { handleCalendlyClick } = useCalendly();
  return (
    <div className="relative">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main className="relative">
        <ServiceHero />
        <ServiceOfferings />
        <ServiceList />
        <ServiceCapabilities />
        <ServiceProcess />
        <ServiceExpertise />
        <ServiceFAQ />
        <ServiceTestimonials />
        <ServiceWhyMe />
        <ServiceTechStack />
        {/* ServiceCTA (inline section) */}
        <section className="py-16 px-6 bg-sky text-white text-center">
          <h2 className="font-heading font-bold text-4xl mb-4">Ready to build your store</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Let's turn your e-commerce idea into a high-converting Shopify store.
          </p>
          <button
            onClick={handleCalendlyClick}
            className="btn-primary bg-white text-sky hover:bg-soft-blue inline-flex items-center gap-2"
          >
            Book a Free Call <Calendar size={18} />
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
