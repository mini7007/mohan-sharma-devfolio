"use client";
import { useEffect, useRef } from "react";

interface CursorState {
  x: number;
  y: number;
  ringX: number;
  ringY: number;
  targetX: number;
  targetY: number;
  isMoving: boolean;
  isHovering: boolean;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const stateRef = useRef<CursorState>({
    x: 0,
    y: 0,
    ringX: 0,
    ringY: 0,
    targetX: 0,
    targetY: 0,
    isMoving: false,
    isHovering: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

    // Touch device check
    const isTouchDevice =
      typeof window !== "undefined"
        ? window.matchMedia("(hover: none)").matches ||
        navigator.maxTouchPoints > 0
        : false;

    if (isTouchDevice || prefersReducedMotion) return;

    const state = stateRef.current;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      state.targetX = e.clientX;
      state.targetY = e.clientY;
      state.isMoving = true;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        state.isMoving = false;
      }, 60);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target;

      // Type guard to ensure target is an HTMLElement
      if (!(target instanceof HTMLElement)) return;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      ) {
        state.isHovering = true;

        if (cursorRef.current) {
          cursorRef.current.style.width = "30px";
          cursorRef.current.style.height = "30px";
          cursorRef.current.style.background =
            "linear-gradient(135deg, #3b82f6, #8b5cf6)";
        }

        if (ringRef.current) {
          ringRef.current.style.borderColor = "rgba(139, 92, 246, 0.9)";
          ringRef.current.style.boxShadow =
            "0 0 24px rgba(139, 92, 246, 0.45)";
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
      // ⚡ ultra-responsive dot
      const dotEase = 0.38;
      state.x += (state.targetX - state.x) * dotEase;
      state.y += (state.targetY - state.y) * dotEase;

      // ✨ slightly delayed ring for premium feel
      const ringEase = 0.22;
      state.ringX += (state.targetX - state.ringX) * ringEase;
      state.ringY += (state.targetY - state.ringY) * ringEase;

      if (cursorRef.current) {
        const size = state.isHovering ? 30 : 12;
        cursorRef.current.style.transform = `translate(${state.x - size / 2}px, ${state.y - size / 2
          }px) scale(${state.isMoving ? 1.22 : 1})`;
      }

      if (ringRef.current) {
        const ringSize = 32;
        ringRef.current.style.transform = `translate(${state.ringX - ringSize / 2
          }px, ${state.ringY - ringSize / 2}px) scale(${state.isMoving ? 1.12 : 0.85
          })`;
        ringRef.current.style.opacity = state.isMoving ? "1" : "0.45";
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

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 pointer-events-none z-[10000]"
        style={{ willChange: "transform" }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed w-8 h-8 rounded-full border-2 border-violet-500/50 pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}