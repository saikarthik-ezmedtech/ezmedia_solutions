import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import WordReveal from './WordReveal';

const StatsSection = () => {
    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
                    <ScrollReveal>
                        <h2 className="text-[26px] md:text-[30px] lg:text-[38px] font-semibold mb-6 leading-[1.2] tracking-[-0.01em]">
                            Providing growth solutions for clinics <br />
                            — not just marketing services
                        </h2>
                    </ScrollReveal>
                    <div>
                        <WordReveal
                            className="text-sm md:text-[15px] lg:text-base text-gray-500 leading-[1.55] font-normal"
                            text="Our comprehensive approach to healthcare marketing ensures that you not only get leads but also convert them into loyal patients. We combine SEO, paid ads, and automated patient support systems."
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8">
                    {/* Stats Card - Narrower - Wrapper with padding */}
                    <div className="relative pb-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-black rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden min-h-[300px] md:min-h-[350px] flex flex-col justify-center shadow-2xl"
                        >
                            {/* Bubble background graphic */}
                            <div className="absolute inset-0 opacity-40">
                                <img src="/assets/bubbles_bg.png" alt="Decorative bubbles background" loading="lazy" className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-300/5 rounded-full blur-[100px] -mr-24 -mt-24"></div>

                            <div className="relative z-10 space-y-6">
                                <div>
                                    <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white mb-2 md:mb-4 tracking-tighter leading-[1.1]">920<span className="text-primary-300">+</span></h3>
                                    <p className="text-gray-400 font-normal text-sm md:text-base leading-[1.55]">Successful growth campaigns delivered</p>
                                </div>

                                <div className="flex gap-5 justify-start items-center pt-4">
                                    {[
                                        '/assets/image.png',
                                        '/assets/image copy.png',
                                        '/assets/image copy 3.png',
                                        '/assets/image copy 2.png',
                                        '/assets/image copy 6.png'
                                    ].map((iconSrc, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            className="transition-all cursor-pointer"
                                        >
                                            <img
                                                src={iconSrc}
                                                alt={`Partner clinic logo ${index + 1}`}
                                                loading="lazy"
                                                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                                                style={{ mixBlendMode: 'normal' }}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* How We Work Card - Wider - Wrapper with padding */}
                    <div className="relative lg:mr-8">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-black rounded-[3rem] p-12 text-white relative min-h-[350px] flex items-center justify-center group shadow-2xl"
                        >
                            {/* Network Background Image */}
                            <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity rounded-[3rem] overflow-hidden">
                                <img src="/assets/image copy 4.png" alt="" className="w-full h-full object-cover" />
                            </div>

                            {/* Gradient Overlay - dark to green */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-green-900/40 rounded-[3rem]"></div>

                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.1em] md:tracking-[0.25em] z-10 text-center">HOW WE WORK</h3>

                            {/* Play Button with White Ring - Stuck to the corner */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 cursor-pointer z-20"
                            >
                                {/* White outer ring */}
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
                                    {/* Green inner circle with play button image */}
                                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary-300 flex items-center justify-center">
                                        <img src="/assets/image copy 5.png" alt="play button" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default StatsSection;
