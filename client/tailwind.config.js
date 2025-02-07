/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#344E41",
        secundaryGreen: "#A3B18A",
        grayish: "#DAD7CD",
        redish: "#782929",
      },
      fontFamily: {
        heading: ["Zilla Slab", "serif"],
        body: ["Lato", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
