import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CaseStudies = () => {
    const [activeTab, setActiveTab] = useState('Dental Clinics');

    const tabs = ['All', 'Dental Clinics', 'Medical Clinics', 'SEO Growth', 'Ads Performance', 'ROI Growth'];

    const projects = [
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
        }
    ];

    return (
        <section className="py-20 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
                        Real-world results from clinics we've helped scale
                    </h2>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeTab === tab
                                        ? 'bg-primary-300 text-black border-primary-300 font-medium'
                                        : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="flex gap-8 overflow-x-auto pb-8 snap-x hide-scrollbar">
                        {/* Intro Circle Card */}
                        <div className="min-w-[300px] h-[400px] rounded-3xl bg-dark-800 border border-dark-700 flex items-center justify-center relative shrink-0 snap-center group cursor-pointer overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-black"></div>
                            <div className="relative z-10 w-32 h-32 rounded-full bg-primary-300 flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform duration-300">
                                See Details
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dark-600 rounded-full opacity-30"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dark-700 rounded-full opacity-20"></div>
                        </div>

                        {/* Project Cards */}
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                whileHover={{ y: -10 }}
                                className="min-w-[350px] h-[400px] rounded-3xl relative overflow-hidden shrink-0 snap-center group cursor-pointer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-xs border border-white/10">
                                    {project.title}
                                </div>

                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="text-2xl font-bold mb-2">{project.result}</h3>
                                    <div className="h-1 w-0 bg-primary-300 group-hover:w-full transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CaseStudies;
