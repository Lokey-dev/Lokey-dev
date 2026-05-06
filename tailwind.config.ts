import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        arena: {
          void: "#03040b",
          panel: "#0b1020",
          line: "#1e2a4a",
          purple: "#a855f7",
          cyan: "#22d3ee",
          blue: "#3b82f6",
          pink: "#f472b6",
          green: "#3cff9e",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 30px rgba(34, 211, 238, 0.35)",
        purple: "0 0 35px rgba(168, 85, 247, 0.35)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
        aurora: "radial-gradient(circle at 20% 20%, rgba(168,85,247,.35), transparent 30%), radial-gradient(circle at 80% 0%, rgba(34,211,238,.28), transparent 25%), radial-gradient(circle at 50% 80%, rgba(59,130,246,.22), transparent 30%)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        scan: "scan 4s linear infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
