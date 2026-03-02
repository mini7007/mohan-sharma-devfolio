"use client";
import { motion } from "framer-motion";
import { getCurrentYear } from "@/lib/utils";

export default function Footer() {
  const year = getCurrentYear();
  return (
    <motion.footer
      className="relative z-10 border-t border-white/[0.06] py-12 px-6 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Subtle gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "radial-gradient(circle at 50% 100%, #3b82f6 0%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="font-black text-2xl bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Mohan Sharma
        </motion.div>

        <motion.p
          className="text-slate-400 text-sm leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <motion.code
            className="text-violet-400 font-semibold"
            whileHover={{ color: "#a78bfa" }}
          >
            &lt;/&gt;
          </motion.code>
          {" "}with{" "}
          <motion.span
            className="text-red-400 font-bold"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.span>
          {" "}by Mohan Sharma · {year}
        </motion.p>

        {/* Scroll indicator - hidden on footer */}
        <motion.div
          className="mt-8 flex justify-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-slate-600"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}
