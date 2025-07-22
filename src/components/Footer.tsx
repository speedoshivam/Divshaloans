import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Loan Products',
      links: [
        'Personal Loans',
        'Business Loans',
        'Home Improvement',
        'Auto Loans',
        'Student Loans',
        'Debt Consolidation'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Loan Calculator',
        'Rate Guide',
        'Credit Resources',
        'Financial Planning',
        'Blog & Articles',
        'FAQ'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Press',
        'Investor Relations',
        'Partner Program',
        'Affiliate Program'
      ]
    },
    {
      title: 'Support',
      links: [
        'Contact Us',
        'Customer Service',
        'Application Status',
        'Payment Center',
        'Document Upload',
        'Help Center'
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const certifications = [
    { icon: Shield, text: 'SSL Secured' },
    { icon: Award, text: 'BBB Accredited' },
    { icon: Users, text: 'FDIC Member' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                DivshaLoans
              </h3>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Your trusted partner in achieving financial goals. We provide fast, secure, and affordable loan solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-blue-400" />
                1-800-DIVSHALOANS
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-400" />
                info@divshaloans.com
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 text-blue-400 mt-0.5" />
                <div>
                  123 Financial Street<br />
                  New York, NY 10001
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-500 transition-all duration-200 transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
                <p className="text-gray-400">
                  Get the latest rates, financial tips, and exclusive offers delivered to your inbox.
                </p>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-600 border border-gray-600 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 rounded-r-xl hover:shadow-lg transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 DivshaLoans. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Accessibility
              </a>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-1 text-xs text-gray-400">
                  <cert.icon size={16} className="text-emerald-400" />
                  <span>{cert.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            *Rates shown are for illustrative purposes only and may vary based on creditworthiness and other factors. 
            All loan applications are subject to credit approval. Terms and conditions apply. 
            DivshaLoans is a licensed lender in all 50 states. NMLS ID: 123456789.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;