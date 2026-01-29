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
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
          >
            Features
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">EZ Media</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-primary-500 to-purple-500"></div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg`}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Arrow indicator */}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="mt-4 text-primary-600 font-semibold flex items-center gap-2"
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
