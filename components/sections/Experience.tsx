"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechStack } from "@/components/projects/TechStack";
import { experience } from "@/data/experience";
import { fadeUp, viewport } from "@/lib/motion";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Professional experience"
        description="Where the engineering happened, and what it involved."
      />

      <div className="mt-12 flex flex-col divide-y divide-line border-y border-line">
        {experience.map((role, i) => (
          <motion.div
            key={role.company}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            className="grid gap-4 py-8 sm:grid-cols-[10rem_1fr] sm:gap-10"
          >
            <motion.p
              variants={fadeUp}
              transition={{ delay: i * 0.1 + 0.15 }}
              className="font-mono text-[13px] text-sage"
            >
              {role.period}
            </motion.p>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-bone">
                  {role.role} · {role.company}
                </h3>
                <p className="mt-1 text-[13px] text-sage">{role.location}</p>
              </div>

              <p className="max-w-prose text-[15px] leading-relaxed text-sage">
                {role.context}
              </p>

              <ul className="flex flex-col gap-2">
                {role.contributions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-bone"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest-light" />
                    {item}
                  </li>
                ))}
              </ul>

              <TechStack technologies={role.technologies} />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
