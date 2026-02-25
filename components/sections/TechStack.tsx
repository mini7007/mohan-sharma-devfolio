import SectionReveal from "@/components/ui/SectionReveal";

const categories = [
  {
    label: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    label: "Backend",
    tags: ["Node.js", "Express", "REST APIs", "GraphQL", "JWT Auth"],
  },
  {
    label: "Databases",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    label: "DevOps & Cloud",
    tags: ["AWS", "Docker", "CI/CD", "Git", "Vercel"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative z-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <SectionReveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            Tech <span className="grad-text">Stack</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="space-y-8">
            {categories.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-3">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-300 cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:text-violet-300 hover:border-violet-500/50"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
