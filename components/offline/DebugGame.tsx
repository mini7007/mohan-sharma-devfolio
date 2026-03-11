"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DEBUG_PUZZLES } from "./puzzles";

type DebugGameProps = {
  onExit: () => void;
};

export default function DebugGame({ onExit }: DebugGameProps) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const puzzle = DEBUG_PUZZLES[index];
  const solved = selected !== null;

  const nextPuzzle = () => {
    setSelected(null);
    setIndex((prev) => (prev + 1) % DEBUG_PUZZLES.length);
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="w-full max-w-3xl rounded-2xl border border-emerald-400/20 bg-slate-950/90 p-5 shadow-2xl shadow-emerald-500/10"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-emerald-200">Debug the Code</h2>
        <p className="text-sm text-slate-300">Score: {score}</p>
      </div>

      <pre className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-slate-200">
        {puzzle.prompt}
      </pre>

      <div className="mt-4 space-y-2">
        {puzzle.options.map((option, optionIndex) => {
          const isCorrect = optionIndex === puzzle.answerIndex;
          const isSelected = optionIndex === selected;

          return (
            <motion.button
              whileHover={{ x: 4 }}
              key={option}
              onClick={() => {
                if (solved) return;
                setSelected(optionIndex);
                if (isCorrect) setScore((prev) => prev + 1);
              }}
              className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                isSelected
                  ? isCorrect
                    ? "border-emerald-400 bg-emerald-500/20 text-emerald-100"
                    : "border-rose-400 bg-rose-500/20 text-rose-100"
                  : "border-slate-700 bg-slate-900 text-slate-200 hover:border-emerald-500/40"
              }`}
            >
              {String.fromCharCode(65 + optionIndex)}) {option}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {solved && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-300"
          >
            {selected === puzzle.answerIndex ? "✅ Correct! " : "❌ Not this one. "}
            {puzzle.explanation}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <button
          className="rounded-md bg-emerald-500 px-3 py-2 font-medium text-slate-950"
          onClick={nextPuzzle}
        >
          {index === DEBUG_PUZZLES.length - 1 ? "Loop puzzles" : "Next puzzle"}
        </button>
        <button className="rounded-md border border-slate-700 px-3 py-2 text-slate-200" onClick={restart}>Play again</button>
        <button className="rounded-md border border-slate-700 px-3 py-2 text-slate-200" onClick={onExit}>Back to arcade</button>
      </div>
    </motion.section>
  );
}
