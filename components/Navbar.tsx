"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import SectionContainer from "@/components/layout/SectionContainer";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 transition-all duration-500",
        scrolled
          ? "bg-navy/40 backdrop-blur-2xl border-b border-white/[0.08]"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionContainer className="relative z-10">
        <div className="flex items-center justify-between w-full gap-3">
      {/* Animated background gradient on scroll */}
      {scrolled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(180deg, rgba(15,23,42,0.8), rgba(15,23,42,0.3))",
          }}
        />
      )}

      <motion.a
        href="#"
        className="font-display font-black text-lg md:text-xl bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity relative z-10"
        style={{ fontFamily: "var(--font-syne)" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Dev Mohan
      </motion.a>

      {/* Desktop links with enhanced hover effects */}
      <ul className="relative z-10 hidden md:flex items-center flex-wrap gap-x-8 gap-y-3" role="list">
        {links.map((link, i) => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              className="text-slate-400 hover:text-slate-100 text-sm tracking-wide transition-colors duration-300 relative"
              whileHover={{ color: "#e2e8f0" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              {link.label}
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </li>
        ))}
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
        >
          <motion.a
            href="#contact"
            className="text-white text-sm font-semibold px-6 py-2.5 rounded-lg relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(139,92,246,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(139,92,246,0.2)";
            }}
          >
            Hire Me
          </motion.a>
        </motion.li>
      </ul>

      {/* Mobile toggle with animation */}
      <motion.button
        className="md:hidden text-slate-400 hover:text-slate-100 relative z-10 p-2 rounded-lg hover:bg-white/5 transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: mobileOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.div>
      </motion.button>
        </div>
      </SectionContainer>

      {/* Mobile menu with smooth animation */}
      <motion.div
        className="absolute top-full left-0 right-0 md:hidden border-b border-white/[0.08] py-6"
        style={{
          background: "rgba(15,23,42,0.95)",
          backdropFilter: "blur(20px)",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <SectionContainer>
          <div className="flex flex-col gap-3">
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="text-slate-300 text-sm py-3 px-3 rounded-lg hover:text-white hover:bg-white/5 transition-all duration-300"
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: mobileOpen ? 1 : 0, x: mobileOpen ? 0 : -20 }}
            transition={{ delay: mobileOpen ? i * 0.06 : 0 }}
            whileHover={{ x: 4 }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          className="text-center text-white text-sm font-semibold px-6 py-3 rounded-lg mt-2"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          }}
          onClick={() => setMobileOpen(false)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: mobileOpen ? 1 : 0, x: mobileOpen ? 0 : -20 }}
          transition={{ delay: mobileOpen ? 0.24 : 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Hire Me
        </motion.a>
          </div>
        </SectionContainer>
      </motion.div>
    </motion.nav>
  );
}
