import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "Why is digital marketing important for clinics?",
            answer: "Digital marketing helps clinics attract new patients by targeting specific local searches, building trust through reviews, and automating appointment bookings."
        },
        {
            question: "How does SEO help medical & dental clinics?",
            answer: "SEO ensures your clinic appears at the top of search results when patients look for services you offer, driving organic, high-quality traffic to your site."
        },
        {
            question: "What is AEO and why is it important?",
            answer: "Answer Engine Optimization (AEO) optimizes your content for AI-driven search engines like ChatGPT and Google's SGE, ensuring your clinic is the recommended answer."
        },
        {
            question: "How long does it take to see results?",
            answer: "While paid ads can show immediate results, SEO and organic growth strategies typically take 3-6 months to show significant, sustainable impact."
        }
    ];

    return (
        <section className="py-24 bg-transparent text-gray-950">
            <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">

                <div>
                    <span className="inline-block px-4 py-1.5 bg-black/5 text-gray-900 rounded-full text-[13px] font-medium mb-6 uppercase tracking-[0.1em]">
                        FAQ
                    </span>
                    <h2 className="text-[28px] md:text-[34px] lg:text-[44px] font-semibold mb-8 leading-[1.2] tracking-[-0.01em]">
                        Digital Marketing FAQ <br />
                        <span className="text-gray-400">(Healthcare Specific)</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-[15px] lg:text-base mb-10 max-w-md leading-[1.55] font-normal">
                        We help clinics understand digital growth strategies through transparent guidance and measurable results.
                    </p>

                    <div className="flex gap-6">
                        <button className="px-8 py-3 rounded-full border border-gray-900 font-medium hover:bg-black hover:text-white transition-all text-[14px] tracking-[0.005em]">
                            More Questions
                        </button>
                        <button className="px-8 py-3 rounded-full border border-transparent font-medium hover:underline transition-all text-[14px] tracking-[0.005em]">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-900/5 pb-2">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                aria-expanded={activeIndex === index}
                                aria-label={`Toggle answer for: ${faq.question}`}
                                className="w-full flex justify-between items-center py-6 text-left group"
                            >
                                <span className="text-[18px] md:text-[20px] lg:text-[22px] font-medium text-gray-950 leading-[1.3] pr-8 group-hover:text-primary-600 transition-colors">
                                    {faq.question}
                                </span>
                                <span className={`text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    {activeIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-500 pb-6 text-sm md:text-[15px] lg:text-base leading-[1.55] font-normal">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
