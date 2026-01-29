import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <section className="py-20 bg-[#f5f5f5]">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="max-w-4xl mx-auto text-center">
                    <FaQuoteLeft className="text-4xl text-primary-300 mx-auto mb-8" />

                    <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed mb-12">
                        "Ezmedia solutions completely transformed our patient acquisition system. Their SEO, ads, and AI automation helped us scale faster than any previous agency."
                    </h2>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                                alt="Dr. Ramesh Kumar"
                                className="w-16 h-16 rounded-full object-cover border-2 border-white"
                            />
                            <div className="text-left">
                                <h4 className="font-bold text-lg">Dr. Ramesh Kumar</h4>
                                <p className="text-gray-500 text-sm">Founder, Prime Dental Care</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                <FaChevronLeft />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
