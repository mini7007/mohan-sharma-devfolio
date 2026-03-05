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

      // Phase 1: Ribbon line draws (0-1.2s)
      const ribbonPath = document.querySelector(".ribbon-line") as SVGPathElement;
      if (ribbonPath) {
        const length = ribbonPath.getTotalLength();
        ribbonPath.style.strokeDasharray = String(length);
        ribbonPath.style.strokeDashoffset = String(length);

        tl.to(
          ribbonPath,
          {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: "power1.inOut",
          },
          0
        );
      }

      // Phase 2: Ribbon transforms to M path (1.2-1.8s)
      const mPath = document.querySelector(".m-path") as SVGPathElement;
      if (mPath && ribbonPath) {
        tl.to(
          ribbonPath,
          {
            opacity: 0,
            duration: 0.3,
          },
          1.2
        );

        const mLength = mPath.getTotalLength();
        mPath.style.strokeDasharray = String(mLength);
        mPath.style.strokeDashoffset = String(mLength);

        tl.to(
          mPath,
          {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 0.6,
            ease: "power1.inOut",
          },
          1.2
        );
      }

      // Phase 3: M path transitions to full text drawing (1.8-2.8s)
      const textPath = document.querySelector(".text-path") as SVGPathElement;
      if (textPath && mPath) {
        tl.to(
          mPath,
          {
            opacity: 0,
            duration: 0.2,
          },
          1.8
        );

        const textLength = textPath.getTotalLength();
        textPath.style.strokeDasharray = String(textLength);
        textPath.style.strokeDashoffset = String(textLength);

        tl.to(
          textPath,
          {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 1,
            ease: "power1.inOut",
          },
          1.8
        );
      }

      // Phase 4: Full name and subtitle appear (2.6-3.2s)
      tl.to(
        ".full-name",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out",
        },
        2.6
      );

      // Phase 5: Content fades in (2.8-3.6s)
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        2.8
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
        <div className="relative w-full max-w-2xl h-64 flex items-center justify-center">
          <svg
            viewBox="0 0 800 200"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Phase 1: Initial ribbon line */}
            <path
              className="ribbon-line"
              d="M 50 100 Q 100 50, 150 100 T 250 100 Q 300 50, 350 100 T 450 100 Q 500 50, 550 100 T 650 100 Q 700 50, 750 100"
              stroke="url(#ribbonGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="1"
            />

            {/* Phase 2: M path - ribbon morphs to M */}
            <path
              className="m-path"
              d="M 200 80 L 200 150 M 200 80 L 250 150 L 300 80 M 300 80 L 300 150"
              stroke="url(#ribbonGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0"
            />

            {/* Phase 3: Full text path - "Mohan Sharma" drawn as ribbon */}
            <path
              className="text-path"
              d="M 100 100 L 100 130 M 100 100 L 130 130 L 160 100 M 160 100 L 160 130 M 180 115 L 210 115 Q 225 115, 225 100 Q 225 85, 210 85 L 180 85 L 180 130 M 250 130 L 280 85 M 280 85 L 310 130 M 320 85 L 350 85 Q 365 85, 365 100 L 365 130 M 365 130 L 350 130 M 350 130 Q 365 130, 365 115 M 390 130 L 420 85 M 420 85 L 450 130 M 460 85 L 490 85 L 490 130 L 460 130 M 510 130 L 540 85 M 540 85 L 570 130 M 590 130 Q 590 85, 620 85 Q 650 85, 650 130 M 650 85 L 650 130"
              stroke="url(#ribbonGradient)"
              strokeWidth="3"
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
