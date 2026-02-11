import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiLightningBolt, HiSparkles, HiCube, HiColorSwatch, HiCode, HiTrendingUp } from 'react-icons/hi';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <HiLightningBolt size={32} />,
      title: 'Lightning Fast',
      description: 'Optimized performance for blazing fast load times and smooth interactions.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <HiSparkles size={32} />,
      title: 'Stunning Design',
      description: 'Beautiful, modern interfaces that captivate and engage your users.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <HiCube size={32} />,
      title: '3D Elements',
      description: 'Cutting-edge 3D graphics and animations that bring your vision to life.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <HiColorSwatch size={32} />,
      title: 'Custom Branding',
      description: 'Tailored designs that perfectly reflect your unique brand identity.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <HiCode size={32} />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following industry best practices.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <HiTrendingUp size={32} />,
      title: 'SEO Optimized',
      description: 'Built with SEO in mind to help you rank higher and reach more users.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-transparent" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-black/5 text-gray-900 rounded-full text-[13px] font-medium mb-6 uppercase tracking-[0.1em]"
          >
            Features
          </motion.span>
          <h2 className="text-[28px] md:text-[34px] lg:text-[44px] font-semibold mb-6 leading-[1.2] tracking-[-0.01em]">
            Why Choose <span className="text-gradient">EZ Media</span>
          </h2>
          <p className="text-sm md:text-[15px] lg:text-base text-gray-500 max-w-2xl mx-auto leading-[1.55] font-normal">
            We combine creativity with technology to deliver exceptional digital experiences
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden"
            >
              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${feature.color} text-white mb-8 shadow-sm`}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h4 className="text-[18px] md:text-[20px] lg:text-[22px] font-medium mb-4 text-gray-950 leading-[1.3]">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-[14px] md:text-[15px] lg:text-base leading-[1.55] font-normal">
                {feature.description}
              </p>

              {/* Arrow indicator */}
              <motion.div
                className="mt-6 text-gray-900 text-[14px] font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn more
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
