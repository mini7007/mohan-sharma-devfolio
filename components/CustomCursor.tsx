"use client";
import { useEffect, useRef } from "react";

interface CursorState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  magneticX: number;
  magneticY: number;
  isMoving: boolean;
  isHovering: boolean;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<CursorState>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    magneticX: 0,
    magneticY: 0,
    isMoving: false,
    isHovering: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check for reduced motion preference and touch device
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
  const isTouchDevice =
    typeof window !== "undefined"
      ? () =>
          window.matchMedia("(hover: none)").matches ||
          navigator.maxTouchPoints > 0
      : () => false;

  useEffect(() => {
    // Skip on touch devices or if reduced motion is preferred
    if (isTouchDevice()) return;

    const state = stateRef.current;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      state.targetX = e.clientX;
      state.targetY = e.clientY;
      state.isMoving = true;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        state.isMoving = false;
      }, 100);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        state.isHovering = true;
        if (cursorRef.current) {
          cursorRef.current.style.width = "32px";
          cursorRef.current.style.height = "32px";
          cursorRef.current.style.background =
            "linear-gradient(135deg, #3b82f6, #8b5cf6)";
        }
        if (ringRef.current) {
          ringRef.current.style.borderColor = "rgba(139, 92, 246, 0.8)";
          ringRef.current.style.boxShadow =
            "0 0 20px rgba(139, 92, 246, 0.4)";
        }
      }
    };

    const handleMouseLeave = () => {
      state.isHovering = false;
      if (cursorRef.current) {
        cursorRef.current.style.width = "12px";
        cursorRef.current.style.height = "12px";
        cursorRef.current.style.background =
          "linear-gradient(to right, #3b82f6, #8b5cf6)";
      }
      if (ringRef.current) {
        ringRef.current.style.borderColor = "rgba(139, 92, 246, 0.5)";
        ringRef.current.style.boxShadow = "none";
      }
    };

    const animate = () => {
      // Smooth follow with easing
      const easeAmount = 0.15;
      state.x += (state.targetX - state.x) * easeAmount;
      state.y += (state.targetY - state.y) * easeAmount;

      if (cursorRef.current) {
        const size = state.isHovering ? 32 : 12;
        cursorRef.current.style.transform = `translate(${state.x - size / 2}px, ${state.y - size / 2}px) scale(${state.isMoving ? 1.3 : 1})`;
      }

      if (ringRef.current) {
        const ringSize = 32;
        ringRef.current.style.transform = `translate(${state.x - ringSize / 2}px, ${state.y - ringSize / 2}px) scale(${state.isMoving ? 1.2 : 0.8})`;
        ringRef.current.style.opacity = state.isMoving ? "1" : "0.4";
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      cancelAnimationFrame(animationFrameId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (prefersReducedMotion || isTouchDevice()) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 pointer-events-none z-[10000] transition-all duration-200"
        style={{ willChange: "transform" }}
      />

      {/* Outer glow ring */}
      <div
        ref={ringRef}
        className="fixed w-8 h-8 rounded-full border-2 border-violet-500/50 pointer-events-none z-[9999] transition-all duration-300"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
