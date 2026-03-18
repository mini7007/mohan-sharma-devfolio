"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Gauge,
  Layers3,
  WifiOff,
} from "lucide-react";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionReveal from "@/components/ui/SectionReveal";
import DevOverlay from "@/components/dev/DevOverlay";

const sections = [
  {
    title: "Tech Stack",
    description:
      "Built with Next.js App Router, React, TypeScript, Tailwind CSS, and Framer Motion for a fast, polished, production-ready experience.",
    points: [
      "Next.js for routing, SSR-ready architecture, and deployment-friendly structure.",
      "TypeScript for safer UI logic and predictable component contracts.",
      "Tailwind CSS + Framer Motion for expressive styling and motion.",
    ],
    Icon: Layers3,
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Architecture",
    description:
      "The portfolio is organized into modular sections, reusable UI primitives, and focused feature folders so each area can evolve independently.",
    points: [
      "App Router layout keeps global concerns centralized.",
      "Reusable containers and reveal components keep sections consistent.",
      "Feature-specific components reduce coupling and keep additions safe.",
    ],
    Icon: Boxes,
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    title: "Offline System",
    description:
      "An offline-aware experience listens to navigator.onLine and browser online/offline events, then swaps in the Offline Arcade when connectivity drops.",
    points: [
      "navigator.onLine initializes the connection state quickly.",
      "online/offline events keep the UI in sync with network changes.",
      "Offline Arcade gives visitors a playful local-state fallback instead of a dead end.",
    ],
    Icon: WifiOff,
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Performance",
    description:
      "The experience stays responsive through lightweight section composition, viewport-based animations, and mobile-conscious layout decisions.",
    points: [
      "Section-level rendering keeps each block isolated and easy to optimize.",
      "Framer Motion viewport triggers reduce unnecessary animation work.",
      "Responsive spacing and grid choices prevent overflow across devices.",
    ],
    Icon: Gauge,
    accent: "from-pink-500/20 to-orange-500/10",
  },
] as const;

export default function HowIBuilt() {
  return (
    <section id="how-i-built" className="relative z-10 border-t border-white/[0.06]">
      <SectionContainer className="py-16 md:py-24">
        <DevOverlay
          label="Modular sections + reusable UI architecture"
          className="left-4 top-10 sm:left-6"
          icon={<span aria-hidden="true">🧩</span>}
        />

        <SectionReveal>
          <p className="section-label">Behind The Build</p>
          <h2 className="section-title">
            How I <span className="grad-text">Built This Portfolio</span>
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
            This portfolio was designed as a modular, motion-rich experience that
            stays resilient across screen sizes, network conditions, and
            interactions.
          </p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {sections.map(({ title, description, points, Icon, accent }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.22)] backdrop-blur-xl transition-colors sm:p-7"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60 text-slate-100">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {description}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-400">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-violet-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
