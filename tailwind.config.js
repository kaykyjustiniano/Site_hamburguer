/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bowlbyone: ['Bowlby One'],
      },
      colors:{
        'black_bg': '#1E1E1E',
      }
    },
  },
  plugins: [],
}

