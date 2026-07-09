import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * SectionInteractions - Per-section mascot behavioral hooks
 * This hook detects when user is hovering over specific elements and triggers mascot actions
 */
export const useHeroSectionInteractions = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLImageElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const setupNameInteraction = () => {
      if (!nameRef.current) return;

      nameRef.current.addEventListener('mouseenter', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: { action: 'climb', target: 'name' },
          })
        );
      });

      nameRef.current.addEventListener('mouseleave', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: { action: 'jump-down' },
          })
        );
      });
    };

    const setupProfileInteraction = () => {
      if (!profileRef.current) return;

      profileRef.current.addEventListener('mouseenter', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: { action: 'climb-frame', target: 'profile' },
          })
        );
      });

      profileRef.current.addEventListener('mouseleave', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: { action: 'jump-down' },
          })
        );
      });
    };

    const setupCTAInteraction = () => {
      if (!ctaRef.current) return;

      ctaRef.current.addEventListener('mouseenter', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: { action: 'point', direction: 'right' },
          })
        );
      });

      ctaRef.current.addEventListener('click', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: { action: 'celebrate' },
          })
        );
      });
    };

    setupNameInteraction();
    setupProfileInteraction();
    setupCTAInteraction();

    return () => {
      // Cleanup listeners
    };
  }, []);

  return { nameRef, profileRef, ctaRef };
};

/**
 * Skills section - mascot walks and interacts with tech representations
 */
export const useSkillsSectionInteractions = () => {
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skillsContainerRef.current) return;

    const skillElements =
      skillsContainerRef.current.querySelectorAll('[data-skill]');

    skillElements.forEach((element, index) => {
      element.addEventListener('mouseenter', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: {
              action: 'point-skill',
              skillIndex: index,
              skillName: element.getAttribute('data-skill'),
            },
          })
        );
      });
    });
  }, []);

  return { skillsContainerRef };
};

/**
 * Projects section - mascot opens laptop and points
 */
export const useProjectsSectionInteractions = () => {
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projectsContainerRef.current) return;

    const projectCards =
      projectsContainerRef.current.querySelectorAll('[data-project]');

    projectCards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: {
              action: 'show-laptop',
              projectIndex: index,
            },
          })
        );
      });

      card.addEventListener('mouseleave', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: {
              action: 'hide-laptop',
            },
          })
        );
      });
    });
  }, []);

  return { projectsContainerRef };
};

/**
 * Experience section - mascot walks along timeline
 */
export const useExperienceSectionInteractions = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const experienceItems = timelineRef.current.querySelectorAll(
      '[data-experience]'
    );

    experienceItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: {
              action: 'timeline-point',
              experienceIndex: index,
            },
          })
        );
      });
    });
  }, []);

  return { timelineRef };
};

/**
 * Contact section - mascot sits beside contact options
 */
export const useContactSectionInteractions = () => {
  const contactButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contactButtonsRef.current) return;

    const buttons = contactButtonsRef.current.querySelectorAll('button, a');

    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        const method = button.getAttribute('data-contact-method') || 'email';
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: {
              action: 'point-contact',
              method,
            },
          })
        );
      });

      button.addEventListener('click', () => {
        window.dispatchEvent(
          new CustomEvent('mascot-action', {
            detail: {
              action: 'wave-goodbye',
            },
          })
        );
      });
    });
  }, []);

  return { contactButtonsRef };
};
