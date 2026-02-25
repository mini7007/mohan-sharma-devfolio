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
            {/* Panda Face SVG */}
            <svg
              viewBox="0 0 200 200"
              className="w-40 h-40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Head - White base */}
              <circle cx="100" cy="100" r="70" fill="#ffffff" stroke="#000" strokeWidth="2" />
              
              {/* Ears - Black */}
              <circle cx="55" cy="40" r="22" fill="#000" />
              <circle cx="145" cy="40" r="22" fill="#000" />
              
              {/* Eye patches - Black large circles */}
              <circle cx="75" cy="85" r="28" fill="#000" />
              <circle cx="125" cy="85" r="28" fill="#000" />
              
              {/* Eyes - White base inside black patches */}
              <circle cx="75" cy="85" r="18" fill="#ffffff" />
              <circle cx="125" cy="85" r="18" fill="#ffffff" />
              
              {/* Pupils - Black */}
              <circle cx="75" cy="88" r="10" fill="#000" />
              <circle cx="125" cy="88" r="10" fill="#000" />
              
              {/* Eye shine - White highlight */}
              <circle cx="78" cy="84" r="4" fill="#ffffff" />
              <circle cx="128" cy="84" r="4" fill="#ffffff" />
              
              {/* Nose - Black */}
              <ellipse cx="100" cy="115" rx="8" ry="10" fill="#000" />
              
              {/* Mouth - Cute smile */}
              <path d="M 100 115 Q 92 128 85 125" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 100 115 Q 108 128 115 125" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              
              {/* Mouth center line */}
              <path d="M 85 125 Q 100 130 115 125" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
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
