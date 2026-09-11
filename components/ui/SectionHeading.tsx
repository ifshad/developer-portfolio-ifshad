import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="font-display text-3xl font-semibold leading-tight text-bone sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-sage">
          {description}
        </p>
      )}
    </div>
  );
}
