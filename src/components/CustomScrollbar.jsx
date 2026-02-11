import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const CustomScrollbar = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [color, setColor] = useState('bg-white'); // Default for dark sections

    useEffect(() => {
        const handleScroll = () => {
            // Define active sections and their background types
            // Dark: Services (#services), Footer (footer), Navbar/Hero (top)
            // Light: Testimonials, FAQ, Insights, Clients

            // Simple logic: Check elements at the scrollbar position (center right)
            // Or simpler: Hardcode logic based on section positions

            const services = document.getElementById('services');
            const testimonials = document.querySelector('section:nth-of-type(4)'); // Approximation or add ID
            // Best approach: Intersection Observer on light/dark sections?
            // Or elementFromPoint?

            // Let's use simple viewport checking
            const viewportHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // We need to map scroll locations to background colors.
            // This is dynamic, so elementFromPoint is safer.
            // Check the element at 50% height, 98% width
            const element = document.elementFromPoint(window.innerWidth - 20, window.innerHeight / 2);

            // Or check active sections:
            // Hero: Dark
            // Services: Dark (#021612)
            // Testimonials: Light (white)
            // FAQ: Light (white)
            // Insights: Light (white)
            // Clients: Light (white)
            // Footer: Dark (#021612)

            // Let's grab all sections
            const hero = document.querySelector('div > section:nth-of-type(1)'); // Hero usually first
            const servicesSec = document.getElementById('services');
            const footer = document.querySelector('footer');

            const darkSections = [hero, servicesSec, footer];

            let isDark = false;

            // Check if any dark section is covering the center of the screen
            darkSections.forEach(sec => {
                if (sec) {
                    const rect = sec.getBoundingClientRect();
                    // If section contains the vertical center of the viewport
                    if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
                        isDark = true;
                    }
                }
            });

            // If background is dark => Scrollbar should be WHITE
            // If background is light (white) => Scrollbar should be TEAL (#021612)

            if (isDark) {
                setColor('bg-white');
            } else {
                setColor('bg-[#021612]'); // Teal for light backgrounds
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 right-1 w-2 h-full z-[100] flex flex-col justify-center pointer-events-none">
            {/* The Track (Optional, maybe invisible or subtle) */}

            {/* The Thumb */}
            <motion.div
                className={`w-full rounded-full ${color} transition-colors duration-300`}
                style={{
                    height: '15vh', // Fixed height thumb
                    y: useTransform(scrollYProgress, [0, 1], ['0vh', '85vh']), // Move from top to bottom
                }}
            />
        </div>
    );
};

export default CustomScrollbar;
