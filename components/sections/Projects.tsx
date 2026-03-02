import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Smart QR Gifting",
    desc: "A full-stack gifting platform where users create personalized QR codes linked to digital gifts, messages, and experiences — with a real-time tracking dashboard.",
    tags: ["React", "Node.js", "MongoDB", "QR API", "Express"],
    emoji: "📱",
    gradient: "from-cyan-500/20 to-blue-500/20",
    github: "#",
    demo: "#",
  },
  {
    name: "Workspace Management System",
    desc: "Enterprise-grade workspace booking platform with role-based access, real-time availability, and analytics for office capacity planning at scale.",
    tags: ["Next.js", "Express", "PostgreSQL", "JWT", "Redis"],
    emoji: "🏢",
    gradient: "from-violet-500/20 to-blue-500/20",
    github: "#",
    demo: "#",
  },
  {
    name: "Planit PWA Task Manager",
    desc: "Progressive Web App for task and project management with offline support, drag-and-drop kanban boards, smart reminders, and cross-device sync.",
    tags: ["React", "PWA", "Redux", "MongoDB", "Service Worker"],
    emoji: "✅",
    gradient: "from-pink-500/20 to-violet-500/20",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        <SectionReveal>
          <p className="section-label">Work</p>
          <h2 className="section-title">
            Featured <span className="grad-text">Projects</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6, ease: "easeOut" }}
                className="group rounded-2xl overflow-hidden transition-all duration-500 relative"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradient.includes('cyan') ? 'rgba(34,211,238,0.2)' : project.gradient.includes('violet') ? 'rgba(139,92,246,0.2)' : 'rgba(236,72,153,0.2)'}, transparent)`,
                  }}
                />

                {/* Image area with premium effects */}
                <motion.div
                  className={`h-48 flex items-center justify-center text-6xl bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    className="relative z-10"
                  >
                    {project.emoji}
                  </motion.span>

                  {/* Extra glow layer */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background: project.gradient,
                      filter: "blur(40px)",
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <motion.h3
                    className="font-bold text-lg text-slate-100 mb-3"
                    style={{ fontFamily: "var(--font-syne)" }}
                    whileHover={{ color: "#fff" }}
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p
                    className="text-slate-400 text-sm leading-relaxed mb-4 text-pretty group-hover:text-slate-300 transition-colors"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.desc}
                  </motion.p>

                  {/* Tags with stagger */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.12 + i * 0.04 }}
                        className="text-xs px-3 py-1.5 rounded-lg font-medium text-violet-300 transition-all duration-300"
                        style={{
                          background: "rgba(139,92,246,0.12)",
                          border: "1px solid rgba(139,92,246,0.25)",
                        }}
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgba(139,92,246,0.5)",
                          background: "rgba(139,92,246,0.2)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links with premium styling */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold text-slate-300 transition-all duration-300 relative overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(255,255,255,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={14} />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold text-white transition-all duration-300 relative overflow-hidden"
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
                      aria-label={`View ${project.name} live demo`}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
