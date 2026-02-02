import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Insights = () => {
    const [page, setPage] = useState(0);
    const itemsPerPage = 4;

    const newsItems = [
        {
            id: 1,
            title: "AI-Driven Patient Scheduling: How Local Clinics Reduced No-Shows by 45% in Q1",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
            category: "REPORT",
            action: "READ STUDY",
            link: "#"
        },
        {
            id: 2,
            title: "The Future of Digital Health: EzMedia's New 'Growth-First' Algorithm for Dental Practices",
            image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
            category: "NEWS",
            action: "VIEW ARTICLE",
            link: "#"
        },
        {
            id: 3,
            title: "Scaling Your Practice: The ROI of Automated Patient Engagement Systems in 2026",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
            category: "INSIGHTS",
            action: "DOWNLOAD PDF",
            link: "#"
        },
        {
            id: 4,
            title: "EzMedia Wins 'Best Healthcare AI Solution' at the Global Digital Excellence Awards",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
            category: "AWARDS",
            action: "READ MORE",
            link: "#"
        },
        {
            id: 5,
            title: "Podcast: Dr. Sarah Chen on integrating AI tools without losing the human touch",
            image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=80&w=800",
            category: "PODCAST",
            action: "LISTEN NOW",
            link: "#"
        },
        {
            id: 6,
            title: "2026 Healthcare Marketing Trends Report: Video is King",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            category: "TRENDS",
            action: "GET REPORT",
            link: "#"
        }
    ];

    const totalPages = Math.ceil(newsItems.length / itemsPerPage);
    const displayedItems = newsItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    const nextSlide = () => {
        setPage((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section
            className="py-12 md:py-16 bg-white relative overflow-hidden"
            id="insights"
        >
            <div className="container mx-auto px-6 max-w-[1440px]">
                {/* Visible Section Header */}
                <h2 className="text-6xl md:text-[8rem] font-black text-gray-200 uppercase mb-5 leading-none tracking-tighter opacity-80" style={{ transform: 'translate3d(-8.5px, 0, 0)' }}>NEWS</h2>

                {/* Header Controls */}
                <div className="flex justify-between items-center mb-12">
                    {/* Counter */}
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-[#00C853]">{page + 1}</span>
                        <span className="text-xl text-gray-300">/</span>
                        <span className="text-xl text-gray-400">{totalPages}</span>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#00C853] hover:text-white transition-all group"
                        >
                            <HiArrowLeft size={18} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#00C853] hover:text-white transition-all group"
                        >
                            <HiArrowRight size={18} />
                        </button>
                        <div className="ml-4 flex items-center gap-2">
                            <span className="text-xs font-black tracking-widest text-[#00C853] uppercase">VIEW ALL</span>
                            <div className="w-8 h-[1px] bg-[#00C853]/30" />
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative z-10">
                    <AnimatePresence mode="wait">
                        {displayedItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex flex-col"
                            >
                                <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                                    <img
                                        src={item.image}
                                        alt="News"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <p className="text-sm font-medium text-gray-800 leading-relaxed mb-8 flex-1">
                                    {item.title}
                                </p>
                                <a
                                    href={item.link}
                                    className="flex items-center gap-3 group/link"
                                >
                                    <span className="text-[10px] font-black tracking-[0.2em] text-[#00C853] uppercase">
                                        {item.action}
                                    </span>
                                    <div className="w-6 h-6 rounded-full border border-[#00C853]/20 flex items-center justify-center group-hover/link:bg-[#00C853] transition-all">
                                        <HiArrowRight className="text-[#00C853] group-hover/link:text-white" size={12} />
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Parallax Background Ghost Text */}
                <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ x: 100 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute -bottom-10 left-0 w-full pointer-events-none select-none -z-10 overflow-hidden"
                >
                    <h2 className="text-[12rem] md:text-[20rem] font-black text-[#f0f0f0]/80 uppercase leading-none tracking-tighter whitespace-nowrap">
                        NEWS
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default Insights;
