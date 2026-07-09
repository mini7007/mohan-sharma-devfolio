import { Variants, TargetAndTransition } from 'framer-motion';

/**
 * MascotAnimations - Reusable animation states for mascot
 * Every animation is smooth, loopable, and accessible (respects prefers-reduced-motion)
 */

export const mascotAnimations = {
  // WALK - Natural walking cycle
  walk: {
    y: [0, -5, 0, -5, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // IDLE - Subtle breathing/standing
  idle: {
    scale: [1, 1.02, 1],
    y: [0, 2, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // SITTING - Pose change
  sitting: {
    scaleY: 0.85,
    y: 20,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  } as TargetAndTransition,

  // STANDING - Return from sitting
  standing: {
    scaleY: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  } as TargetAndTransition,

  // WAVING - Friendly wave animation
  wave: {
    rotate: [-5, 25, -5],
    transition: {
      duration: 0.8,
      repeat: 2,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // JUMPING - Celebratory jump
  jump: {
    y: [0, -40, 0],
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  } as TargetAndTransition,

  // CELEBRATING - Multiple jumps with spin
  celebrating: {
    y: [0, -20, 0, -25, 0],
    rotate: [0, 10, 0, -10, 0],
    transition: {
      duration: 1.2,
      repeat: 2,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // THINKING - Hand to chin
  thinking: {
    y: 0,
    x: [-5, 5, -5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // LOOKING AROUND - Head turns
  lookingAround: {
    rotateZ: [-15, 15, -15],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // CLIMBING - Vertical movement with slight scale
  climbing: {
    y: -60,
    scaleY: 0.95,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // POINTING - Arm extended
  pointing: {
    x: 20,
    rotateZ: 20,
    transition: {
      duration: 0.6,
      repeat: 2,
      yoyo: true,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // SLEEPING - Gentle sway while asleep
  sleeping: {
    y: [0, 3, 0],
    scale: [1, 1.01, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // DIZZY - Spinning with tilt
  dizzy: {
    rotate: [0, 360, 360],
    y: [-5, 5, -5],
    transition: {
      duration: 1,
      repeat: 2,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // DRINKING COFFEE
  drinkingCoffee: {
    x: [0, 15, 0],
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // FLOATING/HOVER for off-canvas
  floating: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  } as TargetAndTransition,

  // ENTRANCE - Fade in + scale
  entrance: {
    opacity: [0, 1],
    scale: [0.5, 1],
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  } as TargetAndTransition,

  // EXIT - Fade out
  exit: {
    opacity: [1, 0],
    scale: [1, 0.5],
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  } as TargetAndTransition,
};

/**
 * Eye animations for expressions
 */
export const eyeAnimations = {
  happy: {
    scaleY: 0.5,
    transition: { duration: 0.3 },
  } as TargetAndTransition,

  thinking: {
    scaleX: 0.8,
    transition: { duration: 0.3 },
  } as TargetAndTransition,

  excited: {
    scaleY: 1.2,
    transition: { duration: 0.3 },
  } as TargetAndTransition,

  sleepy: {
    scaleY: 0.2,
    transition: { duration: 0.3 },
  } as TargetAndTransition,

  dizzy: {
    rotate: 180,
    transition: { duration: 0.3, repeat: Infinity, repeatDelay: 1 },
  } as TargetAndTransition,
};

/**
 * Props animations for held items
 */
export const propAnimations = {
  laptop: {
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    } as TargetAndTransition,
    hide: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3, ease: 'easeIn' },
    } as TargetAndTransition,
  },

  coffee: {
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    } as TargetAndTransition,
    hide: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeIn' },
    } as TargetAndTransition,
    sip: {
      y: [-10, -15, -10],
      transition: { duration: 0.8, repeat: Infinity },
    } as TargetAndTransition,
  },

  magnifyingGlass: {
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    } as TargetAndTransition,
    hide: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3, ease: 'easeIn' },
    } as TargetAndTransition,
    inspect: {
      rotate: [0, -10, 10, 0],
      transition: { duration: 2, repeat: Infinity },
    } as TargetAndTransition,
  },

  flashlight: {
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    } as TargetAndTransition,
    hide: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3, ease: 'easeIn' },
    } as TargetAndTransition,
  },
};

/**
 * Speech bubble animations
 */
export const speechBubbleAnimations = {
  entrance: {
    opacity: [0, 1],
    scale: [0.8, 1],
    y: [10, 0],
    transition: { duration: 0.4, ease: 'easeOut' },
  } as TargetAndTransition,

  exit: {
    opacity: [1, 0],
    scale: [1, 0.8],
    y: [0, -10],
    transition: { duration: 0.3, ease: 'easeIn' },
  } as TargetAndTransition,

  idle: {
    y: [0, -5, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  } as TargetAndTransition,
};
