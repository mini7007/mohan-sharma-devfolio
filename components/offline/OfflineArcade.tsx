"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SnakeGame from "./SnakeGame";
import MemoryGame from "./MemoryGame";
import DebugGame from "./DebugGame";

type GameMode = "menu" | "snake" | "memory" | "debug";

const VISITOR_KEY = "offline-arcade-visitors";

const gameOptions: { mode: Exclude<GameMode, "menu">; title: string; description: string }[] = [
  { mode: "snake", title: "Snake Game", description: "Arrow keys, rising speed, old-school glory." },
  { mode: "memory", title: "Memory Match", description: "Flip cards and match the developer stack." },
  { mode: "debug", title: "Debug the Code", description: "Fix bugs faster than the network can reconnect." },
];

export default function OfflineArcade() {
  const [activeGame, setActiveGame] = useState<GameMode>("menu");
  const [visitorCount, setVisitorCount] = useState(127);

  useEffect(() => {
    const hasRecorded = sessionStorage.getItem("offline-arcade-seen") === "true";
    const raw = localStorage.getItem(VISITOR_KEY);
    const parsed = raw ? Number.parseInt(raw, 10) : 127;
    const current = Number.isNaN(parsed) ? 127 : parsed;

    if (hasRecorded) {
      setVisitorCount(current);
      return;
    }

    const next = current + 1;
    localStorage.setItem(VISITOR_KEY, String(next));
    sessionStorage.setItem("offline-arcade-seen", "true");
    setVisitorCount(next);
  }, []);

  const content = useMemo(() => {
    if (activeGame === "snake") return <SnakeGame onExit={() => setActiveGame("menu")} />;
    if (activeGame === "memory") return <MemoryGame onExit={() => setActiveGame("menu")} />;
    if (activeGame === "debug") return <DebugGame onExit={() => setActiveGame("menu")} />;

    return (
      <motion.div
        key="menu"
        initial={{ opacity: 0, scale: 0.98, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className="w-full max-w-3xl rounded-2xl border border-cyan-300/20 bg-slate-950/85 p-8 text-center shadow-2xl"
      >
        <p className="text-xl font-bold tracking-wide text-cyan-300">⚡ CONNECTION LOST</p>
        <p className="mt-2 text-slate-300">But great developers always have a backup plan.</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">🎮 Welcome to the Offline Arcade</h1>
        <p className="mt-3 text-sm text-cyan-200">⚡ {visitorCount} visitors played while offline</p>

        <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
          {gameOptions.map((game) => (
            <motion.button
              key={game.mode}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveGame(game.mode)}
              className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 transition hover:border-cyan-300/40"
            >
              <p className="font-semibold text-slate-100">{game.title}</p>
              <p className="mt-1 text-xs text-slate-400">{game.description}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>
    );
  }, [activeGame, visitorCount]);

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-slate-950/95 p-4 text-white">
      <AnimatePresence mode="wait">{content}</AnimatePresence>
    </div>
  );
}
