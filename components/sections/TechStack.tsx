"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionContainer from "@/components/layout/SectionContainer";

const categories = [
  {
    label: "Frontend",
    tags: [
      { name: "React", icon: "⚛️", color: "#61dafb" },
      { name: "Next.js", icon: "▲", color: "#ffffff" },
      { name: "Angular", icon: "🔺", color: "#dd0031" },
      { name: "TypeScript", icon: "TS", color: "#3178c6" },
      { name: "JavaScript", icon: "JS", color: "#f7df1e" },
      { name: "Tailwind CSS", icon: "🎨", color: "#06b6d4" },
      { name: "Redux", icon: "🔄", color: "#764abc" },
      { name: "HTML/CSS", icon: "🏗️", color: "#e34c26" },
      { name: "Figma", icon: "🎭", color: "#f24e1e" },
    ],
  },
  {
    label: "Backend",
    tags: [
      { name: "Node.js", icon: "🟢", color: "#68a063" },
      { name: "Express", icon: "⚙️", color: "#90c53f" },
      { name: "Laravel", icon: "🔴", color: "#ff2d20" },
      { name: "PHP", icon: "🐘", color: "#777bb4" },
      { name: "WordPress", icon: "📝", color: "#21759b" },
      { name: "October CMS", icon: "🎃", color: "#3d3d3d" },
      { name: "REST APIs", icon: "🔌", color: "#3b82f6" },
      { name: "GraphQL", icon: "◆", color: "#e10098" },
      { name: "Socket.io", icon: "⚡", color: "#010101" },
      { name: "JWT Auth", icon: "🔐", color: "#f39c12" },
    ],
  },
  {
    label: "Databases",
    tags: [
      { name: "MongoDB", icon: "🍃", color: "#00ed64" },
      { name: "MySQL", icon: "🗄️", color: "#005c84" },
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "Redis", icon: "📍", color: "#dc382d" },
      { name: "Firebase", icon: "🔥", color: "#ffa726" },
      { name: "Supabase", icon: "🟢", color: "#3ecf8e" },
    ],
  },
  {
    label: "DevOps & Cloud",
    tags: [
      { name: "AWS", icon: "☁️", color: "#ff9900" },
      { name: "Azure", icon: "☁️", color: "#0078d4" },
      { name: "Docker", icon: "🐳", color: "#2496ed" },
      { name: "CI/CD", icon: "⚡", color: "#fcc624" },
      { name: "GitHub Actions", icon: "🤖", color: "#2088ff" },
      { name: "Vercel", icon: "⬛", color: "#000000" },
      { name: "Netlify", icon: "🚀", color: "#00c7b7" },
      { name: "Linux", icon: "🐧", color: "#fcc624" },
    ],
  },
];

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="stack" className="relative z-10 border-t border-white/[0.06]">
      <SectionContainer className="py-16 md:py-24">
        <SectionReveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            Tech <span className="grad-text">Stack</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          {/* Category selector with enhanced styling */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat.label}
                onClick={() => setSelectedCategory(idx)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-400 relative overflow-hidden backdrop-blur-sm ${
                  selectedCategory === idx
                    ? "text-white shadow-lg"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                style={{
                  background:
                    selectedCategory === idx
                      ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
                      : "rgba(255,255,255,0.03)",
                  border: `1.5px solid ${
                    selectedCategory === idx
                      ? "rgba(139,92,246,0.6)"
                      : "rgba(255,255,255,0.08)"
                  }`,
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: selectedCategory === idx ? "rgba(139,92,246,0.2)" : "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                />
                <span className="relative z-10">{cat.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Tech tags display with premium effects */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
            >
              {categories[selectedCategory].tags.map((tag, idx) => (
                <motion.div
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.5, ease: "easeOut" }}
                  className="group relative"
                >
                  <motion.div
                    className="px-4 py-4 rounded-xl text-center font-semibold text-white cursor-default transition-all duration-400 overflow-hidden relative backdrop-blur-sm"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                      border: `2px solid ${tag.color}33`,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      borderColor: tag.color,
                    }}
                  >
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-400 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${tag.color}40, transparent)`,
                      }}
                      animate={{
                        boxShadow: ["0 0 20px rgba(255,255,255,0)", `0 0 30px ${tag.color}40`],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />

                    {/* Color overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-400"
                      style={{ background: tag.color }}
                    />

                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <motion.span
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 12 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        {tag.icon}
                      </motion.span>
                      <motion.span
                        className="text-xs md:text-sm font-bold text-pretty"
                        whileHover={{ letterSpacing: "0.05em" }}
                      >
                        {tag.name}
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats footer with premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 pt-10 border-t border-white/[0.06] flex flex-wrap justify-around text-center gap-8 md:gap-12"
          >
            {[
              { count: "25+", label: "Technologies" },
              { count: "3+", label: "Years Experience" },
              { count: "50+", label: "Projects Delivered" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-syne)" }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.count}
                </motion.div>
                <motion.p
                  className="text-xs text-slate-500 mt-2 font-medium tracking-wide uppercase group-hover:text-slate-400 transition-colors"
                  whileHover={{ letterSpacing: "0.1em" }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </SectionReveal>
      </SectionContainer>
    </section>
  );
}
