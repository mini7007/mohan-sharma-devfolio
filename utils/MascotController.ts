/**
 * Mascot Controller - Core state management for mascot behaviors
 * Handles animations, section awareness, and interactions
 */

export type MascotState = 
  | 'idle'
  | 'walking'
  | 'sitting'
  | 'waving'
  | 'celebrating'
  | 'thinking'
  | 'climbing'
  | 'jumping'
  | 'pointing'
  | 'sleeping'
  | 'looking-around'
  | 'drinking-coffee'
  | 'dizzy';

export type MascotExpression = 
  | 'happy'
  | 'thinking'
  | 'excited'
  | 'sleepy'
  | 'curious'
  | 'dizzy';

export type ActiveSection = 
  | 'hero'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'contact'
  | 'none';

export interface MascotPosition {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export interface MascotBehavior {
  state: MascotState;
  expression: MascotExpression;
  activeSection: ActiveSection;
  isIdle: boolean;
  idleTimer: number;
  showsSpeechBubble: boolean;
  speechText?: string;
  showsLaptop: boolean;
  showsCoffee: boolean;
  showsMagnifyingGlass: boolean;
  showsFlashlight: boolean;
}

export class MascotController {
  private behavior: MascotBehavior;
  private idleTimeoutId: NodeJS.Timeout | null = null;
  private animationFrameId: number | null = null;

  constructor() {
    this.behavior = {
      state: 'idle',
      expression: 'happy',
      activeSection: 'none',
      isIdle: false,
      idleTimer: 0,
      showsSpeechBubble: false,
      showsLaptop: false,
      showsCoffee: false,
      showsMagnifyingGlass: false,
      showsFlashlight: false,
    };
  }

  getBehavior(): MascotBehavior {
    return { ...this.behavior };
  }

  setBehavior(partial: Partial<MascotBehavior>) {
    this.behavior = { ...this.behavior, ...partial };
  }

  setState(state: MascotState) {
    this.behavior.state = state;
    this.resetIdleTimer();
  }

  setExpression(expression: MascotExpression) {
    this.behavior.expression = expression;
  }

  setActiveSection(section: ActiveSection) {
    this.behavior.activeSection = section;
  }

  showSpeech(text: string) {
    this.behavior.showsSpeechBubble = true;
    this.behavior.speechText = text;
    setTimeout(() => {
      this.behavior.showsSpeechBubble = false;
    }, 3000);
  }

  toggleLaptop(show: boolean) {
    this.behavior.showsLaptop = show;
  }

  toggleCoffee(show: boolean) {
    this.behavior.showsCoffee = show;
  }

  toggleMagnifyingGlass(show: boolean) {
    this.behavior.showsMagnifyingGlass = show;
  }

  toggleFlashlight(show: boolean) {
    this.behavior.showsFlashlight = show;
  }

  startIdleTimer() {
    this.behavior.isIdle = true;
    this.behavior.idleTimer = 0;

    const idleSequence = [
      { delay: 2000, state: 'looking-around' as MascotState, duration: 1500 },
      { delay: 5000, state: 'sitting' as MascotState, duration: 3000 },
      { delay: 8000, state: 'drinking-coffee' as MascotState, duration: 2000 },
      { delay: 12000, state: 'waving' as MascotState, duration: 1500 },
      { delay: 15000, state: 'sleeping' as MascotState, duration: Infinity },
    ];

    idleSequence.forEach(({ delay, state }) => {
      setTimeout(() => {
        if (this.behavior.isIdle) {
          this.setState(state);
        }
      }, delay);
    });
  }

  resetIdleTimer() {
    this.behavior.isIdle = false;
    this.behavior.idleTimer = 0;

    if (this.idleTimeoutId) {
      clearTimeout(this.idleTimeoutId);
    }

    if (this.behavior.state === 'sleeping') {
      this.setState('idle');
    }
  }

  celebrate() {
    this.setState('celebrating');
    this.setExpression('excited');
    setTimeout(() => {
      this.setState('idle');
      this.setExpression('happy');
    }, 2000);
  }

  dizzy() {
    this.setState('dizzy');
    this.setExpression('dizzy');
    setTimeout(() => {
      this.setState('idle');
      this.setExpression('happy');
    }, 1500);
  }

  pointToward(direction: 'left' | 'right' | 'up' | 'down') {
    this.setState('pointing');
    setTimeout(() => {
      this.setState('idle');
    }, 1500);
  }

  climb() {
    this.setState('climbing');
    setTimeout(() => {
      this.setState('idle');
    }, 2000);
  }

  jump() {
    this.setState('jumping');
    setTimeout(() => {
      this.setState('idle');
    }, 1500);
  }

  wave() {
    this.setState('waving');
    setTimeout(() => {
      this.setState('idle');
    }, 1500);
  }

  cleanup() {
    if (this.idleTimeoutId) {
      clearTimeout(this.idleTimeoutId);
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
