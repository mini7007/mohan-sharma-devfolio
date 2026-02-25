import { getCurrentYear } from "@/lib/utils";

export default function Footer() {
  const year = getCurrentYear();
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-8 text-center">
      <div
        className="font-black text-lg bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Mohan Sharma
      </div>
      <p className="text-slate-500 text-sm">
        <code className="text-violet-400">&lt;/&gt;</code> with{" "}
        <span className="text-red-400">❤️</span> by Mohan Sharma · {year}
      </p>
    </footer>
  );
}
