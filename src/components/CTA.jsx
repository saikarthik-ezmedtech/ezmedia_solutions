import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-gray-950 rounded-[3rem] p-12 md:p-16 lg:p-24 overflow-hidden shadow-2xl"
        >
          {/* Subtle medical grid/pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#bef264_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-primary-300 rounded-full text-[13px] font-medium mb-8 uppercase tracking-[0.1em]">
                Ready to Grow?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[28px] md:text-[34px] lg:text-[52px] font-semibold text-white mb-8 leading-[1.2] tracking-[-0.01em]"
            >
              Let's Scale Your Clinic <br />
              <span className="text-gray-400">With Predictable Systems</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-sm md:text-[15px] lg:text-base mb-12 max-w-2xl mx-auto leading-[1.55] font-normal"
            >
              Transform your digital presence with our expert team specializing in medical growth. Let's discuss your project and make your vision a reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-300 text-black px-10 py-4 rounded-full font-medium text-[14px] shadow-xl hover:bg-white transition-all duration-300 flex items-center gap-3 group tracking-[0.005em]"
              >
                Get Started Now
                <HiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-medium text-[14px] hover:bg-white/10 transition-all duration-300 tracking-[0.005em]"
              >
                View Case Studies
              </motion.button>
            </motion.div>

            {/* Trust markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-10 text-white/40"
            >
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Verified Results</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Medical Specialized</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Data Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
