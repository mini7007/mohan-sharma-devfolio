"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Cell = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const GRID_SIZE = 16;
const INITIAL_SNAKE: Cell[] = [
  { x: 8, y: 8 },
  { x: 7, y: 8 },
  { x: 6, y: 8 },
];

const isSameCell = (a: Cell, b: Cell) => a.x === b.x && a.y === b.y;

const randomFood = (snake: Cell[]): Cell => {
  const occupied = new Set(snake.map((cell) => `${cell.x}-${cell.y}`));
  let candidate = { x: 0, y: 0 };

  do {
    candidate = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (occupied.has(`${candidate.x}-${candidate.y}`));

  return candidate;
};

type SnakeGameProps = {
  onExit: () => void;
};

export default function SnakeGame({ onExit }: SnakeGameProps) {
  const [snake, setSnake] = useState<Cell[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [food, setFood] = useState<Cell>({ x: 11, y: 8 });
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [tickSpeed, setTickSpeed] = useState(170);

  const restart = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setDirection("RIGHT");
    setFood({ x: 11, y: 8 });
    setScore(0);
    setTickSpeed(170);
    setIsGameOver(false);
  }, []);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (event.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
      if (event.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (event.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
      if (event.key.toLowerCase() === "r") restart();
    };

    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [direction, restart]);

  useEffect(() => {
    if (isGameOver) return;

    const interval = window.setInterval(() => {
      setSnake((currentSnake) => {
        const head = currentSnake[0];
        const nextHead = { ...head };

        if (direction === "UP") nextHead.y -= 1;
        if (direction === "DOWN") nextHead.y += 1;
        if (direction === "LEFT") nextHead.x -= 1;
        if (direction === "RIGHT") nextHead.x += 1;

        const hitWall =
          nextHead.x < 0 ||
          nextHead.x >= GRID_SIZE ||
          nextHead.y < 0 ||
          nextHead.y >= GRID_SIZE;
        const hitSelf = currentSnake.some((segment) => isSameCell(segment, nextHead));

        if (hitWall || hitSelf) {
          setIsGameOver(true);
          return currentSnake;
        }

        const grew = isSameCell(nextHead, food);
        const updatedSnake = [nextHead, ...currentSnake];

        if (!grew) {
          updatedSnake.pop();
        } else {
          setFood(randomFood(updatedSnake));
          setScore((prev) => prev + 10);
          setTickSpeed((prev) => Math.max(75, prev - 8));
        }

        return updatedSnake;
      });
    }, tickSpeed);

    return () => clearInterval(interval);
  }, [direction, food, isGameOver, tickSpeed]);

  const gridCells = useMemo(() => {
    const snakeBody = new Set(snake.map((cell) => `${cell.x}-${cell.y}`));

    return Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
      const x = index % GRID_SIZE;
      const y = Math.floor(index / GRID_SIZE);
      const key = `${x}-${y}`;
      const isHead = isSameCell(snake[0], { x, y });
      const isFood = isSameCell(food, { x, y });

      return (
        <div
          key={key}
          className={`aspect-square rounded-[2px] border border-slate-800/60 ${
            isFood
              ? "bg-fuchsia-400/90"
              : isHead
                ? "bg-cyan-300"
                : snakeBody.has(key)
                  ? "bg-cyan-500/80"
                  : "bg-slate-900/80"
          }`}
        />
      );
    });
  }, [food, snake]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="w-full max-w-3xl rounded-2xl border border-cyan-300/20 bg-slate-950/90 p-5 shadow-2xl shadow-cyan-500/10"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-cyan-200">Snake Game</h2>
        <p className="text-sm text-slate-300">Score: {score}</p>
      </div>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}>{gridCells}</div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <button className="rounded-md bg-cyan-500 px-3 py-2 font-medium text-slate-950" onClick={restart}>Restart (R)</button>
        <button className="rounded-md border border-slate-700 px-3 py-2 text-slate-200" onClick={onExit}>Back to arcade</button>
      </div>
      {isGameOver ? (
        <p className="mt-3 text-sm text-rose-300">Game over! Hit restart and keep the snake alive.</p>
      ) : (
        <p className="mt-3 text-sm text-slate-400">Use arrow keys to move. Speed increases every time you eat.</p>
      )}
    </motion.section>
  );
}
