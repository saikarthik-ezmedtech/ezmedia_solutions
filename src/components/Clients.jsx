import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const Clients = () => {
    const logos = [
        "/logos/Alpha OBGYN Logo HiRes (1)_page-0001.jpg",
        "/logos/ezmedtech.jpeg",
        "/logos/Image (2).jpeg",
        "/logos/Image (3).jpeg",
        "/logos/Image (4).jpeg",
        "/logos/Image (5).jpeg"
    ];

    // Duplicate logos for seamless infinite loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="py-12 sm:py-20 bg-white relative overflow-hidden" id="clients">
            <div className="container mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 sm:mb-6">
                        Trusted by industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">leaders</span>
                    </h2>
                </motion.div>
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

                <Marquee gradient={false} speed={60} pauseOnHover={false} className="py-4">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="mx-10 group transition-all duration-300">
                            <img
                                src={logo}
                                alt={`Client Logo ${index + 1}`}
                                className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Clients;
