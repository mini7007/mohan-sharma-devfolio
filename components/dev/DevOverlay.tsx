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
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "pointer-events-none absolute z-30 inline-flex max-w-[16rem] items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/65 px-3 py-2 text-[11px] font-medium leading-tight text-cyan-100 shadow-[0_10px_30px_rgba(8,145,178,0.18)] backdrop-blur-md",
            className
          )}
        >
          <span className="text-xs">{icon}</span>
          <span>{label}</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
