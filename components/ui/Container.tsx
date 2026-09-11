import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "container relative lg:border-l lg:border-line lg:pl-16",
        className
      )}
    >
      {children}
    </div>
  );
}
