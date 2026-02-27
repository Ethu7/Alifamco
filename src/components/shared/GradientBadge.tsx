import { cn } from "@/lib/utils";

interface GradientBadgeProps {
  variant?: "oak" | "amber" | "cyan";
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  oak:
    "bg-oak-500/10 text-oak-400 border-oak-500/20",
  amber:
    "bg-amber-500/10 text-amber-400 border-amber-500/20",
  cyan:
    "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
};

export function GradientBadge({
  variant = "oak",
  children,
  className,
}: GradientBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
