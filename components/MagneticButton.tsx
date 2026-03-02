"use client";
import React, { useRef, useEffect, ReactNode, ForwardedRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  [key: string]: any;
}

/**
 * Premium magnetic button that follows cursor
 * Creates luxe interaction feel inspired by high-end design systems
 */
export default function MagneticButton({
  children,
  className = "",
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const magnetRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    // Check device capabilities
    const isTouchDevice = window.matchMedia("(hover: none)").matches || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice || prefersReducedMotion) return;

    const button = buttonRef.current;
    if (!button) return;

    const MAGNET_STRENGTH = 0.3;
    const MAGNET_DISTANCE = 80;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (distance < MAGNET_DISTANCE) {
        magnetRef.current.targetX = (e.clientX - centerX) * MAGNET_STRENGTH;
        magnetRef.current.targetY = (e.clientY - centerY) * MAGNET_STRENGTH;
      } else {
        magnetRef.current.targetX = 0;
        magnetRef.current.targetY = 0;
      }
    };

    const handleMouseLeave = () => {
      magnetRef.current.targetX = 0;
      magnetRef.current.targetY = 0;
    };

    const animate = () => {
      const ease = 0.2;
      magnetRef.current.x += (magnetRef.current.targetX - magnetRef.current.x) * ease;
      magnetRef.current.y += (magnetRef.current.targetY - magnetRef.current.y) * ease;

      if (button) {
        button.style.transform = `translate(${magnetRef.current.x}px, ${magnetRef.current.y}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const Tag = props.href ? "a" : "button";

  return (
    <Tag
      ref={buttonRef as any}
      className={`inline-flex items-center justify-center transition-all duration-300 ${className}`}
      style={{ willChange: "transform" }}
      {...props}
    >
      {children}
    </Tag>
  );
}
