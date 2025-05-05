
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2874&auto=format&fit=crop"
                alt="AYRAJ Interiors Showcase"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-cream p-4 rounded shadow-lg hidden md:block">
                <p className="font-playfair text-olive text-lg">Since 2023</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-olive mb-6">
              About AYRAJ
            </h2>
            
            <p className="text-gray-700 mb-6">
              AYRAJ Royal Designs is Delhi's premier destination for luxury interiors at affordable prices. 
              We specialize in creating sophisticated living spaces with premium wooden flooring, designer 
              wallpapers, and bespoke furniture.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-cream p-4 rounded-lg text-center">
                <h3 className="font-playfair text-2xl text-olive mb-1">2+</h3>
                <p className="text-olive-dark">Years of Excellence</p>
              </div>
              <div className="bg-cream p-4 rounded-lg text-center">
                <h3 className="font-playfair text-2xl text-olive mb-1">50+</h3>
                <p className="text-olive-dark">Happy Clients</p>
              </div>
              <div className="bg-cream p-4 rounded-lg text-center">
                <h3 className="font-playfair text-2xl text-olive mb-1">100%</h3>
                <p className="text-olive-dark">Satisfaction</p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
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
            
            <Link 
              to="/about" 
              className="inline-flex items-center text-olive hover:text-olive-dark transition-colors font-medium"
            >
              Learn more about us <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
