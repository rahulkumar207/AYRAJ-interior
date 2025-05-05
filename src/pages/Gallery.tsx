
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { getGalleryItems, GalleryItem, Category } from '../utils/localStorageHelpers';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  
  const categories: {label: string; value: Category}[] = [
    { label: 'All', value: 'all' },
    { label: 'Flooring', value: 'flooring' },
    { label: 'Furniture', value: 'furniture' },
    { label: 'Walls', value: 'walls' },
    { label: 'Decor', value: 'decor' },
  ];

  useEffect(() => {
    // Load gallery items from local storage
    setGalleryItems(getGalleryItems());
  }, []);

  const filteredGallery = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Hero 
        title="Explore Our Royal Creations" 
        subtitle="Browse through our portfolio of luxury interior projects" 
        backgroundImage="https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=2873&auto=format&fit=crop"
      />
      
      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-olive mb-3 text-center">
            Our Gallery
          </h2>
          <p className="text-center text-olive-dark max-w-2xl mx-auto mb-8">
            Browse through our collection of projects and get inspired for your own space
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category.value
                    ? 'bg-olive text-white'
                    : 'bg-cream text-olive hover:bg-cream-dark'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-playfair font-bold text-white mb-2">{item.title}</h3>
                    <span className="inline-block bg-gold-DEFAULT text-olive-dark px-3 py-1 rounded text-sm">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Modal for Gallery Item */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden relative">
                {/* Close button */}
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute right-4 top-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 z-10"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-3/5 h-64 md:h-auto">
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/5 p-6">
                    <span className="inline-block bg-cream text-olive px-3 py-1 rounded text-sm mb-2">
                      {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                    </span>
                    <h3 className="text-2xl font-playfair font-bold text-olive mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {selectedItem.description}
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="/contact" 
                        className="bg-olive hover:bg-olive-dark text-white px-4 py-2 rounded-md transition-colors"
                      >
                        Get a Similar Design
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-olive text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Loved Our Work? Let Us Transform Your Space!
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg">
            Our team of experts is ready to create a personalized design that reflects your style and preferences.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-gold hover:bg-gold-dark text-olive-dark px-8 py-3 rounded-md transition-colors hover:shadow-lg"
          >
            Get Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
