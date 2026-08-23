"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Eyebrow from "./ui/Eyebrow";
import ImageSlot from "./ui/ImageSlot";
import { LotusIcon } from "./decor/Icons";
import { MEDIA } from "@/lib/media";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "22%"]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden min-h-[92vh] flex items-center pt-24 pb-20 sm:pt-28 sm:pb-24"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[15%] -z-20 h-[130%]">
        <ImageSlot
          src={MEDIA.heroBackground}
          alt="Sri Sai Ram Homeopathy Clinic"
          label="Hero Background"
          priority
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-ink/35 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/30 via-transparent to-transparent" />

      <motion.div
        className="pointer-events-none absolute top-[18%] right-[10%] hidden sm:block text-gold/25"
        animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <LotusIcon className="w-24 h-24" />
      </motion.div>

      <Container className="relative flex flex-col gap-7 max-w-3xl">
        <motion.div {...fadeUp(0)}>
          <Eyebrow label="Holistic Health · Yoga · Natural Wellness" />
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-light text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-cream"
        >
          A Journey Towards Better Health, <em className="italic text-gold">Balance</em> &amp;
          Inner Wellbeing
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="max-w-xl text-base sm:text-lg leading-relaxed text-cream-dim italic font-display"
        >
          Dr. Anbarasi Subramaniam brings together homeopathy, traditional
          yogasana, meditation and everyday lifestyle awareness — a holistic
          approach to feeling steadier, calmer and more at home in your own
          body.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-6 pt-3">
          <Button href="#contact" variant="primary">
            Contact Clinic
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
