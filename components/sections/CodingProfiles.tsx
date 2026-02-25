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
  },
  {
    name: "LeetCode",
    desc: "900+ problems · Top solver",
    href: "https://leetcode.com/u/mohan5050390/",
    emoji: "🟡",
    color: "rgba(255,180,0,0.08)",
    border: "rgba(255,180,0,0.2)",
  },
  {
    name: "GeeksforGeeks",
    desc: "DSA articles & solutions",
    href: "https://www.geeksforgeeks.org/profile/mohansharmadev",
    emoji: "🟢",
    color: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
  },
  {
    name: "LinkedIn",
    desc: "Professional network",
    href: "https://www.linkedin.com/in/mohan-sharma-dev/",
    emoji: "🔵",
    color: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {profiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${profile.border}`,
                  backdropFilter: "blur(20px)",
                }}
                aria-label={`Visit ${profile.name} profile`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: profile.color }}
                >
                  {profile.emoji}
                </div>
                <div
                  className="font-bold text-base text-slate-100"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {profile.name}
                </div>
                <div className="text-xs text-slate-500">{profile.desc}</div>
                <ExternalLink
                  size={14}
                  className="text-slate-600 group-hover:text-violet-400 transition-colors"
                />
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
