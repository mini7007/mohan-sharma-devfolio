"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { ExternalLink } from "lucide-react";

type Profile = {
  name: string;
  desc: string;
  href: string;
  logo: string;
  color: string;
  border: string;
  gradStart: string;
  gradEnd: string;
  glow: string;
};

const profiles: Profile[] = [
  {
    name: "GitHub",
    desc: "Open source & project repos",
    href: "https://github.com/mini7007",
    logo: "https://cdn.simpleicons.org/github",
    color: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
    gradStart: "#ffffff",
    gradEnd: "#94a3b8",
    glow: "rgba(255,255,255,0.45)",
  },
  {
    name: "LeetCode",
    desc: "900+ problems · Top solver",
    href: "https://leetcode.com/u/mohan5050390/",
    logo: "https://cdn.simpleicons.org/leetcode",
    color: "rgba(255,180,0,0.08)",
    border: "rgba(255,180,0,0.2)",
    gradStart: "#ffd700",
    gradEnd: "#ffb800",
    glow: "rgba(255,184,0,0.6)",
  },
  {
    name: "GeeksforGeeks",
    desc: "DSA articles & solutions",
    href: "https://www.geeksforgeeks.org/profile/mohansharmadev",
    logo: "https://cdn.simpleicons.org/geeksforgeeks",
    color: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
    gradStart: "#22c55e",
    gradEnd: "#10b981",
    glow: "rgba(34,197,94,0.6)",
  },
  {
    name: "LinkedIn",
    desc: "Professional network",
    href: "https://www.linkedin.com/in/mohan-sharma-dev/",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
    color: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    gradStart: "#3b82f6",
    gradEnd: "#0ea5e9",
    glow: "rgba(59,130,246,0.65)",
  },
  {
    name: "HackerRank",
    desc: "Problem solving & skills",
    href: "https://www.hackerrank.com/profile/mohan5050390",
    logo: "https://cdn.simpleicons.org/hackerrank",
    color: "rgba(0,234,100,0.08)",
    border: "rgba(0,234,100,0.25)",
    gradStart: "#00ea64",
    gradEnd: "#00c853",
    glow: "rgba(0,234,100,0.65)",
  },
  {
    name: "CodeForces",
    desc: "Competitive programming",
    href: "https://codeforces.com/profile/Mini7007",
    logo: "https://cdn.simpleicons.org/codeforces",
    color: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
    gradStart: "#a855f7",
    gradEnd: "#8b5cf6",
    glow: "rgba(168,85,247,0.65)",
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
            {profiles.map((profile, idx) => (
              <motion.a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${profile.name} profile`}
                className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl text-center
                transition-all duration-500 ease-out
                overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border: `1.5px solid ${profile.border}`,
                  backdropFilter: "blur(20px)",
                }}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.08, y: -6 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${profile.gradStart}, ${profile.gradEnd})`,
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Premium glow effect */}
                <motion.div
                  className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: profile.glow,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 30px ${profile.glow}`,
                      `0 0 50px ${profile.glow}`,
                      `0 0 30px ${profile.glow}`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Icon with enhanced animations */}
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center relative z-10 transition-all duration-500"
                  style={{
                    background: profile.color,
                    boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.08)",
                  }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.2,
                    },
                    hover: { duration: 0.3 },
                  }}
                >
                  <motion.img
                    src={profile.logo}
                    alt={profile.name}
                    className="w-7 h-7 object-contain transition-transform duration-500"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                  />
                </motion.div>

                {/* Text with stagger animation */}
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <motion.div
                    className="font-bold text-base text-slate-200 transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "var(--font-syne)" }}
                    whileHover={{ letterSpacing: "0.05em" }}
                  >
                    {profile.name}
                  </motion.div>

                  <motion.div
                    className="text-xs text-slate-500 transition-all duration-300 group-hover:text-slate-200 mt-1 text-pretty"
                    whileHover={{ opacity: 1 }}
                  >
                    {profile.desc}
                  </motion.div>
                </div>

                <motion.div
                  className="relative z-10 text-slate-600 transition-all duration-300 group-hover:text-white mt-2"
                  whileHover={{ scale: 1.3, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink size={16} />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
