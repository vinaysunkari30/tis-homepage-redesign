import { events } from "../../data/content";
import { SectionLabel, SectionTitle, Card } from "../ui";
import RevealOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "../animation/RevealOnScroll";

export default function EventsSection() {
  return (
    <section id="events" className="section-padding bg-cream-dark relative">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll variant="fadeUp" className="text-center hidden md:block">
          <SectionLabel>Events</SectionLabel>
        </RevealOnScroll>
        <div className="flex flex-col items-center mb-14">
          <div className="max-w-xl">
            <RevealOnScroll variant="fadeUp" className="md:hidden">
              <SectionLabel>Events</SectionLabel>
            </RevealOnScroll>
            <RevealOnScroll variant="fadeUp" delay={0.08}>
              <SectionTitle className="mt-4 text-center">
                TIS <span className="text-gradient-primary">events</span>
              </SectionTitle>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="fadeUp" delay={0.1}>
            <p className="text-dark/60 md:max-w-md text-center mt-4">
              Annual celebrations, cultural fests, and campus milestones that
              bring our community together.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          {events.map((event) => (
            <StaggerItem key={event.title}>
              <Card className="overflow-hidden border border-cream-dark h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-white/90 text-sm font-medium">
                    {event.date}
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading text-xl font-bold text-dark">
                    {event.title}
                  </h3>
                  <p className="text-dark/55 text-sm mt-3 leading-relaxed flex-1">
                    {event.description}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
