"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Download, ChevronDown } from "lucide-react";

const badges = [
  { icon: "⭐", label: "3+ Years Experience" },
  { icon: "🎯", label: "900+ LeetCode" },
  { icon: "⚡", label: "MERN Specialist" },
  { icon: "🤖", label: "AI-Enabled" },
];

const floatingElements = [
  { id: 1, delay: 0, x: "-20%", y: "10%", size: 80 },
  { id: 2, delay: 0.2, x: "80%", y: "20%", size: 120 },
  { id: 3, delay: 0.4, x: "10%", y: "70%", size: 100 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Premium animated background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%),radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating gradient orbs - premium effect */}
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }} />

      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative z-10">
        {/* Badges with enhanced stagger */}
        <div className="flex flex-wrap gap-3 mb-6">
          {badges.map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full glass text-sm font-medium text-slate-200 hover:border-violet-400/50 transition-all duration-300 cursor-default backdrop-blur-md"
            >
              <motion.span
                animate={{ rotate: [0, 12, -8, 0] }}
                transition={{ delay: i * 0.08 + 0.3, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                role="img"
                aria-label=""
              >
                {badge.icon}
              </motion.span>
              {badge.label}
            </motion.span>
          ))}
        </div>

        {/* Status Badge - Premium version */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex max-w-full items-center gap-2.5 rounded-full px-4 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 sm:mb-10"
          style={{
            background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(16,185,129,0.1))",
            border: "1px solid rgba(34,197,94,0.3)",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.6)]"
          />
          <span className="text-sm font-semibold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
            Open for Opportunities
          </span>
        </motion.div>

        {/* Main heading with enhanced animations */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-syne)",
          }}
          className="mb-6 break-words text-5xl font-black leading-[0.9] sm:mb-8 md:text-6xl lg:text-7xl"
        >
          <motion.span
            className="grad-text inline-block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            Mohan
          </motion.span>
          <br />
          <motion.span
            className="text-white inline-block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Sharma
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="mb-5 text-lg font-light text-slate-300 sm:text-xl md:mb-6 md:text-2xl"
        >
          Software Engineer & Full Stack Developer
        </motion.p>

        {/* Description with better typography */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6, ease: "easeOut" }}
          className="mb-10 w-full max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base md:mb-12 md:text-lg"
        >
          I build performant, scalable web applications with clean architecture.
          From MERN-powered backends to polished UIs — shipping products that
          make an impact.
        </motion.p>

        {/* Premium CTAs with micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6, ease: "easeOut" }}
          className="mb-14 flex flex-wrap gap-3 sm:mb-16 sm:gap-4"
        >
          <motion.a
            href="https://ik.imagekit.io/Myimage/Mohan_Sharma_Fullstack_Engineer_AI_Enabled.pdf?updatedAt=1771672290161"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 font-semibold text-white transition-all duration-300 sm:w-auto sm:px-8 sm:py-4"
            style={{
              background: "linear-gradient(135deg, #22c55e, #10b981)",
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(34,197,94,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(34,197,94,0.3)";
            }}
          >
            <Download size={18} />
            <span>Download Resume</span>
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-20"
              style={{ background: "linear-gradient(135deg, #10b981, #22c55e)" }}
            />
          </motion.a>

          <motion.a
            href="#projects"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 font-semibold text-white transition-all duration-300 sm:w-auto sm:px-8 sm:py-4"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(139,92,246,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(139,92,246,0.3)";
            }}
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-slate-200 transition-all duration-300 backdrop-blur-md hover:text-white sm:w-auto sm:px-8 sm:py-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1.5px solid rgba(255,255,255,0.1)",
            }}
            whileHover={{ scale: 1.03, y: -2, borderColor: "rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle size={18} />
            <span>Contact Me</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator - Premium version */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mt-8"
        >
          <motion.a
            href="#about"
            className="p-2.5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            whileHover={{ borderColor: "rgba(139,92,246,0.4)" }}
          >
            <ChevronDown size={20} className="text-slate-400" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
