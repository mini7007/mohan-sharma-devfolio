"use client";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "20+", label: "Projects Built" },
  { num: "900+", label: "LeetCode Solved" },
  { num: "∞", label: "Continuous Learner" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <SectionReveal>
          <p className="section-label">About Me</p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <SectionReveal delay={0.1}>
            <h2 className="section-title">
              Performance-Obsessed <span className="grad-text">Engineer</span>
            </h2>
            <div className="space-y-5 text-slate-400 leading-relaxed text-pretty">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-slate-300"
              >
                I&apos;m a Full Stack Developer with 3+ years of building
                scalable, production-grade web applications at the intersection
                of clean engineering and intuitive product design.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Armed with a{" "}
                <strong className="text-slate-100 font-semibold">
                  clean architecture mindset
                </strong>
                , I specialize in MERN stack systems that handle real-world
                complexity. I leverage AI tools to amplify development velocity
                without sacrificing quality.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                900+ LeetCode problems solved — not just for interviews, but
                because algorithmic thinking makes me a better engineer every
                single day.
              </motion.p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: "easeOut" }}
                  className="group relative"
                >
                  <motion.div
                    className="glass rounded-xl p-6 text-center transition-all duration-400 cursor-default relative overflow-hidden backdrop-blur-md"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      borderColor: "rgba(59,130,246,0.3)",
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-400"
                      style={{
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                      }}
                    />

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{
                        background: "radial-gradient(circle at center, rgba(59,130,246,0.1), transparent)",
                      }}
                    />

                    <motion.div
                      className="relative z-10 font-black text-4xl bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent leading-none mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.num}
                    </motion.div>
                    <motion.div
                      className="relative z-10 text-xs text-slate-500 tracking-wide font-medium"
                      whileHover={{ color: "#cbd5e1" }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
