"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BrandRevealLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // Hide loader completely
          gsap.to(containerRef.current, {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
      });

      // Phase 1: Ribbon line draws (0-1.5s)
      const ribbonPath = document.querySelector(".ribbon-line") as SVGPathElement;
      if (ribbonPath) {
        const length = ribbonPath.getTotalLength();
        ribbonPath.style.strokeDasharray = String(length);
        ribbonPath.style.strokeDashoffset = String(length);

        tl.to(
          ribbonPath,
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power1.inOut",
          },
          0
        );
      }

      // Phase 2: Ribbon glow effect during drawing (0-1.5s)
      tl.to(
        ".ribbon-glow",
        {
          opacity: [0, 1, 0],
          blur: [0, 15, 0],
          duration: 1.5,
        },
        0
      );

      // Phase 3: M path starts drawing while ribbon is still visible, creating flow (0.9-1.5s)
      const mPath = document.querySelector(".m-path") as SVGPathElement;
      if (mPath && ribbonPath) {
        const mLength = mPath.getTotalLength();
        mPath.style.strokeDasharray = String(mLength);
        mPath.style.strokeDashoffset = String(mLength);

        // M starts drawing slightly before ribbon finishes
        tl.to(
          mPath,
          {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 0.9,
            ease: "power1.inOut",
          },
          0.9
        );
      }

      // Phase 4: Ribbon fades smoothly as M solidifies (1.4-1.8s) - overlapping
      if (ribbonPath) {
        tl.to(
          ribbonPath,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          },
          1.4
        );
      }

      // Phase 5: M scales and transitions to text (1.6-2.2s) - continuous flow
      if (mPath) {
        tl.to(
          mPath,
          {
            scale: 0.8,
            opacity: 0.3,
            duration: 0.6,
          },
          1.6
        );
      }

      // Phase 6: Full name text appears behind M and grows (1.6-2.4s) - overlapping
      tl.to(
        ".full-name",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out",
        },
        1.6
      );

      // Phase 7: M completely fades and text dominates (2.2-2.4s)
      if (mPath) {
        tl.to(
          mPath,
          {
            opacity: 0,
            duration: 0.2,
          },
          2.2
        );
      }

      // Phase 8: Content and portfolio fade in (2.2-3.2s) - overlapping with text
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        2.2
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-navy flex items-center justify-center overflow-hidden"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy" />

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* SVG Container - Continuous Ribbon Drawing */}
        <div className="relative w-full max-w-3xl h-72 flex items-center justify-center">
          {/* Glow effect filter */}
          <div
            className="ribbon-glow absolute inset-0 opacity-0 blur-[15px] pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(59,130,246,0.6), transparent)",
            }}
          />

          <svg
            viewBox="0 0 800 200"
            className="w-full h-full relative z-10"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Phase 1: Initial ribbon line - wider for more prominence */}
            <path
              className="ribbon-line"
              d="M 50 100 Q 100 50, 150 100 T 250 100 Q 300 50, 350 100 T 450 100 Q 500 50, 550 100 T 650 100 Q 700 50, 750 100"
              stroke="url(#ribbonGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="1"
            />

            {/* Phase 2: M path - ribbon morphs to M with wider stroke */}
            <path
              className="m-path"
              d="M 200 80 L 200 150 M 200 80 L 250 150 L 300 80 M 300 80 L 300 150"
              stroke="url(#ribbonGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient
                id="ribbonGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Full Name and Subtitle - appears after drawing completes */}
        <div className="full-name opacity-0 translate-y-8 text-center">
          <h1
            className="text-5xl font-black bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}
          >
            Mohan Sharma
          </h1>
          <p className="text-sm text-slate-400 text-center mt-3 tracking-widest uppercase">
            Full Stack Developer
          </p>
        </div>

        {/* Progress indicator */}
        <div className="w-48 h-1 rounded-full bg-slate-700/30 mt-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
            style={{
              animation: "growWidth 3.4s ease-in-out forwards",
            }}
          />
        </div>
      </div>

      {/* Content placeholder - will fade in */}
      <div ref={contentRef} className="absolute inset-0 opacity-0 pointer-events-none" />

      <style>{`
        @keyframes growWidth {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
