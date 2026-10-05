import { motion } from "framer-motion";
import { HiPhone, HiArrowRight } from "react-icons/hi";
import { schoolAssets } from "../../data/content";
import { Button } from "../ui";
import RevealOnScroll from "../animation/RevealOnScroll";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={schoolAssets.hero}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-primary/60" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <RevealOnScroll variant="scaleUp" duration={0.5}>
          <motion.img
            src={schoolAssets.logo}
            alt=""
            className="h-16 w-16 mx-auto mb-6 object-contain"
            aria-hidden
          />
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white leading-tight">
            Ready to give your child the Tulas advantage?
          </h2>
          <p className="mt-5 text-white/85 text-md sm:text-lg max-w-2xl mx-auto">
            Apply now, book a campus visit, or speak with our admissions team
            today. Classes IV–XII • Boarding & Day • CBSE
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="accent"
              size="md"
              href="https://admission.tis.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
              <HiArrowRight size={20} />
            </Button>
            <Button
              variant="white"
              size="md"
              href="tel:+919837983791"
            >
              <HiPhone size={20} />
              Call Admissions
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
