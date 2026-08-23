"use client";

import { useRef, ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ParallaxTile({
  className = "",
  range = ["-8%", "8%"],
  children,
}: {
  className?: string;
  range?: [string, string];
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : range);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[12%] h-[124%]">
        {children}
      </motion.div>
    </div>
  );
}
