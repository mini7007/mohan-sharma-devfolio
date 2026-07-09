"use client";

import React from "react";
import { motion } from "framer-motion";

interface MascotSpeechBubbleProps {
  message: string;
  type?: "neutral" | "happy" | "curious" | "warning";
}

/**
 * Speech bubble component for mascot communication.
 */
export default function MascotSpeechBubble({
  message,
  type = "neutral",
}: MascotSpeechBubbleProps) {
  const typeStyles = {
    neutral: "bg-slate-800 border-slate-600",
    happy: "bg-green-900/40 border-green-500/50",
    curious: "bg-blue-900/40 border-blue-500/50",
    warning: "bg-yellow-900/40 border-yellow-500/50",
  };

  return (
    <motion.div
      className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-50 ${typeStyles[type]} border backdrop-blur-sm rounded-lg px-3 py-2 whitespace-nowrap text-sm font-medium text-white shadow-lg`}
      initial={{ opacity: 0, y: -10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {message}

      {/* Tail pointing down */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800" />
    </motion.div>
  );
}
