import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX, HiSearch } from 'react-icons/hi';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Lock body scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY < lastScrollY ? 'up' : 'down';
      const vh = window.innerHeight;

      setScrolled(currentScrollY > 50);

      // Show center text when past hero content (> 90vh)
      setPastHero(currentScrollY > vh * 0.9);

      // --- VISIBILITY LOGIC (Refined) ---
      // 1. In Hero (0 - 100vh): HIDE if scrolling down (immersive), SHOW if scrolling up or at top.
      // 2. In Footer (Bottom): HIDE to let footer shine.
      // 3. All other sections: ALWAYS SHOW (sticky).

      const isInHero = currentScrollY < vh;
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50; // Buffer

      if (isAtBottom) {
        setIsVisible(false);
      } else if (isInHero && scrollDirection === 'down' && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Expanded Search Data
  const searchItems = [
    // Services
    { name: 'Creative Wing', href: '#creative', type: 'Service' },
    { name: 'Performance Marketing', href: '#performance', type: 'Service' },
    { name: 'Research & Engagement', href: '#research', type: 'Service' },
    { name: 'Content Production', href: '#content', type: 'Service' },
    // Sections
    { name: 'Testimonials', href: '#testimonials', type: 'Section' },
    { name: 'Insights / News', href: '#insights', type: 'Section' },
    { name: 'FAQ', href: '#faq', type: 'Section' },
    { name: 'Contact Us', href: '#contact', type: 'Section' },
    { name: 'Careers', href: '#careers', type: 'Section' },
  ];

  const handleSearchNavigation = (href) => {
    setIsSearchOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Smooth scroll to element with offset if needed
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback or external link
      window.location.href = href;
    }
  };

  const handleSearchSubmit = () => {
    if (searchQuery.length > 2) {
      const match = searchItems.find(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
      if (match) {
        handleSearchNavigation(match.href);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${scrolled ? 'bg-[#021612] py-4 shadow-xl' : 'bg-[#021612] py-6'
          } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center relative">
          {/* Hamburger Menu - Left */}
          {/* Left: Hamburger & Logo */}
          <div className="flex items-center gap-4 md:gap-6 z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#00C853] transition-colors"
            >
              <HiMenuAlt4 size={28} />
            </button>
            <AnimatePresence>
              {!pastHero && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Logo className="h-8 md:h-10 w-auto" showText={false} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center Text - EZMEDIA SOLUTIONS (Shows only when past hero) */}
          <AnimatePresence>
            {pastHero && (
              <motion.div
                initial={{ opacity: 0, x: '-50%', y: -10 }}
                animate={{ opacity: 1, x: '-50%', y: 0 }}
                exit={{ opacity: 0, x: '-50%', y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Logo className="h-10 md:h-12 w-auto" showText={true} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search Icon - Right */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-white hover:text-[#00C853] transition-colors"
          >
            <HiSearch size={24} />
          </button>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#021612] z-[100] flex items-center justify-center px-6"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-[#00C853] transition-colors z-[110]"
            >
              <HiX size={32} />
            </button>
            <div className="w-full max-w-5xl z-[105] relative">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative border-b-2 border-white/20 focus-within:border-[#00C853] transition-colors duration-300"
              >
                <div onClick={handleSearchSubmit} className="cursor-pointer hover:text-[#00C853] transition-colors">
                  <HiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#00C853]" size={40} />
                </div>
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                  placeholder="SEARCH"
                  className="w-full bg-transparent py-6 pl-16 pr-4 text-4xl md:text-6xl text-white font-black focus:outline-none placeholder:text-white/20 uppercase tracking-tight"
                />
              </motion.div>

              {/* Search Results */}
              <div className="mt-12 space-y-6">
                {searchQuery.length > 2 ? (
                  searchItems.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())).map((result, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => handleSearchNavigation(result.href)}
                      className="block text-left w-full group"
                    >
                      <div className="text-2xl md:text-3xl text-white group-hover:text-[#00C853] transition-all flex items-center">
                        <span className="text-[#00C853]/50 mr-4 text-sm font-mono tracking-widest">{result.type.toUpperCase()}</span>
                        {result.name}
                        <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity text-base">↗</span>
                      </div>
                    </motion.button>
                  ))
                ) : (
                  <div className="flex gap-4 flex-wrap">
                    <span className="text-white/40 text-sm font-bold uppercase tracking-widest">Trending:</span>
                    {['Creative', 'Testimonials', 'Contact'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="text-[#00C853] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#021612] z-40 overflow-y-auto"
            style={{ paddingTop: '80px', paddingBottom: '80px' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-6 left-6 text-white hover:text-[#00C853] transition-colors z-50"
            >
              <HiX size={32} />
            </button>

            {/* Menu Content */}
            <div className="container mx-auto px-6 lg:px-12 h-full flex items-center">
              <div className="grid md:grid-cols-2 gap-12 md:gap-20 w-full">
                {/* Left Menu */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-8"
                >
                  <div className="pb-8">
                    <a
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl md:text-3xl font-medium uppercase hover:text-[#00C853] transition-colors block"
                    >
                      Home
                    </a>
                  </div>

                  <div className="pb-8">
                    <a
                      href="#about"
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl md:text-3xl font-medium uppercase hover:text-[#00C853] transition-colors block"
                    >
                      Who we are
                    </a>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white text-2xl md:text-3xl font-medium uppercase">
                      What we do
                    </h3>
                    <div className="pl-6 space-y-4">
                      {searchItems.filter(item => item.type === 'Service').map((service, idx) => (
                        <a
                          key={idx}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="text-white/70 text-lg hover:text-[#00C853] transition-colors block"
                        >
                          - {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Menu */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
                >
                  <div className="pb-8">
                    <a
                      href="#case-studies"
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl md:text-3xl font-medium uppercase hover:text-[#00C853] transition-colors block"
                    >
                      Our Work
                    </a>
                  </div>

                  <div className="pb-8">
                    <a
                      href="#insights"
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl md:text-3xl font-medium uppercase hover:text-[#00C853] transition-colors block"
                    >
                      Insights
                    </a>
                  </div>

                  <div className="pb-8">
                    <a
                      href="#careers"
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl md:text-3xl font-medium uppercase hover:text-[#00C853] transition-colors block"
                    >
                      Careers
                    </a>
                  </div>

                  <div className="pb-8">
                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl md:text-3xl font-medium uppercase hover:text-[#00C853] transition-colors block"
                    >
                      Get in touch
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-6 pt-8">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-[#00C853] transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-[#00C853] transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-[#00C853] transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
