import {
  HiBookOpen,
  HiAcademicCap,
  HiBadgeCheck,
  HiLightningBolt,
} from "react-icons/hi";
import { programs } from "../../data/content";
import { SectionLabel, SectionTitle, Card } from "../ui";
import RevealOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "../animation/RevealOnScroll";

const iconMap = {
  book: HiBookOpen,
  graduation: HiAcademicCap,
  award: HiBadgeCheck,
  rocket: HiLightningBolt,
};

export default function AcademicsSection() {
  return (
    <section id="academics" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <RevealOnScroll variant="fadeUp">
            <SectionLabel>Academics</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll variant="fadeUp" delay={0.08}>
            <SectionTitle className="mt-4">
              CBSE curriculum for{" "}
              <span className="text-gradient-primary">every stage</span>
            </SectionTitle>
          </RevealOnScroll>
          <RevealOnScroll variant="fadeUp" delay={0.12}>
            <p className="mt-4 text-dark/60 text-md sm:text-lg">
              From primary foundations to senior secondary specialization—rigorous
              academics paired with career guidance and holistic growth.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {programs.map((program) => {
            const Icon = iconMap[program.icon] || HiBookOpen;
            return (
              <StaggerItem key={program.title}>
                <Card className="h-full p-6 border border-cream-dark group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <p className="text-accent text-xs font-bold uppercase tracking-wider">
                    {program.classes}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-dark mt-2 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-dark/55 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
