"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: 1,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated circles */}
        <div className="relative w-32 h-32">
          {/* Outer rotating circle */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-violet-500"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: 1,
              ease: "linear",
            }}
          />

          {/* Middle rotating circle */}
          <motion.div
            className="absolute inset-3 rounded-full border-2 border-transparent border-b-violet-500 border-l-blue-500"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2.5,
              repeat: 1,
              ease: "linear",
            }}
          />

          {/* Inner pulsing circle */}
          <motion.div
            className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 20px rgba(59,130,246,0.5)",
                "0 0 60px rgba(139,92,246,0.8)",
                "0 0 20px rgba(59,130,246,0.5)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: 1,
              ease: "easeInOut",
            }}
          />

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-2xl font-black"
              style={{
                fontFamily: "var(--font-syne)",
                background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: 1,
              }}
            >
              DM
            </motion.span>
          </div>
        </div>

        {/* Loading text */}
        <motion.div
          className="text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: 1 }}
        >
          <h3
            className="text-xl font-black text-white mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Dev Mohan
          </h3>
          <p className="text-sm text-slate-400 tracking-widest">
            Loading Portfolio
          </p>
        </motion.div>

        {/* Animated dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
              animate={{
                y: [-8, 0, -8],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.6,
                repeat: 4,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
