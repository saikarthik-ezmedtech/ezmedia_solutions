import React from 'react';
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
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

  return (
    <footer
      className="relative text-white overflow-hidden bg-[#252b6e]"
    >
      {/* Top Contact Strip */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          <a
            href="#home"
            onClick={(e) => smoothScrollTo(e, '#home')}
            className="flex items-center cursor-pointer"
          >
            <span className="text-lg sm:text-xl font-extrabold text-white" style={{ fontFamily: "'Glacial Indifference', sans-serif" }}>
              EZMEDIA SOLUTIONS
            </span>
          </a>
          <div className="flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] sm:text-sm text-white/90">
            <p className="flex items-center gap-2 whitespace-nowrap">
              <FaEnvelope className="text-white" /> info@ezmediasolutions.com
            </p>
            <p className="flex items-center gap-2 whitespace-nowrap">
              <span>📍</span> 3423 Piedmont Rd NE, Atlanta, GA 30305
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-14 relative z-10">

        {/* Column 1: Brand */}
        <div className="space-y-6">
          <p className="text-sm leading-relaxed max-w-sm text-white/78">
            EZ Media Solutions helps brands grow through strategic digital
            marketing, performance campaigns, and data-driven insights.
          </p>

          <div className="flex gap-4 pt-2">
            {[FaTwitter, FaLinkedin, FaInstagram, FaFacebook].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white hover:text-[#81BC65] transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-white/78">
            <li className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">Creative Wing</li>
            <li className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">Performance Marketing</li>
            <li className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">Research & Engagement</li>
          </ul>
        </div>

        {/* Column 3: Navigate */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm text-white/78">
            <li><a href="#services" onClick={(e) => smoothScrollTo(e, '#services')} className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">Services</a></li>
            <li><a href="#clients" onClick={(e) => smoothScrollTo(e, '#clients')} className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">Clients</a></li>
            <li><a href="#testimonials" onClick={(e) => smoothScrollTo(e, '#testimonials')} className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => smoothScrollTo(e, '#contact')} className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-white/78">
            <li><a href="#home" onClick={(e) => smoothScrollTo(e, '#home')} className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">Home</a></li>
            <li><a href="#blogs" onClick={(e) => smoothScrollTo(e, '#blogs')} className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">Blogs</a></li>
            <li><a href="#faq" onClick={(e) => smoothScrollTo(e, '#faq')} className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] text-white">
          <p>© 2026 EZ Media Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">
              Privacy Policy
            </span>
            <span className="hover:text-[#81BC65] cursor-pointer transition-colors duration-300">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
