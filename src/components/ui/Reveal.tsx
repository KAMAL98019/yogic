"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "li";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  once = true,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className = "",
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}
