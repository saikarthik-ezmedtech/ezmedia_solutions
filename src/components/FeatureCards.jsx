import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiThumbsUp, FiActivity, FiBarChart } from 'react-icons/fi';

const FeatureCard = ({ icon, title, description, colorClass, iconColor }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="bg-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center group transition-all duration-500 h-full border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-300/50"
    >
        <div className={`w-14 h-14 sm:w-20 sm:h-20 ${colorClass} rounded-full flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500`}>
            <div className={`text-2xl sm:text-3xl ${iconColor}`}>
                {icon}
            </div>
        </div>
        <h4 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h4>
        <p className="text-gray-500 leading-relaxed max-w-[280px] text-sm sm:text-base">
            {description}
        </p>
    </motion.div>
);

const FeatureCards = () => {
    const features = [
        {
            icon: <FiTrendingUp />,
            title: "Performance Marketing",
            description: "Drive measurable growth and increase conversions with data-driven Meta and Google ad campaigns.",
            colorClass: "bg-blue-50",
            iconColor: "text-blue-500"
        },
        {
            icon: <FiActivity />,
            title: "SEO + AEO + GEO",
            description: "Own search rankings and AI-driven discovery with strategic SEO that drives qualified, high-intent traffic.",
            colorClass: "bg-emerald-50",
            iconColor: "text-emerald-500"
        },
        {
            icon: <FiThumbsUp />,
            title: "Social Media Strategy",
            description: "Dominate social platforms with scroll-stopping content and data-backed strategies.",
            colorClass: "bg-pink-50",
            iconColor: "text-pink-500"
        },
        {
            icon: <FiBarChart />,
            title: "Reporting & Analysis",
            description: "Get crystal clear insights into your performance with our detailed reporting systems.",
            colorClass: "bg-amber-50",
            iconColor: "text-amber-500"
        }
    ];

    return (
        <section className="pt-8 pb-16 sm:pb-24 relative z-10 bg-transparent">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
