
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Explore Collection",
  ctaLink = "/services"
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-6 transition-all duration-700 text-shadow ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {title}
        </h1>
        <p 
          className={`text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {subtitle}
        </p>
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link 
            to={ctaLink}
            className="bg-olive hover:bg-olive-dark text-white px-8 py-3 rounded-md flex items-center gap-2 transition-all hover:shadow-lg"
          >
            {ctaText} <ArrowRight size={18} />
          </Link>
          <a 
            href="https://wa.me/919999979079" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md flex items-center gap-2 transition-all hover:shadow-lg"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
