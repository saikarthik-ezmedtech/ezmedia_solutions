import React from 'react';
import Marquee from 'react-fast-marquee';

const Clients = () => {
    const row1Logos = [
        "https://cms.madisonindia.com/uploads/Godrej_and_Boyce_2ab6fd861d.jpg",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Raymond_987092bc81.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_TVS_a0348cfd26.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_titan_8901b55c6b.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Pidilite_29c1cc5d3d.png",
        "https://cms.madisonindia.com/uploads/Farmley_ad15effa51.png",
        "https://cms.madisonindia.com/uploads/Blue_Tribe_ed993bb941.png",
        "https://cms.madisonindia.com/uploads/Peninsula_a4575fbb43.png",
        "https://cms.madisonindia.com/uploads/ashok_layland_869f9d5b94.png",
        "https://cms.madisonindia.com/uploads/navi_logo_10511b42e2.png",
        "https://cms.madisonindia.com/uploads/Sundar_7cdaae2bd0.png",
        "https://cms.madisonindia.com/uploads/Sleep_Company_21cfeb7656.png"
    ];

    const row2Logos = [
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Varmora_Granito_e1e2bcd035.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_True_Elements_7f05b417ee.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_sun_tv_d1f29b6f25.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Spar_62b8b5eeb3.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Somany_a6abebb6ab.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_SBI_General_Insurance_bfad7a7ed6.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_RBL_Bank_e765a6a933.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Vicco_4265191ba9.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Polycab_0abbe1405c.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Pilgrim_bbf1fd516e.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Parag_3c0a4fb6ef.png",
        "https://cms.madisonindia.com/uploads/Madison_Clients_logo_Oberoi_9f5f837a14.png"
    ];

    return (
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
            {/* Background Pattern Hint */}
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none select-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M100 0 L100 100 L0 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="w-full px-6 md:px-12 lg:px-24 mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-tight md:w-1/2">
                    Trusted by <span className="text-[#00C853]">Industry Leaders</span>
                </h2>
            </div>

            <div className="space-y-12">
                {/* Row 1: Left to Right */}
                <Marquee gradient={true} gradientColor="white" gradientWidth={100} speed={50}>
                    {row1Logos.map((logo, index) => (
                        <div key={index} className="mx-8 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                            <img src={logo} alt="Client Logo" className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100" />
                        </div>
                    ))}
                </Marquee>

                {/* Row 2: Right to Left */}
                <Marquee gradient={true} gradientColor="white" gradientWidth={100} speed={40} direction="right">
                    {row2Logos.map((logo, index) => (
                        <div key={index} className="mx-8 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                            <img src={logo} alt="Client Logo" className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100" />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Madison-style bottom spacing */}
            <div className="mt-20 flex justify-center">
                <div className="w-12 h-1 bg-madison-red"></div>
            </div>
        </section>
    );
};

export default Clients;
