"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionReveal from "@/components/ui/SectionReveal";
import DevOverlay from "@/components/dev/DevOverlay";

const PLAYLIST_ID =
  process.env.NEXT_PUBLIC_CODING_PLAYLIST_ID ?? "PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI";

export default function MusicSection() {
  return (
    <section id="music" className="relative z-10 border-t border-white/[0.06]">
      <SectionContainer className="py-16 md:py-24">
        <DevOverlay
          label="Responsive embed + motion-driven card presentation"
          className="right-4 top-10 sm:right-6"
          icon={<span aria-hidden="true">🎵</span>}
        />

        <SectionReveal>
          <p className="section-label">Focus Fuel</p>
          <h2 className="section-title">
            🎧 What I Listen To <span className="grad-text">While Coding</span>
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
            A steady playlist helps me stay in flow while designing interfaces,
            shipping features, and polishing details.
          </p>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_50px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:p-6"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white">Coding Playlist</p>
              <p className="text-sm text-slate-400">
                Embedded YouTube playlist with a mobile-friendly, full-width frame.
              </p>
            </div>
            <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
              Stream-ready
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
            <iframe
              className="h-64 w-full md:h-80"
              src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
              title="Coding playlist"
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
