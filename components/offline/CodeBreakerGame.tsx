"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CodeBreakerGameProps = {
  onExit: () => void;
};

const getRandomTarget = () => Math.floor(Math.random() * 50) + 1;

export default function CodeBreakerGame({ onExit }: CodeBreakerGameProps) {
  const [target, setTarget] = useState(getRandomTarget);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("Enter a number between 1 and 50");
  const [isCorrect, setIsCorrect] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isCorrect) return;

    const numericGuess = Number.parseInt(guess, 10);
    if (Number.isNaN(numericGuess) || numericGuess < 1 || numericGuess > 50) {
      setMessage("Please enter a valid number from 1 to 50.");
      return;
    }

    setAttempts((prev) => prev + 1);

    if (numericGuess > target) {
      setMessage("Too High ⬇️");
      return;
    }

    if (numericGuess < target) {
      setMessage("Too Low ⬆️");
      return;
    }

    setMessage("Correct! You cracked the code 🎉");
    setIsCorrect(true);
  };

  const restart = () => {
    setTarget(getRandomTarget());
    setGuess("");
    setAttempts(0);
    setMessage("Enter a number between 1 and 50");
    setIsCorrect(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="w-full max-w-md rounded-2xl border border-violet-300/20 bg-slate-950/90 p-5 shadow-2xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-violet-200">🧠 Code Breaker</h2>
        <p className="text-sm text-slate-300">Attempts: {attempts}</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-3">
        <input
          type="number"
          inputMode="numeric"
          min={1}
          max={50}
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
          placeholder="Guess 1 - 50"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-lg text-slate-100 outline-none transition focus:border-violet-400"
        />
        <button
          type="submit"
          disabled={isCorrect}
          className="w-full rounded-xl bg-violet-400 px-4 py-3 text-base font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Submit Guess
        </button>
      </form>

      <AnimatePresence mode="wait">
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mt-4 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-center text-sm text-slate-200"
        >
          {message}
        </motion.p>
      </AnimatePresence>

      <AnimatePresence>
        {isCorrect && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4 rounded-xl border border-violet-300/40 bg-violet-500/20 p-4 text-center"
          >
            <p className="text-lg font-semibold text-violet-100">✅ Mission complete in {attempts} attempts!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 flex flex-wrap gap-3">
        <button onClick={restart} className="flex-1 rounded-lg bg-violet-400 px-4 py-3 font-semibold text-slate-950">
          Restart
        </button>
        <button onClick={onExit} className="flex-1 rounded-lg border border-slate-700 px-4 py-3 text-slate-200">
          Back to arcade
        </button>
      </div>
    </motion.section>
  );
}
