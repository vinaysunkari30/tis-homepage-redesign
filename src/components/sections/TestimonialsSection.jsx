import { HiStar } from "react-icons/hi";
import { testimonials } from "../../data/content";
import { SectionLabel, SectionTitle, Card } from "../ui";
import RevealOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "../animation/RevealOnScroll";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <RevealOnScroll variant="fadeUp">
            <SectionLabel>From the parents</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll variant="fadeUp" delay={0.08}>
            <SectionTitle className="mt-4">
              Trusted by families across India
            </SectionTitle>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {testimonials.map((item) => (
            <StaggerItem key={item.name + item.role}>
              <Card className="p-8 h-full border border-cream-dark flex flex-col">
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} size={18} />
                  ))}
                </div>
                <blockquote className="text-dark/70 leading-relaxed flex-1 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 pt-6 border-t border-cream-dark">
                  <p className="font-semibold text-dark">{item.name}</p>
                  <p className="text-dark/45 text-sm">{item.role}</p>
                </footer>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
