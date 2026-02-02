import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="relative bg-[#021612] text-white min-h-screen flex flex-col justify-between overflow-hidden py-12 lg:py-0" id="contact">
      <div id="careers" className="absolute top-0" />
      {/* Subtle Gradient Backdrops */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#00C853] rounded-full blur-[180px]" />
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-[#ED1C24] rounded-full blur-[180px]" />
      </div>

      {/* Top Bar: Brand Name */}
      <div className="container mx-auto px-6 lg:px-12 py-10 relative z-10 flex justify-between items-start">
        <div className="group cursor-pointer inline-flex transform hover:scale-105 transition-transform duration-300">
          <Logo className="h-14 w-auto" showText={true} />
        </div>

        {/* Optional "Start a Project" Button to the Right */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#00C853] text-black px-8 py-3 font-black text-sm uppercase tracking-widest hover:bg-white transition-all hidden md:flex items-center gap-3"
        >
          Start Project
          <HiArrowNarrowRight />
        </motion.button>
      </div>

      {/* Main Content Body */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-12 lg:gap-24 w-full">

          {/* Column 1: Huge CTA Title */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              LET'S BUILD<br />
              SOMETHING<br />
              <span className="text-[#00C853] drop-shadow-[0_0_40px_rgba(0,200,83,0.3)]">GREAT.</span>
            </h2>
          </div>

          {/* Column 2: Navigation (Madison Style) */}
          <div className="flex flex-col justify-center space-y-2">
            {['WHO WE ARE', 'WHAT WE DO'].map((item) => (
              <div key={item} className="group cursor-pointer border-b border-white/10 py-6 flex items-center justify-between">
                <h3 className="text-2xl md:text-2xl font-black uppercase group-hover:text-[#00C853] transition-colors">
                  {item}
                </h3>
                <span className="text-2xl font-light opacity-30 group-hover:opacity-100 group-hover:text-[#00C853] transition-all">+</span>
              </div>
            ))}
            {/* Sub-services list (inline or below) */}
            <div className="py-4 space-y-4 opacity-50 pl-2">
              {['Creative Wing', 'Performance Marketing', 'Research'].map((s) => (
                <p key={s} className="text-xs font-bold uppercase tracking-widest hover:text-[#00C853] cursor-pointer transition-colors block">
                  - {s}
                </p>
              ))}
            </div>
          </div>

          {/* Column 3: Secondary Links & Socials */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {['OUR WORK', 'NEWS', 'CAREERS', 'GET IN TOUCH'].map((link) => (
                <h3 key={link} className="text-2xl md:text-2xl font-black uppercase hover:text-[#00C853] cursor-pointer transition-colors leading-none">
                  {link}
                </h3>
              ))}
            </div>

            {/* Social Icons & Newsletter */}
            <div className="pt-8 space-y-8">
              <div className="flex gap-6">
                {[FaTwitter, FaLinkedin, FaInstagram, FaFacebook].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, color: '#00C853' }}
                    className="text-white hover:text-[#00C853] transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
              <div className="max-w-xs relative">
                <input
                  type="email"
                  placeholder="NEWSLETTER"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-xs font-bold tracking-widest focus:outline-none focus:border-[#00C853] transition-colors"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#00C853]">
                  <HiArrowNarrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Madison Style Fine Print */}
      <div className="container mx-auto px-6 lg:px-12 py-10 relative z-10 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black tracking-[0.3em] uppercase opacity-30">
            © 2026 EZMEDIA SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            {['Privacy Policy', 'Terms & Conditions'].map((item) => (
              <a key={item} href="#" className="text-[9px] font-black tracking-[0.3em] uppercase opacity-30 hover:opacity-100 hover:text-white transition-all">
                {item}
              </a>
            ))}
          </div>
          {/* Madison-style membership seal simulation */}
          <div className="hidden md:flex items-center gap-4 opacity-30">
            <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
              <span className="text-[8px] font-bold">EMZ</span>
            </div>
            <span className="text-[8px] font-bold uppercase tracking-widest">Growth First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
