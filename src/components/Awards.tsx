import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { MedalIcon } from "./decor/Icons";
import { AWARDS, CONTRIBUTIONS } from "@/lib/data";

export default function Awards() {
  return (
    <section id="recognition" className="relative py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & Recognition"
          description="Milestones in a decade-long commitment to community health."
        />

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-14">
          <ol className="relative flex flex-col gap-8 border-l border-hairline pl-8">
            {AWARDS.map((award) => (
              <Reveal key={award.title} as="li" className="relative">
                <span className="absolute -left-[38px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-maroon text-ink-card">
                  <MedalIcon className="w-3.5 h-3.5" />
                </span>
                <p className="text-xs font-semibold tracking-wide uppercase text-gold">
                  {award.year}
                </p>
                <h3 className="mt-1 font-display text-lg sm:text-xl text-cream">
                  {award.title}
                </h3>
                <p className="mt-1 text-sm text-cream-dim">{award.org}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="rounded-[1.5rem] bg-ink-card border border-hairline p-7 sm:p-8 h-fit">
            <h3 className="font-display text-lg text-cream mb-5">
              Professional &amp; Community Contributions
            </h3>
            <ul className="flex flex-col gap-5">
              {CONTRIBUTIONS.map((c) => (
                <li key={c.org}>
                  <p className="text-sm font-semibold text-gold">{c.role}</p>
                  <p className="text-sm text-cream-dim mt-0.5">{c.org}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
