"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechStack } from "./TechStack";
import { fadeUp, viewport } from "@/lib/motion";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current?.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
      <Link
        href={`/work/${project.slug}`}
        ref={ref}
        onMouseMove={handleMove}
        className="group relative block overflow-hidden rounded-md border border-line bg-surface p-6 transition-colors duration-300 hover:border-sage/50 sm:p-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgba(136,168,150,0.08), transparent 70%)",
          }}
        />
        <div className="relative flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-semibold text-bone sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-[12px] text-sage">
                {project.role}
                {project.period && ` · ${project.period}`}
              </p>
            </div>
            <ArrowUpRight
              className="mt-1 shrink-0 text-sage transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bone"
              size={18}
            />
          </div>
          <p className="max-w-prose text-[15px] leading-relaxed text-sage">
            {project.summary}
          </p>
          <TechStack technologies={project.technologies.slice(0, 4)} />
        </div>
      </Link>
    </motion.div>
  );
}
