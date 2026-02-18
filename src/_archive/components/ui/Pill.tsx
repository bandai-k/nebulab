import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PillProps extends HTMLAttributes<HTMLSpanElement> {}

export default function Pill({ className, children, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#ddc9a3] bg-[#fef3d9]/80 px-3 py-1 text-xs text-[#5c4d3c] backdrop-blur",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
