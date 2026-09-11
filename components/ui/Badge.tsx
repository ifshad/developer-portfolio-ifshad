import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-line px-2.5 py-1 font-mono text-[12px] leading-none text-sage",
        className
      )}
    >
      {children}
    </span>
  );
}
