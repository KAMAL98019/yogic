"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import ImageSlot from "./ui/ImageSlot";
import { MEDIA } from "@/lib/media";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-28 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y }} className="absolute inset-[-15%]">
          <ImageSlot
            src={MEDIA.ctaBackground}
            alt="Calm holistic wellness setting"
            label="Begin the Journey"
            className="h-full w-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-footer/85" />
      </div>

      <Container className="flex flex-col items-center text-center gap-6 max-w-2xl">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-footer-ink">
            Begin Your Journey Towards Better Wellbeing
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base sm:text-lg leading-relaxed text-footer-ink/80">
            Discover a holistic approach that brings together healthcare,
            mindful living, yoga and everyday wellness practices.
          </p>
        </Reveal>
        <Reveal delay={0.16} className="flex flex-wrap justify-center gap-4 pt-2">
          <Button href="#contact" variant="primary">
            Contact the Clinic
          </Button>
          <Button href="#yogic-lifestyle" variant="ghost" className="!border-footer-ink/30 !text-footer-ink hover:!bg-footer-ink/10">
            Explore Our Approach
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
