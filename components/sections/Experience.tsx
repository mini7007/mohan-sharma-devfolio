import SectionReveal from "@/components/ui/SectionReveal";

const experiences = [
  {
    date: "2025 — Present",
    company: "EC-Council Pvt Ltd",
    role: "Full Stack Developer",
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
          <div className="relative pl-8">
            {/* Timeline line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5"
              style={{
                background:
                  "linear-gradient(180deg, #3b82f6, #8b5cf6, #ec4899)",
              }}
            />

            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative pl-8 ${i < experiences.length - 1 ? "pb-12" : ""}`}
              >
                {/* Dot */}
                <div
                  className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    boxShadow: "0 0 0 4px rgba(139,92,246,0.2)",
                  }}
                />

                <div className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-1">
                  {exp.date}
                </div>
                <div className="text-sm text-slate-500 mb-1">{exp.company}</div>
                <div
                  className="text-xl font-bold text-slate-100 mb-4"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {exp.role}
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-slate-400 text-sm leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 text-violet-500">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
