"use client";
import { motion } from "framer-motion";

export default function CinematicFooter() {
  return (
    <motion.div
      className="relative h-px overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient divider with glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.3) 20%, rgba(59,130,246,0.4) 50%, rgba(139,92,246,0.3) 80%, transparent 100%)",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer glow */}
      <motion.div
        className="absolute -top-1 -bottom-1 inset-x-0 blur-md"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.2) 20%, rgba(59,130,246,0.2) 50%, rgba(139,92,246,0.2) 80%, transparent 100%)",
        }}
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />
    </motion.div>
  );
}
