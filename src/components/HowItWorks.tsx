import React from 'react';
import { FileText, Search, Clock, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Apply Online',
      description: 'Complete our simple online application in just 5 minutes. No paperwork, no hassle.',
      time: '5 minutes'
    },
    {
      icon: Search,
      title: 'Instant Review',
      description: 'Our advanced system reviews your application and provides instant pre-qualification.',
      time: '30 seconds'
    },
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get approved within 24 hours with our streamlined verification process.',
      time: '24 hours'
    },
    {
      icon: CheckCircle2,
      title: 'Receive Funds',
      description: 'Once approved, receive your funds directly in your bank account the next business day.',
      time: 'Next day'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process gets you from application to funding in record time. 
            Simple, transparent, and designed for your convenience.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center group"
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white border-4 border-blue-100 rounded-full group-hover:border-blue-200 transition-all duration-300 shadow-lg">
                    <step.icon size={32} className="text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <div className="text-sm font-medium text-emerald-600">
                      {step.time}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have achieved their financial goals with DivshaLoans. 
              Your journey to financial freedom starts here.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Start Application Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;