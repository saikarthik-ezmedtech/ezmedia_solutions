import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WordReveal = ({ text, className }) => {
    const containerRef = useRef(null);
    const words = text.split(" ");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.2"]
    });

    return (
        <p ref={containerRef} className={`${className} flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
            })}
        </p>
    );
};

const Word = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return (
        <span className="relative">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

export default WordReveal;
