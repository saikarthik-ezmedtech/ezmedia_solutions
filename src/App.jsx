import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutVideo from './components/AboutVideo';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Insights from './components/Insights';
import Clients from './components/Clients';
import CustomScrollbar from './components/CustomScrollbar';
import Footer from './components/Footer';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
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
    <div className="min-h-screen bg-transparent selection:bg-primary-300 selection:text-black relative">
      <CustomScrollbar />
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <Insights />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
