import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 max-w-2xl ${alignClass}`}>
      {eyebrow && <Eyebrow label={eyebrow} align={align} />}
      <Reveal delay={0.08}>
        <h2 className="heading-caps text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-cream">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="text-base sm:text-lg leading-relaxed text-cream-dim">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
