import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import AboutVideo from './components/AboutVideo';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blogs from './components/Blogs';
import Clients from './components/Clients';
import MarqueeSection from './components/MarqueeSection';
import CustomScrollbar from './components/CustomScrollbar';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const lenis = new Lenis({
      duration: isTouchDevice ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      smoothTouch: true,
      touchMultiplier: 1.8,
      infinite: false,
      lerp: isTouchDevice ? 0.12 : 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-pink-300 selection:text-black relative">
      <CustomScrollbar />
      <Navbar />

      {/* Shared Hero Background Container */}
      <div id="home" className="relative pt-20">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/herobg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <Hero />
        <FeatureCards />
      </div>

      <Services />
      <Clients />
      <Testimonials />
      <MarqueeSection />
      <FAQ />
      <Blogs />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
