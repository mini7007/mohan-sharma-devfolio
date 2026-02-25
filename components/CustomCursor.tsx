"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Stop moving after 100ms of no movement
      setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isMoving ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Outer glow ring */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-violet-500/50 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isMoving ? 1.2 : 0.8,
          opacity: isMoving ? 1 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      />

      {/* Trailing particles */}
      {isMoving && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="fixed w-1 h-1 rounded-full bg-blue-400 pointer-events-none z-[9998]"
              initial={{
                x: mousePosition.x,
                y: mousePosition.y,
                opacity: 1,
              }}
              animate={{
                x: mousePosition.x + (Math.random() - 0.5) * 50,
                y: mousePosition.y + (Math.random() - 0.5) * 50,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
    </>
  );
}
