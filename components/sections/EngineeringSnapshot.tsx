"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";
import { fadeLeft, stagger, viewport } from "@/lib/motion";

export function EngineeringSnapshot() {
  return (
    <Section id="snapshot">
      <SectionHeading
        title="Engineering snapshot"
        description="What I reach for day to day, grouped the way it actually gets used."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.08)}
        className="mt-12 divide-y divide-line border-y border-line"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            variants={fadeLeft}
            className="flex flex-col gap-2 py-5 sm:flex-row sm:gap-10 sm:py-6"
          >
            <p className="w-40 shrink-0 font-mono text-[13px] text-sage">
              {group.label}
            </p>
            <p className="text-[15px] leading-relaxed text-bone">
              {group.items.join(" · ")}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
