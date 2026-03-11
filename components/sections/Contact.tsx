"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionReveal from "@/components/ui/SectionReveal";
import { toast } from "@/components/ui/sonner";
import {
  Mail,
  Linkedin,
  Github,
  CheckCircle,
  ArrowRight,
  X,
  Loader2,
} from "lucide-react";

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
] as const;

const messageTemplate = (name: string) => `Hi Mohan,

I came across your portfolio and would like to discuss a potential project.

Project Details:
Company:
Project Type:
Timeline:
Budget:

Looking forward to collaborating!

Best,
${name || "{Name}"}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Let's Build Together",
    message: messageTemplate(""),
  });

  const emailConfigMissing = useMemo(
    () =>
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    []
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // no-op
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setFormData((prev) => ({
      ...prev,
      message: prev.message.trim() ? prev.message : messageTemplate(prev.name),
    }));
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const closeModal = () => {
    if (!isSending) {
      setIsModalOpen(false);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailConfigMissing) {
      toast.error(
        "Email configuration missing. Please add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
      );
      return;
    }

    setIsSending(true);
    const loadingToastId = toast.loading("Sending message...");

    try {
      await emailjs.send(
        "service_6i9lozl",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      toast.success("Message sent successfully! I'll get back to you soon.", {
        id: loadingToastId,
      });

      setFormData({
        name: "",
        email: "",
        subject: "Let's Build Together",
        message: messageTemplate(""),
      });

      setTimeout(() => {
        setIsModalOpen(false);
      }, 1500);
    } catch {
      toast.error("Failed to send message. Please try again.", {
        id: loadingToastId,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative z-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionReveal>
          <p className="section-label text-center">Get In Touch</p>
          <h2 className="section-title text-center">
            Let&apos;s <span className="grad-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-sm leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities. Whether you&apos;re looking for a developer to join your team, have a freelance project, or just want to chat — feel free to reach out.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {contacts.map((c, idx) => {
              const handleCardInteraction = () => {
                if (c.label === "Email") {
                  openModal();
                  return;
                }

                if (c.copyable) {
                  copyEmail();
                  return;
                }

                window.open(c.href, "_blank", "noopener,noreferrer");
              };

              return (
                <motion.button
                  key={c.label}
                  onClick={handleCardInteraction}
                  className="group relative p-6 sm:p-7 rounded-2xl transition-all duration-500 text-left cursor-pointer backdrop-blur-sm overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                    border: "1.5px solid rgba(255,255,255,0.08)",
                    WebkitTapHighlightColor: "transparent",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${c.color}40, transparent)`,
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${c.color}40, transparent)`,
                    }}
                  />

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
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.3,
                        }}
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

        <SectionReveal delay={0.2}>
          <div className="flex flex-col items-center gap-8 py-12">
            <motion.button
              onClick={openModal}
              className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  transform: "translateX(-100%)",
                }}
                animate={{
                  transform: ["translateX(-100%)", "translateX(100%)"],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative z-10">Send Me an Email</span>
              <motion.div className="relative z-10" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>

            <AnimatePresence mode="wait">
              {copied && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium"
                >
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 0.6 }}>
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              aria-label="Close contact form"
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
              onClick={closeModal}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 230, damping: 22 }}
              className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-5 sm:p-7 shadow-[0_20px_60px_rgba(59,130,246,0.18)]"
            >
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-xl font-semibold mb-2"
              >
                Let&apos;s Build Something Great
              </motion.h3>
              <p className="text-slate-400 text-sm mb-6">
                Share your idea and I&apos;ll get back within 24 hours.
              </p>

              <motion.form
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Name"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                  />
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="Email"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                  />
                </div>

                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/60"
                />

                <textarea
                  required
                  rows={11}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/60 resize-y min-h-[220px]"
                />

                <motion.button
                  type="submit"
                  disabled={isSending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
                  }}
                  whileHover={isSending ? undefined : { scale: 1.02 }}
                  whileTap={isSending ? undefined : { scale: 0.98 }}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="animate-spin" size={18} /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
