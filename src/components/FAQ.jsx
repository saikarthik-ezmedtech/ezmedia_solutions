import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How long does it take to see results?",
            answer: "Measurable improvements typically appear in 60-90 days. SEO efforts mature in 3-6 months, while our strategies generate leads within weeks."
        },
        {
            question: "Do you work with all medical practices?",
            answer: "Yes! We specialize in dental, wellness centers, and cosmetic surgery. Our AI models ensure healthcare compliance and relevance."
        },
        {
            question: "What makes your AI automation different?",
            answer: "Our systems are trained strictly on healthcare datasets, ensuring HIPAA compliance and accurate medical terminology."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer transparent, tiered packages based on practice size and goals. We have a solution that scales with your growth."
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" id="faq">
            {/* Background SVG */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: 'url(/assets/qa bg.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">

                    {/* Left Column: Image Stack */}
                    <div className="lg:w-1/2 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Main Image Container - Crisp rendering */}
                            <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-white border border-gray-100">
                                <img
                                    src="/assets/qa img.png"
                                    alt="QA Presentation"
                                    className="w-full h-auto block"
                                    style={{ imageRendering: 'auto' }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content & Accordion */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6 sm:mb-10"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-3 sm:mb-4">
                                Outstanding Digital Experience
                            </h2>
                            <p className="text-gray-500 text-base sm:text-lg max-w-xl">
                                Strategic insights to answer your most critical questions.
                            </p>
                        </motion.div>

                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`rounded-[24px] transition-all duration-300 border ${activeIndex === index ? 'bg-white shadow-xl shadow-gray-200/50 border-gray-100' : 'hover:bg-gray-50 border-transparent'}`}
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full px-8 py-5 flex items-center justify-between text-left group"
                                    >
                                        <span className={`text-lg md:text-xl font-bold transition-colors ${activeIndex === index ? 'text-gray-900' : 'text-gray-500'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all ${activeIndex === index ? 'bg-gray-900 text-white' : 'border-gray-200 text-gray-400'}`}>
                                            {activeIndex === index ? <HiMinus size={16} /> : <HiPlus size={16} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-8 pb-6 text-gray-500 text-base md:text-lg leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
