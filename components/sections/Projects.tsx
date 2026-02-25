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
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] group"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Image area */}
                <div
                  className={`h-44 flex items-center justify-center text-5xl bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="font-bold text-lg text-slate-100 mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded font-medium text-violet-300"
                        style={{
                          background: "rgba(139,92,246,0.12)",
                          border: "1px solid rgba(139,92,246,0.25)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-slate-100 transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-shadow"
                      aria-label={`View ${project.name} live demo`}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
