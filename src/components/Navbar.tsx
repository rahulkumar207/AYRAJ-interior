
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <h1 className={`font-playfair text-2xl md:text-3xl font-bold ${
            scrolled ? 'text-olive' : 'text-white'
          }`}>
            AYRAJ<span className="text-gold-DEFAULT">.</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['/', '/about', '/services', '/gallery', '/contact'].map((path, index) => {
            const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            return (
              <Link
                key={index}
                to={path}
                className={`${
                  location.pathname === path
                    ? 'font-bold text-gold-DEFAULT'
                    : scrolled
                    ? 'text-olive hover:text-gold-DEFAULT'
                    : 'text-white hover:text-gold-DEFAULT'
                } transition-colors`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              scrolled ? 'text-olive' : 'text-white'
            } focus:outline-none`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-olive z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col space-y-8 pt-24 px-8">
          {['/', '/about', '/services', '/gallery', '/contact'].map((path, index) => {
            const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            return (
              <Link
                key={index}
                to={path}
                className={`text-lg text-white ${
                  location.pathname === path ? 'font-bold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
