'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRecruiterMode } from '@/hooks/useRecruiterMode';

const RecruiterModeToggle: React.FC = () => {
  const { isRecruiterMode, toggleRecruiterMode, startGuidedTour, tourProgress } =
    useRecruiterMode();

  return (
    <motion.div className="fixed bottom-8 left-8 z-40">
      <AnimatePresence>
        {!isRecruiterMode ? (
          <motion.button
            key="visitor-mode"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={toggleRecruiterMode}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            👋 Visitor Mode
          </motion.button>
        ) : (
          <motion.div
            key="recruiter-mode"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col gap-3"
          >
            {/* Recruiter Mode Header */}
            <motion.div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-xl border border-green-200 dark:border-green-900">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-green-600 dark:text-green-400">
                  💼 RECRUITER MODE
                </span>
                <button
                  onClick={toggleRecruiterMode}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              {/* Tour Progress */}
              {tourProgress > 0 && tourProgress < 100 && (
                <div className="mb-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <motion.div
                      className="bg-green-500 h-1 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: `${tourProgress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {tourProgress === 100
                      ? 'Tour complete!'
                      : `Guided tour: ${Math.round(tourProgress)}%`}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={startGuidedTour}
                  disabled={tourProgress > 0 && tourProgress < 100}
                  className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white text-sm rounded-lg transition-colors"
                >
                  {tourProgress > 0 && tourProgress < 100
                    ? '⏳ Tour in progress...'
                    : tourProgress === 100
                    ? '✓ Tour completed'
                    : '🎯 Start Guided Tour (60s)'}
                </button>

                <button
                  onClick={toggleRecruiterMode}
                  className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm rounded-lg transition-colors"
                >
                  Back to Visitor Mode
                </button>
              </div>

              {/* Quick Links */}
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  QUICK NAV
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="#section-projects"
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900 rounded transition-colors"
                  >
                    📁 Projects
                  </a>
                  <a
                    href="#section-experience"
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900 rounded transition-colors"
                  >
                    💼 Experience
                  </a>
                  <a
                    href="#section-skills"
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900 rounded transition-colors"
                  >
                    🛠️ Skills
                  </a>
                  <a
                    href="#section-contact"
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900 rounded transition-colors"
                  >
                    📞 Contact
                  </a>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 italic">
                Premium portfolios provide guided experiences for recruiters.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RecruiterModeToggle;
