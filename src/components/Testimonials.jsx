import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            quote: "EzMedia transformed our patient acquisition.\nWe saw 300% ROI in just 3 months.",
            author: "Dr. Sarah Johnson",
            role: "Ortho Care Dental"
        },
        {
            quote: "Their AI automation system handles our bookings 24/7.\nGame changer for our practice.",
            author: "Dr. Michael Chen",
            role: "Family Health Clinic"
        },
        {
            quote: "Finally, a marketing agency that understands healthcare.\nResults speak for themselves.",
            author: "Dr. Emily Rodriguez",
            role: "Wellness Medical Center"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="relative h-[500px] sm:h-[600px] md:h-[700px] w-full flex items-center justify-center overflow-hidden" id="testimonials">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/assets/testimonial bg.svg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto relative flex flex-col items-start justify-start min-h-[350px] sm:min-h-[400px]">

                    {/* Content Block */}
                    <div className="relative z-10 flex flex-col items-start text-left w-full pt-12 sm:pt-20">
                        {/* Floating Quote Icon - Aligned Left */}
                        <div className="absolute top-4 -left-2 sm:-left-6 opacity-10 text-white pointer-events-none">
                            <svg width="80" height="60" className="sm:w-[120px] sm:h-[90px]" viewBox="0 0 80 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.8571 0C10.2857 0 0 10.2857 0 22.8571V57.1429H34.2857V22.8571H11.4286C11.4286 16.5714 16.5714 11.4286 22.8571 11.4286V0ZM71.4286 0C58.8571 0 48.5714 10.2857 48.5714 22.8571V57.1429H82.8571V22.8571H60C60 16.5714 65.1429 11.4286 71.4286 11.4286V0Z" />
                            </svg>
                        </div>

                        {/* Static Header Elements */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-white/80 font-bold uppercase tracking-[0.3em] text-xs mb-2 relative z-20 max-w-2xl"
                        >
                            Testimonials
                        </motion.p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 tracking-tight capitalize relative z-20 max-w-2xl">
                            What People Say
                        </h2>

                        {/* Animated Quote Content */}
                        <div className="relative min-h-[160px] sm:min-h-[200px] w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="flex flex-col items-start absolute top-0 left-0 w-full"
                                >
                                    <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium italic leading-relaxed mb-6 max-w-2xl whitespace-pre-line">
                                        "{testimonials[activeIndex].quote}"
                                    </p>

                                    <div className="mt-2 max-w-2xl">
                                        <p className="text-white font-black uppercase tracking-widest text-lg">
                                            {testimonials[activeIndex].author}
                                        </p>
                                        <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs mt-1">
                                            {testimonials[activeIndex].role}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Custom Dots Navigation - Centered at the bottom */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center gap-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className="group relative py-4"
                            >
                                <div className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === index ? 'w-12 bg-white' : 'w-4 bg-white/20 group-hover:bg-white/40'}`} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
