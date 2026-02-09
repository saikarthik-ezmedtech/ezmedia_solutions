import React from 'react';

const Logo = ({ className = "w-12 h-12", showText = false }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <img
                src="/assets/ezmedia_logo_v2 1.svg"
                alt="EZ Media Solutions Logo"
                className="w-full h-full object-contain"
            />
            {showText && (
                <div className="flex flex-col leading-none">
                    <span className="font-extrabold tracking-tighter text-white uppercase" style={{ fontSize: '1.2em', fontFamily: '"Glacial Indifference", sans-serif' }}>
                        EZ<span className="text-[#81BC65]">MEDIA</span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
