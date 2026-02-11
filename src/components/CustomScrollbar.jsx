import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const CustomScrollbar = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [color, setColor] = useState('bg-white');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleScroll = () => {
            if (window.innerWidth < 1024) return;

            const viewportHeight = window.innerHeight;
            const hero = document.querySelector('section');
            const servicesSec = document.getElementById('services');
            const footer = document.querySelector('footer');

            const darkSections = [hero, servicesSec, footer];
            let isDark = false;

            darkSections.forEach(sec => {
                if (sec) {
                    const rect = sec.getBoundingClientRect();
                    if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
                        isDark = true;
                    }
                }
            });

            if (isDark) {
                setColor('bg-white');
            } else {
                setColor('bg-[#021612]');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const yVal = useTransform(scrollYProgress, [0, 1], ['0vh', '85vh']);

    if (isMobile) return null;

    return (
        <div className="fixed top-0 right-1 w-2 h-full z-[100] flex flex-col justify-center pointer-events-none">
            <motion.div
                className={`w-full rounded-full ${color} transition-colors duration-300`}
                style={{
                    height: '15vh',
                    y: yVal,
                }}
            />
        </div>
    );
};

export default CustomScrollbar;
