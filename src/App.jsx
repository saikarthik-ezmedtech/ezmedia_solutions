import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Insights from './components/Insights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans text-gray-900">
      <Navbar />
      <Hero />
      <StatsSection />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Insights />
      <Footer />
    </div>
  );
}

export default App;
