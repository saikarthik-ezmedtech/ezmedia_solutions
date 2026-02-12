import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState("light");
  const { scrollY } = useScroll();

  const isInteractingRef = useRef(false);

  const scrollTo = (id) => {
    isInteractingRef.current = true;
    setIsOpen(false);

    if (id === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    setTimeout(() => {
      isInteractingRef.current = false;
    }, 600);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isInteractingRef.current) return;

    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = ["services", "testimonials"];
      let dark = false;

      darkSections.forEach((id) => {
        const s = document.getElementById(id);
        if (s) {
          const r = s.getBoundingClientRect();
          if (r.top <= 40 && r.bottom >= 40) dark = true;
        }
      });

      setTheme(dark ? "dark" : "light");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      button: "bg-gray-900 text-white hover:bg-gray-800",
    },
    dark: {
      text: "text-white",
      nav: "bg-black/20 backdrop-blur-md",
      button: "bg-white text-black hover:bg-gray-200",
    },
  };

  return (
    <motion.nav
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-colors duration-500 ${themeClasses[theme].nav} pointer-events-auto`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center space-x-0.5 cursor-pointer touch-manipulation"
          >
            <img
              src="/assets/ezmedia_logo_v2 1.svg"
              alt="EZMEDIA Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 transition-all duration-500"
            />
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold">
              <span className={theme === "dark" ? "text-white" : "text-[#001f3f]"}>
                EZ
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                MEDIA
              </span>
            </span>
          </button>

          {/* Desktop Menu + Contact Button */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`transition-colors duration-500 relative group font-normal cursor-pointer py-2 ${themeClasses[theme].text}`}
                  style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${theme === "dark" ? "bg-white" : "bg-gray-900"
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* Contact Us Button */}
            <button
              onClick={() => scrollTo("#contact")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-500 shadow-lg ${themeClasses[theme].button}`}
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 focus:outline-none transition-colors duration-500 z-50 ${themeClasses[theme].text}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={32} /> : <HiMenuAlt4 size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className={`lg:hidden border-t ${theme === "dark"
              ? "bg-black/95 backdrop-blur-md text-white border-white/10"
              : "bg-white/95 backdrop-blur-md text-gray-900 border-gray-200"
            }`}
        >
          <div className="px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                type="button"
                className="block w-full text-left font-medium py-3 px-2 transition-colors hover:opacity-70 touch-manipulation"
                onClick={() => scrollTo(item.href)}
              >
                {item.name}
              </button>
            ))}
            <button
              type="button"
              className={`w-full mt-4 px-6 py-3 rounded-full font-semibold text-sm ${themeClasses[theme].button} touch-manipulation`}
              onClick={() => scrollTo("#contact")}
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
