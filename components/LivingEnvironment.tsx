'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * LivingEnvironment - Subtle background animations
 * Fog, light rays, floating spores, fireflies, drifting leaves
 */
const LivingEnvironment: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(20px) translateY(-20px); }
          50% { transform: translateX(-10px) translateY(10px); }
          75% { transform: translateX(15px) translateY(15px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes firefly-dance {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(30px, -30px); opacity: 0.8; }
          50% { transform: translate(-20px, 20px); opacity: 0.4; }
          75% { transform: translate(40px, 10px); opacity: 0.7; }
        }

        @keyframes fade-drift {
          0% { opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { opacity: 0; }
        }

        .spore {
          animation: drift 8s ease-in-out infinite;
          animation-direction: alternate;
        }

        .leaf {
          animation: drift 12s ease-in-out infinite;
          animation-direction: alternate;
        }

        .firefly {
          animation: firefly-dance 6s ease-in-out infinite;
        }

        .fog {
          animation: fade-drift 20s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .spore, .leaf, .firefly, .fog {
            animation: none;
          }
        }
      `}</style>

      {/* Fog layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent dark:via-black/10 fog pointer-events-none" />

      {/* Light rays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-100/10 via-transparent to-transparent dark:from-amber-100/5 pointer-events-none" />
      </div>

      {/* Floating spores - light/calm */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`spore-${i}`}
            className="spore absolute w-1 h-1 rounded-full bg-green-400/40 dark:bg-green-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Drifting leaves - only visible */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={`leaf-${i}`}
            className="leaf absolute"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
              animationDelay: `${i * 2.4}s`,
              animationDuration: `${12 + i * 3}s`,
            }}
          >
            <path
              d="M12 2c6.627 0 10 3.373 10 10s-3.373 10-10 10S2 18.627 2 12 5.373 2 12 2m0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"
              fill="currentColor"
              className="text-green-500/50 dark:text-green-400/40"
            />
          </motion.svg>
        ))}
      </div>

      {/* Fireflies - dark mode only */}
      <div className="absolute inset-0 dark:block hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`firefly-${i}`}
            className="firefly absolute w-1.5 h-1.5 rounded-full bg-yellow-300 blur-sm shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 8px 2px rgba(253, 230, 138, 0.6)',
              animationDelay: `${i * 1}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle light rays (diagonal) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5 pointer-events-none"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lightRay1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>
        <line x1="300" y1="0" x2="0" y2="1080" stroke="url(#lightRay1)" strokeWidth="200" />
        <line x1="1200" y1="0" x2="1920" y2="1080" stroke="url(#lightRay1)" strokeWidth="200" />
      </svg>
    </div>
  );
};

export default LivingEnvironment;
