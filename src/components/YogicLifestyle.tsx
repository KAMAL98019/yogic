import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ImageSlot from "./ui/ImageSlot";
import ParallaxTile from "./ui/ParallaxTile";
import { ASHTANGA_LIMBS } from "@/lib/data";
import { MEDIA } from "@/lib/media";

export default function YogicLifestyle() {
  return (
    <section id="yogic-lifestyle" className="relative py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="The Eight Limbs"
          title="The Yogic Way of Living"
          description="Ashtanga Yoga's eight limbs move from how we relate to others, inward toward stillness — a gentle map, not a strict checklist."
          align="center"
        />

        <div className="relative mx-auto max-w-5xl w-full">
          <div className="absolute left-[19px] sm:left-1/2 top-2 bottom-2 w-px bg-hairline sm:-translate-x-1/2" />
          <ol className="flex flex-col gap-14 sm:gap-20">
            {ASHTANGA_LIMBS.map((limb, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={limb.step} as="li">
                  <div
                    className={`relative flex flex-col sm:flex-row gap-6 sm:gap-10 ${
                      reversed ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon text-ink-card font-semibold text-sm sm:absolute sm:left-1/2 sm:top-0 sm:-translate-x-1/2">
                      {limb.step}
                    </div>

                    <div className="sm:w-[46%] pl-14 sm:pl-0">
                      <ParallaxTile className="aspect-[16/10] rounded-2xl" range={["-8%", "8%"]}>
                        <ImageSlot
                          src={MEDIA[limb.media]}
                          alt={`${limb.sanskrit} — ${limb.title}`}
                          label={`${limb.sanskrit} · ${limb.title}`}
                          className="h-full w-full"
                        />
                      </ParallaxTile>

                      <div
                        className={`mt-5 flex flex-col gap-3 ${reversed ? "sm:text-right sm:items-end" : ""}`}
                      >
                        <div className={`flex items-center gap-3 ${reversed ? "sm:flex-row-reverse" : ""}`}>
                          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-soft text-gold shrink-0">
                            {limb.icon}
                          </div>
                          <div>
                            <h3 className="font-display text-xl text-cream">{limb.sanskrit}</h3>
                            <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                              {limb.title}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm sm:text-[0.95rem] leading-relaxed text-cream-dim">
                          {limb.description}
                        </p>
                        <div className="rounded-xl bg-ink-card border border-hairline px-4 py-3 w-full">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-gold">
                            Self Observation
                          </p>
                          <p className="mt-1 text-sm text-cream-dim leading-snug">{limb.reflection}</p>
                        </div>
                      </div>
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
