import React, { useState, useEffect } from 'react';
import { Shield, Clock, DollarSign, Users, Award, Headphones } from 'lucide-react';

const Benefits = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    approved: 0,
    funded: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        customers: 50000,
        approved: 98,
        funded: 500,
        satisfaction: 99
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          customers: Math.floor(targets.customers * progress),
          approved: Math.floor(targets.approved * progress),
          funded: Math.floor(targets.funded * progress),
          satisfaction: Math.floor(targets.satisfaction * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('benefits-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: 'Fast Approval',
      description: 'Get approved in as little as 24 hours with our automated decision system.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Industry-leading rates starting from 4.99% APR for qualified borrowers.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Bank-level security with 256-bit encryption to protect your information.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Dedicated loan specialists available to guide you through every step.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as "Best Online Lender" for three consecutive years.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support whenever you need assistance.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const stats = [
    { value: counters.customers, label: 'Happy Customers', suffix: '+' },
    { value: counters.approved, label: 'Approval Rate', suffix: '%' },
    { value: counters.funded, label: 'Million Funded', suffix: 'M+' },
    { value: counters.satisfaction, label: 'Satisfaction Rate', suffix: '%' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose DivshaLoans?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing you with the best lending experience possible. 
              Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div id="benefits-stats" className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Trusted by Thousands
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our numbers speak for themselves. See why customers choose DivshaLoans for their financial needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;