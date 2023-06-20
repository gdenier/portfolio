const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1200px",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: "rgba(253, 132, 31, 1)",
        "dark-orange": "rgba(225, 77, 42, 1)",
        rose: "rgba(205, 16, 77, 1)",
        violet: "rgba(156, 44, 119, 1)",
        black: "rgba(19, 25, 27, 1)",
        "black-70": "rgba(90, 95, 96, 1)",
        gradient: "linear-gradient(134.17deg, #FD841F 5.04%, #9C2C77 94.09%)",
      },
      boxShadow: {
        DEFAULT: "2px 2px 20px rgba(0, 0, 0, 0.05)",
      },
      borderWidth: {
        DEFAULT: "0.094rem",
      },
      borderRadius: {
        DEFAULT: "0.625rem",
      },
    },
  },
  plugins: [],
}
