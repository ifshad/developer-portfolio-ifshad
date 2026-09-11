import Image from "next/image";
import portrait from "@/public/Images/Ifshad_01.png";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fadeLeft } from "@/lib/motion";

export function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" />

      <div className="mt-12 grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-14">
        <Reveal variants={fadeLeft}>
          <Image
            src={portrait}
            alt="Portrait of Ifshad Hasan Sharan"
            width={200}
            height={200}
            className="h-44 w-44 rounded-sm border border-line object-cover grayscale-[15%] sm:h-48 sm:w-48"
            priority={false}
          />
        </Reveal>

        <Reveal className="max-w-prose">
          <p className="text-[15px] leading-relaxed text-sage">
            I started with a B.Sc. in Mechatronics Engineering at RUET, working
            at the intersection of hardware, control systems, and software —
            a background that shaped how I think about systems under real
            constraints.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-sage">
            That led me into software engineering, and specifically toward
            backend systems: APIs, databases, and the infrastructure that
            keeps them running in production. I&apos;ve spent most of my time
            since then debugging real systems, integrating third-party
            services, and making architectural decisions that have to hold up
            after launch, not just in a demo.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-sage">
            I&apos;m currently focused on growing from building individual
            systems toward owning architecture and technical direction at a
            larger scale.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
