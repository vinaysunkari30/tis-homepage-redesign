import { schoolAssets, stats, rankings } from "../../data/content";
import { SectionLabel, SectionTitle, Card } from "../ui";
import RevealOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "../animation/RevealOnScroll";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-16 items-center">
          <RevealOnScroll variant="fadeRight" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-dark/10">
              <img
                src={schoolAssets.campus}
                alt="Tulas International School campus"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="font-heading text-3xl font-bold">2012</p>
              <p className="text-white/80 text-sm">Est. under Rishabh Educational Trust</p>
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll variant="fadeUp">
                <SectionLabel>About TIS</SectionLabel>
            </RevealOnScroll>
            <RevealOnScroll variant="fadeUp" delay={0.08}>
              <SectionTitle className="mt-4 mb-6 text-center">
                Boarding and day school{" "}
                <span className="text-gradient-primary">excellence</span>
              </SectionTitle>
            </RevealOnScroll>
            <RevealOnScroll variant="fadeUp" delay={0.12}>
              <p className="text-dark/70 text-lg leading-relaxed mb-4 text-center">
                Tulas International School was established in 2012 under the
                aegis of Rishabh Educational Trust to impart education through
                seamless opportunities.
              </p>
              <p className="text-dark/60 leading-relaxed mb-8 text-center">
                We provide world-class education, modern facilities, and a
                nurturing environment for students to thrive academically,
                socially, and culturally—encouraging leadership, innovation, and
                lifelong learning.
              </p>
            </RevealOnScroll>

            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <Card hover={false} className="p-5 border border-cream-dark/80 shadow-md">
                    <p className="font-heading text-2xl md:text-3xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-dark/55 text-sm mt-1 leading-snug">
                      {stat.label}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <StaggerContainer
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {rankings.map((item) => (
            <StaggerItem key={item.region}>
              <Card className="p-6 text-center border border-cream-dark">
                <p className="font-heading text-4xl font-bold text-accent">
                  {item.rank}
                </p>
                <p className="font-semibold text-dark mt-2">{item.region}</p>
                <p className="text-dark/50 text-sm mt-2">{item.note}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
