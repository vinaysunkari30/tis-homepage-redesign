import {
  HiMusicNote,
  HiUserGroup,
  HiSparkles,
  HiChip,
} from "react-icons/hi";
import { FaMountain, FaTrophy } from "react-icons/fa";
import { activities, sports } from "../../data/content";
import { SectionLabel, SectionTitle, Card } from "../ui";
import RevealOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "../animation/RevealOnScroll";

const activityIcons = {
  trophy: FaTrophy,
  music: HiMusicNote,
  mountain: FaMountain,
  users: HiUserGroup,
  sparkles: HiSparkles,
  cpu: HiChip,
};

export default function BeyondAcademicsSection() {
  return (
    <section
      id="beyond-academics"
      className="section-padding bg-dark text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <RevealOnScroll variant="fadeUp">
            <SectionLabel className="!bg-white/10 !text-accent !border-white/10">
              Beyond Academics
            </SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll variant="fadeUp" delay={0.08}>
            <SectionTitle className="mt-4 !text-white">
              Sports, celebrations &{" "}
              <span className="text-gradient-accent">endless discovery</span>
            </SectionTitle>
          </RevealOnScroll>
          <RevealOnScroll variant="fadeUp" delay={0.12}>
            <p className="mt-4 text-white/60 text-md sm:text-lg">
              It&apos;s not just a facility. At Tulas it&apos;s the foundation—16+
              sports and vibrant co-curricular programs that build discipline and
              joy.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16"
          staggerDelay={0.05}
        >
          {sports.map((sport) => (
            <StaggerItem key={sport.name}>
              <SportCard sport={sport} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {activities.map((activity) => {
            const Icon = activityIcons[activity.icon] || HiSparkles;
            return (
              <StaggerItem key={activity.title}>
                <Card
                  className="h-full p-6 bg-dark-lighter/80 border border-white/10 text-black"
                  hover
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${activity.color}22`, color: activity.color }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {activity.description}
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

function SportCard({ sport }) {
  return (
    // <Card
    //   className="p-4 bg-white/5 border border-white/10 text-center group"
    //   hover
    // >
    //   <img
    //     src={sport.image}
    //     alt={sport.name}
    //     className="w-full h-full rounded-lg mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
    //   />
    //   <p className="text-white/80 text-xs font-medium mt-3">{sport.name}</p>
    // </Card>
    <Card
      className="p-4 bg-white/5 border border-white/10 text-center group h-full flex flex-col"
      hover
    >
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={sport.image}
          alt={sport.name}
          className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <p className="text-white/80 text-md font-medium mt-3">
        {sport.name}
      </p>
    </Card>
  );
}
