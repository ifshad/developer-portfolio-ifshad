"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { site } from "@/data/site";
import { fadeUp, stagger } from "@/lib/motion";

const heroStages = [
  "Client",
  "API",
  ["PostgreSQL", "Redis", "Queue"],
  "External Services",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 pt-40 pb-20 sm:pt-48 sm:pb-28"
    >
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.1)}
          className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <motion.p variants={fadeUp} className="eyebrow">
              {site.name}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] text-bone sm:text-5xl lg:text-[3.25rem]"
            >
              Building reliable backend systems and production-ready
              applications.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-prose text-[17px] leading-relaxed text-sage"
            >
              I work across backend engineering, system architecture,
              databases, integrations, and infrastructure to build software
              that can evolve with real-world requirements.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-4">
              <Badge>{site.focus}</Badge>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <Button asChild>
                <a href="#work">View my work</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Get in touch</a>
              </Button>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:justify-self-end">
            <ArchitectureDiagram stages={heroStages} className="max-w-xs" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
