/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#101214",
        obsidian: "#17191C",
        ivory: "#F4F1E9",
        amber: "#F5B544",
        quiet: "#C8C2B6",
        stone: "#5C5852",
        metal: {
          200: "#D9D3C7",
          400: "#A7A29A",
          600: "#6E6A63",
          800: "#3A3834",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Segoe UI", "sans-serif"],
        display: ["Fraunces", "Iowan Old Style", "Palatino", "serif"],
      },
      maxWidth: {
        page: "1380px",
      },
    },
  },
  plugins: [],
}
