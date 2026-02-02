import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "EzMedia transformed our patient acquisition. We saw 300% ROI in just 3 months.",
            author: "Dr. Sarah Johnson",
            role: "Ortho Care Dental",
            rating: 5
        },
        {
            quote: "Their AI automation system handles our bookings 24/7. Game changer for our practice.",
            author: "Dr. Michael Chen",
            role: "Family Health Clinic",
            rating: 5
        },
        {
            quote: "Finally, a marketing agency that understands healthcare. Results speak for themselves.",
            author: "Dr. Emily Rodriguez",
            role: "Wellness Medical Center",
            rating: 5
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-white border-t border-gray-100" id="testimonials">
            <div className="container mx-auto px-6 lg:px-12 max-w-[1440px]">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xs font-black text-[#00C853] uppercase tracking-[0.4em] mb-4"
                    >
                        Testimonials
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-gray-900"
                    >
                        What Clients Say
                    </motion.h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 md:p-10 relative hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 rounded-xl"
                        >
                            <div className="flex gap-1 mb-6 text-[#00C853]">
                                {[...Array(item.rating)].map((_, i) => (
                                    <span key={i} className="text-lg">★</span>
                                ))}
                            </div>
                            <p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">
                                "{item.quote}"
                            </p>
                            <div>
                                <p className="font-black text-base uppercase tracking-wide mb-1 text-gray-900">
                                    {item.author}
                                </p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
