"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import { Mail, Linkedin, Github, CheckCircle } from "lucide-react";

const EMAIL = "mohan5050390@gmail.com";

const contacts = [
  {
    label: "Email",
    value: EMAIL,
    Icon: Mail,
    iconBg: "rgba(59,130,246,0.1)",
    href: `mailto:${EMAIL}`,
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohansharma",
    Icon: Linkedin,
    iconBg: "rgba(59,130,246,0.1)",
    href: "https://www.linkedin.com/in/mohan-sharma-dev/",
    copyable: false,
  },
  {
    label: "GitHub",
    value: "github.com/mini7007",
    Icon: Github,
    iconBg: "rgba(255,255,255,0.06)",
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
        <SectionReveal>
          <p className="section-label text-center">Get In Touch</p>
          <h2 className="section-title text-center">
            Let&apos;s <span className="grad-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-center max-w-md mx-auto mb-12">
            Open to full-time roles, freelance projects, and interesting
            collaborations. Let&apos;s build something great together.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {contacts.map((c) => {
              const content = (
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: c.iconBg }}
                  >
                    <c.Icon size={20} className="text-slate-300" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">
                      {c.label}
                    </div>
                    <div className="font-semibold text-sm text-slate-200">
                      {c.value}
                    </div>
                  </div>
                </div>
              );

              if (c.copyable) {
                return (
                  <button
                    key={c.label}
                    onClick={copyEmail}
                    className="glass rounded-2xl p-5 text-left w-full transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30"
                    title="Click to copy email"
                    aria-label="Copy email address"
                  >
                    {content}
                  </button>
                );
              }

              return (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30"
                >
                  {content}
                </a>
              );
            })}
          </div>

          <div className="text-center flex flex-col items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-200 shadow-[0_0_30px_rgba(139,92,246,0.3)] text-base"
            >
              Say Hello 👋
            </a>
            {copied && (
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm">
                <CheckCircle size={14} />
                Email copied to clipboard!
              </span>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
