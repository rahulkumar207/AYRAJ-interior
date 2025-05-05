
import React from 'react';
import Hero from '../components/Hero';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Crafting Timeless Interiors Since 2023" 
        subtitle="Designing luxury spaces that reflect your personal style" 
        backgroundImage="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2874&auto=format&fit=crop"
        ctaText="Our Services"
        ctaLink="/services"
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop" 
                alt="AYRAJ Team" 
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-olive mb-6">
                Our Story
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">Our Roots</h3>
                <p className="text-gray-700">
                  Founded in 2023, AYRAJ Royal Designs began with a simple mission: to make luxury interior 
                  solutions accessible to everyone. What started as a small showroom has quickly grown into 
                  one of Delhi's most trusted names in premium interiors.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  We envision a world where every home reflects the unique personality of its owners through 
                  thoughtfully designed spaces that combine luxury with functionality. We strive to be 
                  at the forefront of interior design innovation.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To provide unparalleled interior design products and services that transform ordinary spaces 
                  into extraordinary environments. We are committed to quality, customer satisfaction, and 
                  delivering exceptional value.
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Affordable Luxury - Premium designs at competitive prices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Custom Designs - Tailored to your unique preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Bulk Orders - Special discounts for larger projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-cream-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-olive mb-3 text-center">
            Our Philosophy
          </h2>
          <p className="text-center text-olive-dark max-w-2xl mx-auto mb-12">
            We believe in creating spaces that not only look beautiful but also enhance your quality of life
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-olive/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-olive mb-3">Luxury Materials</h3>
              <p className="text-gray-700">
                We source only the finest materials from around the world to ensure your space exudes quality and sophistication.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center transform md:translate-y-4">
              <div className="bg-olive/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-olive mb-3">Customized Designs</h3>
              <p className="text-gray-700">
                Every space is unique, and so is our approach. We create personalized designs that reflect your style and needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-olive/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-olive mb-3">Fast Execution</h3>
              <p className="text-gray-700">
                We understand the value of your time. Our efficient processes ensure timely delivery without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-olive mb-3 text-center">
            Why Choose AYRAJ
          </h2>
          <p className="text-center text-olive-dark max-w-2xl mx-auto mb-12">
            Experience the difference when you partner with Delhi's premier luxury interior solution provider
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-cream to-white p-6 rounded-lg shadow-md border border-cream-dark">
              <div className="bg-olive text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Unbeatable Pricing</h3>
              <p className="text-gray-700">
                We offer competitive prices without compromising on quality, ensuring you get the best value.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-cream to-white p-6 rounded-lg shadow-md border border-cream-dark">
              <div className="bg-olive text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Vastu-compliant Designs</h3>
              <p className="text-gray-700">
                Our designs respect traditional principles while embracing modern aesthetics for harmonious living.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-cream to-white p-6 rounded-lg shadow-md border border-cream-dark">
              <div className="bg-olive text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Quality Assurance</h3>
              <p className="text-gray-700">
                Every product undergoes rigorous quality checks to ensure durability and perfect finishing.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-cream to-white p-6 rounded-lg shadow-md border border-cream-dark">
              <div className="bg-olive text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Personalized Consultations</h3>
              <p className="text-gray-700">
                Our experts provide tailored guidance to help you make the best choices for your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg">
            Let our team of experts help you create the interior of your dreams
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/919999979079" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-all hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            
            <a 
              href="/contact" 
              className="bg-gold hover:bg-gold-dark text-olive-dark px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-all hover:shadow-lg"
            >
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
