import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaArrowRight } from 'react-icons/fa';
import WordReveal from './WordReveal';

const Footer = () => {
  return (
    <footer id="contact" className="bg-transparent pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-black text-white rounded-[3rem] p-12 lg:p-20 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black z-0 opacity-50"></div>

          {/* Bubble background */}
          <div className="absolute inset-0 opacity-40 z-0">
            <img src="/assets/bubbles_bg.png" alt="Decorative bubbles" loading="lazy" className="w-full h-full object-cover" />
          </div>

          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-300/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-[28px] md:text-[34px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em]">
              Ready to grow your clinic with ezmedia solutions?
            </h2>
          </div>

          <div className="relative z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get started with ezmedia solutions"
              className="bg-white text-black px-12 py-5 rounded-full font-medium hover:bg-primary-300 transition-all duration-300 flex items-center gap-4 text-[14px] shadow-xl tracking-[0.005em]"
            >
              Get started
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                <FaArrowRight size={14} />
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center">
              <img src="/assets/main_logo.png" alt="ezmedia solutions" className="h-16 w-auto object-contain" />
              <span className="text-2xl font-bold tracking-tight text-gray-950 ml-2">ezmedia solutions</span>
            </div>
            <WordReveal
              className="text-gray-500 text-lg md:text-[19px] leading-[1.6] mb-8 font-normal max-w-xl"
              text="Ezmedia solutions is a healthcare-focused digital growth agency helping medical & dental clinics scale through performance marketing, AI SEO, and automation."
            />
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" aria-label={`Follow us on ${Icon.name || 'Social Media'}`} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all bg-white shadow-sm">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-8 text-[18px]">Navigation</h4>
            <ul className="space-y-4 text-[16px] font-medium text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-8 text-[18px]">Licence</h4>
            <ul className="space-y-4 text-[16px] font-medium text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Copyright</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Email Address</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-8 text-[18px]">Contact</h4>
            <ul className="space-y-6 text-[16px] font-medium text-gray-500">
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center text-black">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                </div>
                <span className="text-gray-600">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center text-black">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </div>
                <span className="text-gray-600">hello@ezmediasolutions.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center text-black">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                </div>
                <span className="text-gray-600">India / Global Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 text-center flex flex-col items-center gap-6">
          <p className="text-gray-400 text-[14px]">
            © 2024 EZMedia Solutions. All rights reserved. Registered trademark.
          </p>
          <div className="flex gap-8 text-[14px] font-semibold text-gray-400 tracking-wider uppercase">
            <a href="#" className="hover:text-black transition-colors">COOKIE POLICY</a>
            <a href="#" className="hover:text-black transition-colors">SITEMAP</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

