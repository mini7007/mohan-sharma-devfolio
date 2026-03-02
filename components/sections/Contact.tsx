"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Mail, Linkedin, Github, CheckCircle, ArrowRight } from "lucide-react";

const EMAIL = "mohan5050390@gmail.com";

const contacts = [
  {
    label: "Email",
    value: EMAIL,
    Icon: Mail,
    color: "#3b82f6",
    description: "Let's discuss an opportunity",
    href: `mailto:${EMAIL}`,
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "mohan-sharma-dev",
    Icon: Linkedin,
    color: "#0a66c2",
    description: "Connect with my professional profile",
    href: "https://www.linkedin.com/in/mohan-sharma-dev/",
    copyable: false,
  },
  {
    label: "GitHub",
    value: "mini7007",
    Icon: Github,
    color: "#ffffff",
    description: "Explore my open-source work",
    href: "https://github.com/mini7007",
    copyable: false,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (_) {
      // fallback: ignore
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <SectionReveal>
          <p className="section-label text-center">Get In Touch</p>
          <h2 className="section-title text-center">
            Let&apos;s <span className="grad-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-sm leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you're looking for a developer to join your team, have a freelance project, or just want to chat — feel free to reach out.
          </p>
        </SectionReveal>

        {/* Contact Cards */}
        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {contacts.map((c, idx) => {
              const handleCardInteraction = () => {
                if (c.copyable) {
                  copyEmail();
                } else {
                  window.open(c.href, "_blank");
                }
              };

              return (
                <motion.button
                  key={c.label}
                  onClick={handleCardInteraction}
                  className="group relative p-6 sm:p-7 rounded-2xl transition-all duration-500 text-left cursor-pointer backdrop-blur-sm overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                    border: `1.5px solid rgba(255,255,255,0.08)`,
                    WebkitTapHighlightColor: "transparent",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated gradient border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${c.color}40, transparent)`,
                    }}
                  />

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${c.color}40, transparent)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${c.color}20, ${c.color}10)`,
                        border: `1.5px solid ${c.color}30`,
                      }}
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                      >
                        <c.Icon size={28} style={{ color: c.color }} />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      className="text-white font-semibold mb-2 text-sm"
                      whileHover={{ letterSpacing: "0.05em" }}
                    >
                      {c.label}
                    </motion.h3>
                    <motion.p
                      className="text-slate-400 text-xs mb-3 group-hover:text-slate-300 transition-colors text-pretty"
                      whileHover={{ color: "#cbd5e1" }}
                    >
                      {c.description}
                    </motion.p>
                    <motion.div
                      className="flex items-center gap-2 text-slate-300 text-xs font-mono group-hover:text-white transition-colors"
                      whileHover={{ gap: "0.75rem" }}
                    >
                      <span className="truncate">{c.value}</span>
                      <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                        <ArrowRight size={12} />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </SectionReveal>

        {/* CTA Section */}
        <SectionReveal delay={0.2}>
          <div className="flex flex-col items-center gap-8 py-12">
            <motion.a
              href={`mailto:${EMAIL}`}
              className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(139, 92, 246, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(139, 92, 246, 0.3)";
              }}
            >
              {/* Animated background shine */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  transform: "translateX(-100%)",
                }}
                animate={{
                  transform: ["translateX(-100%)", "translateX(100%)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <span className="relative z-10">Send Me an Email</span>
              <motion.div
                className="relative z-10"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.a>

            <AnimatePresence mode="wait">
              {copied && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle size={18} />
                  </motion.div>
                  Email copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>

            <motion.p
              className="text-slate-500 text-xs font-medium tracking-wide uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Typically respond within 24 hours
            </motion.p>
          </div>
        </SectionReveal>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
