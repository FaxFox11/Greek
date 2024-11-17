/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aegean: {
          light: "#71A5DE",
          DEFAULT: "#1C6DD0",
          dark: "#14478C",
        },
        terracotta: {
          light: "#E8927C",
          DEFAULT: "#DA6B4E",
          dark: "#B84A2E",
        },
        olive: {
          light: "#8B9A47",
          DEFAULT: "#626B32",
          dark: "#404721",
        },
        sand: {
          light: "#F5EFE7",
          DEFAULT: "#E8E0D5",
          dark: "#D1C3B6",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair-display)"],
        sans: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};
