/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '809px' }, // Define custom max-width for screens below 810px
      },
    },
  },
  plugins: [],
}

