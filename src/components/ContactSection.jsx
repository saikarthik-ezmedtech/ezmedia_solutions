import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="py-12 sm:py-20 bg-white relative overflow-hidden" id="contact">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-50/50 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* Top Section: Contact Form & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start mb-16 sm:mb-32">

                    {/* Left Column: Info & Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative pl-4 sm:pl-12"
                    >
                        {/* Decorative Background Circle */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFF8E7] rounded-full -z-10 -translate-x-12 -translate-y-8 blur-sm opacity-80" />

                        {/* Paper Plane Graphic */}
                        <div className="relative mb-6">
                            {/* Hand-drawn Paper Plane SVG */}
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 100 100"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-900 absolute -top-8 sm:-top-16 -left-4 sm:-left-10"
                            >
                                <path d="M90 10L10 50L40 60L50 90L90 10Z" />
                                <path d="M40 60L90 10" />
                            </svg>

                            {/* Looping Dashed Line */}
                            <svg className="absolute top-0 -left-32 w-64 h-64 pointer-events-none -z-10 text-gray-400" viewBox="0 0 200 200" fill="none">
                                <path
                                    d="M 20 180 C 0 100, 50 50, 80 40"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeDasharray="6,6"
                                />
                            </svg>
                        </div>

                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-6 sm:mb-8 relative">
                            Ready to Scale Your Brand with a <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">360° Digital</span> Strategy?
                        </h2>

                        <div className="w-12 h-[2px] bg-gray-300 mb-6 sm:mb-8" />

                        <div className="space-y-2">
                            <p className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight">
                                <a href="tel:+918484084414" className="hover:text-[#9D172D] transition-colors">Connect with us @<br />+91-8484084414</a>
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name*"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
                                        required
                                    />
                                </div>
                                <div className="group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
                                    />
                                </div>
                                <div className="group">
                                    <input
                                        type="url"
                                        name="website"
                                        placeholder="Website*"
                                        value={formData.website}
                                        onChange={handleChange}
                                        className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="group pt-4">
                                <textarea
                                    name="message"
                                    rows="1"
                                    placeholder="Message"
                                    className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors bg-transparent resize-none overflow-hidden"
                                ></textarea>
                            </div>

                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="px-10 py-4 border border-gray-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

            </div>

            {/* Bottom Section: Newsletter - Ewebot Style */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center w-full py-12 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
                style={{
                    backgroundImage: 'url(/assets/newsletter%20bg.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="relative z-10 w-full max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#021612] mb-4 sm:mb-6 tracking-tight">
                        Say Hello to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">EZMEDIA</span>!
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-lg mx-auto font-medium">
                        Sign up for Newsletter and receive updates on first project
                    </p>

                    <div className="relative w-full max-w-lg mx-auto bg-white border border-gray-100 rounded-full py-2 pl-4 sm:pl-8 pr-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex items-center">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-sm md:text-base min-w-0"
                        />
                        <button className="bg-[#111111] text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-md whitespace-nowrap">
                            Sign Up
                        </button>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default ContactSection;
