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
                className={`relative pl-8 mb-8 p-4 rounded-lg transition-all duration-300 hover:bg-white/[0.02] group ${i < experiences.length - 1 ? "pb-4" : ""}`}
              >
                {/* Dot with brand color */}
                <div
                  className="absolute -left-[7px] top-5 w-3.5 h-3.5 rounded-full transition-all duration-300 group-hover:scale-125"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 0 4px ${exp.color}33, 0 0 16px ${exp.color}66`,
                  }}
                />

                <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: exp.color }}>
                  {exp.date}
                </div>
                <div className="text-sm text-slate-400 mb-1 font-medium">{exp.company}</div>
                <div
                  className="text-lg font-bold text-slate-100 mb-3 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {exp.role}
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-slate-400 text-sm leading-relaxed pl-4 relative transition-colors group-hover:text-slate-300"
                    >
                      <span className="absolute left-0" style={{ color: exp.color }}>→</span>
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
