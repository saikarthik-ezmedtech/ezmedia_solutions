import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

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
        <section className="py-12 sm:py-20 bg-white relative overflow-hidden" id="clients">
            <div className="container mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 sm:mb-6">
                        Trusted by industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">leaders</span>
                    </h2>
                </motion.div>
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

                <div className="space-y-16">
                    {/* Row 1 */}
                    <Marquee gradient={false} speed={40} className="py-4">
                        {row1Logos.map((logo, index) => (
                            <div key={index} className="mx-12 group transition-all duration-300">
                                <img
                                    src={logo}
                                    alt="Client Logo"
                                    className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter"
                                />
                            </div>
                        ))}
                    </Marquee>

                    {/* Row 2 */}
                    <Marquee gradient={false} speed={30} direction="right" className="py-4">
                        {row2Logos.map((logo, index) => (
                            <div key={index} className="mx-12 group transition-all duration-300">
                                <img
                                    src={logo}
                                    alt="Client Logo"
                                    className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Clients;
