"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionReveal from "@/components/ui/SectionReveal";
import DevOverlay from "@/components/dev/DevOverlay";

const CODING_PLAYLIST_URL =
  "https://www.youtube.com/embed/videoseries?list=PLRteaO0e1ia4OLN_H_jRjfSGb62U3i01n";

export default function MusicSection() {
  return (
    <section id="music" className="relative z-10 border-t border-white/[0.06]">
      <SectionContainer className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <DevOverlay
          label="Responsive playlist card"
          className="right-4 top-10 sm:right-6"
          icon={<span aria-hidden="true">🎵</span>}
        />

        <SectionReveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-label">Focus Fuel</p>
            <h2 className="section-title">
              🎧 What I Listen To <span className="grad-text">While Coding</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              My current coding playlist
            </p>
          </div>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-10 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_50px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:p-6"
        >
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200/90">
                Now playing
              </p>
              <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                Curated tracks I enjoy while building projects
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              <iframe
                className="h-64 w-full md:h-80 lg:h-96"
                src={CODING_PLAYLIST_URL}
                title="What I listen to while coding"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
