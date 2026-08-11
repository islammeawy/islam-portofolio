/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090d16",
        surface: {
          DEFAULT: "#0f172a",
          elevated: "#162036",
          hover: "#1e293b",
        },
        accent: {
          DEFAULT: "#10b981",
          glow: "rgba(16, 185, 129, 0.15)",
        },
        border: {
          DEFAULT: "#1e293b",
          subtle: "#162032",
          highlight: "#334155",
        }
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
