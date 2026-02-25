"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const badges = [
  { icon: "⭐", label: "3+ Years Experience" },
  { icon: "🎯", label: "900+ LeetCode" },
  { icon: "⚡", label: "MERN Specialist" },
  { icon: "🤖", label: "AI-Enabled" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center pt-20"
      aria-label="Hero section"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {badges.map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-slate-200"
            >
              <span role="img" aria-label="">{badge.icon}</span>
              {badge.label}
            </motion.span>
          ))}
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-black leading-[0.95] mb-6"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(3.5rem, 9vw, 7rem)",
          }}
        >
          <span className="grad-text">Mohan</span>
          <br />
          <span className="text-white">Sharma</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-400 font-light mb-6"
        >
          AI-Enabled Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          I build performant, scalable web applications with clean architecture.
          From MERN-powered backends to polished UIs — shipping products that
          make an impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-200 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <ArrowRight size={16} />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass text-slate-200 font-semibold px-7 py-3.5 rounded-lg hover:border-violet-500/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle size={16} />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
