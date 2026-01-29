import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f5f5f5] flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
            Stay ahead in <br />
            healthcare growth <br />
            with smart digital <br />
            marketing
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            Award-winning digital marketing agency for doctors & clinics. We help you grow your practice with data-driven strategies.
          </p>

          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium group"
            >
              Book a Call
              <span className="bg-primary-300 text-black p-1 rounded-full group-hover:rotate-45 transition-transform">
                <FaArrowRight size={12} />
              </span>
            </motion.button>
            <a href="#" className="text-gray-900 font-medium hover:underline">View Case Study</a>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm font-medium text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              ))}
            </div>
            <p>Trusted by 200+ clinics, hospitals and wellness centers</p>
          </div>
        </motion.div>

        {/* Right Content - Visuals */}
        <div className="relative h-full min-h-[500px] flex flex-col justify-center">
          {/* Top Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gray-200 rounded-3xl p-8 mb-6 relative overflow-hidden w-full max-w-md ml-auto"
          >
            <div className="absolute top-4 right-4 bg-black text-primary-300 p-3 rounded-full">
              <FaArrowRight className="-rotate-45" />
            </div>
            <h3 className="text-4xl font-bold mb-2">230+</h3>
            <p className="text-gray-600 text-sm">Active clinics scaled with our systems</p>
            <div className="mt-6 h-2 bg-gray-300 rounded-full overflow-hidden">
              <div className="h-full bg-black w-3/4"></div>
            </div>
          </motion.div>

          {/* Bottom Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-black text-white rounded-3xl p-8 w-full max-w-lg relative"
          >
            <div className="flex justify-between items-end">
              <div>
                <p className="text-gray-400 text-xs mb-2 uppercase tracking-wider">Marketing Systems</p>
                <h3 className="text-xl font-semibold max-w-xs">AI-powered marketing systems for predictable clinic growth</h3>
              </div>
              <div className="flex items-end gap-2 h-16">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '40%' }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="w-8 bg-primary-300/50 rounded-t-md"
                ></motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '70%' }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="w-8 bg-primary-300/80 rounded-t-md"
                ></motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="w-8 bg-primary-300 rounded-t-md"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
