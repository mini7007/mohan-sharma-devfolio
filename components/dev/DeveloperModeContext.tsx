"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { motion } from "framer-motion";

const STORAGE_KEY = "developer-mode-enabled";

type DeveloperModeContextValue = {
  isEnabled: boolean;
  toggle: () => void;
};

const DeveloperModeContext = createContext<DeveloperModeContextValue | undefined>(
  undefined
);

function DeveloperModeToggle() {
  const { isEnabled, toggle } = useDeveloperMode();

  return (
    <motion.button
      type="button"
      onClick={toggle}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed right-4 top-4 z-[95] inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-medium text-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-colors hover:border-violet-400/30 sm:right-6 sm:top-6"
      aria-pressed={isEnabled}
      aria-label={isEnabled ? "Disable developer mode" : "Enable developer mode"}
    >
      <span aria-hidden="true">🧑‍💻</span>
      <span>Dev Mode</span>
      <span
        className={`h-2 w-2 rounded-full transition-colors ${
          isEnabled ? "bg-emerald-400" : "bg-slate-500"
        }`}
        aria-hidden="true"
      />
    </motion.button>
  );
}

export function DeveloperModeProvider({ children }: { children: ReactNode }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setIsEnabled(stored === "true");
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(STORAGE_KEY, String(isEnabled));
  }, [isEnabled, isReady]);

  const value = useMemo(
    () => ({
      isEnabled,
      toggle: () => setIsEnabled((current) => !current),
    }),
    [isEnabled]
  );

  return (
    <DeveloperModeContext.Provider value={value}>
      {children}
      {isReady ? <DeveloperModeToggle /> : null}
    </DeveloperModeContext.Provider>
  );
}

export function useDeveloperMode() {
  const context = useContext(DeveloperModeContext);

  if (!context) {
    throw new Error("useDeveloperMode must be used within DeveloperModeProvider");
  }

  return context;
}
