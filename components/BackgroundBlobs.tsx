"use client";
import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary blue blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full -top-52 -left-52 opacity-[0.18] blur-[120px]"
        style={{ background: "#3b82f6" }}
        animate={{
          x: [0, 50, -30, 20, 0],
          y: [0, 30, -40, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary violet blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full top-1/2 -right-36 opacity-[0.18] blur-[120px]"
        style={{ background: "#8b5cf6" }}
        animate={{
          x: [-40, 30, 50, -20, -40],
          y: [20, -30, 10, 40, 20],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Tertiary pink blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bottom-24 left-1/4 opacity-[0.15] blur-[120px]"
        style={{ background: "#ec4899" }}
        animate={{
          x: [30, -50, 20, 40, 30],
          y: [-20, 40, -30, -10, -20],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Additional cyan accent blob */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full top-1/4 right-1/3 opacity-[0.12] blur-[120px]"
        style={{ background: "#06b6d4" }}
        animate={{
          x: [0, -40, 60, -30, 0],
          y: [0, 50, -20, 30, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
