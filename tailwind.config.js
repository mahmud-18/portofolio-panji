/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}", "./src/data/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#080808",
        paper: "#f7f5ef",
        bone: "#fffdf8",
        smoke: "#e6e1d7",
        charcoal: "#171717"
      },
      boxShadow: {
        glow: "0 24px 90px rgba(8, 8, 8, 0.1)",
        panel: "0 20px 80px rgba(8, 8, 8, 0.12)"
      }
    }
  },
  plugins: []
};
