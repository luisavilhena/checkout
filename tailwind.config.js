/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white':'white',
      'gray-light':'#393C49',
      'gray-lighter':'#ABBBC2',
      'gray-dark': '#1F1D2B',
      'gray-medium':'#2D303E',
      'orange': '#EA7C69',
      'orange-light': 'rgba(235, 150, 106, 0.4)'
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
    },
    boxShadow: {
      md: '0 3px 4px -1px rgba(234,124,105, 0.4), 0 4px 4px -1px rgba(234,124,105, 0.08)',
    },
    extend: {},
  },
  plugins: [],
}

