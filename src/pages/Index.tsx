
import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutPreview from '../components/AboutPreview';
import PortfolioPreview from '../components/PortfolioPreview';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Luxury Begins with AYRAJ" 
        subtitle="Reimagine Your Space with Royal Designs" 
        backgroundImage="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2927&auto=format&fit=crop"
      />
      <ServicesSection />
      <AboutPreview />
      <PortfolioPreview />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Index;
