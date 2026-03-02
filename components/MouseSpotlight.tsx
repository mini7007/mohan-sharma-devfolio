"use client";
import { useEffect, useRef } from "react";

/**
 * Premium mouse spotlight glow effect
 * Creates luxury depth by following mouse with soft radial glow
 */
export default function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check device capabilities
    const isTouchDevice = window.matchMedia("(hover: none)").matches || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice || prefersReducedMotion) return;

    let mouseX = 0;
    let mouseY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth follow with easing
      const ease = 0.08;
      smoothX += (mouseX - smoothX) * ease;
      smoothY += (mouseY - smoothY) * ease;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mouse-x", `${smoothX}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${smoothY}px`);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
      style={{
        background: `radial-gradient(
          circle 400px at var(--mouse-x, 0) var(--mouse-y, 0),
          rgba(139, 92, 246, 0.08),
          transparent 80%
        )`,
        "--mouse-x": "0px",
        "--mouse-y": "0px",
      } as React.CSSProperties & Record<string, string>}
    />
  );
}
