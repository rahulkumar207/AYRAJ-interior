
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServiceItems, ServiceItem } from '../utils/localStorageHelpers';

const ServicesSection: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    // Load services from local storage
    setServices(getServiceItems());
  }, []);

  return (
    <section className="py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-olive font-bold font-playfair mb-3 text-center">Our Premium Services</h2>
        <p className="text-center text-olive-dark max-w-2xl mx-auto mb-12">
          Discover our range of high-quality interior design services
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative overflow-hidden rounded-lg shadow-lg h-72 group"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredId === service.id ? 'scale-110' : 'scale-100'
                }`}
              />
              <div 
                className={`absolute inset-0 transition-all duration-300 ${
                  hoveredId === service.id 
                    ? 'bg-olive/80' 
                    : 'bg-black/40'
                } flex flex-col justify-center items-center p-6 text-center`}
              >
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mb-2">
                  {service.title}
                </h3>
                
                <p 
                  className={`text-white transition-opacity duration-300 mb-4 ${
                    hoveredId === service.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {service.description}
                </p>
                
                <Link 
                  to={service.link}
                  className={`bg-gold hover:bg-gold-dark text-olive-dark font-medium px-5 py-2 rounded transition-all transform ${
                    hoveredId === service.id 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
