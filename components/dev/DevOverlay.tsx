"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useDeveloperMode } from "@/components/dev/DeveloperModeContext";

type DevOverlayProps = {
  label: string;
  className?: string;
  icon?: ReactNode;
};

export default function DevOverlay({
  label,
  className,
  icon = <span aria-hidden="true">⚙️</span>,
}: DevOverlayProps) {
  const { isEnabled } = useDeveloperMode();

  return (
    <AnimatePresence>
      {isEnabled ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.7, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "pointer-events-none absolute z-30 inline-flex max-w-[16rem] items-center gap-1.5 rounded-md border border-white/10 bg-black/50 px-2 py-1 text-xs text-white opacity-70 shadow-[0_8px_20px_rgba(15,23,42,0.2)] backdrop-blur",
            className
          )}
        >
          <span className="text-[11px]">{icon}</span>
          <span>{label}</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
