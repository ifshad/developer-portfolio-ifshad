import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education" />

      <Reveal className="mt-12">
        <h3 className="font-display text-xl font-semibold text-bone">
          {education.primary.degree}
        </h3>
        <p className="mt-1 text-[15px] text-sage">
          {education.primary.institution} · {education.primary.period}
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-6 border-t border-line pt-6">
        <p className="text-[13px] text-sage">{education.secondary.join(" · ")}</p>
      </Reveal>
    </Section>
  );
}
