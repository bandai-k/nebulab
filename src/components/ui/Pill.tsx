import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PillProps extends HTMLAttributes<HTMLSpanElement> {}

export default function Pill({ className, children, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
