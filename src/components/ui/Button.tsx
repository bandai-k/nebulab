import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", as: Component = "button", ...props }, ref) => {
    const variants = {
      primary: "bg-[#b87333] text-white hover:bg-[#a0622b] shadow-sm",
      secondary: "border-2 border-[#8b7355] bg-transparent text-[#5c4d3c] hover:bg-[#8b7355]/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-5 py-3 text-sm",
      lg: "px-6 py-4 text-base",
    };

    const classes = cn(
      "inline-flex items-center justify-center rounded-xl font-semibold transition-colors",
      variants[variant],
      sizes[size],
      className
    );

    if (Component === "a") {
      return <a ref={ref as any} className={classes} {...(props as any)} />;
    }

    return <button ref={ref as any} className={classes} {...(props as any)} />;
  }
);

Button.displayName = "Button";

export default Button;
