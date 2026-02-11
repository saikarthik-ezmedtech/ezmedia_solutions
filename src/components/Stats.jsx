import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiUserGroup, HiGlobe, HiLightningBolt, HiHeart } from 'react-icons/hi';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <HiUserGroup size={32} />,
      number: '1000+',
      label: 'Happy Clients',
      description: 'Worldwide',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <HiGlobe size={32} />,
      number: '50+',
      label: 'Countries',
      description: 'We Serve',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <HiLightningBolt size={32} />,
      number: '2000+',
      label: 'Projects',
      description: 'Completed',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <HiHeart size={32} />,
      number: '99%',
      label: 'Satisfaction',
      description: 'Rate',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-full h-full opacity-10"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional results
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 mb-4 mx-auto"
              >
                <div className="text-white">
                  {stat.icon}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-white/80">
                  {stat.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 flex items-center justify-center text-4xl">
                  👤
                </div>
              </motion.div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl text-white/95 italic mb-4">
                  "Working with EZ Media has been an absolute game-changer for our business. Their creativity and technical expertise are unmatched."
                </p>
                <div className="text-white font-semibold">Sarah Johnson</div>
                <div className="text-white/80">CEO, TechStart Inc.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
