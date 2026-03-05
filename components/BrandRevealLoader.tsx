"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BrandRevealLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
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

      // Phase 1: Line draws (0-1.5s)
      const path = document.querySelector(".brand-line") as SVGPathElement;
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);

        tl.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power1.inOut",
          },
          0
        );

        // Glow effect during drawing
        tl.to(
          ".line-glow",
          {
            opacity: [0, 1, 0],
            blur: [0, 20, 0],
            duration: 1.5,
          },
          0
        );
      }

      // Phase 2: Line morphs to M (1.2-2s)
      tl.to(
        ".brand-line",
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        1.2
      );

      tl.to(
        ".letter-m",
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out",
        },
        1.2
      );

      // Phase 3: M expands to full text (2-2.8s)
      tl.to(
        ".letter-m",
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
        },
        1.8
      );

      tl.to(
        ".full-name",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out",
        },
        1.8
      );

      // Phase 4: Content fades in (2.4-3.2s)
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        2.4
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
        {/* SVG Container - Line Drawing */}
        <div className="relative w-96 h-32 flex items-center justify-center">
          {/* Glow effect */}
          <div
            className="line-glow absolute inset-0 opacity-0 blur-[20px] pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(59,130,246,0.8), transparent)",
            }}
          />

          {/* SVG Path */}
          <svg
            ref={svgRef}
            viewBox="0 0 400 80"
            className="w-full h-full relative z-10"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Main line that will morph */}
            <path
              className="brand-line"
              d="M 20 40 Q 60 20, 100 40 T 180 40 Q 220 20, 260 40 T 340 40"
              stroke="url(#brandGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient
                id="brandGradient"
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

        {/* Letter M - Large single letter */}
        <div className="letter-m opacity-0 scale-0 mb-4">
          <h1
            className="text-9xl font-black bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            M
          </h1>
        </div>

        {/* Full Name - appears after M */}
        <div ref={textRef} className="full-name opacity-0 translate-y-8">
          <h1
            className="text-5xl font-black bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent text-center"
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
              animation: "growWidth 2.8s ease-in-out forwards",
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
