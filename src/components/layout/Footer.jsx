import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { footerLinks, navItems, schoolAssets } from "../../data/content";
import RevealOnScroll, { StaggerContainer, StaggerItem } from "../animation/RevealOnScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          staggerDelay={0.08}
        >
          {/* Brand Column */}
          <StaggerItem className="lg:col-span-1 flex flex-col justify-center items-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <img
                src={schoolAssets.logo}
                alt="Tulas International School"
                className="h-16 w-16 object-contain"
              />
              <div>
                <p className="font-heading font-bold text-lg leading-tight">
                  Tulas International
                </p>
                <p className="text-white/50 text-xs tracking-[0.12em] uppercase">
                  School, Dehradun
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 text-center w-110 md:w-full">
              A CBSE-affiliated co-educational boarding school established in
              2012, nurturing future leaders through the Modern Gurukul approach.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 justify-center">
              {[
                { icon: FaFacebookF, href: footerLinks.social.facebook },
                { icon: FaInstagram, href: footerLinks.social.instagram },
                { icon: FaYoutube, href: footerLinks.social.youtube },
                { icon: FaLinkedinIn, href: footerLinks.social.linkedin },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                  data-cursor-hover
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem className="flex flex-col justify-center items-center">
            <h3 className="font-heading font-bold text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/50 text-sm hover:text-accent hover:pl-2 transition-all duration-300"
                    data-cursor-hover
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact Info */}
          <StaggerItem className="flex flex-col justify-center items-center">
            <h3 className="font-heading font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4 flex flex-col items-center justify-center">
              <li className="flex items-center gap-3">
                <HiPhone className="text-accent mt-0.5 shrink-0" size={18} />
                <div>
                  <a
                    href={`tel:${footerLinks.contact.phone}`}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                    data-cursor-hover
                  >
                    {footerLinks.contact.phone}
                  </a>
                  <p className="text-white/30 text-xs mt-0.5">
                    Admissions Helpline
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiMail className="text-accent mt-0.5 shrink-0" size={18} />
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="text-white/70 text-sm hover:text-accent transition-colors"
                  data-cursor-hover
                >
                  {footerLinks.contact.email}
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <HiLocationMarker
                  className="text-accent mt-0.5 shrink-0"
                  size={18}
                />
                <p className="text-white/50 text-sm leading-relaxed text-center md:hidden">
                  {footerLinks.contact.address1}<br />
                  {footerLinks.contact.address2}
                </p>
                <p className="text-center text-white/50 text-sm leading-relaxed md:inline-flex hidden md:w-45">
                  {footerLinks.contact.address}
                </p>
              </li>
            </ul>
          </StaggerItem>

          {/* Map / Quick CTA */}
          <StaggerItem className="flex flex-col items-center justify-center">
            <h3 className="font-heading font-bold text-lg mb-5">
              Visit Us
            </h3>
            <div className="rounded-xl overflow-hidden border border-white/10 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0!2d77.8865903!3d30.3430336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7e1e0c7b94f%3A0x5d7e0e5a8a5c4b9a!2sTula&#39;s%20International%20School!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="160"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TIS Location"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/maBF8syXueQkw31E6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm font-medium hover:underline"
              data-cursor-hover
            >
              Get Directions →
            </a>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-white/30 text-sm text-center md:text-left">
            © {currentYear} Tulas International School, Dehradun. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
