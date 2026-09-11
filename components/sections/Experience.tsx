"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-bone">
                  {role.role} ·{" "}
                  {role.companyUrl ? (
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 transition-colors hover:text-sage"
                    >
                      {role.company}
                      <ArrowUpRight
                        size={14}
                        className="text-sage transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    role.company
                  )}
                </h3>
                <p className="mt-1 text-[13px] text-sage">{role.location}</p>
              </div>

              <div className="flex flex-col gap-6">
                {role.projects.map((project, pi) => (
                  <div key={project.name ?? pi} className="flex flex-col gap-3">
                    {project.name && (
                      <h4 className="text-[15px] font-medium text-bone">
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-1 transition-colors hover:text-sage"
                          >
                            {project.name}
                            <ArrowUpRight
                              size={13}
                              className="text-sage transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </a>
                        ) : (
                          project.name
                        )}
                      </h4>
                    )}

                    <ul className="flex flex-col gap-2">
                      {project.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-[15px] leading-relaxed text-sage"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest-light" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {project.tech && project.tech.length > 0 && (
                      <TechStack technologies={project.tech} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
