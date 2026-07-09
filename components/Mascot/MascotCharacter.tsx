"use client";

import React from "react";
import { motion } from "framer-motion";
import type { MascotState, MascotAnimation } from "@/types/mascot";

interface MascotCharacterProps {
  state: MascotState;
  isReducedMotion: boolean;
  isDarkMode: boolean;
}

/**
 * Premium hand-drawn mascot character SVG.
 * Minimal, cute, professional doodle style.
 * Multiple animation states with smooth transitions.
 */
export const MascotCharacter: React.FC<MascotCharacterProps> = ({
  state,
  isReducedMotion,
  isDarkMode,
}) => {
  const charColor = isDarkMode ? "#ffffff" : "#000000";

  const getAnimationVariants = (animation: MascotAnimation): any => {
    const baseReturn = {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: {},
    };

    if (isReducedMotion) {
      return baseReturn;
    }

    switch (animation) {
      case "walking":
        return {
          initial: { opacity: 1 },
          animate: {
            y: [0, -2, 0, -2, 0],
            x: [0, 1, -1, 1, 0],
          },
          transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
        };
      case "idle":
        return {
          initial: { opacity: 1 },
          animate: { y: [0, -1, 0] },
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        };
      case "sitting":
        return {
          initial: { scaleY: 1 },
          animate: { scaleY: 0.8 },
          transition: { duration: 0.3 },
        };
      case "jumping":
        return {
          initial: { y: 0 },
          animate: { y: [0, -12, 0] },
          transition: { duration: 0.5, ease: "easeOut" },
        };
      case "waving":
        return {
          initial: { rotate: 0 },
          animate: { rotate: [0, -25, 25, -25, 0] },
          transition: { duration: 0.8, ease: "easeInOut" },
        };
      case "pointing":
        return {
          initial: { rotate: 0 },
          animate: { rotate: [0, -35, -35] },
          transition: { duration: 0.5 },
        };
      case "celebrating":
        return {
          initial: { rotate: 0, y: 0 },
          animate: {
            y: [0, -8, 0, -8, 0],
            rotate: [0, 15, -15, 15, 0],
          },
          transition: { duration: 0.8 },
        };
      case "thinking":
        return {
          initial: { rotate: 0 },
          animate: { rotate: [0, -8, 8, 0] },
          transition: { duration: 1.5, repeat: Infinity },
        };
      case "looking":
        return {
          initial: { rotate: 0 },
          animate: { rotate: [0, 10, -10, 0] },
          transition: { duration: 2, repeat: Infinity },
        };
      case "sleeping":
        return {
          initial: { scaleY: 0.7 },
          animate: { scaleY: 0.7 },
          transition: { duration: 0.3 },
        };
      case "dizzy":
        return {
          initial: { rotate: 0 },
          animate: { rotate: 360 },
          transition: { duration: 0.6, repeat: 3 },
        };
      case "climbing":
        return {
          initial: { y: 0 },
          animate: { y: [0, -20] },
          transition: { duration: 1, ease: "easeInOut" },
        };
      default:
        return baseReturn;
    }
  };

  const variants = getAnimationVariants(state.animation);

  return (
    <motion.svg
      viewBox="0 0 64 80"
      width={48 * state.scale}
      height={60 * state.scale}
      className="drop-shadow-lg"
      style={{ scaleX: state.mirrorX ? -1 : 1 }}
      variants={variants}
      initial="initial"
      animate="animate"
      transition={variants.transition || { duration: 0.2 }}
    >
      {/* Body */}
      <motion.circle
        cx="32"
        cy="40"
        r="14"
        fill="none"
        stroke={charColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Head */}
      <motion.circle
        cx="32"
        cy="18"
        r="12"
        fill="none"
        stroke={charColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Eyes - blink when sleeping */}
      <motion.circle
        cx="27"
        cy="16"
        r="2"
        fill={charColor}
        animate={state.animation === "sleeping" ? { scaleY: 0.1 } : { scaleY: 1 }}
        transition={{ duration: 0.1 }}
      />
      <motion.circle
        cx="37"
        cy="16"
        r="2"
        fill={charColor}
        animate={state.animation === "sleeping" ? { scaleY: 0.1 } : { scaleY: 1 }}
        transition={{ duration: 0.1 }}
      />

      {/* Mouth - changes shape based on animation */}
      {state.animation !== "sleeping" && (
        <motion.path
          d={
            state.animation === "celebrating"
              ? "M 28 24 Q 32 22 36 24" // Big smile
              : state.animation === "thinking"
                ? "M 30 22 Q 32 21 34 22" // Confused mouth
                : "M 28 22 Q 32 24 36 22" // Neutral mouth
          }
          stroke={charColor}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{ d: "auto" }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Eyebrow movement for expression */}
      {state.animation === "thinking" && (
        <motion.path
          d="M 25 12 Q 27 11 29 12"
          stroke={charColor}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={{ d: ["M 25 12 Q 27 11 29 12", "M 25 11 Q 27 10 29 11"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}

      {/* Left Arm */}
      <motion.path
        d="M 20 38 L 12 42"
        stroke={charColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={
          state.animation === "waving"
            ? { rotate: [0, -35, 35, -35, 0] }
            : state.animation === "pointing"
              ? { rotate: -50 }
              : state.animation === "sitting"
                ? { rotate: 20 }
                : {}
        }
        style={{
          transformOrigin: "20px 38px",
          transformBox: "fill-box",
        }}
      />

      {/* Right Arm */}
      <motion.path
        d="M 44 38 L 52 42"
        stroke={charColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={
          state.animation === "pointing"
            ? { rotate: -50 }
            : state.animation === "thinking"
              ? { rotate: [0, 25, 0] }
              : state.animation === "sitting"
                ? { rotate: -20 }
                : {}
        }
        style={{
          transformOrigin: "44px 38px",
          transformBox: "fill-box",
        }}
      />

      {/* Left Leg */}
      <motion.path
        d="M 26 54 L 24 70"
        stroke={charColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={
          state.animation === "walking"
            ? { scaleY: [1, 0.85, 1] }
            : state.animation === "sitting"
              ? { opacity: 0.3 }
              : {}
        }
        style={{ transformOrigin: "26px 54px", transformBox: "fill-box" }}
      />

      {/* Right Leg */}
      <motion.path
        d="M 38 54 L 40 70"
        stroke={charColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={
          state.animation === "walking"
            ? { scaleY: [0.85, 1, 0.85] }
            : state.animation === "sitting"
              ? { opacity: 0.3 }
              : {}
        }
        style={{ transformOrigin: "38px 54px", transformBox: "fill-box" }}
      />

      {/* Sleeping Z's */}
      {state.animation === "sleeping" && (
        <>
          <motion.text
            x="44"
            y="8"
            fontSize="10"
            fontWeight="bold"
            fill={charColor}
            animate={{ opacity: [0.3, 1, 0.3], y: [8, -2, -12] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
          >
            Z
          </motion.text>
        </>
      )}

      {/* Dizzy stars */}
      {state.animation === "dizzy" && (
        <>
          <motion.text
            x="40"
            y="8"
            fontSize="8"
            fill={charColor}
            animate={{ rotate: 360, opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.6, repeat: 3 }}
          >
            *
          </motion.text>
          <motion.text
            x="48"
            y="12"
            fontSize="8"
            fill={charColor}
            animate={{ rotate: -360, opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.6, repeat: 3, delay: 0.1 }}
          >
            *
          </motion.text>
        </>
      )}

      {/* Thought bubble */}
      {state.animation === "thinking" && (
        <motion.g
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <circle cx="50" cy="6" r="6" fill="none" stroke={charColor} strokeWidth="1.5" />
          <circle cx="46" cy="2" r="2.5" fill="none" stroke={charColor} strokeWidth="1" />
        </motion.g>
      )}

      {/* Held Items */}
      {state.heldItem === "coffee" && (
        <motion.g
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "51px 45px", transformBox: "fill-box" }}
        >
          <rect x="49" y="42" width="4" height="8" rx="1" fill="none" stroke={charColor} strokeWidth="1.5" />
          <ellipse cx="51" cy="42" rx="2.5" ry="1.5" fill="none" stroke={charColor} strokeWidth="1.5" />
        </motion.g>
      )}

      {state.heldItem === "laptop" && (
        <motion.g
          animate={{ rotateZ: [0, 8, -8, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ transformOrigin: "50px 38px", transformBox: "fill-box" }}
        >
          <rect x="44" y="32" width="12" height="8" rx="1" fill="none" stroke={charColor} strokeWidth="1.5" />
          <line x1="44" y1="35" x2="56" y2="35" stroke={charColor} strokeWidth="1" />
        </motion.g>
      )}

      {state.heldItem === "magnifier" && (
        <motion.g
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ transformOrigin: "54px 28px", transformBox: "fill-box" }}
        >
          <circle cx="52" cy="28" r="4" fill="none" stroke={charColor} strokeWidth="1.5" />
          <line x1="55" y1="31" x2="59" y2="35" stroke={charColor} strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      )}

      {state.heldItem === "flashlight" && (
        <motion.g
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          style={{ transformOrigin: "52px 36px", transformBox: "fill-box" }}
        >
          <rect x="50" y="32" width="2" height="8" fill={charColor} />
          <circle cx="51" cy="31" r="3" fill="none" stroke={charColor} strokeWidth="1.5" />
        </motion.g>
      )}

      {state.heldItem === "document" && (
        <motion.g
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformBox: "fill-box" }}
        >
          <rect x="45" y="35" width="8" height="10" rx="1" fill="none" stroke={charColor} strokeWidth="1.5" />
          <line x1="47" y1="39" x2="51" y2="39" stroke={charColor} strokeWidth="1" />
          <line x1="47" y1="42" x2="51" y2="42" stroke={charColor} strokeWidth="1" />
        </motion.g>
      )}
    </motion.svg>
  );
};

export default MascotCharacter;
