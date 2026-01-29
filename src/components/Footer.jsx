import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">

        {/* CTA Banner */}
        <div className="bg-black text-white rounded-3xl p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">Ready to grow your clinic with ezmedia solutions?</h2>
          </div>
          <div className="relative z-10">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-primary-300 transition-colors flex items-center gap-2">
              Get Started
              <span className="w-2 h-2 bg-black rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-300 rounded-bl-xl rounded-tr-xl"></div>
              <span className="font-bold text-xl tracking-tight">MAC</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Award-winning digital marketing agency specialized in healthcare growth. We help clinics scale with predictable systems.
            </p>
            <div className="flex gap-4 mt-6">
              {[FaTwitter, FaLinkedin, FaInstagram, FaFacebook].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-black transition-colors">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Services</a></li>
              <li><a href="#" className="hover:text-black">Case Studies</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>hello@ezmediasolutions.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Growth Street, Tech City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-400 text-xs">
          © 2024 EZMedia Solutions. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
