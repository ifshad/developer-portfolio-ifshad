import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function SelectedWork() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <Section id="work">
      <SectionHeading
        title="Selected work"
        description="A selection of systems I've helped build, architect, and improve."
      />

      <div className="mt-12 flex flex-col gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {supporting.length > 0 && (
        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
          {supporting.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex items-center justify-between gap-4 py-2 text-bone transition-colors hover:text-sage"
            >
              <span className="text-[15px]">
                {project.title}{" "}
                <span className="text-sage">— {project.role}</span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-sage transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
