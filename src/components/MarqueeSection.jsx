import React from 'react';
import { motion } from 'framer-motion';

const MarqueeRow = ({ text, direction = 1, speed = 25 }) => {
    return (
        <div className="flex overflow-hidden whitespace-nowrap py-2">
            <motion.div
                className="flex"
                animate={{
                    x: direction > 0 ? [0, -1000] : [-1000, 0],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                <span className="text-[10vw] md:text-[8vw] font-black text-white uppercase px-10 leading-none drop-shadow-2xl">
                    {text} {text} {text}
                </span>
            </motion.div>
        </div>
    );
};

const MarqueeSection = () => {
    const line1 = "WE DON'T DO BORING MARKETING • YOUR COMPETITION CALLS US 'UNFAIR' • ";
    const line2 = "WE EAT ALGORITHMS FOR BREAKFAST • DIGITAL DOMINATION STARTS HERE • ";

    return (
        <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] bg-[#97CFDD] overflow-hidden flex flex-col justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Row 1 - BEHIND the girl */}
            <div className="absolute inset-x-0 top-[20%] z-10 pointer-events-none opacity-40 md:opacity-100">
                <MarqueeRow text={line1} direction={1} speed={35} />
            </div>

            {/* Girl Image - MIDDLE layer */}
            <div className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none">
                <motion.img
                    src="/assets/girl.svg"
                    alt="Brand girl"
                    className="h-[95%] w-auto object-contain object-bottom"
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </div>

            {/* Row 2 - IN FRONT of the girl */}
            <div className="absolute inset-x-0 bottom-[25%] z-30 pointer-events-none">
                <MarqueeRow text={line2} direction={-1} speed={30} />
            </div>
        </section>
    );
};

export default MarqueeSection;
