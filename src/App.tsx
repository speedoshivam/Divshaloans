import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Benefits />
        <Calculator />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;