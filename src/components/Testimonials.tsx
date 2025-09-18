'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Springfield, IL",
      rating: 5,
      text: "ProFix Contractors exceeded our expectations! They fixed our plumbing emergency at 2 AM and were professional, courteous, and reasonably priced. We'll definitely use them again.",
      service: "Emergency Plumbing Repair"
    },
    {
      name: "Mike Rodriguez",
      location: "Chicago, IL",
      rating: 5,
      text: "The electrical work they did in our kitchen was flawless. They explained everything clearly, cleaned up after themselves, and the final result looks amazing. Highly recommend!",
      service: "Kitchen Electrical Upgrade"
    },
    {
      name: "Jennifer Chen",
      location: "Naperville, IL",
      rating: 5,
      text: "After the storm damaged our roof, ProFix came out immediately for an assessment. They worked quickly and efficiently to replace the damaged sections. Great communication throughout the process.",
      service: "Roof Repair & Replacement"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center shadow-lg">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <p className="text-lg text-gray-600 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 mb-2">
                  {testimonials[currentTestimonial].location}
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[currentTestimonial].service}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by homeowners across Illinois</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="text-gray-700 font-semibold">Licensed & Insured</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="text-gray-700 font-semibold">BBB A+ Rating</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="text-gray-700 font-semibold">15+ Years Experience</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="text-gray-700 font-semibold">24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
