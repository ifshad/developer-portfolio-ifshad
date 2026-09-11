import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { TechStack } from "./TechStack";

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-sage transition-colors hover:text-bone"
          >
            <ArrowLeft size={14} /> Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-6 max-w-3xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-bone sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-2 font-mono text-sm text-sage">
            {project.role}
            {project.period && ` · ${project.period}`}
          </p>
          <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-sage">
            {project.summary}
          </p>

          {project.links && project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Button key={link.url} asChild variant="outline" size="sm">
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="flex max-w-prose flex-col gap-14">
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-bone">Problem</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-sage">{project.problem}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-xl font-semibold text-bone">
                Engineering challenges
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3 text-[15px] leading-relaxed text-sage">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest-light" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-xl font-semibold text-bone">Solution</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-sage">{project.solution}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-xl font-semibold text-bone">Outcome</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {project.outcome.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-sage">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-xl font-semibold text-bone">Technology</h2>
              <div className="mt-3">
                <TechStack technologies={project.technologies} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="mb-4 font-display text-xl font-semibold text-bone">Architecture</h2>
            <ArchitectureDiagram stages={project.architecture} />
          </Reveal>
        </div>
      </Container>
    </article>
  );
}
