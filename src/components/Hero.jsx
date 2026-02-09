import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Aurora from './Aurora';

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
      className="relative w-full min-h-[100dvh] md:h-[100vh] bg-[#020504] overflow-hidden"
    >
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden">

        {/* 1. LAYERED BACKGROUND WITH VIBRANT AURORA */}
        <motion.div
          style={{ x: bgX, y: bgY, scale: 1.1 }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          {/* Base Aurora - Bottom Layer (Vibrant) */}
          <div className="absolute inset-0">
            <Aurora
              colorStops={["#0a0f4d", "#00C853", "#81bc65"]}
              blend={0.4}
              amplitude={1.8}
              speed={1.5}
            />
          </div>

          {/* Faint Atmospheric Overlays */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(129,188,101,0.03), transparent 70%),
                linear-gradient(180deg, #020504 0%, transparent 30%, transparent 70%, #020504 100%)
              `
            }}
          />

          {/* Subtle Texture Grid */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(#81BC65 1px, transparent 1px), linear-gradient(90deg, #81BC65 1px, transparent 1px)',
              backgroundSize: '120px 120px'
            }}
          />
        </motion.div>

        {/* 2. HERO CONTENT - Focused & Elegant */}
        <motion.div
          style={{ x: textX, y: textY, scale, opacity }}
          className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto"
        >
          <div className="flex flex-col items-center select-none text-white">
            <motion.h1
              className="font-bold tracking-tighter leading-[0.8] uppercase"
              style={{
                fontSize: 'clamp(3rem, 12vw, 8rem)',
                fontFamily: '"Glacial Indifference", sans-serif'
              }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              EZMEDIA
            </motion.h1>

            <motion.h1
              className="font-bold tracking-tighter leading-[0.8] uppercase mt-0"
              style={{
                fontSize: 'clamp(3rem, 12vw, 8rem)',
                color: 'transparent',
                WebkitTextStroke: '1.5px #81BC65',
                textShadow: '0 0 30px rgba(129,188,101,0.3)',
                fontFamily: '"Glacial Indifference", sans-serif'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              SOLUTIONS
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <p className="text-[#81BC65] font-light tracking-[0.6em] uppercase text-[10px] md:text-sm"
              style={{ fontFamily: '"Glacial Indifference", sans-serif' }}>
              Digital Growth & Performance Agency
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#81BC65] to-transparent" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
