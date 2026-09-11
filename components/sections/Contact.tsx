import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" className="pb-28 sm:pb-36">
      <Reveal className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold leading-tight text-bone sm:text-4xl">
          Let&apos;s build something useful.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-sage">
          Open to conversations about backend systems, architecture, and
          interesting engineering problems.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="group relative mt-8 inline-block font-display text-2xl font-semibold text-bone sm:text-3xl"
        >
          {site.email}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 ease-out group-hover:w-full" />
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {site.socials.map((social) => (
            <Button key={social.label} asChild variant="outline">
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </Button>
          ))}
          <Button asChild variant="ghost">
            <a href={site.resumeUrl}>Resume</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
