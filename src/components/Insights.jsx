import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Insights = () => {
    const insights = [
        {
            category: 'SEO Growth',
            title: 'How Digital Marketing Grows Clinics',
            description: 'Discover how strategic digital presence can transform your clinic\'s patient acquisition.',
            color: 'bg-blue-500'
        },
        {
            category: 'Featured',
            title: 'Advanced SEO Strategies for Doctors & Clinics',
            description: 'Latest 2024 insights on local SEO and medical schema implementation.',
            color: 'bg-orange-500'
        },
        {
            category: 'AI Trends',
            title: 'AI-Powered Search Solutions for Healthcare',
            description: 'How AI is revolutionizing patient search behavior and clinic discovery.',
            color: 'bg-purple-500'
        }
    ];

    return (
        <section className="py-20 bg-[#f5f5f5]">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-bold max-w-md">
                        Healthcare Marketing Insights That Drive Growth
                    </h2>
                    <button className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors">
                        Read more <FaArrowRight size={12} />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {insights.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[300px]"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item.category}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                    <FaArrowRight size={12} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Insights;
