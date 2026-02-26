"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
children: ReactNode;
delay?: number;
className?: string;
direction?: "up" | "down" | "left" | "right";
duration?: number;
stagger?: boolean;
}

export default function SectionReveal({
children,
delay = 0,
className,
direction = "up",
duration = 0.6,
stagger = false,
}: SectionRevealProps) {
const directionMap = {
up: { y: 30, x: 0 },
down: { y: -30, x: 0 },
left: { x: 30, y: 0 },
right: { x: -30, y: 0 },
};

// ✅ FIX: always type correctly
const containerVariants: Variants | undefined = stagger
? {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.1,
delayChildren: delay,
},
},
}
: undefined;

const itemVariants: Variants | undefined = stagger
? {
hidden: { opacity: 0, ...directionMap[direction] },
visible: {
opacity: 1,
x: 0,
y: 0,
transition: { duration, ease: "easeOut" },
},
}
: undefined;

return (
<motion.div
initial={stagger ? "hidden" : { opacity: 0, ...directionMap[direction] }}
whileInView={stagger ? "visible" : { opacity: 1, x: 0, y: 0 }}
variants={containerVariants}
viewport={{ once: true, margin: "-60px" }}
transition={!stagger ? { duration, delay, ease: "easeOut" } : undefined}
className={className}
>
{stagger && Array.isArray(children) ? (
children.map((child, idx) => (
<motion.div key={idx} variants={itemVariants}>
{child}
</motion.div>
))
) : stagger ? (
<motion.div variants={itemVariants}>{children}</motion.div>
) : (
children
)}
</motion.div>
);
}
