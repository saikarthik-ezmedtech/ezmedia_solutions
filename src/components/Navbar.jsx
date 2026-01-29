import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaArrowRight, FaChevronDown, FaRegBell } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Service', hasDropdown: true },
    { name: 'Solutions', hasDropdown: true },
    { name: 'Case studies', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'About' },
    { name: 'Contact' },
  ];

  const scrollToSection = (sectionName) => {
    // Mapping section names to element IDs
    const sectionIds = {
      'Case studies': 'case-studies',
      'Solutions': 'solutions',
      'Contact': 'contact'
    };

    const id = sectionIds[sectionName] || sectionName.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 800, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Main Navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1 md:gap-1.5 cursor-pointer -ml-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="/assets/main_logo.png" alt="logo" className="h-12 md:h-16 lg:h-20 w-auto object-contain" />
              <span className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-gray-950 whitespace-nowrap">ezmedia solutions</span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => scrollToSection(item.name)}
                    aria-label={`Scroll to ${item.name}`}
                    className="text-gray-700 hover:text-black text-[14px] font-medium transition-colors duration-200 flex items-center gap-1.5 group whitespace-nowrap tracking-[0.005em] h-20"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <FaChevronDown size={10} className="text-gray-400 group-hover:text-black transition-colors" />
                    )}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-gray-900 text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 text-[14px] tracking-[0.005em]"
            >
              Get started
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              role="button"
              aria-label="Notifications"
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors shadow-lg"
            >
              <FaRegBell size={20} />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
              className="text-black hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => scrollToSection(item.name)}
                  className="w-full text-left text-gray-600 hover:text-black block px-3 py-2 text-base font-medium flex justify-between items-center"
                >
                  {item.name}
                  {item.hasDropdown && <FaChevronDown size={12} />}
                </button>
              </div>
            ))}
            <button className="w-full bg-black text-white px-6 py-3 rounded-full font-medium mt-4 flex items-center justify-center gap-2">
              Get started
              <FaArrowRight size={12} />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

