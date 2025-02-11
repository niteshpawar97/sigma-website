import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A2E", // Dark Blue-Grey Background
        foreground: "#EAEAEA", // Light Grey Foreground
        primary: "#FDC830", // Yellow for Buttons
        "primary-dark": "#D4A017", // Darker Yellow for Hover
        secondary: "#1F2937", // Dark Background
        accent: "#00ADB5", // Cyan Accent
        highlight: "#FF5733", // Orange-Red Highlight
        "header-bg": "#0F3460", // Deep Blue Header Background
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(to right, #16213E, #0F3460)", // ✅ Correct way to define gradient
      },
    },
  },
  plugins: [],
} satisfies Config;
