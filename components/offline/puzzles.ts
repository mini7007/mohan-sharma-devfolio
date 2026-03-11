export type DebugPuzzle = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export const DEBUG_PUZZLES: DebugPuzzle[] = [
  {
    id: "sum-fix",
    prompt: `function sum(a, b) {
  return a - b;
}`,
    options: ["return a + b", "return a * b", "return a / b"],
    answerIndex: 0,
    explanation: "The function should add both values, not subtract them.",
  },
  {
    id: "array-length",
    prompt: `const tech = ["React", "Next.js", "TypeScript"];
console.log(tech.length());`,
    options: ["tech.size()", "tech.length", "tech.count"],
    answerIndex: 1,
    explanation: "length is a property on arrays, not a function.",
  },
  {
    id: "strict-equality",
    prompt: `const isOnline = "1";
if (isOnline == 1) {
  console.log("Connected");
}`,
    options: ["if (isOnline === 1)", "if (Number(isOnline) === 1)", "if (isOnline = 1)"],
    answerIndex: 1,
    explanation:
      "Type coercion can be risky. Convert explicitly to number before strict comparison.",
  },
];
