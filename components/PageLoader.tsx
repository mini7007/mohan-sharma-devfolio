"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
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
            duration: 2.8,
            repeat: 1,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Panda Character - Sky Diving Effect */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Panda body with sky diving animation */}
          <motion.div
            className="relative"
            animate={{
              y: [0, 20, 40, 20, 0],
              rotate: [0, -15, -25, -15, 0],
              x: [0, 10, 5, -10, 0],
            }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
              repeat: 1,
            }}
          >
            {/* Panda SVG */}
            <svg
              viewBox="0 0 200 200"
              className="w-32 h-32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Body */}
              <circle cx="100" cy="110" r="45" fill="#ffffff" stroke="#000" strokeWidth="2" />
              {/* Head */}
              <circle cx="100" cy="60" r="40" fill="#ffffff" stroke="#000" strokeWidth="2" />
              {/* Ears */}
              <circle cx="75" cy="25" r="12" fill="#000" />
              <circle cx="125" cy="25" r="12" fill="#000" />
              {/* Eyes */}
              <circle cx="88" cy="55" r="10" fill="#000" />
              <circle cx="112" cy="55" r="10" fill="#000" />
              {/* Eye shine */}
              <circle cx="90" cy="53" r="4" fill="#ffffff" />
              <circle cx="114" cy="53" r="4" fill="#ffffff" />
              {/* Nose */}
              <circle cx="100" cy="70" r="5" fill="#000" />
              {/* Mouth */}
              <path d="M 100 70 Q 95 75 90 73" stroke="#000" strokeWidth="2" />
              <path d="M 100 70 Q 105 75 110 73" stroke="#000" strokeWidth="2" />
              {/* Arms */}
              <rect x="60" y="100" width="15" height="30" rx="7" fill="#000" />
              <rect x="125" y="100" width="15" height="30" rx="7" fill="#000" />
              {/* Legs */}
              <rect x="75" y="150" width="15" height="25" rx="7" fill="#000" />
              <rect x="110" y="150" width="15" height="25" rx="7" fill="#000" />
            </svg>
          </motion.div>

          {/* Gradient orbs around panda */}
          <motion.div
            className="absolute w-48 h-48 rounded-full border-2 border-transparent border-t-blue-500 border-r-violet-500"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: 1,
              ease: "linear",
            }}
          />
        </div>

        {/* Loading text */}
        <motion.div
          className="text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: 1 }}
        >
          <h3
            className="text-2xl font-black text-white mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Dev Mohan
          </h3>
          <p className="text-sm text-slate-400 tracking-widest">
            Skydiving into awesome code...
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
