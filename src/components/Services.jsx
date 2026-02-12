import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        id: "01",
        anchorId: "creative-wing",
        title: "CREATIVE WING",
        description: "Our Creative Wing focuses on content and branding services that elevate your brand's presence across digital platforms with compelling storytelling and strategic content creation.",
        link: "#",
        subServices: [
            "Social Media Management",
            "Campaign Strategy",
            "UGC Scripting",
            "Video Editing"
        ]
    },
    {
        id: "02",
        anchorId: "performance-marketing",
        title: "PERFORMANCE MARKETING",
        description: "Our Performance Marketing division focuses on advertising and growth services, delivering measurable results through data-driven strategies and multi-platform campaign excellence.",
        link: "#",
        subServices: [
            "Website SEO Optimization",
            "Digital Marketing Strategy Development",
            "Ads across Google, Meta, TikTok, Snapchat, LinkedIn, Bing, Apple",
            "End-to-End Campaign Management (Planning, Setup, Optimization, Tracking ROAS)",
            "AEO & SEO Optimization"
        ]
    },
    {
        id: "03",
        anchorId: "research-engagement",
        title: "RESEARCH & ENGAGEMENT",
        description: "Our Research & Engagement team provides deep market insights and audience understanding to inform strategic decisions and maximize campaign effectiveness.",
        link: "#",
        subServices: [
            "Competitor Research",
            "Target Audience Analysis"
        ]
    }
];

const ServiceItem = ({ service, isActive, onHover, index }) => {
    return (
        <div
            id={service.anchorId}
            className="relative group/item cursor-pointer"
            onMouseEnter={() => onHover(service.id)}
        >
            {/* White Line Separator - Full Container Width */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
                <div className="h-[1px] bg-white/20 w-full" />
            </div>

            <motion.div
                animate={{
                    backgroundColor: isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="relative overflow-hidden transition-all duration-200"
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 py-8 sm:py-10 md:py-12 min-h-[120px] sm:min-h-[150px] flex flex-col justify-center">

                    {/* Collapsed View (Title Only) */}
                    {!isActive && (
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-wider text-white">
                                {service.title}
                            </h3>
                        </div>
                    )}

                    {/* Expanded Content View */}
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full"
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8 md:gap-16">
                                {/* Large Title */}
                                <motion.h3
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="text-2xl sm:text-4xl md:text-6xl font-medium uppercase tracking-tight text-[#021612] flex-shrink-0 md:w-1/3"
                                >
                                    {service.title}
                                </motion.h3>

                                {/* Description and CTA */}
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.15 }}
                                    className="flex-1 flex flex-col items-start gap-8"
                                >
                                    <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-light font-primary max-w-2xl">
                                        {service.description}
                                    </p>

                                    {/* Arrow Button */}
                                    <div className="relative w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#021612] transition-colors">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-[#E30613] -rotate-45"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

const Services = () => {
    const [activeService, setActiveService] = useState(null);
    const timeoutRef = useRef(null);

    const handleServiceHover = (id) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setActiveService(id);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setActiveService(null);
    };

    return (
        <section
            className="relative pt-16 sm:pt-24 pb-1 sm:pb-2 bg-[#020504] overflow-hidden"
            id="services"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #111 0px, #111 1px, transparent 1px, transparent 10px)`
                }} />
            </div>

            {/* Section Header */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white uppercase tracking-tighter mb-4">
                        What We Do
                    </h2>
                </motion.div>
            </div>

            {/* Services Accordion */}
            <div
                className="relative z-10 w-full"
                onMouseLeave={handleMouseLeave}
            >
                {services.map((service, index) => (
                    <ServiceItem
                        key={service.id}
                        service={service}
                        index={index}
                        isActive={activeService === service.id}
                        onHover={handleServiceHover}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
