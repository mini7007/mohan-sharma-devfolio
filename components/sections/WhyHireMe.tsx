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
      <div className="max-w-5xl mx-auto px-6 py-24">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl group cursor-default"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${card.gradStart}15, ${card.gradEnd}15)`,
                  }}
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Top accent bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: `linear-gradient(90deg, ${card.gradStart}, ${card.gradEnd})`,
                  }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Stats badge */}
                <div className="absolute top-4 right-4 text-right">
                  <motion.div
                    className="text-sm font-black"
                    style={{
                      background: `linear-gradient(135deg, ${card.gradStart}, ${card.gradEnd})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "var(--font-syne)",
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {card.stats}
                  </motion.div>
                  <p className="text-xs text-slate-500 mt-0.5">{card.label}</p>
                </div>

                {/* Icon with glow */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                  style={{ background: card.iconBg }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {card.icon}
                </motion.div>

                <h3
                  className="font-bold text-xl text-slate-100 mb-3 relative z-10"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
