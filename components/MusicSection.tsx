"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionReveal from "@/components/ui/SectionReveal";
import DevOverlay from "@/components/dev/DevOverlay";

const FEATURED_TRACK_URL = "https://www.youtube.com/embed/JRoam571b58";

export default function MusicSection() {
  return (
    <section id="music" className="relative z-10 border-t border-white/[0.06]">
      <SectionContainer className="py-16 md:py-24">
        <DevOverlay
          label="Responsive media card"
          className="right-4 top-10 sm:right-6"
          icon={<span aria-hidden="true">🎵</span>}
        />

        <SectionReveal>
          <p className="section-label">Focus Fuel</p>
          <h2 className="section-title">
            🎧 What I Listen To <span className="grad-text">While Coding</span>
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
            Recently in my coding playlist.
          </p>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_50px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:p-6"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white">Featured coding track</p>
              <p className="text-sm text-slate-400">A quick hit of energy when I am deep in build mode.</p>
            </div>
            <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
              Recently played
            </span>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 bg-slate-950/70">
            <iframe
              className="h-64 w-full md:h-80"
              src={FEATURED_TRACK_URL}
              title="What I listen to while coding"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
