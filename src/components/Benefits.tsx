import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { RevealGroup } from "./ui/Reveal";
import { BENEFITS } from "@/lib/data";

export default function Benefits() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Benefits of a Consistent Yogic Lifestyle"
          description="What tends to shift, gently and gradually, with regular practice."
          align="center"
        />

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.08}>
          {BENEFITS.map((benefit) => (
            <Reveal key={benefit.title} className="flex flex-col items-center text-center gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold-soft text-gold">
                {benefit.icon}
              </div>
              <h3 className="font-display text-lg text-cream">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-cream-dim max-w-[15rem]">
                {benefit.description}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
