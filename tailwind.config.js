/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      oleo: ["Oleo Script Swash Caps", "cursive"], //logo
      playfair: ["Playfair Display", "serif"], //title
      garamond: ["EB Garamond", "serif"], //name
    },
    extend: {},
  },
  plugins: [],
};
