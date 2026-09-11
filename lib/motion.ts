import type { Variants } from "framer-motion";

export { useReducedMotion } from "framer-motion";

export const viewport = { once: true, margin: "-80px" } as const;

const ease = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export function stagger(gap = 0.12): Variants {
  return { show: { transition: { staggerChildren: gap } } };
}
