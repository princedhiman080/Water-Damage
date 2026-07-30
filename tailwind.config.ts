import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F172A",
          slate: "#1E293B",
          blue: "#0284C7",
          sky: "#0EA5E9",
          cyan: "#06B6D4",
          light: "#F0F9FF",
          accent: "#EF4444", // High contrast Emergency Red
          accentHover: "#DC2626",
          amber: "#F59E0B"
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
