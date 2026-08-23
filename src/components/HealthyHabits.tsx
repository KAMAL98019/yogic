import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { RevealGroup } from "./ui/Reveal";
import { HEALTHY_HABITS } from "@/lib/data";

export default function HealthyHabits() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Everyday Living"
          title="Healthy Habits for Everyday Living"
          description="Small, repeatable practices that support the body and mind — adapt them to what fits your life."
        />

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {HEALTHY_HABITS.map((habit) => (
            <Reveal
              key={habit.title}
              className="flex gap-4 rounded-2xl bg-ink-card border border-hairline p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-soft text-gold">
                {habit.icon}
              </div>
              <div>
                <h3 className="font-display text-lg text-cream">{habit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream-dim">
                  {habit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal className="rounded-2xl border border-gold-soft bg-ink-card px-6 py-5 text-sm text-cream-dim max-w-3xl">
          Lifestyle practices should be adapted to individual needs and
          medical guidance. They are shared here for general wellness
          awareness, not as a substitute for personalised medical advice.
        </Reveal>
      </Container>
    </section>
  );
}
