import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "Ezmedia solutions completely transformed our patient acquisition system. Their SEO, ads, and AI automation helped us scale faster than any previous agency.",
            name: "Dr. Ramesh Kumar",
            position: "Founder, Prime Dental Care",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            quote: "Their data-driven approach to healthcare marketing is unmatched. We've seen a 300% increase in qualified patient leads within just 4 months of working with Ezmedia.",
            name: "Dr. Priya Sharma",
            position: "CEO, HealthFirst Medical Group",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            quote: "The ROI we've achieved with Ezmedia's strategies is exceptional. Their team understands the healthcare industry deeply and delivers results that matter.",
            name: "Dr. Vikram Patel",
            position: "Director, Advanced Dental Clinic",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2064&auto=format&fit=crop"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section id="solutions" className="py-24 bg-transparent text-gray-950">
            <div className="container mx-auto px-6 lg:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center p-12 lg:p-20 bg-white/50 backdrop-blur-sm rounded-[3rem] border border-white/20 shadow-sm"
                >
                    <FaQuoteLeft className="text-4xl text-black/10 mx-auto mb-10" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-[22px] md:text-[26px] lg:text-[32px] font-semibold leading-[1.25] tracking-[-0.005em] mb-12">
                                "{currentTestimonial.quote}"
                            </h3>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex items-center gap-4 text-left">
                                    <img
                                        src={currentTestimonial.image}
                                        alt={currentTestimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                    <div>
                                        <h4 className="text-[18px] md:text-[20px] font-medium text-gray-950 leading-[1.3]">{currentTestimonial.name}</h4>
                                        <p className="text-gray-500 text-[13px] font-normal leading-[1.5]">{currentTestimonial.position}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleNext}
                                        className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg"
                                    >
                                        <FaChevronRight size={16} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-black w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;
