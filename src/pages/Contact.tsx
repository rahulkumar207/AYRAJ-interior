
import React from 'react';
import Hero from '../components/Hero';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would normally process the form data and send it to a server
    console.log("Form submitted");
    
    // For now, just show an alert
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      <Hero 
        title="Let's Create Your Dream Interior" 
        subtitle="Get in touch with us to start your transformation journey" 
        backgroundImage="https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=2873&auto=format&fit=crop"
      />
      
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-playfair text-olive mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 mb-6">
                  Fill out the form below, and our team will get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-olive hover:bg-olive-dark text-white font-medium py-3 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold font-playfair text-olive mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-700 mb-8">
                  Feel free to reach out to us through any of these channels. We're here to help transform your space into something extraordinary.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="bg-cream p-3 rounded-full mr-4">
                      <MapPin className="text-olive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-olive-dark">Address</h3>
                      <p className="text-gray-700">New Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cream p-3 rounded-full mr-4">
                      <Phone className="text-olive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-olive-dark">Phone</h3>
                      <a href="tel:+919999979079" className="text-gray-700 hover:text-olive transition-colors">
                        +91 9999979079
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cream p-3 rounded-full mr-4">
                      <Mail className="text-olive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-olive-dark">Email</h3>
                      <a href="mailto:hanumatint@gmail.com" className="text-gray-700 hover:text-olive transition-colors">
                        hanumatint@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Google Map */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.9089673823!2d77.06889583465121!3d28.52728034389641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1695980276270!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="AYRAJ Royal Designs Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social & Chat Section */}
      <section className="py-12 bg-cream-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-playfair text-olive mb-6">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-olive" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-olive" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://wa.me/919999979079" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-olive" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="mailto:hanumatint@gmail.com" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-6 h-6 text-olive" />
            </a>
          </div>
          <p className="text-gray-700 max-w-xl mx-auto">
            For faster response, reach out to us via WhatsApp or email. Our team is available 7 days a week to assist you with your interior design needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
