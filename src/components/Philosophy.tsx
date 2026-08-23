"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import ImageSlot from "./ui/ImageSlot";
import { MEDIA } from "@/lib/media";

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative py-28 sm:py-32 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y }} className="absolute inset-[-15%]">
          <ImageSlot
            src={MEDIA.quoteBackground}
            alt="Fresh, mindful, plant-forward food"
            label="Fresh &amp; Mindful Living"
            className="h-full w-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/50" />
      </div>

      <Container className="max-w-3xl flex flex-col items-center text-center gap-6">
        <Eyebrow label="Philosophy &amp; Healing" align="center" />
        <Reveal delay={0.06} className="relative">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-8xl text-gold/25 select-none">
            &ldquo;
          </span>
          <h2 className="font-display font-light italic text-3xl sm:text-4xl lg:text-5xl leading-[1.25] text-cream">
            Keep a Clean Body Within
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-2 text-base sm:text-lg leading-relaxed text-cream-dim max-w-xl mx-auto">
            We focus on mindful lifestyle practices and inner wellbeing —
            encouraging healthier habits around digestion, food, movement and
            daily routines. These are lifestyle practices meant to complement,
            not replace, individualised medical care.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
