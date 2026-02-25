"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer border-0 outline-none focus-visible:ring-2 focus-visible:ring-violet-400";

    const variants = {
      primary:
        "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:-translate-y-0.5",
      secondary:
        "glass text-slate-200 hover:border-violet-500/50 hover:-translate-y-0.5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-7 py-3.5 text-sm",
      lg: "px-8 py-4 text-base",
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(base, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
