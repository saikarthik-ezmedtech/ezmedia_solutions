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
                <div className="max-w-xl mx-auto relative flex flex-col items-start justify-start min-h-[350px] sm:min-h-[400px]">

                    {/* Content Block */}
                    <div className="relative z-10 flex flex-col items-start text-left w-full pt-12 sm:pt-20">
                        {/* Floating Quote Icon - Aligned Left */}
                        <div className="absolute top-4 -left-2 sm:-left-6 opacity-10 text-white pointer-events-none">
                            <img src="/assets/d.svg" alt="quote" className="w-[80px] h-[60px] sm:w-[120px] sm:h-[90px]" />
                        </div>

                        {/* Static Header Elements */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-white/80 font-medium uppercase tracking-[0.3em] text-xs mb-2 relative z-20 max-w-2xl"
                        >
                            Testimonials
                        </motion.p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 tracking-tight capitalize relative z-20 max-w-2xl">
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
                                    <p className="text-base md:text-lg lg:text-xl text-white/90 font-normal italic leading-relaxed mb-6 max-w-2xl whitespace-pre-line text-left">
                                        {testimonials[activeIndex].quote}
                                    </p>

                                    <div className="mt-2 max-w-2xl text-left">
                                        <p className="text-white font-bold uppercase tracking-widest text-lg">
                                            {testimonials[activeIndex].author}
                                        </p>
                                        <p className="text-white/40 font-medium uppercase tracking-[0.2em] text-xs mt-1">
                                            {testimonials[activeIndex].role}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Custom Dots Navigation - Aligned Left */}
                    <div className="absolute bottom-10 left-0 flex justify-start gap-4">
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
