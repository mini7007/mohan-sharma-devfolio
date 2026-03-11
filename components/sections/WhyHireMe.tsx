"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "⚡",
    title: "Performance-Focused",
    desc: "Every line of code is written with Lighthouse scores and real-world load in mind. I obsess over Core Web Vitals, bundle sizes, and query optimization — because users don't wait.",
    accent: "#06b6d4",
    iconBg: "rgba(6,182,212,0.12)",
    gradStart: "#3b82f6",
    gradEnd: "#06b6d4",
    stats: "98/100",
    label: "Lighthouse Score",
  },
  {
    icon: "🏗️",
    title: "MERN Specialist",
    desc: "3+ years building production systems with MongoDB, Express, React, and Node.js. I design RESTful APIs that scale, databases that stay fast under load, and UIs that delight users.",
    accent: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.12)",
    gradStart: "#8b5cf6",
    gradEnd: "#3b82f6",
    stats: "50+",
    label: "Projects Shipped",
  },
  {
    icon: "🤖",
    title: "AI-Enabled Developer",
    desc: "I leverage AI tools to write better code faster — copilots, prompt engineering, AI-assisted testing — multiplying output while maintaining engineering excellence and code quality.",
    accent: "#ec4899",
    iconBg: "rgba(236,72,153,0.12)",
    gradStart: "#ec4899",
    gradEnd: "#8b5cf6",
    stats: "2x",
    label: "Productivity Multiplier",
  },
];

export default function WhyHireMe() {
  return (
    <section id="why" className="relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionReveal>
          <p className="section-label">Value Proposition</p>
          <h2 className="section-title">
            Why <span className="grad-text">Hire Me?</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: idx * 0.12, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-2xl p-8 overflow-hidden transition-all duration-500 group cursor-default"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
                whileHover={{ scale: 1.04, y: -8 }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${card.gradStart}20, ${card.gradEnd}20)`,
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />

                {/* Animated top accent bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${card.gradStart}, ${card.gradEnd})`,
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />

                {/* Premium stats badge */}
                <motion.div
                  className="absolute top-6 right-6 text-right p-3 rounded-xl backdrop-blur-md transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${card.gradStart}15, ${card.gradEnd}10)`,
                    border: `1px solid ${card.gradStart}30`,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.div
                    className="text-sm font-black"
                    style={{
                      background: `linear-gradient(135deg, ${card.gradStart}, ${card.gradEnd})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "var(--font-syne)",
                    }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {card.stats}
                  </motion.div>
                  <motion.p
                    className="text-xs text-slate-500 mt-1 font-medium"
                    whileHover={{ color: "#cbd5e1" }}
                  >
                    {card.label}
                  </motion.p>
                </motion.div>

                {/* Icon with premium glow */}
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 relative z-10 transition-all duration-500"
                  style={{
                    background: card.iconBg,
                    boxShadow: `inset 0 0 0 1px ${card.gradStart}40`,
                  }}
                  whileHover={{ scale: 1.25, rotate: 12 }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.3,
                    },
                    hover: { duration: 0.3 },
                  }}
                >
                  {card.icon}
                </motion.div>

                {/* Title with hover effect */}
                <motion.h3
                  className="font-bold text-xl text-slate-100 mb-4 relative z-10 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                  whileHover={{ letterSpacing: "0.05em" }}
                >
                  {card.title}
                </motion.h3>

                {/* Description with better typography */}
                <motion.p
                  className="text-slate-400 text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors text-pretty"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {card.desc}
                </motion.p>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 opacity-5 rounded-full blur-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${card.gradStart}, ${card.gradEnd})`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.4,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
