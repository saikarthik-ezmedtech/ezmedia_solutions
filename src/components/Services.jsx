import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiDesktopComputer, HiDeviceMobile, HiShoppingCart, HiLightningBolt, HiPencilAlt, HiChartBar } from 'react-icons/hi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <HiDesktopComputer size={40} />,
      title: 'Web Development',
      description: 'Custom websites built with cutting-edge technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Ready'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <HiDeviceMobile size={40} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive results.',
      features: ['iOS & Android', 'React Native', 'Cloud Integration'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <HiShoppingCart size={40} />,
      title: 'E-Commerce',
      description: 'Powerful online stores with seamless checkout experiences and robust backend systems.',
      features: ['Payment Gateway', 'Inventory Management', 'Analytics'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: <HiLightningBolt size={40} />,
      title: 'Performance',
      description: 'Speed optimization and performance tuning to ensure your site loads in milliseconds.',
      features: ['Core Web Vitals', 'CDN Setup', 'Caching'],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <HiPencilAlt size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that put user experience first and drive engagement.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: <HiChartBar size={40} />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and reach your target audience.',
      features: ['SEO Strategy', 'Social Media', 'Analytics'],
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300`}
                >
                  Learn More
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
