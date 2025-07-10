/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0e0e10",        // Deep dark background
        surface: "#1a1a1e",     // Card surfaces
        primary: "#ffffff",     // Main text
        secondary: "#9ca3af",   // Secondary text
        accent: "#ef4444",      // Accent color (e.g. for buttons)
        highlight: "#3b82f6",   // Links or emphasis
        borderbase: "#2d2d35",  // Border/divider lines
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        clash: ['var(--font-clash)', 'sans-serif'], // Added Clash Display
      },
    },
  },
  plugins: [],
};
