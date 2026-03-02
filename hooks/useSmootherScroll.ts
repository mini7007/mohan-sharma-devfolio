"use client";
import { useEffect } from "react";

/**
 * Apple-like smooth scrolling effect using momentum
 * Reduces scroll jumpiness and creates premium feel
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) return;

    let isScrolling = false;
    let scrollVelocity = 0;
    let lastScrollTime = 0;
    let lastScrollPos = 0;

    const handleScroll = () => {
      const now = Date.now();
      const timeDelta = now - lastScrollTime;
      const scrollDelta = window.scrollY - lastScrollPos;

      if (timeDelta > 0) {
        scrollVelocity = scrollDelta / timeDelta;
      }

      lastScrollTime = now;
      lastScrollPos = window.scrollY;

      if (!isScrolling) {
        isScrolling = true;
        document.documentElement.style.scrollBehavior = "smooth";
      }

      // Reset smooth scroll after scroll ends
      clearTimeout((window as any).scrollTimeout);
      (window as any).scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout((window as any).scrollTimeout);
    };
  }, []);
}
