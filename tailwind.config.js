/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: '#0C0B0A',
        obsidian: '#151310',
        pearl: '#F8F3EA',
        cream: '#FFFDF8',
        gold: {
          DEFAULT: '#C8A25A',
          bright: '#F2DFB2',
          deep: '#9E7B36',
        },
        burgundy: '#6E1E26',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
