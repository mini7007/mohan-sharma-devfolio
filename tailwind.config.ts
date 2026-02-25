import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        navy: "#050a18",
        "navy-2": "#080f22",
      },
      animation: {
        "blob-float": "blobFloat 8s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.7s ease both",
      },
      keyframes: {
        blobFloat: {
          from: { transform: "translate(0, 0) scale(1)" },
          to: { transform: "translate(30px, 40px) scale(1.05)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
      },
    },
  },
  plugins: [],
};

export default config;
