"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
