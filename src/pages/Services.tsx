
import React from 'react';
import Hero from '../components/Hero';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="What We Do Best" 
        subtitle="Discover our premium interior design services" 
        backgroundImage="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2874&auto=format&fit=crop"
      />
      
      {/* Services Grid */}
      <section id="services-grid" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-olive mb-3 text-center">
            Our Premium Services
          </h2>
          <p className="text-center text-olive-dark max-w-2xl mx-auto mb-12">
            Explore our comprehensive range of luxury interior solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2787&auto=format&fit=crop" 
                  alt="Luxury Wooden Flooring" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#flooring" className="bg-gold-DEFAULT text-olive-dark px-6 py-2 rounded-md hover:bg-gold-dark transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Luxury Wooden Flooring</h3>
                <p className="text-gray-600">Premium wooden flooring that adds warmth and elegance to any space.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581698371609-d0e93025671?q=80&w=2874&auto=format&fit=crop" 
                  alt="Laminate Flooring" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#laminate" className="bg-gold-DEFAULT text-olive-dark px-6 py-2 rounded-md hover:bg-gold-dark transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Laminate Flooring</h3>
                <p className="text-gray-600">Durable, affordable, and stylish laminate options for any room.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599619585752-c3edb42a414c?q=80&w=2940&auto=format&fit=crop" 
                  alt="Designer Wallpapers" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#wallpapers" className="bg-gold-DEFAULT text-olive-dark px-6 py-2 rounded-md hover:bg-gold-dark transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Designer Wallpapers</h3>
                <p className="text-gray-600">Transform your walls with our exclusive wallpaper collection.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1444086272650-11e63ba154e2?q=80&w=2940&auto=format&fit=crop" 
                  alt="Carpets" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#carpets" className="bg-gold-DEFAULT text-olive-dark px-6 py-2 rounded-md hover:bg-gold-dark transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Carpets</h3>
                <p className="text-gray-600">Luxurious carpets that add comfort and style to your floors.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2874&auto=format&fit=crop" 
                  alt="Royal Carving Furniture" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#furniture" className="bg-gold-DEFAULT text-olive-dark px-6 py-2 rounded-md hover:bg-gold-dark transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Royal Carving Furniture</h3>
                <p className="text-gray-600">Handcrafted furniture pieces that exude luxury and elegance.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=2787&auto=format&fit=crop" 
                  alt="Handcrafted Items" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#decor" className="bg-gold-DEFAULT text-olive-dark px-6 py-2 rounded-md hover:bg-gold-dark transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-olive mb-2">Handcrafted Items</h3>
                <p className="text-gray-600">Unique decorative pieces that add character to your space.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      <section id="flooring" className="py-20 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold font-playfair text-olive mb-6">
                Luxury Wooden Flooring
              </h2>
              <p className="text-gray-700 mb-6">
                Our premium wooden flooring solutions combine natural beauty with exceptional durability. We offer a wide range of options from solid hardwood to engineered wood, each selected for its exceptional quality and aesthetic appeal.
              </p>
              
              <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">Benefits</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Long-lasting durability that withstands heavy foot traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Timeless beauty that adds value to your property</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Easy to clean and maintain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Superior insulation properties</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">Materials Used</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">•</span> 
                  <span>Premium Oak, Walnut, and Maple</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">•</span> 
                  <span>Engineered wood with multiple layers for stability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">•</span> 
                  <span>High-quality finishes for enhanced protection</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">Our Process</h3>
              <ol className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 shrink-0">1</span> 
                  <span>Free consultation and space assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 shrink-0">2</span> 
                  <span>Selection of materials and finishes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 shrink-0">3</span> 
                  <span>Professional installation by our expert team</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 shrink-0">4</span> 
                  <span>Final inspection and quality assurance</span>
                </li>
              </ol>
              
              <a 
                href="/contact" 
                className="inline-flex items-center bg-olive hover:bg-olive-dark text-white px-6 py-3 rounded-md transition-colors"
              >
                Get a Quote <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2787&auto=format&fit=crop" 
                alt="Wooden Flooring Sample 1" 
                className="rounded-lg shadow-md hover-zoom h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2958&auto=format&fit=crop" 
                alt="Wooden Flooring Sample 2" 
                className="rounded-lg shadow-md hover-zoom h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1633110187937-5c4c94bc3ee9?q=80&w=2860&auto=format&fit=crop" 
                alt="Wooden Flooring Sample 3" 
                className="rounded-lg shadow-md hover-zoom h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1590497008432-f2633382c592?q=80&w=2874&auto=format&fit=crop" 
                alt="Wooden Flooring Installation" 
                className="rounded-lg shadow-md hover-zoom h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="furniture" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2874&auto=format&fit=crop" 
                alt="Royal Furniture Sample 1" 
                className="rounded-lg shadow-md hover-zoom h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2958&auto=format&fit=crop" 
                alt="Royal Furniture Sample 2" 
                className="rounded-lg shadow-md hover-zoom h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1605479882051-a28c48b627ea?q=80&w=2940&auto=format&fit=crop" 
                alt="Royal Furniture Sample 3" 
                className="rounded-lg shadow-md hover-zoom h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc14?q=80&w=2906&auto=format&fit=crop" 
                alt="Royal Furniture Sample 4" 
                className="rounded-lg shadow-md hover-zoom h-full object-cover"
              />
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl font-bold font-playfair text-olive mb-6">
                Royal Carving Furniture
              </h2>
              <p className="text-gray-700 mb-6">
                Our handcrafted furniture pieces are meticulously created by skilled artisans who combine traditional techniques with contemporary designs. Each piece is a unique work of art that adds a touch of royalty to your home.
              </p>
              
              <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">Benefits</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Unique, one-of-a-kind pieces that stand out</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Exceptional craftsmanship that showcases attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Customizable to fit your specific requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">✓</span> 
                  <span>Heirloom quality that can be passed down generations</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">Materials Used</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">•</span> 
                  <span>Premium hardwoods like Teak, Sheesham, and Rosewood</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">•</span> 
                  <span>High-quality hardware and accessories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">•</span> 
                  <span>Eco-friendly finishes and treatments</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">Custom Options</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">•</span> 
                  <span>Design consultation to match your style</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">•</span> 
                  <span>Custom dimensions to fit your space perfectly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-DEFAULT mr-2">•</span> 
                  <span>Selection of finishes and upholstery options</span>
                </li>
              </ul>
              
              <a 
                href="/contact" 
                className="inline-flex items-center bg-olive hover:bg-olive-dark text-white px-6 py-3 rounded-md transition-colors"
              >
                Request Custom Furniture <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Chat Box */}
      <div className="fixed bottom-24 right-6 z-50 max-w-sm hidden md:block">
        <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-500 rounded-full p-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3 className="font-playfair font-bold">AYRAJ Support</h3>
          </div>
          <p className="mb-4 text-gray-700">
            Need help choosing the right material? Chat with our expert!
          </p>
          <a 
            href="https://wa.me/919999979079"
            target="_blank"
            rel="noopener noreferrer" 
            className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-md transition-colors"
          >
            Chat Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
