"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { RevealGroup } from "./ui/Reveal";
import { ICON_MAP } from "./decor/iconMap";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Approach to Holistic Wellness"
          description="Four pillars that work together to support the body, mind and Souls."
        />

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6" stagger={0.08}>
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.number}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex flex-col gap-5 rounded-[1.5rem] bg-ink-card border border-hairline p-7 sm:p-8 hover:border-gold-soft transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-3xl text-gold/40 group-hover:text-gold/70 transition-colors">
                    {service.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft text-gold transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-display text-xl leading-snug text-cream">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-[0.95rem] leading-relaxed text-cream-dim">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
