import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const xSpring = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const ySpring = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const textX = useTransform(xSpring, [-0.5, 0.5], [-50, 50]);
  const textY = useTransform(ySpring, [-0.5, 0.5], [-50, 50]);
  const bgX = useTransform(xSpring, [-0.5, 0.5], [40, -40]);
  const bgY = useTransform(ySpring, [-0.5, 0.5], [40, -40]);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100dvh] md:h-[120vh] bg-[#021612] overflow-hidden mb-[-10vh] md:mb-[-20vh]"
    >
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden">

        {/* 1. DIGITAL GRID BACKGROUND */}
        <motion.div
          style={{ x: bgX, y: bgY, scale: 1.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#00C853 1px, transparent 1px), linear-gradient(90deg, #00C853 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#021612]/50 to-[#021612]" />
        </motion.div>

        {/* 3. HERO TYPOGRAPHY */}
        <motion.div
          style={{ x: textX, y: textY, scale, opacity }}
          className="relative z-20 text-center px-4 w-full"
        >

          {/* Main Title - SVG Animation */}
          <div className="w-full px-2 md:px-0 z-30 relative mx-auto max-w-[95vw]">
            <svg viewBox="0 0 1320 450" className="w-full h-full overflow-visible">
              <defs>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* EZMEDIA - Solid White Fade In */}
              <motion.text
                x="50%"
                y="35%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-extrabold tracking-tighter"
                style={{
                  fontSize: '190px',
                  fill: 'white',
                  fontFamily: 'Manrope, sans-serif',
                  letterSpacing: '-10px'
                }}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                EZMEDIA
              </motion.text>

              {/* SOLUTIONS - Green Stroke Drawing Animation */}
              <motion.text
                x="50%"
                y="80%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-extrabold tracking-tighter"
                style={{
                  fontSize: '190px',
                  fill: 'transparent',
                  stroke: '#00C853',
                  strokeWidth: '3px',
                  fontFamily: 'Manrope, sans-serif',
                  letterSpacing: '-10px',
                  filter: 'url(#neon-glow)'
                }}
                initial={{ strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 }}
                whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 0.2,
                  opacity: { duration: 0.5, delay: 0.2 }
                }}
              >
                SOLUTIONS
              </motion.text>
            </svg>
          </div>

        </motion.div>



      </div>
    </section>
  );
};

export default Hero;
