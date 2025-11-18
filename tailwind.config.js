/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // If you have an HTML file at root
    "./src/**/*.{js,jsx,ts,tsx}", // All React components
  ],
  theme: {
    extend: {
      colors: {
        themeBg: "#0b0820",       // Page background
        sectionBg: "#120a28",     // Section background (behind heading)
        cardBg: "#0d0820",        // Card background
        accent: "#6b46c1",        // Purple accent
        muted: "#bfc5d6",         // Muted text color
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        "2xl-hero": "1.25rem",
      },
    },
  },
  plugins: [],
};
