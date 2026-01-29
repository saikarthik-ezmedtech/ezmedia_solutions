import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudies = () => {
    const [activeTab, setActiveTab] = useState('All');
    const scrollRef = useRef(null);

    const tabs = ['All', 'Dental Clinics', 'Medical Clinics', 'SEO Growth', 'Ads Performance', 'ROI Growth'];

    const allProjects = [
        {
            id: 1,
            title: 'Dental Clinic 2024',
            category: 'Dental Clinics',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
            result: 'Patient Booking System'
        },
        {
            id: 2,
            title: 'Medical Center 2023',
            category: 'Medical Clinics',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
            result: 'Local SEO Optimization'
        },
        {
            id: 3,
            title: 'Ortho Care',
            category: 'Dental Clinics',
            image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
            result: '300% ROI on Ads'
        },
        {
            id: 4,
            title: 'Family Health Clinic',
            category: 'Medical Clinics',
            image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop',
            result: '250% Patient Growth'
        },
        {
            id: 5,
            title: 'Cosmetic Dental Spa',
            category: 'Dental Clinics',
            image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2074&auto=format&fit=crop',
            result: '400% Appointment Increase'
        },
        {
            id: 6,
            title: 'Wellness Clinic',
            category: 'SEO Growth',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
            result: '180% Revenue Boost'
        },
        {
            id: 7,
            title: 'Pediatric Dental',
            category: 'Ads Performance',
            image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop',
            result: '500% Ad ROI'
        },
        {
            id: 8,
            title: 'Specialty Clinic',
            category: 'ROI Growth',
            image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2064&auto=format&fit=crop',
            result: '350% Growth in 6 Months'
        }
    ];

    // Filter projects based on active tab
    const filteredProjects = activeTab === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === activeTab);

    // Auto-scroll effect with super smooth animation
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let isUserInteracting = false;
        const scrollSpeed = 2; // Pixels per frame - increased for faster scrolling

        // Pause auto-scroll when user is scrolling
        const handleUserScroll = () => {
            isUserInteracting = true;
            clearTimeout(scrollContainer.userScrollTimeout);
            scrollContainer.userScrollTimeout = setTimeout(() => {
                isUserInteracting = false;
            }, 2000); // Resume auto-scroll 2 seconds after user stops
        };

        const handleMouseEnter = () => {
            isUserInteracting = true;
        };

        const handleMouseLeave = () => {
            isUserInteracting = false;
        };

        scrollContainer.addEventListener('wheel', handleUserScroll);
        scrollContainer.addEventListener('touchstart', handleUserScroll);
        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        const autoScroll = setInterval(() => {
            if (!isUserInteracting && scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed;

                // Reset to beginning for infinite loop
                const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                if (scrollContainer.scrollLeft >= maxScroll) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        }, 16); // ~60fps for super smooth animation

        return () => {
            clearInterval(autoScroll);
            scrollContainer.removeEventListener('wheel', handleUserScroll);
            scrollContainer.removeEventListener('touchstart', handleUserScroll);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [filteredProjects.length]);

    return (
        <section id="case-studies" className="py-20 bg-black text-white overflow-hidden relative">
            {/* Bubble background */}
            <div className="absolute inset-0 opacity-20">
                <img src="/assets/bubbles_bg.png" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                <div className="mb-12">
                    <h2 className="text-[28px] md:text-[34px] lg:text-[44px] font-semibold mb-8 text-center leading-[1.2] tracking-[-0.01em]">
                        Real-world results from clinics we've helped scale
                    </h2>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Filter by ${tab}`}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 text-[14px] font-medium tracking-[0.005em] ${activeTab === tab
                                    ? 'bg-primary-300 text-black border-primary-300'
                                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'
                                    }`}
                            >
                                {tab}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide scroll-smooth"
                        style={{
                            scrollBehavior: 'smooth',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        {/* Intro Circle Card */}
                        <div className="min-w-[300px] h-[400px] rounded-3xl border border-dark-700 flex items-center justify-center relative shrink-0 group cursor-pointer overflow-hidden">
                            <div className="relative z-10 w-32 h-32 rounded-full bg-primary-300 flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform duration-300">
                                See Details
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dark-600 rounded-full opacity-30"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dark-700 rounded-full opacity-20"></div>
                        </div>

                        {/* Project Cards - Duplicated for seamless loop */}
                        <AnimatePresence mode="popLayout">
                            {[...filteredProjects, ...filteredProjects].map((project, index) => (
                                <motion.div
                                    key={`${project.id}-${index}-${activeTab}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    whileHover={{ y: -10 }}
                                    className="min-w-[350px] h-[400px] rounded-3xl relative overflow-hidden shrink-0 group cursor-pointer"
                                >
                                    <img
                                        src={project.image}
                                        alt={`Case study for ${project.title}`}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-[13px] border border-white/10 font-normal">
                                        {project.title}
                                    </div>

                                    <div className="absolute bottom-8 left-8 right-8">
                                        <h3 className="text-[22px] md:text-[26px] lg:text-[32px] font-semibold mb-2 leading-[1.25] tracking-[-0.005em]">{project.result}</h3>
                                        <div className="h-1 w-0 bg-primary-300 group-hover:w-full transition-all duration-500"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CaseStudies;
