import React from 'react';
import { motion, useMotionValue, useTransform, useAnimationFrame, useScroll, useReducedMotion } from 'framer-motion';
import { useViewportWidth } from '../hooks/useViewportWidth';

// Original brand color social media icons
const SocialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
      <path d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z" fill="white" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
      <path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12ZM17.5 7.5C16.9477 7.5 16.5 7.05228 16.5 6.5C16.5 5.94772 16.9477 5.5 17.5 5.5C18.0523 5.5 18.5 5.94772 18.5 6.5C18.5 7.05228 18.0523 7.5 17.5 7.5Z" fill="white" opacity="0" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" fill="#FF0000" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path d="M13.5 12H15.5L16 9H13.5V7.5C13.5 6.9 13.5 6 15 6H16V3.5C16 3.5 14.8 3.5 13.5 3.5C11 3.5 9.5 5 9.5 8V9H7.5V12H9.5V20H13.5V12Z" fill="white" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="black" />
      <path d="M16.5 7H14.9L12.7 9.6L10.9 7H7L11.5 13.5L6.5 19H8.1L10.7 16L12.9 19H17L12.1 12.1L16.5 7ZM15.5 18H14.6L8.8 8H9.7L15.5 18Z" fill="white" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
      <path d="M8 19H5V10H8V19ZM6.5 8.7C5.5 8.7 4.7 7.9 4.7 6.9C4.7 5.9 5.5 5 6.5 5C7.5 5 8.3 5.9 8.3 6.9C8.3 7.9 7.5 8.7 6.5 8.7ZM19 19H16V13.8C16 12.5 15.5 11.6 14.4 11.6C13.5 11.6 13 12.2 12.8 12.8C12.7 13 12.7 13.3 12.7 13.6V19H9.7C9.7 19 9.8 10.8 9.7 10H12.7V11.3C13.1 10.7 13.8 9.8 15.4 9.8C17.4 9.8 19 11.1 19 13.9V19Z" fill="white" />
    </svg>
  ),
  metaAds: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 12C10 12 8.5 14 6.5 14C4.5 14 3.5 12.5 3.5 10.5C3.5 8.5 5 7 7 7C9 7 10.5 8.5 11.5 10C12.5 11.5 14 13 16 13C18 13 19.5 11.5 19.5 9.5C19.5 7.5 18 6 16 6C13.5 6 12 8.5 12 8.5" stroke="#0668E1" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  googleAds: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M15 3H21V9" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21H3V15" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 3L13.5 10.5" stroke="#FBBC05" strokeWidth="3" strokeLinecap="round" />
      <path d="M3 21L10.5 13.5" stroke="#34A853" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke="#0F9D58" strokeWidth="2" />
      <path d="M21 21L16.65 16.65" stroke="#0F9D58" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 12L10 14L15 9" stroke="#0F9D58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// Floating Icon Component with physics-based smooth motion
// Floating Icon Component with optimized mobile performance
const FloatingIcon = ({ icon, index, total, isMobile }) => {
  const phase = (index / total) * Math.PI * 2;
  const t = useMotionValue(phase);

  // Different speeds for different patterns
  // Mobile: FASTER for dynamic movement, Desktop: moderate for circular motion
  const speed = isMobile ? 0.0004 : 0.00015;

  useAnimationFrame((time, delta) => {
    // Prevent huge delta spikes when DevTools opens/closes or tab loses focus
    if (delta > 100) return;
    t.set(t.get() + delta * speed);
  });

  // Different animation patterns for mobile vs desktop
  // Mobile: Diagonal wave pattern (dynamic and engaging)
  // Desktop: Circular orbital motion (works well on large screens)

  const x = useTransform(t, v =>
    isMobile
      ? `${Math.sin(v) * 100 + Math.cos(v * 1.5) * 40}px`  // Diagonal wave motion
      : `${Math.sin(v) * 48}vw`                             // Circular motion
  );

  const y = useTransform(t, v =>
    isMobile
      ? `${Math.cos(v) * 120 + Math.sin(v * 1.3) * 50}px`  // Diagonal wave motion
      : `${Math.sin(v * 2) * 28}vh`                         // Circular motion
  );

  const scale = useTransform(t, v =>
    isMobile
      ? 1.0 + Math.sin(v * 1.2) * 0.2   // More dramatic breathing
      : 0.8 + Math.cos(v) * 0.3         // Desktop scaling
  );

  const opacity = useTransform(t, v =>
    isMobile
      ? 0.7 + Math.sin(v * 0.8) * 0.3   // Visible fade effect
      : 0.6 + Math.cos(v) * 0.4         // Desktop opacity
  );

  // Z-index only on desktop to prevent layout thrashing on mobile
  const zIndex = useTransform(t, v =>
    !isMobile && Math.cos(v) > 0 ? 10 : 0
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        x,
        y,
        scale,
        opacity,
        zIndex,
        willChange: "transform"
      }}
      className="absolute w-16 h-16 md:w-16 md:h-16 flex items-center justify-center"
    >
      <div className="w-14 h-14 md:w-12 md:h-12 drop-shadow-lg">
        {icon}
      </div>
    </motion.div>
  );
};

// Infinite Loop Container
const IconLoop = () => {
  // Track viewport width reactively - forces remount on resize
  const width = useViewportWidth();
  const isMobile = width < 768;

  const allIcons = Object.values(SocialIcons);
  // Only show 4 icons on mobile for better performance
  const visibleIcons = isMobile ? allIcons.slice(0, 4) : allIcons;

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      {visibleIcons.map((icon, i) => (
        <FloatingIcon
          key={`${i}-${Math.floor(width / 100)}`} // 🔥 Force remount on width change - fixes DevTools freeze
          icon={icon}
          index={i}
          total={visibleIcons.length}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();

  // Parallax effects
  const yBackground = useTransform(scrollY, [0, 1000], [0, 400]); // Moves down significantly to create depth
  const yText = useTransform(scrollY, [0, 1000], [0, 100]); // Subtle shift
  const yGraphic = useTransform(scrollY, [0, 1000], [0, 200]); // Distinct layer movement

  return (
    <section
      className="relative w-full min-h-[500px] md:min-h-[700px] lg:h-screen lg:-mt-20 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: 'url(/assets/herobg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* Infinite Loop Icons Background with Parallax */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0">
        <IconLoop />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            style={{ y: yText }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-3 sm:space-y-6 relative"
          >
            {/* Main Headline */}
            <div className="relative">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Where <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Creativity</span>
                <br />
                Meets <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Conversion</span>.
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
              Let's not play games here. What do you really want from a marketing agency? If you need a growth strategy  good website or great SEO + AEO + GEO , then you're in the right place.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-800 transition-colors shadow-lg"
              onClick={() => {
                const target = document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Connect now
            </motion.button>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div
            style={{ y: yGraphic }}
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
                  src="/assets/o1.svg"
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
                  className="w-5/6 h-full"
                />

                {/* Rocket with dashed line */}
                <motion.div
                  className="absolute -right-20 -top-4 hidden lg:block"
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
                  className="w-5/6 h-auto"
                />
              </motion.div>

              {/* Bottom Right - Mobile/Tablet Filler (Rocket) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative flex justify-end lg:hidden mt-8 pr-4"
              >
                <img
                  src="/assets/rocket.png"
                  alt=""
                  className="w-32 h-32 opacity-90 object-contain"
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
