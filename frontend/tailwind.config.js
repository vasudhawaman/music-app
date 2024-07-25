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
      colors: {
        primary: '#1DB954',
        lightPurple: '#8A2BE2',
        mediumPurple: '#6A0DAD',
        darkPurple: '#4B0082',
        whiteGray: '#B3B3B3',
        transparent: 'transparent',
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #8A2BE2, #6A0DAD, #4B0082)',
        'gradient-to-r': 'linear-gradient(to right, #8A2BE2, #6A0DAD, #4B0082)',
      },
      borderRadius: {
        'lg': '20px',
      },
    },
  },
  plugins: [],
}

