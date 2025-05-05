
import React, { useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "Homeowner",
    quote: "AYRAJ turned my living room into a royal space! Their wooden flooring service was exceptional, and the team was professional throughout.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Verma",
    position: "Interior Designer",
    quote: "As an interior designer, I've worked with many vendors, but AYRAJ's quality and craftsmanship stands out. Their designer wallpapers are exquisite.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Vikram Mehra",
    position: "Business Owner",
    quote: "The handcrafted furniture pieces I ordered for my office have received countless compliments. The attention to detail is remarkable.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop"
  },
];

const Testimonials: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;
    
    const scrollAmount = sliderRef.current.offsetWidth;
    const newScrollPosition = direction === 'next' 
      ? sliderRef.current.scrollLeft + scrollAmount 
      : sliderRef.current.scrollLeft - scrollAmount;
    
    sliderRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 bg-olive">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-white font-bold font-playfair mb-3 text-center">
          Client Testimonials
        </h2>
        <p className="text-center text-cream mb-12 max-w-xl mx-auto">
          Hear what our satisfied clients say about our services and craftsmanship
        </p>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scrollTo('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 hidden md:block"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => scrollTo('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 hidden md:block"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Testimonials Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-8"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center"
              >
                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-playfair text-lg font-semibold text-olive">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex-grow">
                    <svg className="text-gold-DEFAULT h-8 w-8 mb-2" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12H8c0-1.1 0.9-2 2-2V8zm12 0c-2.2 0-4 1.8-4 4v10h10V12h-8c0-1.1 0.9-2 2-2V8z" />
                    </svg>
                    <p className="text-gray-700 italic">{testimonial.quote}</p>
                  </div>
                  
                  <div className="flex text-gold-DEFAULT">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {testimonials.map((_, i) => (
            <button 
              key={i}
              className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                if (!sliderRef.current) return;
                sliderRef.current.scrollTo({
                  left: i * sliderRef.current.offsetWidth,
                  behavior: 'smooth'
                });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
