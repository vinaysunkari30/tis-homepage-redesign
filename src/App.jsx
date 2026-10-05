import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import AcademicsSection from "./components/sections/AcademicsSection";
import BeyondAcademicsSection from "./components/sections/BeyondAcademicsSection";
import EventsSection from "./components/sections/EventsSection";
import AdmissionSection from "./components/sections/AdmissionSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import CTASection from "./components/sections/CTASection";
import { useSectionUrl } from "./hooks/useSectionUrl";

export default function App() {
  useSectionUrl();
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <BeyondAcademicsSection />
        <EventsSection />
        <AdmissionSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
