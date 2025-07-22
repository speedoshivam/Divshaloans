import React from 'react';
import { 
  User, 
  Building2, 
  Home, 
  Car, 
  GraduationCap, 
  CreditCard,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Personal Loans',
      description: 'Flexible personal loans for any life event, from ₹1,00,000 to ₹50,00,000',
      features: ['No collateral required', 'Competitive rates', 'Quick approval'],
      rate: '10.99%',
      term: 'Up to 5 years'
    },
    {
      icon: Building2,
      title: 'Business Loans',
      description: 'Fuel your business growth with our comprehensive business financing',
      features: ['Term loans', 'Lines of credit', 'Equipment financing'],
      rate: '9.49%',
      term: 'Up to 7 years'
    },
    {
      icon: Home,
      title: 'Home Improvement',
      description: 'Transform your home with our specialized home improvement loans',
      features: ['No home equity required', 'Fixed rates', 'Same-day decisions'],
      rate: '8.99%',
      term: 'Up to 10 years'
    },
    {
      icon: Car,
      title: 'Auto Loans',
      description: 'Drive your dream car with our competitive auto financing options',
      features: ['New & used cars', 'Refinancing available', 'Pre-approval'],
      rate: '7.99%',
      term: 'Up to 7 years'
    },
    {
      icon: GraduationCap,
      title: 'Student Loans',
      description: 'Invest in your education with our student-friendly loan options',
      features: ['Flexible repayment', 'Grace periods', 'No prepayment penalties'],
      rate: '9.99%',
      term: 'Up to 15 years'
    },
    {
      icon: CreditCard,
      title: 'Debt Consolidation',
      description: 'Simplify your finances by consolidating multiple debts into one',
      features: ['Lower monthly payments', 'Single payment', 'Improve credit score'],
      rate: '11.49%',
      term: 'Up to 5 years'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Loan Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whatever your financial goals, we have the right loan product to help you achieve them. 
            Our competitive rates and flexible terms are designed with you in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl group-hover:from-blue-200 group-hover:to-emerald-200 transition-all duration-300">
                  <service.icon size={32} className="text-blue-600" />
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div className="font-semibold text-emerald-600">From {service.rate} APR</div>
                  <div>{service.term}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-emerald-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="group/btn w-full bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-500 text-gray-700 hover:text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;