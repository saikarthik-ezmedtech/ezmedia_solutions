import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Minimal outline social media icons
// Minimal outline social media icons
const SocialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
      <path d="M4 20l6.4-8" />
      <path d="M20 4l-6.4 8" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 00-4 0" />
    </svg>
  ),
  metaAds: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5c-1.5 1.5-3.5 1.5-4.5 0s-1-3.5 1-4.5 4-1 5 1m0 0c1.5 2.5 4 4.5 6 4.5s2.5-1.5 2.5-2.5-1-2.5-2.5-2.5-4.5 2-6 4.5z" />
    </svg>
  ),
  googleAds: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 22h18L12 2z" />
      <path d="M12 2l4.5 10H7.5L12 2z" fill="currentColor" opacity="0.2" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M8 11h6" />
      <path d="M11 8v6" />
    </svg>
  ),
  webDesign: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M6 8l2 2-2 2" />
      <path d="M18 12l-2-2 2-2" />
    </svg>
  ),
};

// Floating social icon component
const FloatingSocialIcon = ({ icon, delay, className, colorClass = "bg-white/80" }) => (
  <motion.div
    className={`absolute z-20 w-14 h-14 rounded-full ${colorClass} backdrop-blur-md flex items-center justify-center cursor-pointer shadow-lg border border-white/50 transition-all duration-300 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -15, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      y: {
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 0.5
      }
    }}
    whileHover={{
      scale: 1.2,
      rotate: [0, -5, 5, 0],
      boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.3 }
    }}
  >
    <div className="w-7 h-7">
      {icon}
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden">

      {/* Scattered Social Media Icons */}
      <div className="hidden md:block">
        <FloatingSocialIcon
          icon={SocialIcons.instagram}
          delay={0.8}
          className="top-[22%] left-[4%] md:left-[2%] lg:left-[4%]"
          colorClass="bg-pink-50/90 text-pink-600"
        />
        <FloatingSocialIcon
          icon={SocialIcons.facebook}
          delay={0.9}
          className="top-[35%] right-[4%] md:right-[10%] lg:right-[15%]"
          colorClass="bg-blue-50/90 text-blue-700"
        />
        <FloatingSocialIcon
          icon={SocialIcons.twitter}
          delay={1.0}
          className="bottom-[18%] left-[4%] md:left-[5%] lg:left-[8%]"
          colorClass="bg-slate-50/90 text-slate-900"
        />
        <FloatingSocialIcon
          icon={SocialIcons.linkedin}
          delay={1.1}
          className="top-[52%] right-[2%] md:right-[4%] lg:right-[6%]"
          colorClass="bg-cyan-50/90 text-cyan-700"
        />
        <FloatingSocialIcon
          icon={SocialIcons.metaAds}
          delay={1.2}
          className="bottom-[35%] right-[8%] md:right-[15%] lg:right-[20%]"
          colorClass="bg-indigo-50/90 text-indigo-600"
        />
        <FloatingSocialIcon
          icon={SocialIcons.googleAds}
          delay={1.3}
          className="top-[58%] left-[2%] md:left-[4%] lg:left-[6%]"
          colorClass="bg-yellow-50/90 text-yellow-600"
        />
        <FloatingSocialIcon
          icon={SocialIcons.seo}
          delay={1.4}
          className="bottom-[10%] right-[4%] md:right-[8%] lg:right-[12%]"
          colorClass="bg-emerald-50/90 text-emerald-600"
        />
        <FloatingSocialIcon
          icon={SocialIcons.webDesign}
          delay={1.5}
          className="top-[20%] right-[8%] md:right-[12%] lg:right-[18%]"
          colorClass="bg-purple-50/90 text-purple-600"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 relative"
          >
            {/* Main Headline */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight">
                Digital
                <br />
                marketing
              </h1>

              {/* W scribble near headline */}
              <motion.img
                src="/assets/w.svg"
                alt=""
                className="absolute -top-8 right-0 w-12 h-12 md:w-20 md:h-20 opacity-60 hidden sm:block"
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 15, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            {/* Subtext */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-md leading-relaxed">
              Let's not play games here. What do you really want from a marketing agency? If you need a good website, great SEO or growth strategy, then you're in the right place.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg"
              onClick={() => {
                const target = document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Contact
            </motion.button>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Map overlay - BEHIND images */}
            <motion.img
              src="/assets/map.svg"
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-15 pointer-events-none"
              style={{ zIndex: 0 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            {/* Grid Container */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 relative">
              {/* Top Left - Yellow Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/assets/l1.svg"
                  alt="Team member"
                  className="w-full h-auto rounded-3xl"
                />
              </motion.div>

              {/* Top Right - Pink Card with rocket */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative mt-6 sm:mt-12"
              >
                <img
                  src="/assets/b1.svg"
                  alt="Team member"
                  className="w-full h-auto rounded-3xl"
                />

                {/* Rocket with dashed line */}
                <motion.div
                  className="absolute -right-20 -top-16 hidden lg:block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <img
                    src="/assets/rocket.png"
                    alt=""
                    className="w-24 h-24 opacity-70"
                  />
                </motion.div>
              </motion.div>

              {/* Bottom Left - Blue Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative -mt-3 sm:-mt-6"
              >
                <img
                  src="/assets/l2.svg"
                  alt="Team member"
                  className="w-full h-auto rounded-3xl"
                />
              </motion.div>

              {/* Circle decoration connecting images */}
              <motion.img
                src="/assets/circle.svg"
                alt=""
                className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-40 sm:h-40 opacity-25 pointer-events-none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.25 }}
                transition={{ duration: 1, delay: 1 }}
              />

              {/* Decorative dashed lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" style={{ zIndex: 1 }}>
                <motion.path
                  d="M 140 100 Q 200 150 260 180"
                  stroke="#999"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
                <motion.path
                  d="M 100 280 Q 160 320 220 340"
                  stroke="#999"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </svg>
            </div>

            {/* Decorative lightbulb - on LEFT side */}
            <motion.img
              src="/assets/blub.svg"
              alt=""
              className="absolute -left-48 bottom-32 w-24 h-24 opacity-60 hidden xl:block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
            />

            {/* Dashed line from lightbulb to blue image */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden xl:block" style={{ zIndex: 2 }}>
              <motion.path
                d="M -120 260 Q -40 280 40 300"
                stroke="#999"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
