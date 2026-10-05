import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navItems, schoolAssets } from "../../data/content";
import { Button } from "../ui";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navItems[i].href.replace("#", ""));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = window.innerWidth < 768 ? 70 : 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.replaceState(null,"",href);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-500 ${
          isScrolled
            ? "glass-dark shadow-2xl shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            data-cursor-hover
          >
            <img
              src={schoolAssets.logo}
              alt="Tulas International School"
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-white font-heading font-bold text-base leading-tight">
                Tulas International
              </p>
              <p className="text-white/60 text-xs tracking-[0.1em] uppercase">
                School, Dehradun
              </p>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-wrap justify-end max-w-2xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                data-cursor-hover
                className={`relative px-2.5 py-2 text-xs xl:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.href.replace("#", "")
                    ? "text-accent"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="accent"
              size="sm"
              href="https://admission.tis.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-xs sm:text-sm"
            >
              Apply Now
            </Button>

            <button
              className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              data-cursor-hover
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-[9997] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-dark/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-dark-lighter/95 backdrop-blur-2xl flex flex-col pt-24 px-8 border-l border-white/5 overflow-y-scroll"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`py-4 text-xl font-medium border-b border-white/5 transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "text-accent"
                      : "text-white/70 hover:text-white"
                  }`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  data-cursor-hover
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="accent"
                  size="lg"
                  href="https://admission.tis.edu.in"
                  target="_blank"
                  className="w-full justify-center"
                >
                  Apply Now
                </Button>
              </motion.div>

              {/* Contact in mobile */}
              <motion.div
                className="mt-5 pb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                  Admissions Helpline
                </p>
                <a
                  href="tel:+91-9837983791"
                  className="text-white text-lg font-semibold hover:text-accent transition-colors"
                  data-cursor-hover
                >
                  +91-9837983791
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
