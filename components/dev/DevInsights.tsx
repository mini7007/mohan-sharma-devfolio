"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Wrench } from "lucide-react";
import { useDeveloperMode } from "@/components/dev/DeveloperModeContext";

const insightSections = [
  {
    title: "Tech Stack",
    details: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Architecture",
    details: ["Component-based modular design"],
  },
  {
    title: "Offline System",
    details: [
      "navigator.onLine",
      "offline/online events",
      "Offline Arcade + local state games",
    ],
  },
  {
    title: "Performance",
    details: ["Code splitting", "Lazy loading", "Responsive design"],
  },
] as const;

export default function DevInsights() {
  const { isEnabled } = useDeveloperMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      {isEnabled ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="pointer-events-none fixed bottom-4 right-4 z-[90] flex w-[min(24rem,calc(100vw-2rem))] justify-end sm:bottom-6 sm:right-6"
        >
          <div className="pointer-events-auto w-full rounded-2xl border border-white/10 bg-slate-950/80 p-3 text-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="flex w-full items-center justify-between gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-white/5"
              aria-expanded={isOpen}
              aria-controls="developer-insights-panel"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                <Wrench size={16} className="text-cyan-300" />
                <span>🛠 Developer Insights</span>
              </span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={16} className="text-slate-400" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id="developer-insights-panel"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 space-y-3 border-t border-white/10 pt-3">
                    {insightSections.map((section) => (
                      <div key={section.title} className="rounded-xl bg-white/[0.03] px-3 py-2.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                          {section.title}
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-slate-300">
                          {section.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
