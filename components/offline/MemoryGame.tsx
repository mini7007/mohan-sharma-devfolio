"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type MemoryCard = {
  id: string;
  label: string;
  emoji: string;
};

const BASE_CARDS: MemoryCard[] = [
  { id: "react", label: "React", emoji: "⚛️" },
  { id: "next", label: "Next.js", emoji: "▲" },
  { id: "ts", label: "TypeScript", emoji: "🔷" },
  { id: "docker", label: "Docker", emoji: "🐳" },
  { id: "aws", label: "AWS", emoji: "☁️" },
  { id: "git", label: "Git", emoji: "🌿" },
];

type CardState = MemoryCard & { uid: string };

type MemoryGameProps = {
  onExit: () => void;
};

const shuffleDeck = (): CardState[] =>
  [...BASE_CARDS, ...BASE_CARDS]
    .map((card, index) => ({ ...card, uid: `${card.id}-${index}` }))
    .sort(() => Math.random() - 0.5);

export default function MemoryGame({ onExit }: MemoryGameProps) {
  const [deck, setDeck] = useState<CardState[]>(() => shuffleDeck());
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  const restart = () => {
    setDeck(shuffleDeck());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  const flippedCards = useMemo(
    () => deck.filter((card) => flipped.includes(card.uid)),
    [deck, flipped],
  );

  useEffect(() => {
    if (flippedCards.length !== 2) return;

    setMoves((prev) => prev + 1);

    const [first, second] = flippedCards;
    if (first.id === second.id) {
      setMatched((prev) => [...prev, first.id]);
      setFlipped([]);
      return;
    }

    const timeout = setTimeout(() => setFlipped([]), 700);
    return () => clearTimeout(timeout);
  }, [flippedCards]);

  const allMatched = matched.length === BASE_CARDS.length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="w-full max-w-3xl rounded-2xl border border-fuchsia-400/20 bg-slate-950/90 p-5 shadow-2xl shadow-fuchsia-500/10"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-fuchsia-200">Memory Match</h2>
        <p className="text-sm text-slate-300">Moves: {moves}</p>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {deck.map((card) => {
          const isFlipped = flipped.includes(card.uid) || matched.includes(card.id);

          return (
            <motion.button
              key={card.uid}
              whileHover={{ y: -3 }}
              onClick={() => {
                if (flipped.length === 2 || isFlipped) return;
                setFlipped((prev) => [...prev, card.uid]);
              }}
              className="relative h-24 rounded-xl"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.35 }}
                className="relative h-full w-full rounded-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-lg text-slate-300"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  ?
                </div>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-100"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <span className="text-2xl">{card.emoji}</span>
                  <span className="mt-1 text-xs">{card.label}</span>
                </div>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {allMatched && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-sm text-emerald-300"
          >
            Nice! You matched all dev tools.
          </motion.p>
        )}
      </AnimatePresence>
      <div className="mt-4 flex gap-3 text-sm">
        <button className="rounded-md bg-fuchsia-500 px-3 py-2 font-medium text-slate-950" onClick={restart}>Play again</button>
        <button className="rounded-md border border-slate-700 px-3 py-2 text-slate-200" onClick={onExit}>Back to arcade</button>
      </div>
    </motion.section>
  );
}
