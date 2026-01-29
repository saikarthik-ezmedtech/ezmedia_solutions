import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Insights = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const insights = [
        {
            category: 'SEO Growth',
            title: 'How Digital Marketing Grows Clinics',
            description: 'Discover how strategic digital presence can transform your clinic\'s patient acquisition. Learn proven SEO techniques, local search optimization, and content strategies that drive consistent patient bookings and revenue growth for healthcare practices.',
            accentColor: 'from-blue-500 to-cyan-500',
            dotColor: 'bg-blue-500',
            hoverBg: 'bg-blue-600',
            textColor: 'text-white'
        },
        {
            category: 'Featured',
            title: 'Advanced SEO Strategies for Doctors & Clinics',
            description: 'Latest 2024 insights on local SEO and medical schema implementation. Explore advanced techniques for ranking higher in Google search results, optimizing your Google Business Profile, and leveraging structured data to attract more qualified patient leads.',
            accentColor: 'from-blue-500 to-cyan-500',
            dotColor: 'bg-blue-500',
            hoverBg: 'bg-indigo-600',
            textColor: 'text-white'
        },
        {
            category: 'AI Trends',
            title: 'AI-Powered Search Solutions for Healthcare',
            description: 'How AI is revolutionizing patient search behavior and clinic discovery. Understand the impact of AI-driven search engines, voice search optimization, and intelligent chatbots on patient engagement and how to adapt your marketing strategy accordingly.',
            accentColor: 'from-blue-500 to-cyan-500',
            dotColor: 'bg-blue-500',
            hoverBg: 'bg-violet-600',
            textColor: 'text-white'
        }
    ];

    return (
        <section className="py-24 bg-transparent text-gray-950">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
                    <h2 className="text-[28px] md:text-[34px] lg:text-[44px] font-semibold max-w-xl leading-[1.2] tracking-[-0.01em]">
                        Healthcare Marketing Insights That Drive Growth
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-900/10 bg-white/50 backdrop-blur-sm hover:bg-black hover:text-white transition-all text-[14px] font-medium tracking-[0.005em]"
                    >
                        Read more <FaArrowRight size={12} />
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {insights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="relative group cursor-pointer h-full"
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className={`p-8 rounded-3xl transition-all duration-500 border-2 flex flex-col justify-between h-full min-h-[380px] ${hoveredIndex === index
                                    ? `${item.hoverBg} shadow-2xl border-transparent`
                                    : 'bg-white/50 backdrop-blur-sm border-white/20 shadow-sm hover:shadow-xl'
                                    }`}
                            >
                                <div>
                                    <div className="flex items-center gap-2 mb-6">
                                        <motion.span
                                            animate={{
                                                scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                                            }}
                                            transition={{ duration: 0.5 }}
                                            className={`w-2 h-2 rounded-full ${item.dotColor}`}
                                        />
                                        <motion.span
                                            animate={{
                                                x: hoveredIndex === index ? 5 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`text-[13px] font-normal uppercase tracking-[0.2em] ${hoveredIndex === index ? 'text-white/80' : 'text-gray-500'
                                                }`}
                                        >
                                            {item.category}
                                        </motion.span>
                                    </div>
                                    <h4 className={`text-[18px] md:text-[20px] lg:text-[22px] font-medium mb-4 leading-[1.3] ${hoveredIndex === index ? item.textColor : 'text-gray-950'
                                        }`}>
                                        {item.title}
                                    </h4>
                                    <p className={`text-[14px] md:text-[15px] lg:text-base leading-[1.55] font-normal mb-8 ${hoveredIndex === index ? 'text-white/90' : 'text-gray-500'
                                        }`}>
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex justify-end">
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: -45 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        aria-label={`Read article about ${item.title}`}
                                        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${hoveredIndex === index
                                            ? `bg-white text-black border-transparent shadow-lg`
                                            : 'border-gray-900/5 bg-white/50 hover:bg-black hover:text-white'
                                            }`}
                                    >
                                        <motion.div
                                            animate={{
                                                x: hoveredIndex === index ? 2 : 0,
                                                y: hoveredIndex === index ? -2 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaArrowRight size={14} />
                                        </motion.div>
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Decorative gradient glow effect on hover */}
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.15 }}
                                    exit={{ opacity: 0 }}
                                    className={`absolute inset-0 -z-10 rounded-3xl blur-3xl bg-blue-500`}
                                    style={{ transform: 'scale(0.9)' }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Insights;
