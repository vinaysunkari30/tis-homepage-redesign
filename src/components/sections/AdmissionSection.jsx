import { HiCheckCircle, HiPhone, HiMail } from "react-icons/hi";
import { footerLinks } from "../../data/content";
import { SectionLabel, SectionTitle, Button } from "../ui";
import RevealOnScroll, { StaggerContainer, StaggerItem } from "../animation/RevealOnScroll";

const steps = [
  "Enquire online or call our admissions helpline",
  "Schedule a campus visit or virtual tour",
  "Submit application via the admission portal",
  "Assessment interaction and enrollment confirmation",
];

export default function AdmissionSection() {
  return (
    <section id="admission" className="section-padding bg-white">
      <RevealOnScroll variant="fadeUp" className="text-center hidden md:block">
        <SectionLabel>Admission</SectionLabel>
      </RevealOnScroll>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <RevealOnScroll variant="fadeUp" className="md:hidden">
            <SectionLabel>Admission</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll variant="fadeUp" delay={0.08}>
            <SectionTitle className="mt-4 mb-6 text-center">
              Join the Tulas{" "}
              <span className="text-gradient-primary">community</span>
            </SectionTitle>
          </RevealOnScroll>
          <RevealOnScroll variant="fadeUp" delay={0.12}>
            <p className="text-dark/60 text-md leading-relaxed mb-8 text-center">
              Admissions open for Class IV through XII. Experience a Modern
              Gurukul approach with boarding and day options in the serene
              foothills of Dehradun.
            </p>
          </RevealOnScroll>
          <div className="flex justify-center items-center">
            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {steps.map((step, i) => (
                <StaggerItem key={step}>
                  <div className="flex items-start sm:justify-start sm:items-center gap-3">
                    <HiCheckCircle className="text-secondary shrink-0 mt-0.5" size={22} />
                    <p className="text-dark/70">
                      <span className="font-semibold text-dark">{i + 1}.</span>{" "}
                      {step}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>


          <RevealOnScroll variant="fadeUp" delay={0.2} className="mt-10 flex justify-center flex-wrap gap-4">
            <Button
              variant="primary"
              size="md"
              href="https://admission.tis.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </Button>
            <Button variant="outline" size="md" href="#cta">
              Enquire Now
            </Button>
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="fadeLeft">
          <div className="bg-cream rounded-3xl p-8 md:p-10 border border-cream-dark shadow-xl">
            <h3 className="font-heading text-2xl font-bold text-dark mb-6">
              Admissions contact
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <HiPhone size={22} />
                </span>
                <div>
                  <p className="text-dark/45 text-xs uppercase tracking-wider">
                    Helpline
                  </p>
                  <a
                    href={`tel:${footerLinks.contact.phone}`}
                    className="text-dark font-semibold hover:text-primary transition-colors"
                    data-cursor-hover
                  >
                    {footerLinks.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary-dark">
                  <HiMail size={22} />
                </span>
                <div>
                  <p className="text-dark/45 text-xs uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${footerLinks.contact.email}`}
                    className="text-dark font-semibold hover:text-primary transition-colors"
                    data-cursor-hover
                  >
                    {footerLinks.contact.email}
                  </a>
                </div>
              </li>
            </ul>
            <p className="mt-6 text-dark/50 text-sm leading-relaxed">
              Landline: {footerLinks.contact.landline}
              <br />
              {footerLinks.contact.address}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
