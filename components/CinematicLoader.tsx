'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const CinematicLoader: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setIsComplete(true),
    });

    // Phase 1: Black screen (500ms)
    timeline.to(
      '.cinematic-loader-container',
      { duration: 0.5, opacity: 1 },
      0
    );

    // Phase 2: Seed falls (1500ms)
    timeline.to(
      '.seed',
      {
        duration: 1.5,
        y: 200,
        opacity: 1,
        ease: 'power2.in',
      },
      0.5
    );

    // Phase 3: Seed lands (silence - 500ms)
    timeline.to(
      '.seed',
      {
        duration: 0.3,
        scale: 0.8,
        opacity: 0.9,
      },
      2
    );

    // Phase 4: Roots spread (1000ms)
    timeline.to(
      '.roots',
      {
        duration: 1,
        opacity: 1,
        pathLength: 1,
      },
      2.3
    );

    // Phase 5: Sprout grows (1500ms)
    timeline.to(
      '.sprout',
      {
        duration: 1.5,
        scaleY: 1,
        opacity: 1,
        transformOrigin: 'bottom center',
      },
      3.3
    );

    // Phase 6: Mascot emerges and looks around (2000ms)
    timeline.to(
      '.mascot-entrance',
      {
        duration: 1.5,
        y: -50,
        opacity: 1,
      },
      4.8
    );

    // Mascot waves
    timeline.to(
      '.mascot-wave-arm',
      {
        duration: 0.6,
        rotation: -30,
        transformOrigin: 'left center',
        repeat: 2,
        yoyo: true,
      },
      6.3
    );

    // Phase 7: Mascot pushes page (1000ms)
    timeline.to(
      '.mascot-push',
      {
        duration: 1,
        x: 100,
        opacity: 0,
      },
      7
    );

    // Phase 8: Portfolio fades in (1000ms)
    timeline.to(
      '.page-content',
      {
        duration: 1,
        opacity: 1,
        delay: 0.2,
      },
      7.5
    );

    // Hide loader (500ms)
    timeline.to(
      '.cinematic-loader-container',
      {
        duration: 0.5,
        opacity: 0,
        pointerEvents: 'none',
      },
      8.5
    );
  }, []);

  if (isComplete) return null;

  return (
    <div className="cinematic-loader-container fixed inset-0 z-50 bg-black flex items-center justify-center opacity-0">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .seed {
          width: 20px;
          height: 20px;
          background: radial-gradient(circle at 30% 30%, #7cb342, #558b2f);
          border-radius: 50%;
          opacity: 0;
          box-shadow: 0 0 20px rgba(124, 179, 66, 0.6);
          animation: float 2s ease-in-out infinite;
        }

        .roots {
          opacity: 0;
        }

        .sprout {
          transform-origin: bottom center;
          opacity: 0;
          scaleY: 0;
        }

        .page-content {
          opacity: 0;
        }

        .mascot-entrance {
          opacity: 0;
          transform: translateY(50px);
        }
      `}</style>

      {/* Roots SVG */}
      <svg className="roots absolute" width="300" height="300" viewBox="0 0 300 300">
        <g stroke="#7cb342" strokeWidth="2" fill="none">
          {/* Root paths */}
          <path
            d="M 150 150 Q 130 180 100 200"
            className="roots"
            strokeDasharray="1"
            strokeDashoffset="1"
          />
          <path
            d="M 150 150 Q 170 180 200 200"
            className="roots"
            strokeDasharray="1"
            strokeDashoffset="1"
          />
          <path
            d="M 150 150 Q 150 190 150 220"
            className="roots"
            strokeDasharray="1"
            strokeDashoffset="1"
          />
          <path
            d="M 100 200 L 80 230"
            className="roots"
            strokeDasharray="1"
            strokeDashoffset="1"
          />
          <path
            d="M 200 200 L 220 230"
            className="roots"
            strokeDasharray="1"
            strokeDashoffset="1"
          />
        </g>
      </svg>

      {/* Sprout */}
      <div className="sprout">
        <svg width="80" height="100" viewBox="0 0 80 100">
          <g>
            {/* Stem */}
            <line x1="40" y1="100" x2="40" y2="20" stroke="#7cb342" strokeWidth="3" />
            {/* Left leaf */}
            <ellipse cx="20" cy="50" rx="15" ry="25" fill="#7cb342" opacity="0.8" />
            {/* Right leaf */}
            <ellipse cx="60" cy="50" rx="15" ry="25" fill="#7cb342" opacity="0.8" />
            {/* Top leaf */}
            <path d="M 40 20 Q 35 10 40 0 Q 45 10 40 20" fill="#558b2f" opacity="0.9" />
          </g>
        </svg>
      </div>

      {/* Seed */}
      <div className="seed absolute top-0" />

      {/* Mascot Entrance */}
      <motion.div className="mascot-entrance absolute" initial={{ opacity: 0, y: 50 }}>
        <svg width="80" height="120" viewBox="0 0 200 280">
          {/* Simplified mascot for cinematic entrance */}
          <g>
            {/* Head */}
            <circle cx="100" cy="50" r="30" fill="#d4a574" />
            {/* Body */}
            <ellipse cx="100" cy="130" rx="40" ry="50" fill="#c9915b" />
            {/* Left arm (for waving) */}
            <g className="mascot-wave-arm">
              <rect x="35" y="110" width="18" height="55" rx="9" fill="#c9915b" />
              <circle cx="44" cy="165" r="10" fill="#a0826d" />
            </g>
            {/* Right arm */}
            <rect x="147" y="110" width="18" height="55" rx="9" fill="#c9915b" />
            {/* Eyes */}
            <circle cx="85" cy="40" r="5" fill="#2c2c2c" />
            <circle cx="115" cy="40" r="5" fill="#2c2c2c" />
            {/* Smile */}
            <path d="M 90 55 Q 100 62 110 55" stroke="#5a4a38" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        </svg>
      </motion.div>

      {/* Page content placeholder (hidden during loader) */}
      <div className="page-content absolute inset-0 opacity-0">
        <div className="w-full h-full" />
      </div>
    </div>
  );
};

export default CinematicLoader;
