import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Zap, value: '24H', label: 'Fast Approval' },
    { icon: Shield, value: '100%', label: 'Secure Process' }
  ];

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="space-y-6">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Zap size={16} className="mr-2" />
                Get approved in 24 hours
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Financial
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent block">
                  Dreams Start Here
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Get the funding you need with our streamlined loan process. 
                From personal loans to business financing, we make it simple, fast, and secure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                Start Your Application
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-700 delay-${index * 200} transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-2">
                    <stat.icon size={24} className="text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Element */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Loan Estimate</h3>
                <p className="text-gray-600">Get an instant estimate for your loan</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      placeholder="50,000"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Purpose
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>Personal Loan</option>
                    <option>Business Loan</option>
                    <option>Home Improvement</option>
                    <option>Debt Consolidation</option>
                  </select>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Get Instant Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;