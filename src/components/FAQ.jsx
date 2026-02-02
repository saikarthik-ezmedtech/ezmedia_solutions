import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How long does it take to see results?",
            answer: "Measurable improvements typically appear in 60-90 days. SEO efforts generally mature in 3-6 months, while our paid ad strategies often generate qualified leads within the first few weeks."
        },
        {
            question: "Do you work with all types of medical practices?",
            answer: "Yes! We specialize in dental, general practice, wellness centers, and cosmetic surgery. Our AI models are adaptable to various healthcare niches to ensure compliance and relevance."
        },
        {
            question: "What makes your AI automation different?",
            answer: "Our systems are trained strictly on healthcare datasets, ensuring HIPAA compliance and accurate medical terminology. Unlike generic bots, our AI provides 24/7 empathetic, human-like support."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer transparent, tiered packages based on practice size and goals. Whether you're a single clinic or a multi-location network, we have a solution that scales with your growth."
        }
    ];

    return (
        <section className="py-24 bg-[#021612] relative overflow-hidden" id="faq">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Heading & Context */}
                    <div className="lg:w-1/3 pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#00C853] font-mono text-sm font-bold uppercase tracking-widest mb-4 block">
                                / Q&A
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                                Common<br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px #00C853' }}>Queries</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                                Everything you need to know about our process, technology, and how we drive growth for your practice.
                            </p>
                            <a href="#contact" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-[#00C853] transition-colors group">
                                Ask a specific question
                                <span className="w-8 h-[1px] bg-[#00C853] group-hover:w-12 transition-all"></span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Accordion List */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="border-b border-white/10 last:border-0"
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full py-8 flex items-start justify-between text-left group transition-all"
                                    >
                                        <span className={`text-xl md:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 pr-8 ${activeIndex === index ? 'text-[#00C853]' : 'text-white group-hover:text-[#00C853]/70'}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`flex-shrink-0 ml-4 p-2 rounded-full border transition-all duration-300 ${activeIndex === index ? 'border-[#00C853] text-[#00C853] rotate-180' : 'border-white/20 text-white/50 group-hover:border-[#00C853] group-hover:text-[#00C853]'}`}>
                                            {activeIndex === index ? <HiMinus size={16} /> : <HiPlus size={16} />}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-white/50 text-lg leading-loose pb-8 max-w-3xl">
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
