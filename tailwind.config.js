/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'sign-in-purple' : '#a855f7'
      }
    },
    fontFamily: {
      'sign-in-display': ["Kanit", "sans-serif"],
    },
  },
  plugins: [],
}

