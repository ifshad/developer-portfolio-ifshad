"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
    >
      <Container>
        <motion.span
          aria-hidden
          initial={{ backgroundColor: "#1C2621" }}
          whileInView={{ backgroundColor: "#1D4533" }}
          viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
          transition={{ duration: 0.5 }}
          className="absolute -left-[5px] top-2 hidden h-2.5 w-2.5 rounded-[2px] lg:block"
        />
        {children}
      </Container>
    </section>
  );
}
