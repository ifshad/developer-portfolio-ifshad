"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/data/principles";
import { viewport } from "@/lib/motion";

export function EngineeringApproach() {
  return (
    <Section id="approach">
      <SectionHeading
        title="How I engineer"
        description="I care about clear boundaries, practical architecture, measurable performance, and software that stays maintainable after it reaches production."
      />

      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {principles.map((principle, i) => (
          <motion.div
            key={principle.title}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ delay: (i % 2) * 0.08 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.4 }}
              className="block h-2.5 w-2.5 rounded-[2px] bg-forest-light"
            />
            <motion.h3
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
              className="mt-4 font-display text-lg font-semibold text-bone"
            >
              {principle.title}
            </motion.h3>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
              className="mt-2 max-w-prose text-[15px] leading-relaxed text-sage"
            >
              {principle.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
