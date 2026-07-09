"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MascotCharacter from "./MascotCharacter";
import MascotSpeechBubble from "./MascotSpeechBubble";
import type { MascotState, SectionType } from "@/types/mascot";
import { mascotStateManager } from "@/utils/mascot/MascotStateManager";
import {
  useCursorTracking,
  useScrollTracking,
  useCursorLeaveDetection,
  useIdleTimer,
  useReducedMotion,
  useDarkMode,
  usePhysicsMovement,
} from "@/hooks/mascot/useMascotHooks";

/**
 * Premium mascot controller component.
 * Manages all interactions, idle behaviors, and animations.
 */
export default function Mascot() {
  const [mascotState, setMascotState] = useState<MascotState>(mascotStateManager.getState());
  const { cursorPos, isMoving } = useCursorTracking();
  const activeSection = useScrollTracking(["hero", "about", "profiles", "stack", "projects", "experience", "contact"]);
  const cursorHasLeft = useCursorLeaveDetection();
  const idleSeconds = useIdleTimer();
  const isReducedMotion = useReducedMotion();
  const isDarkMode = useDarkMode();
  const physicsPosition = usePhysicsMovement(cursorPos);

  const idleBehaviorTimeoutRef = useRef<NodeJS.Timeout>();
  const clickCountRef = useRef(0);
  const lastClickTimeRef = useRef(0);
  const cursorLeftTimeRef = useRef(0);

  // Subscribe to state changes
  useEffect(() => {
    const unsubscribe = mascotStateManager.subscribe((newState) => {
      setMascotState(newState);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Initialize mascot as visible
  useEffect(() => {
    mascotStateManager.setVisible(true);
  }, []);

  // Handle cursor movement - update animation and mirror
  useEffect(() => {
    if (isMoving) {
      mascotStateManager.setAnimation("walking");
      mascotStateManager.resetIdleTime();

      // Mirror based on direction
      if (mascotState.position.x < cursorPos.x) {
        mascotStateManager.setMirrorX(false);
      } else if (mascotState.position.x > cursorPos.x) {
        mascotStateManager.setMirrorX(true);
      }
    }
  }, [isMoving, cursorPos, mascotState.position.x]);

  // Handle idle behaviors
  useEffect(() => {
    if (isReducedMotion) return;

    // Clear existing timeout
    if (idleBehaviorTimeoutRef.current) {
      clearTimeout(idleBehaviorTimeoutRef.current);
    }

    const seconds = Math.floor(idleSeconds);

    if (seconds === 2) {
      mascotStateManager.setAnimation("looking");
    } else if (seconds === 4) {
      mascotStateManager.setAnimation("sitting");
    } else if (seconds === 8) {
      mascotStateManager.setHeldItem("coffee");
    } else if (seconds === 12) {
      mascotStateManager.setAnimation("waving");
      mascotStateManager.setSpeechBubble({
        message: "👋 Still here?",
        type: "happy",
        duration: 3,
        id: `bubble-${seconds}`,
      });
    } else if (seconds === 15) {
      mascotStateManager.setAnimation("sleeping");
      mascotStateManager.setHeldItem(null);
    } else if (seconds > 2 && !isMoving && mascotState.animation === "idle") {
      // Random occasional animation
      if (Math.random() < 0.3) {
        mascotStateManager.setAnimation("thinking");
      }
    }
  }, [idleSeconds, isMoving, isReducedMotion, mascotState.animation]);

  // Handle cursor leaving viewport
  useEffect(() => {
    if (cursorHasLeft && !cursorLeftTimeRef.current) {
      cursorLeftTimeRef.current = Date.now();
      mascotStateManager.setAnimation("pointing");
      mascotStateManager.setSpeechBubble({
        message: "📞 Still have questions?",
        type: "curious",
        duration: 4,
        id: "cursor-leave",
      });

      // Show for 4 seconds then hide
      setTimeout(() => {
        mascotStateManager.setSpeechBubble(null);
        cursorLeftTimeRef.current = 0;
      }, 4000);
    } else if (!cursorHasLeft && cursorLeftTimeRef.current) {
      cursorLeftTimeRef.current = 0;
      mascotStateManager.setAnimation("idle");
    }
  }, [cursorHasLeft]);

  // Update active section
  useEffect(() => {
    mascotStateManager.setCurrentSection(activeSection as SectionType);
  }, [activeSection]);

  // Handle clicks for easter egg (dizzy effect)
  const handleMascotClick = useCallback(() => {
    const now = Date.now();
    if (now - lastClickTimeRef.current < 300) {
      clickCountRef.current++;
    } else {
      clickCountRef.current = 1;
    }
    lastClickTimeRef.current = now;

    if (clickCountRef.current >= 3) {
      mascotStateManager.setAnimation("dizzy");
      clickCountRef.current = 0;
      setTimeout(() => {
        mascotStateManager.setAnimation("celebrating");
      }, 600);
    }
  }, []);

  // Handle resume download
  useEffect(() => {
    const handleResumeDownload = (e: Event) => {
      if ((e.target as HTMLElement)?.getAttribute("href")?.includes("resume")) {
        mascotStateManager.setAnimation("celebrating");
        mascotStateManager.setSpeechBubble({
          message: "🎉 Thanks for your interest!",
          type: "happy",
          duration: 2,
          id: "download",
        });
        setTimeout(() => {
          mascotStateManager.setAnimation("idle");
        }, 800);
      }
    };

    document.addEventListener("click", handleResumeDownload);
    return () => document.removeEventListener("click", handleResumeDownload);
  }, []);

  // Hide mascot on tab hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        mascotStateManager.setAnimation("sleeping");
      } else {
        mascotStateManager.setAnimation("waving");
        setTimeout(() => {
          mascotStateManager.setAnimation("idle");
        }, 800);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Return to idle when cursor stops moving
  useEffect(() => {
    if (!isMoving && mascotState.animation !== "sleeping" && mascotState.animation !== "sitting") {
      const timeout = setTimeout(() => {
        if (!isMoving) {
          mascotStateManager.setAnimation("idle");
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isMoving, mascotState.animation]);

  if (!mascotState.isVisible || isReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-40"
      style={{
        left: physicsPosition.x,
        top: physicsPosition.y,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mascot character */}
      <motion.div
        className="cursor-pointer"
        onClick={handleMascotClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ pointerEvents: "auto" }}
      >
        <MascotCharacter
          state={mascotState}
          isReducedMotion={isReducedMotion}
          isDarkMode={isDarkMode}
        />
      </motion.div>

      {/* Speech bubble */}
      <AnimatePresence mode="wait">
        {mascotState.speechBubble && (
          <MascotSpeechBubble
            message={mascotState.speechBubble.message}
            type={mascotState.speechBubble.type}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
