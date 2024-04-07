/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        reddit:["Reddit Mono","sans-serif"],
        playfair:["Playfair Display","serif"]
      },
    },
  },
  plugins: [],
}

