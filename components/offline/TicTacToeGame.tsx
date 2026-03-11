"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TicTacToeGameProps = {
  onExit: () => void;
};

type CellValue = "X" | "O" | null;

const WINNING_LINES: [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getWinner = (board: CellValue[]) => {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return { winner: board[a], line: [a, b, c] as [number, number, number] };
    }
  }

  return { winner: null, line: null };
};

const getComputerMove = (board: CellValue[]) => {
  const openCells = board
    .map((cell, index) => ({ cell, index }))
    .filter(({ cell }) => cell === null)
    .map(({ index }) => index);

  if (!openCells.length) return null;

  const canFinish = (symbol: Exclude<CellValue, null>) => {
    for (const index of openCells) {
      const clone = [...board];
      clone[index] = symbol;
      if (getWinner(clone).winner === symbol) return index;
    }

    return null;
  };

  const winningMove = canFinish("O");
  if (winningMove !== null) return winningMove;

  const blockingMove = canFinish("X");
  if (blockingMove !== null) return blockingMove;

  if (openCells.includes(4)) return 4;

  const corners = [0, 2, 6, 8].filter((index) => openCells.includes(index));
  if (corners.length) {
    return corners[Math.floor(Math.random() * corners.length)];
  }

  return openCells[Math.floor(Math.random() * openCells.length)];
};

export default function TicTacToeGame({ onExit }: TicTacToeGameProps) {
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [status, setStatus] = useState("Your turn");

  const { winner, line } = useMemo(() => getWinner(board), [board]);
  const isDraw = !winner && board.every((cell) => cell !== null);
  const isGameOver = Boolean(winner || isDraw);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setStatus("Your turn");
  };

  const placeMove = (index: number, symbol: Exclude<CellValue, null>) => {
    const clone = [...board];
    clone[index] = symbol;
    setBoard(clone);

    const outcome = getWinner(clone);
    if (outcome.winner) {
      setStatus(outcome.winner === "X" ? "You win!" : "Computer wins!");
      return;
    }

    if (clone.every((cell) => cell !== null)) {
      setStatus("It's a draw!");
      return;
    }

    setStatus(symbol === "X" ? "Computer is thinking..." : "Your turn");
  };

  const onPlayerMove = (index: number) => {
    if (board[index] || isGameOver || status.includes("thinking")) return;

    placeMove(index, "X");

    const snapshot = [...board];
    snapshot[index] = "X";
    const playerOutcome = getWinner(snapshot);
    const drawAfterPlayer = snapshot.every((cell) => cell !== null);

    if (playerOutcome.winner || drawAfterPlayer) return;

    const move = getComputerMove(snapshot);
    if (move === null) return;

    window.setTimeout(() => {
      setBoard((current) => {
        if (current[move] || getWinner(current).winner) return current;

        const clone = [...current];
        clone[move] = "O";

        const outcome = getWinner(clone);
        if (outcome.winner) {
          setStatus("Computer wins!");
        } else if (clone.every((cell) => cell !== null)) {
          setStatus("It's a draw!");
        } else {
          setStatus("Your turn");
        }

        return clone;
      });
    }, 350);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="w-full max-w-md rounded-2xl border border-cyan-300/20 bg-slate-950/90 p-5 shadow-2xl"
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-cyan-200">🎮 Tic Tac Toe</h2>
        <p className="text-sm text-slate-300">You: X · CPU: O</p>
      </div>

      <motion.p
        key={status}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-center text-sm text-slate-200"
      >
        {status}
      </motion.p>

      <div className="mx-auto grid w-full max-w-[320px] grid-cols-3 gap-3">
        {board.map((cell, index) => {
          const highlighted = Boolean(line?.includes(index));
          return (
            <motion.button
              key={index}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPlayerMove(index)}
              className={`aspect-square rounded-xl border text-3xl font-bold transition ${
                highlighted
                  ? "border-cyan-300 bg-cyan-500/20 text-cyan-100"
                  : "border-slate-700 bg-slate-900 text-slate-100"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={cell ?? "empty"}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  className="inline-block"
                >
                  {cell}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={restart}
          className="flex-1 rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-slate-950"
        >
          Restart
        </button>
        <button onClick={onExit} className="flex-1 rounded-lg border border-slate-700 px-4 py-3 text-slate-200">
          Back to arcade
        </button>
      </div>
    </motion.section>
  );
}
