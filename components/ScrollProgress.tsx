"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Premium scroll progress indicator
 * Shows user progress through page with subtle gradient bar
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 z-[5000] bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400"
      style={{
        width: `${progress}%`,
        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
}
