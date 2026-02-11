import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const { scrollY } = useScroll();

  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else if (targetId === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      // List of section IDs that have a dark background
      const darkSections = ['services', 'testimonials'];
      let isDark = false;

      for (const id of darkSections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Navbar height is approx 80px. Check if navbar center (40px) is within the section
          if (rect.top <= 40 && rect.bottom >= 40) {
            isDark = true;
            break;
          }
        }
      }

      setTheme(isDark ? 'dark' : 'light');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Faq', href: '#faq' },
    { name: 'Blogs', href: '#blogs' },
  ];

  const themeClasses = {
    light: {
      text: 'text-gray-900',
      nav: 'bg-white/10 backdrop-blur-xl',
      button: 'bg-gray-900 text-white hover:bg-gray-800'
    },
    dark: {
      text: 'text-white',
      nav: 'bg-black/20 backdrop-blur-md',
      button: 'bg-white text-black hover:bg-gray-200'
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${themeClasses[theme].nav} ${theme === 'dark' ? 'shadow-sm' : ''}`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#home" onClick={(e) => smoothScrollTo(e, '#home')} className="flex items-center space-x-0.5 cursor-pointer">
              <img
                src="/assets/ezmedia_logo_v2 1.svg"
                alt="EZMEDIA Logo"
                className={`h-16 w-16 transition-all duration-500 ${theme === 'dark' ? 'invert brightness-0' : ''}`}
              />
              <span className={`text-3xl font-bold transition-colors duration-500 ${themeClasses[theme].text}`}>EZMEDIA</span>
            </a>
          </motion.div>

          {/* Desktop Menu + Contact Button - RIGHTMOST */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Menu Items */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-8"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => smoothScrollTo(e, item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className={`transition-colors duration-500 relative group font-normal cursor-pointer ${themeClasses[theme].text}`}
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`} />
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Us Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                onClick={(e) => smoothScrollTo(e, '#contact')}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-500 shadow-lg ${themeClasses[theme].button}`}
              >
                Contact us
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Fixed sizing */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 focus:outline-none transition-colors duration-500 z-50 ${themeClasses[theme].text}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={32} /> : <HiMenuAlt4 size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden border-t border-gray-200 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}
        >
          <div className="px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                type="button"
                className="block w-full text-left font-medium py-3 px-2 transition-colors hover:opacity-70"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsOpen(false);
                  setTimeout(() => {
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
              >
                {item.name}
              </button>
            ))}
            <button
              type="button"
              className={`w-full mt-4 px-6 py-3 rounded-full font-semibold text-sm ${themeClasses[theme].button}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
                setTimeout(() => {
                  const target = document.querySelector('#contact');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;