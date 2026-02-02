import React from 'react';

const Logo = ({ className = "w-12 h-12", showText = false }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
            >
                <defs>
                    <linearGradient id="logoGradient" x1="0" y1="100" x2="100" y2="0">
                        <stop offset="0%" stopColor="#1e3a8a" /> {/* Dark Blue */}
                        <stop offset="100%" stopColor="#00C853" /> {/* EZ Green */}
                    </linearGradient>
                    <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Magnifying Glass / Circle Segment */}
                <path
                    d="M 40 85 A 35 35 0 1 1 85 40"
                    stroke="url(#logoGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Handle of Magnifying Glass (Bottom Right) */}
                <path
                    d="M 65 65 L 85 85"
                    stroke="#00C853"
                    strokeWidth="12"
                    strokeLinecap="round"
                />

                {/* Growth Arrow (Breaking out) */}
                <path
                    d="M 25 55 L 45 65 L 55 35 L 90 10"
                    stroke="url(#logoGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />

                {/* Arrow Head */}
                <path
                    d="M 75 10 L 90 10 L 90 25"
                    stroke="#00C853"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>
            {showText && (
                <div className="flex flex-col leading-none">
                    <span className="font-extrabold tracking-tighter text-white uppercase" style={{ fontSize: '1.2em' }}>
                        EZ<span className="text-[#00C853]">MEDIA</span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
