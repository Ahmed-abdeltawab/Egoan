/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gradient': '#4937f0',
        'dark-gradient': '#9244f0',
        'light-gray': '#dddddd',
        'dark-gray': '#a3a3a3',
        white: '#ffffff',
        purple: '#7b38f9',
        text: '#343232',
        'dark-pink': '#fd6e6d',
        'light-pink': '#ffe2e2',
        gold: '#ffc107',
        'body-color': '#fbfbfd'
      }
    }
  },
  plugins: []
}
