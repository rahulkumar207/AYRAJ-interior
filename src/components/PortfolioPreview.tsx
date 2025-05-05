
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjectItems, ProjectItem, Category } from '../utils/localStorageHelpers';

const PortfolioPreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  const categories: {label: string; value: Category}[] = [
    { label: 'All', value: 'all' },
    { label: 'Flooring', value: 'flooring' },
    { label: 'Furniture', value: 'furniture' },
    { label: 'Walls', value: 'walls' },
    { label: 'Decor', value: 'decor' },
  ];

  useEffect(() => {
    // Load projects from local storage
    setProjects(getProjectItems());
  }, []);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-olive font-bold font-playfair mb-3 text-center">
          Our Portfolio
        </h2>
        <p className="text-center text-olive-dark max-w-2xl mx-auto mb-8">
          Explore our finest work and see how we transform ordinary spaces into extraordinary environments.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg shadow-lg relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-xl font-playfair font-bold text-white mb-2">{project.title}</h3>
                  <span className="inline-block bg-gold-DEFAULT text-olive-dark px-3 py-1 rounded text-sm">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/gallery" 
            className="inline-block bg-olive text-white px-6 py-3 rounded-md hover:bg-olive-dark transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
