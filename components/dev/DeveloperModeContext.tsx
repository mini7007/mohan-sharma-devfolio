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
      className="fixed right-4 top-24 z-[95] inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 text-left text-xs font-semibold text-slate-100 shadow-[0_12px_40px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-colors hover:border-violet-400/40 sm:right-6 sm:top-28"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={isEnabled}
      aria-label={isEnabled ? "Disable developer mode" : "Enable developer mode"}
    >
      <span className="text-base" aria-hidden="true">
        🧑‍💻
      </span>
      <span className="flex flex-col leading-tight">
        <span>Dev Mode</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
          {isEnabled ? "On" : "Off"}
        </span>
      </span>
      <span
        className={`relative h-6 w-11 rounded-full border transition-colors ${
          isEnabled
            ? "border-emerald-400/50 bg-emerald-400/20"
            : "border-white/10 bg-white/10"
        }`}
        aria-hidden="true"
      >
        <motion.span
          className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-md"
          animate={{ x: isEnabled ? 20 : 2 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        />
      </span>
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
