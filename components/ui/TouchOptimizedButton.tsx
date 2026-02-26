"use client";
import { ReactNode, useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type TouchOptimizedButtonProps = Omit<
HTMLMotionProps<"button">,
"children"

> & {
> children: ReactNode;
> variant?: "primary" | "secondary" | "glass";
> size?: "sm" | "md" | "lg";
> icon?: ReactNode;
> };

export default function TouchOptimizedButton({
children,
variant = "primary",
size = "md",
icon,
className = "",
...props
}: TouchOptimizedButtonProps) {
const [isPressed, setIsPressed] = useState(false);
const buttonRef = useRef<HTMLButtonElement>(null);

const sizeClasses = {
sm: "px-4 py-2 text-sm min-h-[40px]",
md: "px-6 py-3 text-base min-h-[44px]",
lg: "px-8 py-4 text-lg min-h-[48px]",
};

const variantClasses = {
primary:
"bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] shadow-[0_0_30px_rgba(139,92,246,0.3)]",
secondary:
"bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] shadow-[0_0_30px_rgba(34,197,94,0.3)]",
glass: "glass text-slate-200 font-semibold hover:border-violet-500/50",
};

return (
<motion.button
ref={buttonRef}
whileTap={{ scale: 0.95 }}
onTouchStart={() => setIsPressed(true)}
onTouchEnd={() => setIsPressed(false)}
className={`         relative inline-flex items-center justify-center gap-2 rounded-xl
        transition-all duration-200 active:scale-95
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
style={{
WebkitTapHighlightColor: "transparent",
}}
{...props}
>
{icon && <span className="flex-shrink-0">{icon}</span>} <span>{children}</span>
</motion.button>
);
}
