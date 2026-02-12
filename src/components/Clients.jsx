import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const Clients = () => {
    const logos = [
        "/l1-/alphaOBG.svg",
        "/l1-/ezmedtech.svg",
        "/l1-/aspire.svg",
        "/l1-/yanthraa.svg",
        "/l1-/brightcone.svg",
        "/l1-/wecare.svg"
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
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">CLIENTS</span>
                    </h2>
                </motion.div>
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

                <Marquee gradient={false} speed={80} pauseOnHover={false} className="py-2">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="mx-6 md:mx-8 group transition-all duration-300 flex items-center justify-center w-40 md:w-56 h-16 md:h-24">
                            <motion.img
                                src={logo}
                                alt={`Client Logo ${index + 1}`}
                                whileHover={{ scale: 1.25, zIndex: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="max-h-full max-w-full w-auto h-auto object-contain opacity-100 cursor-pointer"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Clients;
