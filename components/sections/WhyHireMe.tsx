import SectionReveal from "@/components/ui/SectionReveal";

const cards = [
  {
    icon: "⚡",
    title: "Performance-Focused",
    desc: "Every line of code is written with Lighthouse scores and real-world load in mind. I obsess over Core Web Vitals, bundle sizes, and query optimization — because users don't wait.",
    accent: "#06b6d4",
    iconBg: "rgba(6,182,212,0.12)",
    gradStart: "#3b82f6",
    gradEnd: "#06b6d4",
  },
  {
    icon: "🏗️",
    title: "MERN Specialist",
    desc: "3+ years building production systems with MongoDB, Express, React, and Node.js. I design RESTful APIs that scale, databases that stay fast under load, and UIs that delight users.",
    accent: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.12)",
    gradStart: "#8b5cf6",
    gradEnd: "#3b82f6",
  },
  {
    icon: "🤖",
    title: "AI-Enabled Developer",
    desc: "I leverage AI tools to write better code faster — copilots, prompt engineering, AI-assisted testing — multiplying output while maintaining engineering excellence and code quality.",
    accent: "#ec4899",
    iconBg: "rgba(236,72,153,0.12)",
    gradStart: "#ec4899",
    gradEnd: "#8b5cf6",
  },
];

export default function WhyHireMe() {
  return (
    <section id="why" className="relative z-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <SectionReveal>
          <p className="section-label">Value Proposition</p>
          <h2 className="section-title">
            Why <span className="grad-text">Hire Me?</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: `linear-gradient(90deg, ${card.gradStart}, ${card.gradEnd})`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ background: card.iconBg }}
                >
                  {card.icon}
                </div>

                <h3
                  className="font-bold text-xl text-slate-100 mb-3"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
