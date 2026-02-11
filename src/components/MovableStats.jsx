import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StatBox = ({ number, label, color, activeColor, neutralDim, activeDim }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative p-4 sm:p-10 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[400px] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Morphing Border - Unique to each card */}
            <motion.div
                className={`absolute border-[3px] z-0 pointer-events-none transition-colors duration-500 ${isHovered ? activeColor : color}`}
                animate={{
                    width: isHovered ? activeDim.w : neutralDim.w,
                    height: isHovered ? activeDim.h : neutralDim.h,
                    rotate: isHovered ? 2 : -1,
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                }}
                style={{
                    left: "50%",
                    top: "50%",
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
                <motion.h2
                    className={`text-4xl sm:text-7xl md:text-8xl font-black leading-none mb-2 sm:mb-4 tracking-tighter transition-all duration-500 ${isHovered ? 'text-[#9D172D] scale-110' : 'text-gray-900 scale-100'}`}
                >
                    {number}
                </motion.h2>
                <motion.div
                    className={`font-black text-xs sm:text-sm tracking-widest uppercase max-w-[180px] mx-auto leading-tight transition-colors duration-500 ${isHovered ? 'text-[#9D172D]' : 'text-gray-900'}`}
                >
                    {label}
                </motion.div>
            </div>
        </motion.div>
    );
};

const MovableStats = () => {
    const [isDesktop, setIsDesktop] = React.useState(
        typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
    );

    React.useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const stats = [
        {
            number: "+150%",
            label: "Growth in engagement",
            color: "border-[#FFD8C4]", // Peach light
            activeColor: "border-[#FF7F5C]", // Peach bold
            // Mobile: 160x160, Desktop: 250x320
            neutralDim: { w: isDesktop ? "250px" : "160px", h: isDesktop ? "320px" : "160px" },
            activeDim: { w: isDesktop ? "230px" : "150px", h: isDesktop ? "350px" : "180px" }
        },
        {
            number: "+87K",
            label: "Active users",
            color: "border-[#D1E8FF]", // Blue light
            activeColor: "border-[#4A90E2]", // Blue bold
            // Mobile: 180x140, Desktop: 400x200
            neutralDim: { w: isDesktop ? "400px" : "180px", h: isDesktop ? "200px" : "140px" },
            activeDim: { w: isDesktop ? "440px" : "200px", h: isDesktop ? "180px" : "130px" }
        },
        {
            number: "+20M",
            label: "Content impressions",
            color: "border-[#FFD1E8]", // Pink light
            activeColor: "border-[#D0021B]", // Red bold
            // Mobile: 170x150, Desktop: 350x350
            neutralDim: { w: isDesktop ? "350px" : "170px", h: isDesktop ? "350px" : "150px" },
            activeDim: { w: isDesktop ? "320px" : "160px", h: isDesktop ? "380px" : "170px" }
        }
    ];

    return (
        <section className="pt-4 pb-8 md:pt-4 md:pb-16 bg-transparent overflow-hidden" id="stats-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
                    {stats.map((stat, index) => (
                        <StatBox
                            key={index}
                            {...stat}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovableStats;
