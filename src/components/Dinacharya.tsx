import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { DINACHARYA } from "@/lib/data";

const LEFT_X = 42;
const RIGHT_X = 58;
const ROW = 100;

function buildRoadPath(n: number) {
  const points = Array.from({ length: n }, (_, i) => ({
    x: i % 2 === 0 ? LEFT_X : RIGHT_X,
    y: i * ROW + ROW / 2,
  }));
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const cur = points[i];
    const midY = (prev.y + cur.y) / 2;
    d += ` C ${prev.x} ${midY}, ${cur.x} ${midY}, ${cur.x} ${cur.y}`;
  }
  return d;
}

export default function Dinacharya() {
  const n = DINACHARYA.length;
  const path = buildRoadPath(n);

  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Daily Rhythm"
          title="A Yogic Daily Rhythm"
          description="Dinacharya — a simple, repeatable rhythm for the day, from waking to sleep, as one continuous path."
          align="center"
        />

        <div className="relative mx-auto max-w-4xl w-full">
          {/* Mobile: simple straight line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-hairline sm:hidden" />

          {/* Desktop: winding road */}
          <svg
            className="hidden sm:block absolute inset-0 h-full w-full text-gold-soft"
            viewBox={`0 0 100 ${n * ROW}`}
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={path}
              stroke="currentColor"
              strokeWidth={1.4}
              strokeDasharray="5 6"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="relative flex flex-col gap-14 sm:gap-20">
            {DINACHARYA.map((step, i) => {
              const onLeft = i % 2 === 0;
              return (
                <Reveal key={step.time} delay={i * 0.03} as="li">
                  <div className="relative flex items-start gap-6 sm:gap-0">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon text-ink-card ring-4 ring-cream font-display font-semibold text-sm sm:hidden">
                      {i + 1}
                    </div>

                    <div
                      className={`hidden sm:flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-maroon text-ink-card ring-4 ring-cream font-display font-semibold text-sm ${
                        onLeft ? "sm:left-[42%] sm:-translate-x-1/2" : "sm:left-[58%] sm:-translate-x-1/2"
                      }`}
                    >
                      {i + 1}
                    </div>

                    <div
                      className={`w-full rounded-2xl bg-ink-card border border-hairline px-6 py-5 sm:w-[36%] sm:shrink-0 ${
                        onLeft ? "sm:mr-auto" : "sm:ml-auto"
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                        {step.time}
                      </p>
                      <h3 className="mt-1 font-display text-lg text-cream">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-cream-dim">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
