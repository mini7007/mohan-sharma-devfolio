'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface RecruiterModeContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  startGuidedTour: () => void;
  tourProgress: number;
}

const RecruiterModeContext = createContext<RecruiterModeContextType | undefined>(
  undefined
);

export const RecruiterModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [tourProgress, setTourProgress] = useState(0);

  const toggleRecruiterMode = useCallback(() => {
    setIsRecruiterMode((prev) => !prev);
    if (!isRecruiterMode) {
      setTourProgress(0);
    }
  }, [isRecruiterMode]);

  const startGuidedTour = useCallback(() => {
    if (!isRecruiterMode) return;

    // 60-second guided tour through portfolio
    const tourSteps = [
      { delay: 0, section: 'hero', duration: 8 },
      { delay: 8, section: 'skills', duration: 12 },
      { delay: 20, section: 'projects', duration: 20 },
      { delay: 40, section: 'experience', duration: 12 },
      { delay: 52, section: 'resume', duration: 8 },
    ];

    tourSteps.forEach(({ delay, section }) => {
      setTimeout(() => {
        const element = document.getElementById(`section-${section}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTourProgress((delay / 60) * 100);
      }, delay * 1000);
    });

    // Auto-scroll to contact after tour
    setTimeout(() => {
      const contactElement = document.getElementById('section-contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setTourProgress(100);
    }, 60000);
  }, [isRecruiterMode]);

  return (
    <RecruiterModeContext.Provider
      value={{
        isRecruiterMode,
        toggleRecruiterMode,
        startGuidedTour,
        tourProgress,
      }}
    >
      {children}
    </RecruiterModeContext.Provider>
  );
};

export const useRecruiterMode = (): RecruiterModeContextType => {
  const context = useContext(RecruiterModeContext);
  if (!context) {
    throw new Error('useRecruiterMode must be used within RecruiterModeProvider');
  }
  return context;
};
