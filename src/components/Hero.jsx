import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import WordReveal from './WordReveal';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-transparent flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10 lg:col-span-7 px-2"
        >
          <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[72px] font-bold text-gray-950 leading-[1.05] tracking-[-0.02em]">
            {['Stay ahead in', 'healthcare growth', 'with smart digital', 'marketing'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>

          <div className="overflow-hidden">
            <WordReveal
              className="text-gray-500 text-base md:text-lg lg:text-[19px] max-w-2xl leading-[1.6] font-normal"
              text="Award-winning digital marketing agency for medical & dental clinics, specializing in Ads, SEO, AEO, and patient acquisition systems that drive real growth."
            />
          </div>

          <div className="flex items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Schedule a call"
              className="bg-black text-white px-8 py-3.5 rounded-full flex items-center gap-3 font-medium group text-[14px] tracking-[0.005em]"
            >
              Schedule Call
              <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <a href="#" className="text-gray-900 font-medium border-b-2 border-transparent hover:border-black transition-all pb-1 text-[14px] tracking-[0.005em]">
              View Case Study
            </a>
          </div>

          <div className="pt-6">
            <p className="text-[11px] font-extrabold text-gray-600 uppercase tracking-[0.2em] mb-1">Trusted by leading clinics,</p>
            <p className="text-[11px] font-extrabold text-gray-600 uppercase tracking-[0.2em]">hospitals, and wellness brands</p>
          </div>
        </motion.div>

        {/* Right Content - Visuals (Group 427320839 - Scaled) */}
        <div className="relative w-full flex justify-center lg:justify-end lg:col-span-5 mt-10 lg:mt-0">
          <div className="relative w-full max-w-[500px] flex flex-col gap-6">

            {/* Top row */}
            <div className="flex justify-between items-start gap-4">
              {/* Quarter circle shape with arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-[160px] h-[160px] md:w-[230px] md:h-[230px]"
              >
                <img src="/assets/hero_shape.png" alt="decorative shape" className="w-full h-full object-contain" />
              </motion.div>

              {/* 230+ Stat Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-[#F0F0F0] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 w-[160px] h-[160px] md:w-[230px] md:h-[230px] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <h3 className="text-[32px] md:text-[44px] font-bold mb-2 md:mb-3 tracking-tighter leading-[1.1]">230+</h3>
                  <p className="text-gray-400 text-[11px] md:text-[13px] font-normal leading-[1.5]">
                    Healthcare brands scaled with ezmedia solutions
                  </p>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="h-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                  ></motion.div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Card - Marketing Systems */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-black text-white rounded-[2rem] p-8 w-full relative overflow-hidden shadow-2xl h-[240px]"
            >
              {/* Bubble background graphic */}
              <div className="absolute inset-0 opacity-40">
                <img src="/assets/bubbles_bg.png" alt="Decorative bubbles background" className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 flex justify-between items-end h-full pt-6">
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-[2px] bg-white opacity-60"></div>
                    <p className="text-[9px] uppercase tracking-[0.3em] font-semibold opacity-80">Drive More Patients & Appointments</p>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold leading-tight max-w-[280px]">
                    AI-powered marketing systems for predictable clinic growth
                  </h3>
                </div>

                <div className="flex items-end gap-1.5 h-full translate-y-8">
                  {[45, 75, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + (i * 0.2), duration: 0.5 }}
                      className={`w-14 rounded-t-xl transition-colors ${i === 2 ? 'bg-primary-300' : 'bg-primary-300/40'}`}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

