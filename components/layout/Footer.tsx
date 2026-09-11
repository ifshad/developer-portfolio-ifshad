import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-10 text-sm text-sage sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-6">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-bone"
            >
              {social.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-bone">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
