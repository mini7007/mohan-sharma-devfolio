import type { MascotState, MascotAnimation, HeldItem, SectionType, SpeechBubble } from "@/types/mascot";

/**
 * Mascot state manager.
 * Handles animation state, position, idle behaviors, and interactions.
 */
export class MascotStateManager {
  private state: MascotState;
  private listeners: Set<(state: MascotState) => void> = new Set();

  constructor() {
    this.state = {
      animation: "idle",
      heldItem: null,
      position: { x: 0, y: 0 },
      targetPosition: { x: 0, y: 0 },
      isVisible: false,
      scale: 1,
      rotation: 0,
      mirrorX: false,
      currentSection: "none",
      idleTime: 0,
      speechBubble: null,
    };
  }

  /**
   * Update state and notify all listeners
   */
  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  /**
   * Subscribe to state changes
   */
  subscribe(listener: (state: MascotState) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * Get current state
   */
  getState(): MascotState {
    return { ...this.state };
  }

  /**
   * Set animation
   */
  setAnimation(animation: MascotAnimation) {
    if (this.state.animation !== animation) {
      this.state.animation = animation;
      this.notifyListeners();
    }
  }

  /**
   * Set held item
   */
  setHeldItem(item: HeldItem) {
    if (this.state.heldItem !== item) {
      this.state.heldItem = item;
      this.notifyListeners();
    }
  }

  /**
   * Set position
   */
  setPosition(x: number, y: number) {
    this.state.position = { x, y };
    this.notifyListeners();
  }

  /**
   * Set target position
   */
  setTargetPosition(x: number, y: number) {
    this.state.targetPosition = { x, y };
  }

  /**
   * Set visibility
   */
  setVisible(visible: boolean) {
    if (this.state.isVisible !== visible) {
      this.state.isVisible = visible;
      this.notifyListeners();
    }
  }

  /**
   * Set scale
   */
  setScale(scale: number) {
    if (this.state.scale !== scale) {
      this.state.scale = Math.max(0.5, Math.min(2, scale));
      this.notifyListeners();
    }
  }

  /**
   * Set mirror (flip)
   */
  setMirrorX(mirror: boolean) {
    if (this.state.mirrorX !== mirror) {
      this.state.mirrorX = mirror;
      this.notifyListeners();
    }
  }

  /**
   * Set current section
   */
  setCurrentSection(section: SectionType) {
    if (this.state.currentSection !== section) {
      this.state.currentSection = section;
      this.notifyListeners();
    }
  }

  /**
   * Increment idle time
   */
  incrementIdleTime(ms: number) {
    this.state.idleTime += ms;
  }

  /**
   * Reset idle time
   */
  resetIdleTime() {
    this.state.idleTime = 0;
  }

  /**
   * Set speech bubble
   */
  setSpeechBubble(bubble: SpeechBubble | null) {
    this.state.speechBubble = bubble;
    this.notifyListeners();
  }

  /**
   * Get idle time in seconds
   */
  getIdleTimeSeconds(): number {
    return this.state.idleTime / 1000;
  }

  /**
   * Quick reset
   */
  reset() {
    this.state = {
      animation: "idle",
      heldItem: null,
      position: { x: 0, y: 0 },
      targetPosition: { x: 0, y: 0 },
      isVisible: false,
      scale: 1,
      rotation: 0,
      mirrorX: false,
      currentSection: "none",
      idleTime: 0,
      speechBubble: null,
    };
    this.notifyListeners();
  }
}

// Export singleton instance
export const mascotStateManager = new MascotStateManager();
