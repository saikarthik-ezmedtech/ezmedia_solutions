import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaChartLine, FaUserMd, FaHospital, FaBullhorn, FaChartPie } from 'react-icons/fa';

const StatsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Providing growth solutions for clinics <br />
                            — not just marketing services
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-600">
                            Our comprehensive approach to healthcare marketing ensures that you not only get leads but also convert them into loyal patients. We combine SEO, paid ads, and automated patient support systems.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Stats Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-dark-900 rounded-3xl p-10 text-white relative overflow-hidden min-h-[300px] flex flex-col justify-between"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div>
                            <h3 className="text-6xl font-bold text-white mb-2">920<span className="text-primary-300">+</span></h3>
                            <p className="text-gray-400">Successful growth campaigns delivered</p>
                        </div>

                        <div className="flex gap-4 mt-8">
                            {[FaChartLine, FaUserMd, FaHospital, FaBullhorn, FaChartPie].map((Icon, index) => (
                                <div key={index} className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center border border-dark-700">
                                    <Icon className="text-primary-300" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* How We Work Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-dark-900 rounded-3xl p-10 text-white relative overflow-hidden min-h-[300px] flex items-center justify-center group"
                    >
                        {/* Abstract Background */}
                        <div className="absolute inset-0 opacity-30">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 L20 80 L40 90 L60 70 L80 85 L100 60" stroke="#bef264" strokeWidth="0.5" fill="none" />
                                <path d="M0 80 L30 50 L50 70 L80 40 L100 50" stroke="#bef264" strokeWidth="0.5" fill="none" />
                                {/* Add more lines for the network effect */}
                                <circle cx="20" cy="80" r="1" fill="#bef264" />
                                <circle cx="40" cy="90" r="1" fill="#bef264" />
                                <circle cx="60" cy="70" r="1" fill="#bef264" />
                            </svg>
                        </div>

                        <h3 className="text-4xl font-bold tracking-widest z-10">HOW WE WORK</h3>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute bottom-8 right-8 w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center text-black cursor-pointer z-20"
                        >
                            <FaPlay className="ml-1" />
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default StatsSection;
