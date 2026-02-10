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
    <footer className="bg-[#0B0F0E] text-white">
      {/* Top Contact Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-white">
          <a
            href="#home"
            onClick={(e) => smoothScrollTo(e, '#home')}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/assets/ezmedia_logo_v2 1.svg"
              alt="EZ Media Solutions Logo"
              className="h-14 w-14 sm:h-20 sm:w-20 object-contain"
            />
            <span className="text-lg sm:text-xl font-extrabold text-white ml-1" style={{ fontFamily: "'Montserrat', Arial, sans-serif", letterSpacing: '-0.02em' }}>
              EZMEDIA SOLUTIONS
            </span>
          </a>
          <p className="flex items-center gap-2 text-xs sm:text-sm"><FaEnvelope className="text-white" /> info@ezmediasolutions.com</p>
          <p className="text-xs sm:text-sm text-center">📍 3423 Piedmont Rd NE, Atlanta, GA 30305, United States</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-14">

        {/* Column 1: Brand */}
        <div className="space-y-6">
          <p className="text-sm text-white leading-relaxed max-w-sm">
            EZ Media Solutions helps brands grow through strategic digital
            marketing, performance campaigns, and data-driven insights.
          </p>

          <div className="flex gap-4 pt-2">
            {[FaTwitter, FaLinkedin, FaInstagram, FaFacebook].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white hover:text-[#81BC65] transition-colors"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-white">
            <li className="hover:text-[#81BC65] cursor-pointer">Creative Wing</li>
            <li className="hover:text-[#81BC65] cursor-pointer">Performance Marketing</li>
            <li className="hover:text-[#81BC65] cursor-pointer">Research & Engagement</li>
          </ul>
        </div>

        {/* Column 3: Navigate */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm text-white">
            <li><a href="#services" onClick={(e) => smoothScrollTo(e, '#services')} className="hover:text-[#81BC65] cursor-pointer">Services</a></li>
            <li><a href="#clients" onClick={(e) => smoothScrollTo(e, '#clients')} className="hover:text-[#81BC65] cursor-pointer">Clients</a></li>
            <li><a href="#testimonials" onClick={(e) => smoothScrollTo(e, '#testimonials')} className="hover:text-[#81BC65] cursor-pointer">Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => smoothScrollTo(e, '#contact')} className="hover:text-[#81BC65] cursor-pointer">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-white">
            <li><a href="#home" onClick={(e) => smoothScrollTo(e, '#home')} className="hover:text-[#81BC65] cursor-pointer">Home</a></li>
            <li><a href="#blogs" onClick={(e) => smoothScrollTo(e, '#blogs')} className="hover:text-[#81BC65] cursor-pointer">Blogs</a></li>
            <li><a href="#faq" onClick={(e) => smoothScrollTo(e, '#faq')} className="hover:text-[#81BC65] cursor-pointer">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] text-white">
          <p>© 2026 EZ Media Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#81BC65] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#81BC65] cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
