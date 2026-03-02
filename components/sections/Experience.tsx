"use client";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const experiences = [
  {
    date: "2025 — Present",
    company: "EC-Council Pvt Ltd",
    role: "Full Stack Developer",
    color: "#D71920",
    bullets: [
      "Building and maintaining full-stack features for cybersecurity education platforms serving global users",
      "Architecting scalable REST APIs with Node.js and Express handling 100k+ monthly active users",
      "Leading frontend refactors improving performance scores by 35% and developer experience",
    ],
  },
  {
    date: "2023 — 2025",
    company: "Vridhee Innovation Pvt Ltd",
    role: "Software Engineer",
    color: "#3B82F6",
    bullets: [
      "Developed responsive, accessible React UIs for SaaS products used by enterprise clients",
      "Implemented state management with Redux and Context API for complex multi-step workflows",
      "Reduced page load times by 40% through code splitting, lazy loading, and image optimization",
    ],
  },
  {
    date: "2022 — 2023",
    company: "Tech Mahindra",
    role: "Technical Support Engineer",
    color: "#E31837",
    bullets: [
      "Resolved complex technical issues for enterprise clients, improving CSAT scores by 25%",
      "Automated repetitive support workflows with scripts, saving 10+ engineer-hours per week",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        <SectionReveal>
          <p className="section-label">Career</p>
          <h2 className="section-title">
            Work <span className="grad-text">Experience</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative pl-8 md:pl-0">
            {/* Animated timeline line */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, #3b82f6, #8b5cf6, #ec4899)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className={`relative pl-8 md:pl-12 mb-10 group`}
              >
                {/* Animated dot with premium glow */}
                <motion.div
                  className="absolute -left-[7px] top-6 w-3.5 h-3.5 rounded-full transition-all duration-300"
                  style={{
                    background: exp.color,
                  }}
                  whileHover={{ scale: 1.4 }}
                  animate={{
                    boxShadow: [
                      `0 0 0 4px ${exp.color}33, 0 0 16px ${exp.color}66`,
                      `0 0 0 6px ${exp.color}33, 0 0 24px ${exp.color}88`,
                      `0 0 0 4px ${exp.color}33, 0 0 16px ${exp.color}66`,
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Card background with hover effect */}
                <motion.div
                  className="p-6 rounded-xl transition-all duration-400"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                    border: `1px solid rgba(255,255,255,0.08)`,
                  }}
                  whileHover={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                    borderColor: `${exp.color}40`,
                  }}
                >
                  {/* Gradient accent on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${exp.color}, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: exp.color }}
                      whileHover={{ letterSpacing: "0.15em" }}
                    >
                      {exp.date}
                    </motion.div>
                    <motion.div className="text-sm text-slate-400 mb-1 font-medium group-hover:text-slate-300 transition-colors">
                      {exp.company}
                    </motion.div>
                    <motion.div
                      className="text-xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-syne)" }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {exp.role}
                    </motion.div>

                    {/* Bullet points with stagger */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + j * 0.06, duration: 0.5 }}
                          className="text-slate-400 text-sm leading-relaxed pl-4 relative group/bullet transition-colors hover:text-slate-200"
                        >
                          <motion.span
                            className="absolute left-0 font-bold"
                            style={{ color: exp.color }}
                            whileHover={{ scale: 1.3, x: -2 }}
                          >
                            →
                          </motion.span>
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
