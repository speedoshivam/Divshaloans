import React, { useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Small Business Owner',
      location: 'Mumbai, MH',
      rating: 5,
      text: 'DivshaLoans made expanding my bakery possible. The application process was incredibly smooth, and I received my business loan approval within 24 hours. Their customer service team guided me through every step.',
      amount: '₹75,00,000',
      purpose: 'Business Expansion'
    },
    {
      name: 'Rahul Verma',
      role: 'Software Engineer',
      location: 'Bengaluru, KA',
      rating: 5,
      text: 'I needed to consolidate my credit card debt, and DivshaLoans offered me the best rate I could find. The online application was straightforward, and the money was in my account the next day.',
      amount: '₹25,00,000',
      purpose: 'Debt Consolidation'
    },
    {
      name: 'Anjali Singh',
      role: 'Teacher',
      location: 'Delhi',
      rating: 5,
      text: 'As a first-time homebuyer, I was nervous about the loan process. DivshaLoans team was patient, transparent, and helped me secure a great rate for my home improvement project.',
      amount: '₹50,00,000',
      purpose: 'Home Improvement'
    },
    {
      name: 'Vikram Patel',
      role: 'Marketing Director',
      location: 'Ahmedabad, GJ',
      rating: 5,
      text: 'The personal loan from DivshaLoans helped me through a difficult time. No hidden fees, competitive rates, and the fastest approval I have ever experienced. Highly recommend!',
      amount: '₹15,00,000',
      purpose: 'Personal Loan'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from thousands of satisfied customers 
            who've achieved their financial goals with LendFlow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={80} className="text-blue-600" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 italic">
                "{current.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <div className="font-bold text-xl text-gray-900">{current.name}</div>
                  <div className="text-gray-600">{current.role}</div>
                  <div className="text-sm text-gray-500">{current.location}</div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-blue-50 px-4 py-2 rounded-full text-center">
                    <div className="font-semibold text-blue-600">{current.amount}</div>
                    <div className="text-xs text-blue-500">Loan Amount</div>
                  </div>
                  <div className="bg-emerald-50 px-4 py-2 rounded-full text-center">
                    <div className="font-semibold text-emerald-600">{current.purpose}</div>
                    <div className="text-xs text-emerald-500">Purpose</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <ArrowLeft size={20} className="text-gray-600" />
              <span className="hidden sm:inline text-gray-600">Previous</span>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span className="hidden sm:inline text-gray-600">Next</span>
              <ArrowRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">24hr</div>
            <div className="text-gray-600">Avg Approval Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;