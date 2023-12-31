/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      tek: ['"Tektur"', 'cursive']
    },
    extend: {
    }
  },
  plugins: [require('tailwindcss-animated')]
}
