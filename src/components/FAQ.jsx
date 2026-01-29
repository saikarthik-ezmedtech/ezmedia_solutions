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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">

                <div>
                    <h2 className="text-4xl font-bold mb-6 uppercase">Digital Marketing FAQ</h2>
                    <p className="text-gray-500 mb-8">(Healthcare Specific)</p>
                    <p className="text-gray-600 mb-8 max-w-md">
                        We help clinics understand digital growth strategies through transparent guidance and measurable results.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-6 py-2 rounded-full border border-black font-medium hover:bg-black hover:text-white transition-colors">
                            More Questions
                        </button>
                        <button className="px-6 py-2 rounded-full border border-transparent font-medium hover:underline">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex justify-between items-center py-4 text-left group"
                            >
                                <span className="text-lg font-medium group-hover:text-primary-600 transition-colors">
                                    {faq.question}
                                </span>
                                <span className="text-gray-400">
                                    {activeIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
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
                                        <p className="text-gray-600 pb-4 text-sm leading-relaxed">
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
