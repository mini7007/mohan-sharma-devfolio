"use client";
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
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer with 3+ years of building
                scalable, production-grade web applications at the intersection
                of clean engineering and intuitive product design.
              </p>
              <p>
                Armed with a{" "}
                <strong className="text-slate-200">
                  clean architecture mindset
                </strong>
                , I specialize in MERN stack systems that handle real-world
                complexity. I leverage AI tools to amplify development velocity
                without sacrificing quality.
              </p>
              <p>
                900+ LeetCode problems solved — not just for interviews, but
                because algorithmic thinking makes me a better engineer every
                single day.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-6 text-center hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div
                    className="font-black text-4xl bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent leading-none mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs text-slate-500 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
