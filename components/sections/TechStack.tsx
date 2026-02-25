"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const categories = [
  {
    label: "Frontend",
    tags: [
      { name: "React", icon: "⚛️", color: "#61dafb" },
      { name: "Next.js", icon: "▲", color: "#ffffff" },
      { name: "TypeScript", icon: "TS", color: "#3178c6" },
      { name: "Tailwind CSS", icon: "🎨", color: "#06b6d4" },
      { name: "Redux", icon: "🔄", color: "#764abc" },
    ],
  },
  {
    label: "Backend",
    tags: [
      { name: "Node.js", icon: "🟢", color: "#68a063" },
      { name: "Express", icon: "⚙️", color: "#90c53f" },
      { name: "REST APIs", icon: "🔌", color: "#3b82f6" },
      { name: "GraphQL", icon: "◆", color: "#e10098" },
      { name: "JWT Auth", icon: "🔐", color: "#f39c12" },
    ],
  },
  {
    label: "Databases",
    tags: [
      { name: "MongoDB", icon: "🍃", color: "#00ed64" },
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "MySQL", icon: "🗄️", color: "#005c84" },
      { name: "Redis", icon: "📍", color: "#dc382d" },
    ],
  },
  {
    label: "DevOps & Cloud",
    tags: [
      { name: "AWS", icon: "☁️", color: "#ff9900" },
      { name: "Docker", icon: "🐳", color: "#2496ed" },
      { name: "CI/CD", icon: "⚡", color: "#fcc624" },
      { name: "Git", icon: "📦", color: "#f1502f" },
      { name: "Vercel", icon: "⬛", color: "#000000" },
    ],
  },
];

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="stack" className="relative z-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <SectionReveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            Tech <span className="grad-text">Stack</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          {/* Category selector */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat.label}
                onClick={() => setSelectedCategory(idx)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === idx
                    ? "text-white shadow-lg"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                style={{
                  background:
                    selectedCategory === idx
                      ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
                      : "rgba(255,255,255,0.04)",
                  border: `1px solid ${
                    selectedCategory === idx
                      ? "rgba(139,92,246,0.5)"
                      : "rgba(255,255,255,0.08)"
                  }`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Tech tags display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
            >
              {categories[selectedCategory].tags.map((tag, idx) => (
                <motion.div
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative"
                >
                  <motion.div
                    className="px-4 py-3 rounded-xl text-center font-semibold text-white cursor-default transition-all duration-300 hover:shadow-2xl overflow-hidden relative"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: `2px solid ${tag.color}33`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: tag.color,
                      boxShadow: `0 0 30px ${tag.color}40`,
                    }}
                  >
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: tag.color }}
                    />

                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <span className="text-xl">{tag.icon}</span>
                      <span className="text-xs md:text-sm font-bold">
                        {tag.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap justify-around text-center gap-6"
          >
            {[
              { count: "25+", label: "Technologies" },
              { count: "3+", label: "Years Experience" },
              { count: "50+", label: "Projects Delivered" },
            ].map((stat, idx) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {stat.count}
                </div>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
