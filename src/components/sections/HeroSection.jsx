import { motion } from "framer-motion";
import { HiArrowDown, HiPhone } from "react-icons/hi";
import { schoolAssets } from "../../data/content";
import { Button } from "../ui";
import RevealOnScroll from "../animation/RevealOnScroll";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={schoolAssets.hero}
          alt=""
          className="w-full h-full object-cover scale-105"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/70 to-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <RevealOnScroll variant="fadeUp" duration={0.5}>
          <img
            src={schoolAssets.logo}
            alt=""
            className="h-20 w-20 md:h-24 md:w-24 mx-auto mb-6 object-contain drop-shadow-lg animate-float"
            aria-hidden
          />
        </RevealOnScroll>

        <RevealOnScroll variant="fadeUp" delay={0.1} duration={0.5}>
          <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">
            CBSE Co-Educational Boarding & Day School
          </p>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeUp" delay={0.15} duration={0.55}>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] max-w-4xl mx-auto">
            Welcome to{" "}
            <span className="text-gradient-accent">Tulas International</span>{" "}
            School
          </h1>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeUp" delay={0.22} duration={0.5}>
          <p className="mt-6 text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            One of India&apos;s top boarding and day schools in Dehradun. Our
            CBSE curriculum focuses on academic excellence, holistic
            development, and preparing students to be global leaders.
          </p>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeUp" delay={0.3} duration={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              href="https://admission.tis.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </Button>
            <Button
              variant="white"
              size="lg"
              href="tel:+919837983791"
              className="!bg-white/10 !text-white border border-white/20 backdrop-blur-sm hover:!bg-white/20"
            >
              <HiPhone size={20} />
              +91-9837983791
            </Button>
          </div>
        </RevealOnScroll>

        <motion.button
          type="button"
          onClick={scrollToAbout}
          className="mt-16 mx-auto flex flex-col items-center gap-2 text-white/50 hover:text-accent transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          data-cursor-hover
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <HiArrowDown size={22} />
        </motion.button>
      </div>
    </section>
  );
}
