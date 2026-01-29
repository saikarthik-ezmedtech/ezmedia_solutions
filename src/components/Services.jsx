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
    <section id="services" className="py-24 bg-transparent relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-primary-200/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-purple-200/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
            Our Services
          </motion.span>
          <h2 className="text-[28px] md:text-[34px] lg:text-[44px] font-semibold mb-6 leading-[1.2] tracking-[-0.01em]">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-sm md:text-[15px] lg:text-base text-gray-500 max-w-2xl mx-auto leading-[1.55] font-normal">
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
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/20 h-full">
                {/* Icon */}
                <motion.div
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${service.gradient} text-white mb-8 shadow-sm`}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h4 className="text-[18px] md:text-[20px] lg:text-[22px] font-medium mb-4 text-gray-950 leading-[1.3]">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-[14px] md:text-[15px] lg:text-base leading-[1.55] mb-8 font-normal">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[13px] text-gray-500 font-normal">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`text-[14px] font-medium tracking-[0.005em] uppercase-none text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} flex items-center gap-2 group-hover:gap-3 transition-all duration-300`}
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
