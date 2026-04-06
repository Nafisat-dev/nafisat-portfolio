import React from 'react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import ContactSection from '../sections/ContactSection';
import { Toaster } from 'sonner';

const ContactPage: React.FC = () => {
  return (
    <div className="relative">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main className="relative">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
