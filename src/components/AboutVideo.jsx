import React from 'react';
import { motion } from 'framer-motion';

const AboutVideo = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#F5F5F7] overflow-hidden relative">
            {/* Background Text Decor */}
            <div className="absolute top-0 right-0 text-[20rem] font-black text-black/[0.02] leading-none select-none pointer-events-none translate-x-20 -translate-y-20">
                WORK
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">
                            Smart <span className="text-secondary-500">Marketing</span> Systems.<br />
                            Better <span className="text-primary-500">Patient</span> Growth.
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            We don't just run ads. We build AI-powered marketing infrastructure that turns your clinic into a predictable growth machine. From data-driven SEO to conversion-optimized outreach.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div>
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center border border-white">
                                            <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                        </div>
                                    ))}
                                </div>
                                <h4 className="text-4xl font-black text-madison-red mb-1">920+</h4>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Growth Campaigns</p>
                            </div>
                            <div>
                                <div className="w-12 h-6 bg-accent-color/10 rounded-full flex items-center px-1 mb-2">
                                    <div className="w-4 h-4 rounded-full bg-accent-color flex items-center justify-center">
                                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                                    </div>
                                    <span className="text-[8px] font-bold text-accent-color ml-2">TRENDING</span>
                                </div>
                                <h4 className="text-4xl font-black text-madison-red mb-1">230%</h4>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Avg. ROI Boost</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer relative">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                                alt="Healthcare Innovation"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-madison-red/20 group-hover:bg-madison-red/40 transition-colors flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                                >
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-madison-red border-b-[12px] border-b-transparent ml-2"></div>
                                </motion.div>
                            </div>

                            {/* Floating Card UI Element */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center text-white">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live Metric</p>
                                        <p className="text-sm font-black uppercase text-madison-red">AI Automation Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutVideo;
