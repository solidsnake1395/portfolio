/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bitcount': ['Bitcount', 'Roboto Mono', 'monospace'],
        'press-start': ['Press Start 2P', 'Bitcount', 'monospace'],
        'mono': ['Bitcount', 'Fira Code', 'Roboto Mono', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-start infinite',
        'fade-in-up': 'fadeInUp 1s ease forwards',
      },
    },
  },
  plugins: [],
}