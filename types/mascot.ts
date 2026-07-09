// Mascot animation states
export type MascotAnimation =
  | "idle"
  | "walking"
  | "sitting"
  | "jumping"
  | "waving"
  | "pointing"
  | "climbing"
  | "celebrating"
  | "thinking"
  | "looking"
  | "sleeping"
  | "dizzy";

// Items the mascot can hold
export type HeldItem = "coffee" | "laptop" | "magnifier" | "flashlight" | "document" | null;

// Section types in portfolio
export type SectionType =
  | "hero"
  | "about"
  | "profiles"
  | "stack"
  | "projects"
  | "experience"
  | "contact"
  | "none";

// Mascot state interface
export interface MascotState {
  animation: MascotAnimation;
  heldItem: HeldItem;
  position: {
    x: number;
    y: number;
  };
  targetPosition: {
    x: number;
    y: number;
  };
  isVisible: boolean;
  scale: number;
  rotation: number;
  mirrorX: boolean;
  currentSection: SectionType;
  idleTime: number;
  speechBubble: SpeechBubble | null;
}

// Speech bubble interface
export interface SpeechBubble {
  message: string;
  type: "neutral" | "happy" | "curious" | "warning";
  duration: number;
  id: string;
}

// Behavior config
export interface IdleBehavior {
  trigger: "time"; // 'time', 'scroll', 'click', etc
  delay: number;
  animations: MascotAnimation[];
  message?: string;
  probability?: number;
}

// Physics config
export interface PhysicsConfig {
  friction: number; // 0-1, how quickly mascot slows down
  acceleration: number; // how quickly mascot speeds up
  maxSpeed: number; // max velocity
  easing: "linear" | "easeInOut" | "easeOut" | "easeIn";
}

// Interaction config
export interface InteractionConfig {
  followCursor: boolean;
  followScroll: boolean;
  trackSections: boolean;
  detectCursorLeave: boolean;
  enableIdleBehaviors: boolean;
  enableEasterEggs: boolean;
}
