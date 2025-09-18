'use client';

import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">ProFix Contractors</div>
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-blue-200 transition-colors">Reviews</a>
          <a href="#gallery" className="hover:text-blue-200 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
        </div>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-2">
          <a href="#services" className="block py-2 hover:text-blue-200 transition-colors">Services</a>
          <a href="#testimonials" className="block py-2 hover:text-blue-200 transition-colors">Reviews</a>
          <a href="#gallery" className="block py-2 hover:text-blue-200 transition-colors">Gallery</a>
          <a href="#contact" className="block py-2 hover:text-blue-200 transition-colors">Contact</a>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Home Services
            <span className="block text-blue-200">You Can Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Expert plumbing, electrical, and roofing services with 15+ years of experience. 
            Licensed, insured, and committed to quality workmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-lg">
              <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">(385) 253-2721</span>
            </div>
            <div className="text-blue-200">•</div>
            <div className="text-lg">Available 24/7 for Emergencies</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Request a Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-200">15+</div>
            <div className="text-sm text-blue-300">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-200">500+</div>
            <div className="text-sm text-blue-300">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-200">24/7</div>
            <div className="text-sm text-blue-300">Emergency Service</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-200">100%</div>
            <div className="text-sm text-blue-300">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
