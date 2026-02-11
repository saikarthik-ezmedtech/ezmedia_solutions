import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import WordReveal from './WordReveal';

const StatsSection = () => {
    return (
        <section className="py-24 bg-white border-b border-black">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
                    <ScrollReveal>
                        <h2 className="text-madison-black mb-6">
                            Solutions for <br />
                            <span className="text-madison-red">momentum</span> <br />
                            — not just service
                        </h2>
                    </ScrollReveal>
                    <div>
                        <WordReveal
                            className="text-gray-500 text-lg leading-relaxed font-light"
                            text="Our approach to digital growth ensures that brands don't just exist; they dominate. We combine high-end creativity with data-driven strategy to set new industry benchmarks."
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8">
                    {/* Stats Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-black p-12 text-white relative overflow-hidden flex flex-col justify-center border border-black"
                    >
                        <div className="relative z-10 space-y-6">
                            <div>
                                <h3 className="text-6xl md:text-8xl font-black text-white mb-4 leading-none">920<span className="text-madison-red">+</span></h3>
                                <p className="text-gray-400 font-bold text-xs tracking-widest uppercase">CAMPAIGNS DELIVERED</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* How We Work Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-madison-red p-12 text-white relative min-h-[350px] flex items-center justify-center group overflow-hidden"
                    >
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter z-10 text-center">HOW WE <br /> SCALE BRANDS</h3>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute bottom-8 right-8 cursor-pointer z-20 w-16 h-16 bg-white flex items-center justify-center"
                        >
                            <span className="text-madison-red font-black text-2xl italic">PLAY</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
