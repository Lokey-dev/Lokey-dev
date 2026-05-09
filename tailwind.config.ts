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
          purple: "#16a34a",
          cyan: "#22c55e",
          blue: "#84cc16",
          pink: "#a3e635",
          green: "#3cff9e",
          lime: "#bef264",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 30px rgba(34, 197, 94, 0.38)",
        purple: "0 0 35px rgba(132, 204, 22, 0.32)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
        aurora: "radial-gradient(circle at 20% 20%, rgba(34,197,94,.34), transparent 30%), radial-gradient(circle at 80% 0%, rgba(190,242,100,.22), transparent 25%), radial-gradient(circle at 50% 80%, rgba(16,185,129,.2), transparent 30%)",
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
