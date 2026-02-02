import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const workProjects = [
    {
        id: 1,
        title: "Saffola - World Heart Day",
        image: "https://cms.madisonindia.com/uploads/40_under_40_work_722_X506_508d790a82.jpg",
        awards: { gold: 2, silver: 1 },
        link: "https://youtu.be/nI94KnUd8-g"
    },
    {
        id: 2,
        title: "Blue Star Water Purifier",
        image: "https://cms.madisonindia.com/uploads/blue_star_work_722_X506_208b4e852f_170fca2f3b.jpg",
        awards: { gold: 1 },
        link: "https://youtu.be/FWTT9M3CYoA"
    },
    {
        id: 3,
        title: "Kamaverse Campaign",
        image: "https://cms.madisonindia.com/uploads/Kamaverse_Campaign_work_Thumbnail_722_X506_4e887fe544.jpg",
        awards: { gold: 4, silver: 2, bronze: 2 },
        link: "https://www.youtube.com/watch?v=l9EIm0zVXQk&t=8s"
    },
    {
        id: 4,
        title: "Tata IPL FAN Park",
        image: "https://cms.madisonindia.com/uploads/Tata_IPL_Fan_Park_Work_Thumbnail_722_X506_eb26446bde.jpg",
        awards: { gold: 1 },
        link: "https://youtu.be/vfPVXztbjAk"
    },
    {
        id: 5,
        title: "Asian Paints Royale Glitz",
        image: "https://cms.madisonindia.com/uploads/asian_paints_jawan_1_copy_work_722_X506_0f4b9fa60d.jpg",
        awards: { gold: 1, silver: 2, bronze: 7 },
        link: "https://youtu.be/K3lxEbY3sck"
    }
];

const CaseStudies = () => {
    const sectionRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Horizontal movement for the large background text
    const xText = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section
            ref={sectionRef}
            className="py-32 bg-white relative overflow-hidden"
        >
            {/* LARGE BACKGROUND TEXT (Madison Style) */}
            <motion.h2
                style={{ x: xText }}
                className="absolute top-10 left-0 text-[15rem] md:text-[25rem] font-black text-[#f0f0f0] uppercase leading-none select-none pointer-events-none tracking-tighter"
            >
                Work
            </motion.h2>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex justify-between items-end mb-16 px-4">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">
                            Our <span className="text-secondary-500">Impact</span>
                        </h2>
                        <div className="w-20 h-1 bg-secondary-500 mt-4"></div>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-4 text-xs font-black tracking-[0.4em] uppercase hover:text-secondary-500 transition-colors group">
                        View All Work
                        <div className="w-10 h-[1px] bg-black group-hover:bg-secondary-500 transition-colors"></div>
                    </a>
                </div>

                <div className="flex gap-10 overflow-x-auto pb-10 px-4 scrollbar-hide snap-x">
                    {workProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[300px] md:min-w-[450px] shrink-0 snap-center group"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                {project.awards && (
                                    <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md p-4 flex flex-col items-center min-w-[100px] rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <p className="text-[10px] font-black uppercase text-white/50 tracking-widest mb-2 border-b border-white/10 pb-2 w-full text-center">Awards</p>
                                        <div className="flex gap-4">
                                            {project.awards.gold && (
                                                <div className="text-center">
                                                    <p className="text-xl font-black text-amber-400 leading-none">{project.awards.gold}</p>
                                                    <p className="text-[8px] uppercase font-bold text-white/40">Gold</p>
                                                </div>
                                            )}
                                            {project.awards.silver && (
                                                <div className="text-center">
                                                    <p className="text-xl font-black text-gray-300 leading-none">{project.awards.silver}</p>
                                                    <p className="text-[8px] uppercase font-bold text-white/40">Silver</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-secondary-500/0 group-hover:bg-secondary-500/10 transition-colors duration-500"></div>
                            </div>

                            <div className="mt-8 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black group-hover:text-secondary-500 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mt-2">Marketing Campaign</p>
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full group-hover:bg-black group-hover:border-black transition-all duration-300"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-45deg] group-hover:text-white transition-colors">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 md:hidden px-4">
                    <a href="#" className="flex items-center gap-4 text-xs font-black tracking-[0.4em] uppercase text-secondary-500">
                        View All Work
                        <div className="w-10 h-[1px] bg-secondary-500"></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
