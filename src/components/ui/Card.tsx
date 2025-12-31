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
      "rounded-2xl border border-[#ddc9a3] bg-white/60 backdrop-blur-sm",
    highlight:
      "rounded-2xl border border-[#d4a574] bg-white/70 backdrop-blur-sm shadow-sm",
  };

  return (
    <div className={cn(variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
