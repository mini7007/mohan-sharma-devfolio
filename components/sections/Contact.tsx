"use client";
import { useState } from "react";
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
                <button
                  key={c.label}
                  onClick={handleCardInteraction}
                  className="group relative p-4 sm:p-6 rounded-2xl glass transition-all duration-500 hover:scale-105 hover:border-white/20 text-left cursor-pointer active:scale-95 min-h-[180px] sm:min-h-auto"
                  style={{
                    animation: `slideUp 0.5s ease-out ${idx * 0.1}s forwards`,
                    opacity: 0,
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {/* Gradient border on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${c.color}33, transparent)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${c.color}15`,
                        border: `1px solid ${c.color}30`,
                      }}
                    >
                      <c.Icon size={24} style={{ color: c.color }} />
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-sm">
                      {c.label}
                    </h3>
                    <p className="text-slate-400 text-xs mb-3 group-hover:text-slate-300 transition-colors">
                      {c.description}
                    </p>
                    <div className="flex items-center gap-2 text-slate-300 text-xs font-mono">
                      <span className="truncate">{c.value}</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* CTA Section */}
        <SectionReveal delay={0.2}>
          <div className="flex flex-col items-center gap-6 py-8">
            <a
              href={`mailto:${EMAIL}`}
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:gap-3"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 60px rgba(139, 92, 246, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(139, 92, 246, 0.4)";
              }}
            >
              <span>Send Me an Email</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            {copied && (
              <div className="inline-flex items-center gap-2 text-emerald-400 text-sm animate-pulse">
                <CheckCircle size={16} />
                Email copied to clipboard!
              </div>
            )}
            <p className="text-slate-500 text-xs">
              Typically respond within 24 hours
            </p>
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
