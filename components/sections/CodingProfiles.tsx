import SectionReveal from "@/components/ui/SectionReveal";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    desc: "Open source & project repos",
    href: "https://github.com/mini7007",
    emoji: "⚫",
    color: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
    gradStart: "#ffffff",
    gradEnd: "#94a3b8",
  },
  {
    name: "LeetCode",
    desc: "900+ problems · Top solver",
    href: "https://leetcode.com/u/mohan5050390/",
    emoji: "🟡",
    color: "rgba(255,180,0,0.08)",
    border: "rgba(255,180,0,0.2)",
    gradStart: "#ffd700",
    gradEnd: "#ffb800",
  },
  {
    name: "GeeksforGeeks",
    desc: "DSA articles & solutions",
    href: "https://www.geeksforgeeks.org/profile/mohansharmadev",
    emoji: "🟢",
    color: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
    gradStart: "#22c55e",
    gradEnd: "#10b981",
  },
  {
    name: "LinkedIn",
    desc: "Professional network",
    href: "https://www.linkedin.com/in/mohan-sharma-dev/",
    emoji: "🔵",
    color: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    gradStart: "#3b82f6",
    gradEnd: "#0ea5e9",
  },
  {
    name: "HackerRank",
    desc: "Problem solving & skills",
    href: "https://www.hackerrank.com/mohan_sharma",
    emoji: "🏆",
    color: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
    gradStart: "#ec4899",
    gradEnd: "#f43f5e",
  },
  {
    name: "CodeForces",
    desc: "Competitive programming",
    href: "https://codeforces.com/profile/mohan_sharma",
    emoji: "⚔️",
    color: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
    gradStart: "#a855f7",
    gradEnd: "#8b5cf6",
  },
];

export default function CodingProfiles() {
  return (
    <section
      id="profiles"
      className="relative z-10 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        <SectionReveal>
          <p className="section-label">Online Presence</p>
          <h2 className="section-title">
            Coding <span className="grad-text">Profiles</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {profiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${profile.border}`,
                  backdropFilter: "blur(20px)",
                }}
                aria-label={`Visit ${profile.name} profile`}
              >
                {/* Animated gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${profile.gradStart}, ${profile.gradEnd})`,
                  }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: profile.color }}
                >
                  {profile.emoji}
                </div>
                <div
                  className="font-bold text-base text-slate-100 relative z-10"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {profile.name}
                </div>
                <div className="text-xs text-slate-500 relative z-10">{profile.desc}</div>
                <ExternalLink
                  size={14}
                  className="text-slate-600 group-hover:text-slate-100 transition-colors relative z-10"
                />
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
