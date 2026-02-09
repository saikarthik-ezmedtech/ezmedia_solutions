import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: "01",
        anchorId: "creative",
        title: "Creative Wing",
        description: "Focus on content & branding services. We craft compelling narratives and visual identities that resonate with your audience, building lasting brand connections through strategic creative solutions.",
        subServices: [
            "Social Media Management",
            "Campaign Strategy",
            "UGC Scripting",
            "Video Editing"
        ],
        lineWidth: "92%"
    },
    {
        id: "02",
        anchorId: "performance",
        title: "Performance Marketing",
        description: "Focuses on advertising & growth services. We drive measurable results through data-driven strategies, optimizing every campaign for maximum ROI and sustainable business growth.",
        subServices: [
            "Website SEO Optimization",
            "Digital Marketing Strategy Development",
            "Ads across Google, Meta, TikTok, Snapchat, LinkedIn, Bing, Apple",
            "End-to-End Campaign Management (Planning, Setup, Optimization, Tracking ROAS)",
            "AEO & SEO Optimization"
        ],
        lineWidth: "92%"
    },
    {
        id: "03",
        anchorId: "research",
        title: "Research & Engagement",
        description: "Strategic insights & communication. We uncover valuable market intelligence and build meaningful connections with your target audience through comprehensive research and engagement strategies.",
        subServices: [
            "Competitor Research",
            "Target Audience Analysis",
            "Email Campaign Strategy & Execution"
        ],
        lineWidth: "92%"
    },
    {
        id: "04",
        anchorId: "content",
        title: "Content Production",
        description: "High-quality visual storytelling. We produce professional video and photo content that captures your brand's essence and engages your audience across all digital platforms.",
        subServices: [
            "Professional Photoshoots",
            "High-End Video Production",
            "Motion Graphics & Effects",
            "Post-Production Excellence"
        ],
        lineWidth: "92%"
    }
];

const ServiceItem = ({ service, isActive, onHover, index }) => {
    return (
        <div
            id={service.anchorId}
            className="relative group/item cursor-pointer scroll-mt-32"
            onMouseEnter={() => onHover(service.id)}
        >
            {/* White Line Separator */}
            <motion.div
                className="h-[1px] bg-white/20 mx-auto pointer-events-none"
                style={{ width: service.lineWidth }}
                initial={{ width: 0 }}
                whileInView={{ width: service.lineWidth }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
            />

            <motion.div
                animate={{
                    backgroundColor: isActive ? "#ffffff" : "rgba(2, 22, 18, 0)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative py-6 md:py-8 overflow-hidden"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    {/* Header Row (Always visible, fades out on hover) */}
                    <AnimatePresence>
                        {!isActive && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center justify-between"
                            >
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase tracking-tight text-white/80 group-hover/item:text-white transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <div className="hidden md:flex w-6 h-6 rounded-full border-2 border-white/20 items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white/40" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Expanded Content View */}
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                className="relative overflow-hidden"
                            >
                                {/* Arrow Icon - Top Right */}
                                <div className="absolute top-0 right-0">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="text-[#021612]"
                                    >
                                        <path
                                            d="M7 17L17 7M17 7H7M17 7V17"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 pr-12 pt-2 pb-2">
                                    {/* Large Title - Left Side */}
                                    <motion.h3
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="text-2xl md:text-4xl lg:text-5xl font-medium uppercase tracking-tight text-[#021612] flex-shrink-0 md:w-2/5"
                                    >
                                        {service.title}
                                    </motion.h3>

                                    {/* Description - Right Side */}
                                    <motion.div
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.15 }}
                                        className="flex-1"
                                    >
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light mt-1">
                                            {service.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    const handleServiceHover = (id) => {
        setActiveService(id);
    };

    return (
        <section
            className="relative pt-0 pb-12 bg-[#020504] overflow-hidden"
            id="services"
        >
            {/* Animated Background Pattern - Madison Style */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <motion.div
                    className="absolute top-0 right-0 w-[500px] h-[500px]"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="w-full h-full" style={{
                        backgroundImage: `repeating-conic-gradient(
                            from 0deg,
                            transparent 0deg 10deg,
                            rgba(129, 188, 101, 0.1) 10deg 20deg
                        )`
                    }} />
                </motion.div>
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Section Header */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 md:mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="w-12 h-[2px] bg-[#81BC65] mb-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white/90 uppercase tracking-tighter">
                        What We Do
                    </h2>
                </motion.div>
            </div>

            {/* Services Accordion */}
            <div
                className="relative z-10"
                onMouseLeave={() => handleServiceHover(null)}
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
