import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const blogData = [
    {
        id: 1,
        category: "Digital Marketing",
        title: "How AI is Transforming Patient Acquisition in Healthcare Marketing",
        image: "/assets/blog/ai-healthcare-marketing.jpg",
        date: "Feb 10, 2026",
        link: "#"
    },
    {
        id: 2,
        category: "SEO",
        title: "Local SEO Strategies to Attract More Patients to Your Practice",
        image: "/assets/blog/local-seo-healthcare.jpg",
        date: "Feb 08, 2026",
        link: "#"
    },
    {
        id: 3,
        category: "Digital Marketing",
        title: "Building Patient Trust Through Authentic Healthcare Marketing",
        image: "/assets/blog/patient-trust-marketing.jpg",
        date: "Feb 05, 2026",
        link: "#"
    },
    {
        id: 4,
        category: "Social Media",
        title: "Video Marketing for Healthcare: Engaging Patients in the Digital Age",
        image: "/assets/blog/video-marketing-healthcare.jpg",
        date: "Feb 02, 2026",
        link: "#"
    },
    {
        id: 5,
        category: "Digital Marketing",
        title: "Telehealth Marketing: Strategies to Promote Virtual Care Services",
        image: "/assets/blog/telehealth-marketing.jpg",
        date: "Jan 30, 2026",
        link: "#"
    },
    {
        id: 6,
        category: "SEO",
        title: "HIPAA-Compliant Digital Marketing: Protecting Patient Data While Growing Your Practice",
        image: "/assets/blog/hipaa-compliant-marketing.jpg",
        date: "Jan 28, 2026",
        link: "#"
    }
];

const BlogCard = React.forwardRef(({ blog }, ref) => (
    <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
    >
        <div className="relative h-48 sm:h-64 overflow-hidden bg-gray-100">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-gray-900 shadow-sm uppercase tracking-wider">
                    {blog.category}
                </span>
            </div>
        </div>
        <div className="p-8 flex flex-col flex-1">
            <div className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gray-200"></span>
                {blog.date}
            </div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-6 group-hover:text-primary-600 transition-colors">
                {blog.title}
            </h3>
            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <a href={blog.link} className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-4 transition-all uppercase tracking-widest">
                    Read Story <FiArrowRight className="text-lg" />
                </a>
            </div>
        </div>
    </motion.div>
));

BlogCard.displayName = "BlogCard";

const Blogs = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const categories = ["All", "Digital Marketing", "SEO", "Social Media"];

    const filteredBlogs = blogData.filter(blog => {
        const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Optional: Scroll to top of blog section
        document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-12 sm:py-24 bg-white relative overflow-hidden" id="blogs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="w-8 sm:w-12 h-[2px] bg-gray-900"></span>
                            <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-bold text-gray-900">Our Insights</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-none"
                        >
                            LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">READS.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch lg:items-center justify-center mb-8 sm:mb-12 p-2 bg-gray-50 rounded-[24px] sm:rounded-[40px] border border-gray-100">
                    <div className="flex flex-wrap gap-2 p-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                    ? "bg-gray-900 text-white shadow-xl"
                                    : "hover:bg-gray-200 text-gray-600"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {paginatedBlogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* No Results */}
                {filteredBlogs.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-400 text-xl font-medium">No articles found matching your criteria.</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-20 flex justify-center items-center gap-4">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-900 hover:text-gray-900'}`}
                        >
                            <FiChevronDown className="rotate-90 text-xl" />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                            <button
                                key={num}
                                onClick={() => handlePageChange(num)}
                                className={`w-12 h-12 rounded-full font-bold transition-all ${currentPage === num ? 'bg-gray-900 text-white shadow-lg' : 'hover:bg-gray-100 text-gray-600'}`}
                            >
                                {num}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-900 hover:text-gray-900'}`}
                        >
                            <FiChevronDown className="-rotate-90 text-xl" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blogs;
