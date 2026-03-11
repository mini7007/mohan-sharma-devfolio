"use client";

import { motion } from "framer-motion";

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

type TouchControlsProps = {
  onDirectionChange: (direction: Direction) => void;
};

const controls: { direction: Direction; icon: string; ariaLabel: string; className: string }[] = [
  { direction: "UP", icon: "↑", ariaLabel: "Move up", className: "col-start-2 row-start-1" },
  { direction: "LEFT", icon: "←", ariaLabel: "Move left", className: "col-start-1 row-start-2" },
  { direction: "DOWN", icon: "↓", ariaLabel: "Move down", className: "col-start-2 row-start-2" },
  { direction: "RIGHT", icon: "→", ariaLabel: "Move right", className: "col-start-3 row-start-2" },
];

export default function TouchControls({ onDirectionChange }: TouchControlsProps) {
  return (
    <div className="mt-5 flex justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-3">
        {controls.map((control) => (
          <motion.button
            key={control.direction}
            type="button"
            onClick={() => onDirectionChange(control.direction)}
            aria-label={control.ariaLabel}
            whileTap={{ scale: 0.92, y: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className={`${control.className} h-16 w-16 rounded-xl border border-cyan-200/20 bg-slate-900/90 text-3xl font-semibold text-cyan-200 shadow-lg shadow-cyan-500/10 active:bg-cyan-500/20`}
          >
            {control.icon}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
