/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        garamond: ["'Cormorant Garamond'", "serif"],
      },
      colors: {
        menuYellow: "#9f895d", // Color for menus on hover
      },
    },
  },
  plugins: [],
};
