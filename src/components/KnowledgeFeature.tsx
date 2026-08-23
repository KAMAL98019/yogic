import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import ImageSlot from "./ui/ImageSlot";
import ParallaxTile from "./ui/ParallaxTile";
import { MEDIA } from "@/lib/media";

const FEATURES = [
  {
    title: "Deep Yogic Knowledge, Made Simple",
    description:
      "Learn the principles of Ashtanga Yoga through stories, practical exercises and everyday reflection.",
    image: MEDIA.knowledgeBook,
    label: "Yogic Philosophy",
  },
  {
    title: "Healing Meal Plans & Balanced Diet",
    description:
      "Guidance on balanced nutrition and mindful eating, adapted to individual needs rather than a one-size-fits-all plan.",
    image: MEDIA.dietPlanImage,
    label: "Balanced Nutrition",
  },
];

export default function KnowledgeFeature() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container className="grid sm:grid-cols-2 gap-6 lg:gap-8">
        {FEATURES.map((feature, i) => (
          <Reveal
            key={feature.title}
            delay={i * 0.1}
            className="flex flex-col gap-6 rounded-[1.75rem] bg-ink-card border border-hairline p-7 sm:p-9"
          >
            <ParallaxTile className="aspect-[5/4] rounded-2xl" range={["-10%", "10%"]}>
              <ImageSlot
                src={feature.image}
                alt={feature.title}
                label={feature.label}
                className="h-full w-full"
              />
            </ParallaxTile>
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-cream">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-cream-dim">
                {feature.description}
              </p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
