"use client";

import { motion } from "framer-motion";
import { useReducedMotion, fadeUp, stagger, viewport } from "@/lib/motion";
import type { ArchitectureStage } from "@/data/projects";
import { cn } from "@/lib/utils";

function Node({ label }: { label: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-sm border border-line bg-surface px-3.5 py-2 text-center font-mono text-[12px] leading-tight text-bone"
    >
      {label}
    </motion.div>
  );
}

function Connector({ index, reduced }: { index: number; reduced: boolean }) {
  return (
    <div className="relative mx-auto h-8 w-px bg-line">
      {!reduced && (
        <motion.span
          className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-sage"
          animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 1.4,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

export function ArchitectureDiagram({
  stages,
  className,
}: {
  stages: ArchitectureStage[];
  className?: string;
}) {
  const reduced = Boolean(useReducedMotion());

  return (
    <motion.div
      className={cn("w-full max-w-sm", className)}
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {stages.map((stage, i) => (
        <div key={i}>
          {Array.isArray(stage) ? (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {stage.map((label) => (
                <Node key={label} label={label} />
              ))}
            </div>
          ) : (
            <Node label={stage} />
          )}
          {i < stages.length - 1 && <Connector index={i} reduced={reduced} />}
        </div>
      ))}
    </motion.div>
  );
}
