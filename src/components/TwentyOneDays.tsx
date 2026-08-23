"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { CURRICULUM } from "@/lib/data";

export default function TwentyOneDays() {
  const [activeWeek, setActiveWeek] = useState(0);
  const week = CURRICULUM[activeWeek];

  return (
    <section id="21-days" className="relative py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="21-Day Yogic Journey"
          title="21 Days to Build a Yogic Routine"
          description="A simple daily curriculum of knowledge, practice and relaxation to build a lasting habit."
        />

        <div className="flex gap-2 rounded-full bg-ink-card border border-hairline p-1.5 w-fit mx-auto sm:mx-0">
          {CURRICULUM.map((w, i) => (
            <button
              key={w.week}
              onClick={() => setActiveWeek(i)}
              className={`relative rounded-full px-5 sm:px-6 py-2.5 text-sm font-semibold transition-colors ${
                activeWeek === i ? "text-cream" : "text-cream-faint hover:text-cream"
              }`}
            >
              {activeWeek === i && (
                <motion.span
                  layoutId="week-pill"
                  className="absolute inset-0 rounded-full bg-maroon"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{w.week}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {week.days.map((day) => (
              <div
                key={day.day}
                className="flex flex-col gap-3 rounded-2xl bg-ink-card border border-hairline p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-cream font-display text-sm">
                    {day.day}
                  </div>
                  <h3 className="font-display text-lg text-cream">Day {day.day}</h3>
                </div>
                <ul className="flex flex-col gap-1.5 text-sm text-cream-dim">
                  {day.knowledge && (
                    <li>
                      <span className="font-semibold text-gold">Knowledge — </span>
                      {day.knowledge}
                    </li>
                  )}
                  {day.practice?.map((p) => (
                    <li key={p}>
                      <span className="font-semibold text-gold">Practice — </span>
                      {p}
                    </li>
                  ))}
                  {day.extra && (
                    <li>
                      <span className="font-semibold text-gold">{day.extra.label} — </span>
                      {day.extra.value}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
