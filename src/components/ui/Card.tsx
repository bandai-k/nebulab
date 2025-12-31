import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlight";
}

export default function Card({
  className,
  variant = "default",
  children,
  ...props
}: CardProps) {
  const variants = {
    default:
      "rounded-2xl border border-white/10 bg-white/5",
    highlight:
      "rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
  };

  return (
    <div className={cn(variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
