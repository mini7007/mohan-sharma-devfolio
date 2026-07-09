import { useEffect, useRef, useState } from "react";

/**
 * Hook to track cursor position
 */
export function useCursorTracking() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const movingTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      setIsMoving(true);

      // Reset timeout
      if (movingTimeoutRef.current) {
        clearTimeout(movingTimeoutRef.current);
      }

      movingTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (movingTimeoutRef.current) {
        clearTimeout(movingTimeoutRef.current);
      }
    };
  }, []);

  return { cursorPos, isMoving };
}

/**
 * Hook to track active section during scroll
 */
export function useScrollTracking(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = 0; i < sectionIds.length; i++) {
        const element = document.getElementById(sectionIds[i]);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        const sectionTop = offsetTop;
        const sectionBottom = offsetTop + offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}

/**
 * Hook to detect cursor leaving viewport
 */
export function useCursorLeaveDetection() {
  const [hasLeft, setHasLeft] = useState(false);

  useEffect(() => {
    const handleMouseLeave = () => {
      setHasLeft(true);
    };

    const handleMouseEnter = () => {
      setHasLeft(false);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return hasLeft;
}

/**
 * Hook to track idle time
 */
export function useIdleTimer(onIdleThreshold?: (seconds: number) => void) {
  const [idleSeconds, setIdleSeconds] = useState(0);
  const idleTimerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const resetIdleTimer = () => {
      setIdleSeconds(0);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      // Start counting idle time
      idleTimerRef.current = setInterval(() => {
        setIdleSeconds((prev) => {
          const newValue = prev + 1;
          if (onIdleThreshold) {
            onIdleThreshold(newValue);
          }
          return newValue;
        });
      }, 1000);
    };

    // Add event listeners for user activity
    const events = ["mousedown", "keydown", "scroll", "touchstart", "mousemove"];

    events.forEach((event) => {
      document.addEventListener(event, resetIdleTimer);
    });

    // Start initial idle timer
    resetIdleTimer();

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, resetIdleTimer);
      });
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [onIdleThreshold]);

  return idleSeconds;
}

/**
 * Hook to detect reduced motion preference
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook to detect dark mode
 */
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Also check if html has dark class
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      observer.disconnect();
    };
  }, []);

  return isDarkMode;
}

/**
 * Hook for physics-based movement
 */
export function usePhysicsMovement(
  target: { x: number; y: number },
  config = { friction: 0.15, acceleration: 0.08, maxSpeed: 15 }
) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;

        // Calculate distance
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 1) {
          velocityRef.current = { x: 0, y: 0 };
          return target;
        }

        // Acceleration
        velocityRef.current.x += (dx * config.acceleration) / Math.max(distance, 1);
        velocityRef.current.y += (dy * config.acceleration) / Math.max(distance, 1);

        // Apply friction
        velocityRef.current.x *= 1 - config.friction;
        velocityRef.current.y *= 1 - config.friction;

        // Limit speed
        const speed = Math.sqrt(
          velocityRef.current.x ** 2 + velocityRef.current.y ** 2
        );
        if (speed > config.maxSpeed) {
          velocityRef.current.x = (velocityRef.current.x / speed) * config.maxSpeed;
          velocityRef.current.y = (velocityRef.current.y / speed) * config.maxSpeed;
        }

        const newX = prev.x + velocityRef.current.x;
        const newY = prev.y + velocityRef.current.y;

        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [target, config]);

  return position;
}
