import { Badge } from "@/components/ui/Badge";

export function TechStack({ technologies }: { technologies: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <li key={tech}>
          <Badge>{tech}</Badge>
        </li>
      ))}
    </ul>
  );
}
