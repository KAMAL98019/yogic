import Container from "./ui/Container";
import ImageSlot from "./ui/ImageSlot";
import Eyebrow from "./ui/Eyebrow";
import ParallaxTile from "./ui/ParallaxTile";
import Reveal, { RevealGroup } from "./ui/Reveal";
import { EDUCATION, EXPERIENCE, STATS } from "@/lib/data";
import { MEDIA } from "@/lib/media";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-32">
      <Container className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-16 items-start">
        <Reveal className="order-1 lg:order-none">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-[26rem] sm:h-[30rem]">
            <ParallaxTile className="col-start-1 row-start-1 rounded-xl" range={["-8%", "8%"]}>
              <ImageSlot
                src={MEDIA.aboutGalleryOne}
                alt="Clinic consultation room"
                label="Clinic &amp; Practice"
                className="h-full w-full"
              />
            </ParallaxTile>
            <ParallaxTile className="col-start-2 row-start-1 row-span-2 rounded-xl" range={["-5%", "5%"]}>
              <ImageSlot
                src={MEDIA.aboutGalleryTwo}
                alt="Traditional yogasana practice"
                label="Yogasana Practice"
                className="h-full w-full"
              />
            </ParallaxTile>
            <ParallaxTile className="col-start-1 row-start-2 rounded-xl" range={["-12%", "12%"]}>
              <ImageSlot
                src={MEDIA.aboutGalleryThree}
                alt="Natural homeopathic remedies"
                label="Natural Remedies"
                className="h-full w-full"
              />
            </ParallaxTile>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Eyebrow label="About the Founder" />
            <Reveal delay={0.08}>
              <h2 className="heading-caps text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-cream">
                Dr. Anbarasi Subramaniam
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-gold font-medium tracking-wide">
                BHMS., MD.(AM). &middot; Reg No. 4359
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-base sm:text-lg leading-relaxed text-cream-dim max-w-xl">
                Founder of Sri Sai Ram Homeopathy Clinic, established in 2012.
                Dedicated to helping people move towards better health through
                homeopathy, natural healing techniques, lifestyle awareness
                and holistic wellness practices.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="grid sm:grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <Reveal
                key={stat.label}
                className="rounded-2xl border border-hairline bg-ink-card px-5 py-6 text-center sm:text-left"
              >
                <p className="font-display text-2xl text-gold">{stat.value}</p>
                <p className="mt-1 text-sm text-cream-faint">{stat.label}</p>
              </Reveal>
            ))}
          </RevealGroup>

          <div className="grid sm:grid-cols-2 gap-8 pt-2">
            <Reveal delay={0.05}>
              <h3 className="font-display text-lg text-cream mb-3">Education</h3>
              <ul className="flex flex-col gap-2.5">
                {EDUCATION.map((item) => (
                  <li key={item} className="flex gap-3 text-sm sm:text-[0.95rem] text-cream-dim leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-lg text-cream mb-3">Professional Experience</h3>
              <ul className="flex flex-col gap-2.5">
                {EXPERIENCE.map((item) => (
                  <li key={item.place} className="flex gap-3 text-sm sm:text-[0.95rem] text-cream-dim leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>
                      <span className="text-cream font-medium">{item.years}</span> — {item.place}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
