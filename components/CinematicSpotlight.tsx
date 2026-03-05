"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicSpotlight() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Darkened background that fades out */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={isLoaded ? { opacity: 0.3 } : { opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Hanging bulb at top */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-12 pointer-events-none"
        initial={{ opacity: 0, y: -30 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        {/* Bulb glow halo */}
        <motion.div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background: "radial-gradient(circle, #fbbf24, #f59e0b, transparent)",
            width: "120%",
            height: "120%",
            left: "-10%",
            top: "-10%",
          }}
          animate={
            isLoaded
              ? { opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }
              : { opacity: 0 }
          }
          transition={{
            duration: 3,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Bulb body */}
        <motion.div
          className="relative w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #fef3c7, #fbbf24)",
            boxShadow:
              "0 0 40px rgba(251, 191, 36, 0.8), inset -2px -2px 8px rgba(0,0,0,0.3)",
          }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        {/* Light socket */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-4 bg-gray-600 rounded-sm" />
      </motion.div>

      {/* Hanging wire */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-gray-500 to-transparent"
        initial={{ scaleY: 0 }}
        animate={isLoaded ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      {/* Spotlight cone - large radial gradient with clip-path */}
      <motion.div
        className="absolute top-24 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        style={{
          width: "800px",
          height: "1200px",
          background:
            "radial-gradient(ellipse 400px 600px at center top, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.15) 30%, rgba(251, 191, 36, 0.05) 60%, transparent 100%)",
          filter: "blur(60px)",
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Inner spotlight cone - sharper */}
      <motion.div
        className="absolute top-24 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={isLoaded ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.3 }}
        transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        style={{
          width: "600px",
          height: "900px",
          background:
            "radial-gradient(ellipse 300px 450px at center top, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)",
          filter: "blur(30px)",
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle light rays */}
      <motion.div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-full h-96"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.15 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        style={{
          background: `
            linear-gradient(100deg, transparent 30%, rgba(251, 191, 36, 0.1) 50%, transparent 70%),
            linear-gradient(80deg, transparent 40%, rgba(251, 191, 36, 0.1) 50%, transparent 60%)
          `,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
