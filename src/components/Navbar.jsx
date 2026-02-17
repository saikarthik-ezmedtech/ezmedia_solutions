import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const NAVBAR_HEIGHT = 80;
const NAVBAR_COOLDOWN = 450; // ms

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState("light");

  const { scrollY } = useScroll();

  const isProgrammaticScroll = useRef(false);
  const lastNavbarShowTime = useRef(0);

  /* ---------------------------------------
     SCROLL TO SECTION (ROCK SOLID)
  ---------------------------------------- */
  const scrollTo = (id) => {
    isProgrammaticScroll.current = true;
    lastNavbarShowTime.current = Date.now();

    setHidden(false);
    setIsOpen(false);

    let targetY = 0;

    if (id !== "#home") {
      const el = document.querySelector(id);
      if (!el) return;

      targetY =
        el.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_HEIGHT;
    }

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 900);
  };

  /* ---------------------------------------
     AUTO HIDE / SHOW NAVBAR
  ---------------------------------------- */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const now = Date.now();

    // 🚫 Ignore during programmatic scroll
    if (isProgrammaticScroll.current) return;

    // 🚫 Ignore right after navbar appears
    if (now - lastNavbarShowTime.current < NAVBAR_COOLDOWN) return;

    const previous = scrollY.getPrevious();
    if (!previous) return;

    // Scroll down → hide
    if (latest > previous && latest > 150) {
      setHidden(true);
    }

    // Scroll up → show (and lock it briefly)
    if (latest < previous) {
      setHidden(false);
      lastNavbarShowTime.current = now;
    }
  });

  /* ---------------------------------------
     THEME SWITCH
  ---------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const darkSections = ["services", "testimonials"];
      let dark = false;

      darkSections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 40 && rect.bottom >= 40) dark = true;
      });

      setTheme(dark ? "dark" : "light");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------------------------------
     MENU DATA
  ---------------------------------------- */
  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Faq", href: "#faq" },
    { name: "Blogs", href: "#blogs" },
  ];

  const themeClasses = {
    light: {
      text: "text-gray-900",
      nav: "bg-white/10 backdrop-blur-md md:backdrop-blur-xl",
      button: "bg-gradient-to-r from-blue-900 to-cyan-800 text-white hover:from-blue-950 hover:to-cyan-900",
    },
    dark: {
      text: "text-white",
      nav: "bg-black/20 backdrop-blur-md",
      button: "bg-gradient-to-r from-blue-900 to-cyan-800 text-white hover:from-blue-950 hover:to-cyan-900",
    },
  };

  return (
    <motion.nav
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-colors duration-500 ${themeClasses[theme].nav}`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center space-x-1"
          >
            <img
              src="/assets/ezmedia_logo_v2 1.svg"
              alt="EZMEDIA"
              className="h-12 w-12 lg:h-16 lg:w-16"
            />
            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              EZMEDIA
            </span>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`relative group py-2 transition-colors font-normal ${themeClasses[theme].text}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
              </button>
            ))}

            <button
              onClick={() => scrollTo("#contact")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold ${themeClasses[theme].button}`}
            >
              Contact us
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${themeClasses[theme].text}`}
          >
            {isOpen ? <HiX size={32} /> : <HiMenuAlt4 size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white text-gray-900">
          <div className="px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="block w-full py-3 text-left font-normal"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
